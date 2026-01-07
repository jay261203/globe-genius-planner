// Receipts API Configuration
const BASE_URL = "http://localhost:8000";

// Helper to get auth token
const getAuthToken = () => localStorage.getItem("auth_token");

export interface Receipt {
  id: string;
  name: string;
  date: string;
  amount: number;
  currency: string;
  category: "Accommodation" | "Transportation" | "Food" | "Activities" | "Shopping" | "Other";
  trip_id?: string;
  trip_name?: string;
  status: "paid" | "pending" | "refunded";
  image_url?: string;
  notes?: string;
}

export interface ReceiptStats {
  total_amount: number;
  total_receipts: number;
  pending_count: number;
  by_category: Record<string, number>;
}

// Get all receipts
export const getReceipts = async (tripId?: string): Promise<Receipt[]> => {
  const token = getAuthToken();
  const url = tripId 
    ? `${BASE_URL}/api/receipts?trip_id=${tripId}`
    : `${BASE_URL}/api/receipts`;
    
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch receipts");
  }

  return response.json();
};

// Get single receipt
export const getReceipt = async (receiptId: string): Promise<Receipt> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/receipts/${receiptId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch receipt");
  }

  return response.json();
};

// Create a receipt
export const createReceipt = async (receipt: Omit<Receipt, "id">): Promise<Receipt> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/receipts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(receipt),
  });

  if (!response.ok) {
    throw new Error("Failed to create receipt");
  }

  return response.json();
};

// Update a receipt
export const updateReceipt = async (receiptId: string, updates: Partial<Receipt>): Promise<Receipt> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/receipts/${receiptId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(updates),
  });

  if (!response.ok) {
    throw new Error("Failed to update receipt");
  }

  return response.json();
};

// Delete a receipt
export const deleteReceipt = async (receiptId: string): Promise<void> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/receipts/${receiptId}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to delete receipt");
  }
};

// Upload receipt image (OCR processing)
export const uploadReceiptImage = async (file: File): Promise<Receipt> => {
  const token = getAuthToken();
  const formData = new FormData();
  formData.append("receipt", file);

  const response = await fetch(`${BASE_URL}/api/receipts/upload`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to upload receipt");
  }

  return response.json();
};

// Get receipt statistics
export const getReceiptStats = async (): Promise<ReceiptStats> => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/api/receipts/stats`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch receipt stats");
  }

  return response.json();
};

// Export receipts as CSV
export const exportReceiptsCsv = async (tripId?: string): Promise<Blob> => {
  const token = getAuthToken();
  const url = tripId 
    ? `${BASE_URL}/api/receipts/export/csv?trip_id=${tripId}`
    : `${BASE_URL}/api/receipts/export/csv`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to export receipts");
  }

  return response.blob();
};
