// Photos API Configuration
const BASE_URL = "http://localhost:8000";

// Helper to get auth token
const getAuthToken = () => localStorage.getItem("auth_token");

export interface Photo {
  id: string;
  url: string;
  thumbnail_url?: string;
  title: string;
  description?: string;
  trip_id?: string;
  trip_name?: string;
  location?: string;
  date: string;
  liked: boolean;
  likes_count: number;
  tags?: string[];
}

export interface PhotoAlbum {
  id: string;
  name: string;
  cover_photo_url?: string;
  photo_count: number;
  trip_id?: string;
}

// Get all photos
export const getPhotos = async (tripId?: string): Promise<Photo[]> => {
  const token = getAuthToken();
  const url = tripId 
    ? `${BASE_URL}/api/photos?trip_id=${tripId}`
    : `${BASE_URL}/api/photos`;
    
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch photos");
  }

  return response.json();
};

// Get single photo
export const getPhoto = async (photoId: string): Promise<Photo> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/photos/${photoId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch photo");
  }

  return response.json();
};

// Upload photos
export const uploadPhotos = async (files: File[], tripId?: string): Promise<Photo[]> => {
  const token = getAuthToken();
  const formData = new FormData();
  
  files.forEach((file, index) => {
    formData.append(`photos[${index}]`, file);
  });
  
  if (tripId) {
    formData.append("trip_id", tripId);
  }

  const response = await fetch(`${BASE_URL}/api/photos/upload`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload photos");
  }

  return response.json();
};

// Update photo metadata
export const updatePhoto = async (photoId: string, updates: Partial<Photo>): Promise<Photo> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/photos/${photoId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update photo");
  }

  return response.json();
};

// Delete a photo
export const deletePhoto = async (photoId: string): Promise<void> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/photos/${photoId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete photo");
  }
};

// Like/unlike a photo
export const togglePhotoLike = async (photoId: string): Promise<{ liked: boolean }> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/photos/${photoId}/like`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to toggle like");
  }

  return response.json();
};

// Download photo
export const downloadPhoto = async (photoId: string): Promise<Blob> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/photos/${photoId}/download`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to download photo");
  }

  return response.blob();
};

// Get photo albums
export const getAlbums = async (): Promise<PhotoAlbum[]> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/photos/albums`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch albums");
  }

  return response.json();
};

// Create album
export const createAlbum = async (name: string, tripId?: string): Promise<PhotoAlbum> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/photos/albums`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ name, trip_id: tripId }),
  });

  if (!response.ok) {
    throw new Error("Failed to create album");
  }

  return response.json();
};
