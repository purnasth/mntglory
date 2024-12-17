import axios from 'axios';

const api = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

interface ApiResponse {
  data: any;
}

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const submitForm = async (endpoint: string, data: any): Promise<any> => {
  try {
    const response: ApiResponse = await api.post(endpoint, data);
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