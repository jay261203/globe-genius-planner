// API Configuration - Update BASE_URL when deploying
const BASE_URL = "http://localhost:8000";

export interface TripFormData {
  destination: string;
  start_date: string;
  end_date: string;
  budget_level: string;
  travel_style: string[];
  travel_group: {
    adults: number;
    children: number;
  };
  mobility: string;
  hotel_preference: string;
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  cost?: string;
}

export interface ItineraryDay {
  day: number;
  date: string;
  title: string;
  activities: Activity[];
}

export interface GeneratedItinerary {
  id: string;
  destination: string;
  start_date: string;
  end_date: string;
  days: ItineraryDay[];
  total_budget: string;
  tips: string[];
}

// Generate itinerary from trip parameters
export const generateItinerary = async (data: TripFormData): Promise<GeneratedItinerary> => {
  const response = await fetch(`${BASE_URL}/api/generate-itinerary`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to generate itinerary");
  }

  return response.json();
};

// Update an activity in the itinerary
export const updateActivity = async (
  itineraryId: string,
  dayNumber: number,
  activityId: string,
  updatedActivity: Partial<Activity>
): Promise<Activity> => {
  const response = await fetch(
    `${BASE_URL}/api/itineraries/${itineraryId}/days/${dayNumber}/activities/${activityId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedActivity),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update activity");
  }

  return response.json();
};

// Delete an activity from the itinerary
export const deleteActivity = async (
  itineraryId: string,
  dayNumber: number,
  activityId: string
): Promise<void> => {
  const response = await fetch(
    `${BASE_URL}/api/itineraries/${itineraryId}/days/${dayNumber}/activities/${activityId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete activity");
  }
};

// Add a new activity to a day
export const addActivity = async (
  itineraryId: string,
  dayNumber: number,
  activity: Omit<Activity, "id">
): Promise<Activity> => {
  const response = await fetch(
    `${BASE_URL}/api/itineraries/${itineraryId}/days/${dayNumber}/activities`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add activity");
  }

  return response.json();
};

// Save/update entire itinerary
export const saveItinerary = async (itinerary: GeneratedItinerary): Promise<GeneratedItinerary> => {
  const response = await fetch(`${BASE_URL}/api/itineraries/${itinerary.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itinerary),
  });

  if (!response.ok) {
    throw new Error("Failed to save itinerary");
  }

  return response.json();
};
