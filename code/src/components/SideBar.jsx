import React from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import { PostProvider } from '../pages/createpost/CreatePostProvider';
import { FaRegPlusSquare } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import CreatePostModal from '../pages/createpost/CreatePostModal';
import { useAuth } from '../provider/AuthProvider';
import { removeTokenFromLocalStorage } from '../utils/gooogle-auth';
import { BiLogOut } from 'react-icons/bi';
import useToast from '../hooks/useToast';

const SideBar = () => {
  const { setToken } = useAuth();
  const { toastSuccess } = useToast();
  const navigate = useNavigate();
  const handleLogout = () => {
    setToken();
    removeTokenFromLocalStorage();
    toastSuccess('Logout successfully');
    navigate('/');
  };
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
    <div className="flex h-full w-[50px] flex-col justify-between  border-r-[1px] border-[#0e0e01] px-[5px] pb-[20px] pt-[8px] md:px-[12px] lg:w-[255px]">
      <div>
        <div className="hidden h-[92px]  items-center  pl-[10px] text-[20px] font-bold text-textWhite-primary lg:flex">
          LensFlare
        </div>
        <nav className="space-y-[3px]">
          {sideBars.map((link, i) => {
            // * to show modal instead of page
            if (link.url === '/create-post') {
              return (
                <PostProvider>
                  <CreatePostModal icon={link.icon} title={link.title} />
                </PostProvider>
              );
            }
            return (
              <SingleLink
                icon={link.icon}
                key={link.title + i}
                title={link.title}
                url={link.url}
              />
            );
          })}
        </nav>
      </div>
      <button
        className="flex w-full items-center gap-x-[0] rounded-[10px] bg-[#ffffff1a] py-[10px] pl-[10px] text-[16px] font-medium text-red-700 transition-colors aria-[current=page]:bg-hoverBg aria-[current=page]:font-bold lg:gap-x-[10px]"
        onClick={handleLogout}
      >
        <BiLogOut className="size-[22px]" />
        <p className="hidden lg:block">Logout</p>
      </button>
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
