import { FiTag } from "react-icons/fi";
import { AiOutlineSave } from "react-icons/ai";
import { MdCollections } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const ProfileBody = () => {
  return (
    <div className="w-full border-t border-hoverBg/20 mt-[30px]">
      <div className="w-full flex items-center justify-center">
        <div className=" space-x-[20px]">
          <ProfileButton to={"/profile/posts"}>
            <MdCollections className="size-[20px]" />
            Posts
          </ProfileButton>
          <ProfileButton to={"/profile/saved"}>
            <AiOutlineSave className="size-[20px]" />
            Saved
          </ProfileButton>
          <ProfileButton to={"/profile/tagged"}>
            <FiTag className="size-[20px]" />
            Tagged
          </ProfileButton>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ProfileBody;
function ProfileButton({ children, to }) {
  return (
    <NavLink
      className="inline-flex items-center gap-x-[10px] text-[13px] text-textWhite-primary bg-transparent aria-[current=page]:border-t border-secondary pt-[8px]  aria-[current=page]:text-secondary"
      to={to}
    >
      {children}
    </NavLink>
  );
}
