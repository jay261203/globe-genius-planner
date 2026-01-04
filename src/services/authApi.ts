// Auth API Configuration - Update BASE_URL when deploying
const BASE_URL = "http://localhost:8000";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupCredentials {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    name: string;
  };
  token: string;
}

export interface AuthError {
  message: string;
  code?: string;
}

// Login user
export const loginUser = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }

  return response.json();
};

// Register new user
export const signupUser = async (credentials: SignupCredentials): Promise<AuthResponse> => {
  const response = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Signup failed");
  }

  return response.json();
};

// Logout user
export const logoutUser = async (token: string): Promise<void> => {
  const response = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Logout failed");
  }
};

// Get current user
export const getCurrentUser = async (token: string): Promise<AuthResponse["user"]> => {
  const response = await fetch(`${BASE_URL}/api/auth/me`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get user");
  }

  return response.json();
};

// Refresh token
export const refreshToken = async (token: string): Promise<{ token: string }> => {
  const response = await fetch(`${BASE_URL}/api/auth/refresh`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Token refresh failed");
  }

  return response.json();
};

// Forgot password
export const forgotPassword = async (email: string): Promise<{ message: string }> => {
  const response = await fetch(`${BASE_URL}/api/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to send reset email");
  }

  return response.json();
};

// Reset password
export const resetPassword = async (token: string, newPassword: string): Promise<{ message: string }> => {
  const response = await fetch(`${BASE_URL}/api/auth/reset-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token, password: newPassword }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Password reset failed");
  }

  return response.json();
};
