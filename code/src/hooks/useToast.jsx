import toast from 'react-hot-toast';

const useToast = () => {
  const toastSuccess = (message) => {
    toast.success(message, {
      duration: 3000,
      position: 'top-right',
    });
  };
  const toastError = (message) => {
    toast.error(message, {
      duration: 3000,
      position: 'top-right',
    });
  };
  return {
    toastError,
    toastSuccess,
  };
};

export default useToast;
