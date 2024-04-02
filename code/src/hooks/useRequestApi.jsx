import { API_URL } from '../utils/constant';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useAuth } from '../provider/AuthProvider';
import useToast from './useToast';

// * mutationFunction is a function that takes in an object with the following properties

const useApiRequest = ({
  isSuccessToast = true,
  key,
  method = 'post',
} = {}) => {
  const { token } = useAuth();
  const headers = token ? { 'x-access-token': token } : {};
  const { toastError, toastSuccess } = useToast();

  const postRequest = ({ data, path }) => {
    const REQUEST_PATH = API_URL + '/api/' + path;
    switch (method) {
      case 'post':
        return axios.post(REQUEST_PATH, data, {
          headers: {
            ...headers,
          },
        });
      case 'put':
        return axios.put(REQUEST_PATH, data, {
          headers: {
            ...headers,
          },
        });
      case 'delete':
        return axios.delete(REQUEST_PATH, {
          headers: {
            ...headers,
          },
          data: data.data,
        });
      case 'patch':
        return axios.patch(REQUEST_PATH, data, {
          headers: {
            ...headers,
          },
        });
      default:
        throw new Error('Invalid method provided');
    }
  };

  const { mutate, isPending } = useMutation({
    mutationFn: postRequest,
    mutationKey: [key],
  });
  function mutationFunction({
    data,
    path,
    callback = () => {},
    errorCallBack = () => {},
  }) {
    mutate(
      {
        path,
        data,
      },
      {
        onSuccess: (res) => {
          toastSuccess(res?.data?.message);
          // Call the callback function here if needed

          callback(res);
        },

        onError: (res) => {
          console.log(res);
          toastError(res?.response?.data?.message);
          errorCallBack(res);
        },
      }
    );
  }

  return {
    mutationFunction,
    isPending,
  };
};

export default useApiRequest;
