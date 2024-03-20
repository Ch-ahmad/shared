const ProfileSection = () => {
  return (
    <div className="flex gap-x-[15px] w-full items-center mt-[12px]">
      <img
        src="https://placehold.co/600x400"
        alt="Status"
        className="size-[53px] rounded-[50%] object-cover"
      />
      <div className="text-textWhite-primary flex flex-col">
        <h2 className="text-[15px] font-bold leading-none">John doe</h2>
        <span className="text-[13px] text-textWhite-secondary">John DOe</span>
      </div>
    </div>
  );
};

export default ProfileSection;
