import ProfileSection from "./ProfileSection";
import SinglePost from "./SinglePost";
import StautusBar from "./StautusBar";
import Suggestion from "./Suggestion";

export default function HomePage() {
  return (
    <div className="flex w-full justify-between">
      <div className="w-full md:w-[70%] ">
        <StautusBar />
        <div className="w-full flex  justify-center mt-[20px]">
          <div className="w-full md:w-[70%] space-y-[15px]">
            {[...Array(10).keys()].map((i) => (
              <SinglePost />
            ))}
          </div>
        </div>
      </div>
      <div className="w-[27%] hidden lg:block ">
        <ProfileSection />
        <div className="mt-[30px]">
          <Suggestion />
        </div>
      </div>
    </div>
  );
}
