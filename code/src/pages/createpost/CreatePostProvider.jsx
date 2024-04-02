import { createContext, useContext, useState } from 'react';

const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);
export function PostProvider({ children }) {
  const [file, setFile] = useState();
  const [captionText, setCaptionText] = useState('');
  const [step, setStep] = useState(1);

  return (
    <PostContext.Provider
      value={{ file, setFile, captionText, setCaptionText, step, setStep }}
    >
      {children}
    </PostContext.Provider>
  );
}
