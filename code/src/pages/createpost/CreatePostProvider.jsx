import { createContext, useContext, useState } from 'react';
import useApiRequest from '../../hooks/useRequestApi';
import { useQueryClient } from '@tanstack/react-query';
import { REQUTEST_URL } from '../../utils/requests_url';
import { useLocation, useNavigate } from 'react-router-dom';

const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);

export function PostProvider({ children }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const queryClient = useQueryClient();
  const [file, setFile] = useState();
  const [captionText, setCaptionText] = useState('');
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);
  const { isPending, mutationFunction } = useApiRequest();
  const handlePostSubmition = () => {
    const formData = new FormData();
    if (!file) {
      return;
    }
    formData.append('post_media', file);
    formData.append('caption', captionText);
    mutationFunction({
      data: formData,
      path: 'create-post',
      callback(res) {
        queryClient.invalidateQueries({
          queryKey: [REQUTEST_URL.posts],
        });
        setFile();
        setCaptionText('');
        setOpen(false);
        if (pathname !== '/') {
          navigate('/');
        }
      },
    });
  };
  return (
    <PostContext.Provider
      value={{
        file,
        setFile,
        captionText,
        setCaptionText,
        step,
        setStep,
        open,
        setOpen,
        handlePostSubmition,
        isPending,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
