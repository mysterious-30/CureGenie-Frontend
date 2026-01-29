/**
 * API Service for CureGenie Backend
 * Handles all communication with the FastAPI backend
 */

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

// Types
export interface BarcodeResponse {
    success: boolean;
    barcode?: string;
    firstName?: string;
    message?: string;
    error?: string;
}

export interface StudentProfile {
    success: boolean;
    uid: string;
    firstName: string;
    fullName: string;
    number: string;
    language: string;
    age: number | null;
    allergy: string | null;
    message?: string;
    error?: string;
}

export interface ProfileUpdateData {
    uid: string;
    age?: number;
    allergy?: string;
    number?: string;
}

export interface LanguageUpdateData {
    uid: string;
    language: string;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

/**
 * Convert Blob to base64 string
 */
export async function blobToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result as string;
            // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
            const base64Data = base64String.split(',')[1];
            resolve(base64Data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

/**
 * Read barcode from student ID image
 */
export async function readBarcode(imageBlob: Blob): Promise<BarcodeResponse> {
    try {
        const base64Image = await blobToBase64(imageBlob);

        const response = await fetch(`${BACKEND_URL}/api/read-barcode`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                image: base64Image,
                format: 'image/jpeg'
            }),
        });

        if (!response.ok) {
            // Try to get error details from backend
            let errorDetails = `HTTP ${response.status}`;
            try {
                const errorData = await response.json();
                errorDetails = errorData.error || errorData.message || errorDetails;
                console.error('Backend error details:', errorData);
            } catch {
                // If we can't parse the error response, just use the status
                console.error('Backend returned error status:', response.status);
            }

            return {
                success: false,
                error: errorDetails,
                message: `Backend error: ${errorDetails}. Falling back to demo mode.`
            };
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error reading barcode:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to read barcode',
            message: 'Network error. Please check your connection and try again.'
        };
    }
}

/**
 * Get student profile by UID
 */
export async function getStudentProfile(uid: string): Promise<StudentProfile | null> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/student-profile/${uid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching student profile:', error);
        return null;
    }
}

/**
 * Update student language preference
 */
export async function updateLanguage(uid: string, language: string): Promise<ApiResponse<unknown>> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/update-language`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid,
                language
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating language:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to update language'
        };
    }
}

/**
 * Update student profile
 */
export async function updateProfile(data: ProfileUpdateData): Promise<ApiResponse<unknown>> {
    try {
        const response = await fetch(`${BACKEND_URL}/api/update-profile`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error updating profile:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to update profile'
        };
    }
}

/**
 * Health check endpoint
 */
export async function checkBackendHealth(): Promise<boolean> {
    try {
        const response = await fetch(`${BACKEND_URL}/health`, {
            method: 'GET',
        });
        return response.ok;
    } catch (error) {
        console.error('Backend health check failed:', error);
        return false;
    }
}
