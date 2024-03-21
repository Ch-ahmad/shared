import React, { useEffect } from "react";
import ProfileHeader from "./Profile.header";
import ProfileBody from "./ProfileBody";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/profile/posts");
  }, []);
  return (
    <div className="flex items-center justify-center w-full mt-[20px] flex-col">
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
