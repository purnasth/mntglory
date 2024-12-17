import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Utility function to read/write to localStorage
const localStorageKey = 'galleryData';

const getCachedData = () => {
  const cachedData = localStorage.getItem(localStorageKey);
  return cachedData ? JSON.parse(cachedData) : null;
};

const setCachedData = (data: unknown) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

// Reusable API fetching hook
const useFetchAPI = <T>(key: string, url: string) => {
  return useQuery<T>({
    queryKey: [key],
    queryFn: async () => {
      const cachedData = getCachedData();
      if (cachedData) {
        return cachedData; // Return cached data if it exists
      }

      const response = await axios.get<T>(url);
      setCachedData(response.data); // Save to localStorage
      return response.data;
    },
    staleTime: 1000 * 60 * 60, // Cache data for 1 hour
  });
};

export default useFetchAPI;
