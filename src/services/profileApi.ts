// Profile API Configuration
const BASE_URL = "http://localhost:8000";

// Helper to get auth token
const getAuthToken = () => localStorage.getItem("auth_token");

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  stats: {
    countries_visited: number;
    followers: number;
    likes: number;
    public_trips: number;
  };
  badges: UserBadge[];
  created_at: string;
}

export interface UserBadge {
  id: string;
  name: string;
  icon: string;
  color: string;
  earned_at: string;
}

export interface SharedTrip {
  id: string;
  destination: string;
  image: string;
  days: number;
  likes: number;
  saves: number;
  is_public: boolean;
}

// Get current user's profile
export const getProfile = async (): Promise<UserProfile> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/profile`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }

  return response.json();
};

// Update user profile
export const updateProfile = async (updates: Partial<UserProfile>): Promise<UserProfile> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile");
  }

  return response.json();
};

// Upload avatar
export const uploadAvatar = async (file: File): Promise<{ avatar_url: string }> => {
  const token = getAuthToken();
  const formData = new FormData();
  formData.append("avatar", file);

  const response = await fetch(`${BASE_URL}/api/profile/avatar`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload avatar");
  }

  return response.json();
};

// Get user's shared/public trips
export const getSharedTrips = async (): Promise<SharedTrip[]> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/profile/trips/shared`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch shared trips");
  }

  return response.json();
};

// Get another user's public profile
export const getPublicProfile = async (username: string): Promise<UserProfile> => {
  const response = await fetch(`${BASE_URL}/api/users/${username}/profile`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }

  return response.json();
};

// Follow a user
export const followUser = async (userId: string): Promise<void> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/users/${userId}/follow`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to follow user");
  }
};

// Unfollow a user
export const unfollowUser = async (userId: string): Promise<void> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/users/${userId}/unfollow`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to unfollow user");
  }
};
