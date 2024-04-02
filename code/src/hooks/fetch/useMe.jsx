import { useFetch } from '../useFetch';
import { REQUTEST_URL } from '../../utils/requests_url';

const useMe = () => {
  const { response, isLoading } = useFetch({
    path: REQUTEST_URL.userDetails,
    queryKey: [REQUTEST_URL.userDetails],
  });
  return {
    isLoading,
    response,
  };
};

export default useMe;
