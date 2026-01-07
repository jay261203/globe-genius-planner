// Explore API Configuration
const BASE_URL = "http://localhost:8000";

// Helper to get auth token
const getAuthToken = () => localStorage.getItem("auth_token");

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  average_budget: string;
  best_season: string;
  tags: string[];
  rating: number;
  reviews_count: number;
}

export interface CommunityTrip {
  id: string;
  destination: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  image: string;
  days: number;
  budget: string;
  tags: string[];
  likes: number;
  saves: number;
  is_saved: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

// Search destinations
export const searchDestinations = async (query: string): Promise<Destination[]> => {
  const response = await fetch(`${BASE_URL}/api/explore/destinations/search?q=${encodeURIComponent(query)}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to search destinations");
  }

  return response.json();
};

// Get trending destinations
export const getTrendingDestinations = async (): Promise<Destination[]> => {
  const response = await fetch(`${BASE_URL}/api/explore/destinations/trending`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch trending destinations");
  }

  return response.json();
};

// Get destinations by category
export const getDestinationsByCategory = async (categoryId: string): Promise<Destination[]> => {
  const response = await fetch(`${BASE_URL}/api/explore/destinations?category=${categoryId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch destinations");
  }

  return response.json();
};

// Get all categories
export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/api/explore/categories`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
};

// Get community trips
export const getCommunityTrips = async (filters?: {
  category?: string;
  budget?: string;
  days?: number;
}): Promise<CommunityTrip[]> => {
  const params = new URLSearchParams();
  if (filters?.category) params.append("category", filters.category);
  if (filters?.budget) params.append("budget", filters.budget);
  if (filters?.days) params.append("days", filters.days.toString());

  const response = await fetch(`${BASE_URL}/api/explore/community-trips?${params}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch community trips");
  }

  return response.json();
};

// Get single community trip
export const getCommunityTrip = async (tripId: string): Promise<CommunityTrip> => {
  const response = await fetch(`${BASE_URL}/api/explore/community-trips/${tripId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch community trip");
  }

  return response.json();
};

// Save/unsave a community trip
export const toggleSaveTrip = async (tripId: string): Promise<{ saved: boolean }> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/explore/community-trips/${tripId}/save`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to toggle save");
  }

  return response.json();
};

// Like a community trip
export const likeCommunityTrip = async (tripId: string): Promise<{ liked: boolean }> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/explore/community-trips/${tripId}/like`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to like trip");
  }

  return response.json();
};

// Use trip as inspiration (clone to user's trips)
export const useAsInspiration = async (tripId: string): Promise<{ new_trip_id: string }> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/explore/community-trips/${tripId}/clone`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to clone trip");
  }

  return response.json();
};

// Get destination details
export const getDestination = async (destinationId: string): Promise<Destination> => {
  const response = await fetch(`${BASE_URL}/api/explore/destinations/${destinationId}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch destination");
  }

  return response.json();
};
