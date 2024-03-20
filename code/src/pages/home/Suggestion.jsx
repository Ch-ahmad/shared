import React from "react";

const Suggestion = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[16px] text-textWhite-secondary font-semibold">
          Suggested for you
        </h1>
        <button className="text-textWhite-primary text-[14px]">See All</button>
      </div>
      {[...Array(6).keys()].map((sugg) => (
        <SingleSuggestion key={sugg} />
      ))}
    </div>
  );
};

export default Suggestion;

function SingleSuggestion() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex gap-x-[15px] items-center mt-[12px]">
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
      <button className="text-primary text-[16px]">Follow</button>
    </div>
  );
}
