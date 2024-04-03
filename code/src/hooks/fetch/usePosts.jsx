import { useFetch } from '../useFetch';
import { REQUTEST_URL } from '../../utils/requests_url';
const usePosts = () => {
  const { isLoading, response } = useFetch({
    path: REQUTEST_URL.posts,
    queryKey: [REQUTEST_URL.posts],
    config: {
      staleTime: Infinity,
      gcTime: Infinity,
    },
  });
  return {
    response,
    isLoading,
  };
};

export default usePosts;
