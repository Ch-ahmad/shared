import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { BiSolidMoviePlay } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  const sideBars = [
    {
      title: "Home",
      url: "/",
      icon: <IoHomeSharp className="size-[22px] text-[#f]" />,
    },
    {
      title: "Search",
      url: "/search",
      icon: <FiSearch className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: "Explore",
      url: "/explore",
      icon: <MdOutlineExplore className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: "Reels",
      url: "/reels",
      icon: <BiSolidMoviePlay className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: "Messages",
      url: "/messages",
      icon: <BsMessenger className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: "Notifications",
      url: "/notifications",
      icon: <CiHeart className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: "Create Post",
      url: "/create-post",
      icon: <FaRegPlusSquare className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: "Profile",
      url: "/profile",
      icon: <CgProfile className="size-[22px] text-textWhite-primary" />,
    },
  ];
  return (
    <div className="px-[12px] pt-[8px] pb-[20px] h-full  w-[70px] lg:w-[255px] border-r-[1px] border-[#0e0e01]">
      <div className="text-textWhite-primary h-[92px]  items-center font-bold text-[20px] pl-[10px] hidden lg:flex">
        Instagram
      </div>
      <nav className="space-y-[3px]">
        {sideBars.map((link) => (
          <SingleLink
            icon={link.icon}
            title={link.title}
            url={link.url}
          />
        ))}
      </nav>
    </div>
  );
};

export default SideBar;

function SingleLink({ icon, title, url }) {
  return (
    <NavLink
      to={url}
      className="flex items-center gap-x-[0] lg:gap-x-[10px] w-full text-white hover:bg-[#ffffff1a] py-[10px] pl-[10px] transition-colors rounded-[10px] text-[16px] font-medium aria-[current=page]:bg-hoverBg aria-[current=page]:font-bold"
    >
      {icon}
      <p className="hidden lg:block">{title}</p>
    </NavLink>
  );
}
