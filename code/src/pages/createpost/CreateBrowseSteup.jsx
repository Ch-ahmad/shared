import React from 'react';
import CreatePostHeader from './CreatePostHeader';
import CreatePostStepOne from './CreatePostStepOne';
import CreatePostStepTwo from './CreatePostStepTwo';
import { usePostContext } from './CreatePostProvider';
import { AnimatePresence } from 'framer-motion';
const CreateBrowseSteup = () => {
  const { step } = usePostContext();
  const steps = [
    <CreatePostStepOne key={'Step One'} />,
    <CreatePostStepTwo key={'Step Two'} />,
  ];
  return (
    <div className="size-full overflow-hidden">
      <CreatePostHeader />
      <AnimatePresence>{steps[step - 1]}</AnimatePresence>
    </div>
  );
};

export default CreateBrowseSteup;
