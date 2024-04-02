import { useState } from 'react';

const Image = ({ className, alt, src }) => {
  const [isError, setIsError] = useState(false);
  return (
    <img
      className={className}
      src={isError ? '/user.png' : src}
      alt={alt}
      onError={() => {
        setIsError(true);
      }}
    />
  );
};

export default Image;
