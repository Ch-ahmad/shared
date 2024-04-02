import React, { useEffect } from 'react';
import ProfileHeader from './Profile.header';
import ProfileBody from './ProfileBody';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/profile/posts');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-[20px] flex w-full flex-col items-center justify-center">
      <div className="w-full md:w-[70%] ">
        <ProfileHeader />
      </div>
      <div className="w-full md:w-[70%]">
        <ProfileBody />
      </div>
    </div>
  );
};

export default ProfilePage;
