'use client';
import { API_URL } from '../utils/constant';
import { useQuery } from '@tanstack/react-query';

import axios from 'axios';
import { useAuth } from '../provider/AuthProvider';

export function useFetch({ path, queryKey, config }) {
  if (!queryKey) throw new Error('queryKey is required');
  if (!path) throw new Error('path is required');
  const { token } = useAuth();
  // if (!userToken) throw new Error("userToken is required");
  const REQUEST_URL = API_URL + '/api/' + path;

  const fetchData = async () => {
    try {
      const response = await axios.get(REQUEST_URL, {
        headers: token
          ? {
              'x-access-token': token,
            }
          : {},
      });

      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // handle unauthorized request here  401 here
      }
    }
  };
  const { data, isLoading, refetch, status, error } = useQuery({
    queryKey: queryKey,
    queryFn: fetchData,
    refetchOnWindowFocus: false,
    staleTime: config?.staleTime ?? 60 * 5,
    ...config,
  });

  const response = data?.data;

  console.log({ data });
  return { response, isLoading, refetch, status, error };
}
