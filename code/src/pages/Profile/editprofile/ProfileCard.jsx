import React from 'react';
import Image from '../../../components/Image';
import Button from '../../../components/Button/Button';

const ProfileCard = ({ src, name }) => {
  return (
    <div className="bg-box-primary flex w-full items-center justify-between rounded-[10px] p-[10px]">
      <div className=" flex items-center gap-x-[10px]">
        <Image
          src={src}
          className={'size-[70px] rounded-[50%] object-cover'}
          alt={'Profile Image'}
        />
        <h2 className="text-xl font-bold text-white">{name}</h2>
      </div>
      <Button className={'bg-secondary'}>Change Photo</Button>
    </div>
  );
};

export default ProfileCard;
