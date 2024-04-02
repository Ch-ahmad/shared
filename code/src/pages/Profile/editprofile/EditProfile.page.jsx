import React from 'react';
import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import ProfileUpdateForm from './ProfileUpdateForm';
const EditProfile = () => {
  return (
    <motion.div
      initial={{
        y: 600,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        mass: 7,
      }}
      className="  w-full px-[40px] pt-[80px] md:w-[60%]"
    >
      <ProfileCard name={'Hasbee '} src={'gjgkhl'} />
      <ProfileUpdateForm />
    </motion.div>
  );
};

export default EditProfile;
