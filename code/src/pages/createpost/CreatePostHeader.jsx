import React from 'react';
import Button from '../../components/Button/Button';
import { usePostContext } from './CreatePostProvider';
const CreatePostHeader = () => {
  const { step, file, setStep } = usePostContext();
  const handleClick = () => {
    if (step === 1) {
      setStep(2);
    }
  };
  return (
    <div className="flex items-center justify-between border-b border-textWhite-secondary px-[6px] py-[8px]">
      {step === 1 ? (
        <div className=""></div>
      ) : (
        <Button
          onClick={() => {
            setStep(1);
          }}
        >
          Prev
        </Button>
      )}
      <Button
        className="bg-secondary px-[25px] hover:bg-secondary/80"
        disabled={!file}
        onClick={handleClick}
      >
        {step === 1 ? 'Next' : 'Create Post'}
      </Button>
    </div>
  );
};

export default CreatePostHeader;
