// Trips API Configuration
const BASE_URL = "http://localhost:8000";

// Helper to get auth token
const getAuthToken = () => localStorage.getItem("auth_token");

export interface Trip {
  id: string;
  destination: string;
  start_date: string;
  end_date: string;
  image?: string;
  status: "upcoming" | "planning" | "saved" | "completed";
  days: number;
  budget_level?: string;
  travel_style?: string[];
  travelers?: {
    adults: number;
    children: number;
  };
}

export interface TripStats {
  total_trips: number;
  upcoming: number;
  days_traveled: number;
}

// Get all trips for the current user
export const getTrips = async (): Promise<Trip[]> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch trips");
  }

  return response.json();
};

// Get a single trip by ID
export const getTrip = async (tripId: string): Promise<Trip> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips/${tripId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch trip");
  }

  return response.json();
};

// Create a new trip
export const createTrip = async (trip: Omit<Trip, "id">): Promise<Trip> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(trip),
  });

  if (!response.ok) {
    throw new Error("Failed to create trip");
  }

  return response.json();
};

// Update a trip
export const updateTrip = async (tripId: string, updates: Partial<Trip>): Promise<Trip> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips/${tripId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update trip");
  }

  return response.json();
};

// Delete a trip
export const deleteTrip = async (tripId: string): Promise<void> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips/${tripId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete trip");
  }
};

// Get trip statistics
export const getTripStats = async (): Promise<TripStats> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips/stats`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch trip stats");
  }

  return response.json();
};

// Duplicate a trip
export const duplicateTrip = async (tripId: string): Promise<Trip> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips/${tripId}/duplicate`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to duplicate trip");
  }

  return response.json();
};

// Export trip as PDF
export const exportTripPdf = async (tripId: string): Promise<Blob> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips/${tripId}/export/pdf`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to export trip");
  }

  return response.blob();
};

// Share a trip
export const shareTrip = async (tripId: string, isPublic: boolean): Promise<{ share_url: string }> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/trips/${tripId}/share`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ is_public: isPublic }),
  });

  if (!response.ok) {
    throw new Error("Failed to share trip");
  }

  return response.json();
};
