import React, { useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import useMe from '../../hooks/fetch/useMe';
import Image from '../../components/Image';
import { SkeletonRounded } from '../../components/Skeleton/Skeleton';
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
  const [open, setOpen] = useState(true);
  const { isLoading, response } = useMe();
  return (
    <div className="">
      <div className=" flex w-full flex-col items-center gap-[60px] md:flex-row">
        {isLoading ? (
          <SkeletonRounded
            className={
              'size-[150px] min-h-[150px] min-w-[150px] rounded-[50%] '
            }
          />
        ) : (
          <Modal
            open={open}
            onOpenChange={() => {
              setOpen(false);
            }}
          >
            <Modal.Button>
              <Image
                src={response?.profile_image}
                className={
                  'size-[150px] min-h-[150px] min-w-[150px] rounded-[50%] object-cover'
                }
                alt={'Profile'}
              />
            </Modal.Button>
            <Modal.Content
              className={'h-[500px] w-[400px]'}
              title={'Title here'}
            >
              <div>Heeloo</div>
            </Modal.Content>
          </Modal>
        )}

        <HeaderDetailsSection isLoading={isLoading} name={response?.name} />
      </div>
      <div className="mt-[30px]">
        <button className="flex size-[70px] items-center justify-center rounded-[50%] bg-hoverBg transition-colors hover:bg-hoverBg/35">
          <FaPlus className="size-[22px] text-textWhite-primary" />
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;

function HeaderDetailsSection({ name, isLoading }) {
  return (
    <div className="flex flex-col gap-y-[15px]">
      <div className="flex w-full items-center gap-x-[20px]">
        {isLoading ? (
          <SkeletonRounded className={'h-[15px] w-[80px]'} height="15px" />
        ) : (
          <h2 className="font-semibold text-textWhite-primary">{name}</h2>
        )}
        <Link
          className="rounded-[10px] bg-hoverBg px-[8px] py-[8px] text-[12px] font-semibold text-textWhite-primary transition-colors hover:bg-hoverBg/35 md:px-[12px] md:text-[16px]
        "
          to={'/profile/edit'}
        >
          Edit Profile
        </Link>
        <button className="rounded-[10px] bg-hoverBg px-[8px] py-[8px] text-[12px] font-semibold text-textWhite-primary transition-colors hover:bg-hoverBg/35 md:px-[12px] md:text-[16px]">
          View Archieve
        </button>
        <button>
          <IoSettingsOutline className="size-[22px] text-textWhite-primary" />
        </button>
      </div>
      <div className="flex w-full items-center gap-x-[43px]">
        <h2 className="text-[15px] font-normal text-textWhite-primary">
          <b>13</b> posts
        </h2>
        <h2 className="text-[15px] font-normal text-textWhite-primary">
          <b>103</b> followers
        </h2>
        <h2 className="text-[15px] font-normal text-textWhite-primary">
          <b>1012</b> following
        </h2>
      </div>
      <div className="flex w-full items-center gap-x-[20px]">
        <h2 className="text-[15px] font-medium text-textWhite-primary">
          John Smith
        </h2>
      </div>
    </div>
  );
}
