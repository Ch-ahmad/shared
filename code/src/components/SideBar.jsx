import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

import { FaRegPlusSquare } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

const SideBar = () => {
  const sideBars = [
    {
      title: 'Home',
      url: '/',
      icon: <IoHomeSharp className="size-[22px] text-[#f]" />,
    },
    {
      title: 'Search',
      url: '/search',
      icon: <FiSearch className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: 'Create Post',
      url: '/create-post',
      icon: <FaRegPlusSquare className="size-[22px] text-textWhite-primary" />,
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: <CgProfile className="size-[22px] text-textWhite-primary" />,
    },
  ];
  return (
    <div className="h-full w-[50px] border-r-[1px] border-[#0e0e01] px-[5px]  pb-[20px] pt-[8px] md:px-[12px] lg:w-[255px]">
      <div className="hidden h-[92px]  items-center pl-[10px] text-[20px] font-bold text-textWhite-primary lg:flex">
        LensFlare
      </div>
      <nav className="space-y-[3px]">
        {sideBars.map((link, i) => (
          <SingleLink
            icon={link.icon}
            key={link.title + i}
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
      className="flex w-full items-center gap-x-[0] rounded-[10px] py-[10px] pl-[10px] text-[16px] font-medium text-white transition-colors hover:bg-[#ffffff1a] aria-[current=page]:bg-hoverBg aria-[current=page]:font-bold lg:gap-x-[10px]"
    >
      {icon}
      <p className="hidden lg:block">{title}</p>
    </NavLink>
  );
}
