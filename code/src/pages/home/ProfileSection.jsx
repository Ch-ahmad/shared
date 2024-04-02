import useMe from '../../hooks/fetch/useMe';
import Image from '../../components/Image';
import { SkeletonRounded } from '../../components/Skeleton/Skeleton';
const ProfileSection = () => {
  const { isLoading, response } = useMe();
  console.log({
    isLoading,
    response,
  });
  if (isLoading) {
    return (
      <div className="mt-[12px] flex w-full items-center gap-x-[15px]">
        <SkeletonRounded className={'size-[53px] rounded-[50%]'} />
        <div className="flex flex-col">
          <SkeletonRounded height="10px" className={'w-[70px]'} />
        </div>
      </div>
    );
  }
  return (
    <div className="mt-[12px] flex w-full items-center gap-x-[15px]">
      <Image
        className="size-[53px] rounded-[50%] object-cover"
        src={response?.profile_image}
      />

      <div className="flex flex-col text-textWhite-primary">
        <h2 className="text-[15px] font-bold leading-none">{response?.name}</h2>
        <span className="text-[13px] text-textWhite-secondary">....</span>
      </div>
    </div>
  );
};

export default ProfileSection;
