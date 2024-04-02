import React from 'react';
import Input from '../../../components/Input';
import Button from '../../../components/Button/Button';
const ProfileUpdateForm = () => {
  return (
    <form className="mt-[100px] w-full space-y-[15px] text-textWhite-secondary">
      <Input
        placeholder="Name"
        inputClassName={'bg-transparent text-textWhite-primary'}
      />
      <Input
        placeholder="Password"
        inputClassName={'bg-transparent text-textWhite-primary'}
      />
      <div className="mt-[20px] flex justify-end gap-x-[20px]">
        <Button>Cancel</Button>
        <Button className={'bg-secondary'}>Update</Button>
      </div>
    </form>
  );
};

export default ProfileUpdateForm;
