// OG CODE

// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// // Utility function to read/write to localStorage dynamically
// const getCachedData = (key: string) => {
//   const cachedData = localStorage.getItem(key);
//   return cachedData ? JSON.parse(cachedData) : null;
// };

// const setCachedData = (key: string, data: unknown) => {
//   localStorage.setItem(key, JSON.stringify(data));
// };

// // Reusable API fetching hook
// const useFetchAPI = <T>(key: string, url: string) => {
//   return useQuery<T>({
//     queryKey: [key],
//     queryFn: async () => {
//       const cachedData = getCachedData(key);
//       if (cachedData) {
//         return cachedData; // Return cached data if it exists
//       }

//       const response = await axios.get<T>(url);
//       setCachedData(key, response.data); // Save to localStorage with dynamic key
//       return response.data;
//     },
//     staleTime: 1000 * 60 * 60, // Cache data for 1 hour
//   });
// };

// export default useFetchAPI;


// Disabling local storage caching for testing till the site is not live

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Utility function to read/write to localStorage dynamically
const getCachedData = (key: string) => {
  const cachedData = localStorage.getItem(key);
  return cachedData ? JSON.parse(cachedData) : null;
};

const setCachedData = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Reusable API fetching hook
const useFetchAPI = <T>(key: string, url: string, isDevelopment: boolean = true) => {
  return useQuery<T>({
    queryKey: [key],
    queryFn: async () => {
      if (!isDevelopment) {
        const cachedData = getCachedData(key);
        if (cachedData) {
          return cachedData; // Return cached data if it exists
        }
      }

      const response = await axios.get<T>(url);
      if (!isDevelopment) {
        setCachedData(key, response.data); // Save to localStorage with dynamic key
      }
      return response.data;
    },
    staleTime: 1000 * 60 * 60, // Cache data for 1 hour
  });
};

export default useFetchAPI;