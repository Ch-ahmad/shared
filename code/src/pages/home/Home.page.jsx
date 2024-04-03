import usePosts from '../../hooks/fetch/usePosts';
import ProfileSection from './ProfileSection';
import SinglePost from './SinglePost';
import SinglePostSkeleton from './SinglePostSkeleton';
import StautusBar from './StautusBar';
import Suggestion from './Suggestion';

export default function HomePage() {
  const { isLoading, response } = usePosts();

  return (
    <div className="flex w-full justify-between">
      <div className="w-full md:w-[70%] ">
        <StautusBar />
        <div className="mt-[20px] flex  w-full justify-center">
          <div className="mb-[80px] w-full space-y-[15px] md:w-[70%]">
            {isLoading
              ? [...Array(5).keys()].map((i) => <SinglePostSkeleton key={i} />)
              : response?.map((post, i) => (
                  <SinglePost key={post?._id} post={post} />
                ))}
          </div>
        </div>
      </div>
      <div className="hidden w-[27%] lg:block ">
        <ProfileSection />
        <div className="mt-[30px]">
          <Suggestion />
        </div>
      </div>
    </div>
  );
}
