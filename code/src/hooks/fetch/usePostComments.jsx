import { useFetch } from '../useFetch';
import { REQUTEST_URL } from '../../utils/requests_url';

const usePostComments = (postId) => {
  const { response, refetch, isLoading } = useFetch({
    config: {
      enabled: !!postId,
    },
    path: REQUTEST_URL.post_comments + '/' + postId,
    queryKey: [REQUTEST_URL.post_comments + postId],
  });
  return {
    isLoading,
    refetch,
    response,
  };
};

export default usePostComments;
