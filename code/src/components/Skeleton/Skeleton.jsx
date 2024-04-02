import { cn as twMerge } from '../../utils/lib';
const SkeletonCircle = ({ className, height = '20px' }) => {
  return (
    <div
      style={{
        height,
        width: height,
      }}
      className={twMerge(
        ' rounded-half w-full animate-pulse bg-gray-300 ',
        className
      )}
    ></div>
  );
};
const SkeletonRounded = ({ className }) => {
  return (
    <div
      className={twMerge(
        ' w-full animate-pulse rounded-[10px] bg-gray-300',
        className
      )}
    ></div>
  );
};

export { SkeletonCircle, SkeletonRounded };
