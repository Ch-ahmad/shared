import { SkeletonRounded } from '../../components/Skeleton/Skeleton';

const SinglePostSkeleton = () => {
  return (
    <div className="w-full space-y-[5px]">
      <div className="flex w-full justify-between">
        <div className="flex items-center space-x-[10px]">
          {' '}
          <SkeletonRounded className={'size-[53px] rounded-[50%]'} />
          <div className="flex ">
            <SkeletonRounded className={'h-[10px] w-[90px]'} />
            <span className="ml-[10px] text-[16px] font-light text-textWhite-secondary">
              <SkeletonRounded className={'h-[5px] w-[15px]'} />
            </span>
          </div>
        </div>
        <button>
          <SkeletonRounded className={'h-[7px] w-[25px]'} />
        </button>
      </div>
      <div className="h-[400px] w-full rounded-[10px]">
        <SkeletonRounded className={'size-full rounded-[10px]'} />
      </div>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-[15px]">
          <SkeletonRounded className={' h-[20px] w-[30px]'} />
          <SkeletonRounded className={' h-[20px] w-[30px]'} />

          <SkeletonRounded className={' h-[20px] w-[30px]'} />
        </div>
        <SkeletonRounded className={' h-[20px] w-[30px]'} />
      </div>
    </div>
  );
};

export default SinglePostSkeleton;
