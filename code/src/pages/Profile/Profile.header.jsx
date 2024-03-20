import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const ProfileHeader = () => {
  return (
    <div className="">
      <div className="w-full flex items-center gap-x-[60px]">
        <img
          src="https://source.unsplash.com/closeup-photography-of-woman-smiling-mEZ3PoFGs_k"
          alt="Profile"
          className="min-w-[150px] min-h-[150px] size-[150px] object-cover rounded-[50%]"
        />
        <HeaderDetailsSection />
      </div>
      <div className="mt-[30px]">
        <button className="flex items-center justify-center size-[70px] rounded-[50%] bg-hoverBg hover:bg-hoverBg/35 transition-colors">
          <FaPlus className="size-[22px] text-textWhite-primary" />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;

function HeaderDetailsSection() {
  return (
    <div className="flex flex-col gap-y-[15px]">
      <div className="w-full flex items-center gap-x-[20px]">
        <h2 className="text-textWhite-primary font-semibold">John Doe</h2>
        <button
          className="px-[12px] py-[8px] bg-hoverBg text-textWhite-primary text-[16px] font-semibold rounded-[10px]
        hover:bg-hoverBg/35 transition-colors
        "
        >
          Edit Profile
        </button>
        <button className="px-[12px] py-[8px] bg-hoverBg text-textWhite-primary text-[16px] font-semibold rounded-[10px] hover:bg-hoverBg/35 transition-colors">
          View Archieve
        </button>
        <button>
          <IoSettingsOutline className="size-[22px] text-textWhite-primary" />
        </button>
      </div>
      <div className="w-full flex items-center gap-x-[43px]">
        <h2 className="text-textWhite-primary font-normal text-[15px]">
          <b>13</b> posts
        </h2>
        <h2 className="text-textWhite-primary font-normal text-[15px]">
          <b>103</b> followers
        </h2>
        <h2 className="text-textWhite-primary font-normal text-[15px]">
          <b>1012</b> following
        </h2>
      </div>
      <div className="w-full flex items-center gap-x-[20px]">
        <h2 className="text-textWhite-primary font-medium text-[15px]">
          John Smith
        </h2>
      </div>
    </div>
  );
}
