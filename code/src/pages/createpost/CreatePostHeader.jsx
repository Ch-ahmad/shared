import React from 'react';
import Button from '../../components/Button/Button';
import { usePostContext } from './CreatePostProvider';
const CreatePostHeader = () => {
  const { step, file } = usePostContext();
  return (
    <div className="flex items-center justify-between border-b border-textWhite-secondary px-[6px] py-[8px]">
      {step === 1 ? <div className=""></div> : <Button>Prev</Button>}
      <Button
        className="bg-secondary px-[25px] hover:bg-secondary/80"
        disabled={!file}
      >
        Next
      </Button>
    </div>
  );
};

export default CreatePostHeader;
