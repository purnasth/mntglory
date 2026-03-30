import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const submitForm = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response = await axios.post(endpoint, data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const apiError: ApiError = error;
      throw apiError.response?.data?.message || 'An error occurred';
    } else {
      throw 'An error occurred';
    }
  }
};

export default api;
