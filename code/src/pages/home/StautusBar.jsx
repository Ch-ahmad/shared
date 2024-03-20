import React from "react";

const StautusBar = () => {
  return (
    <div className="flex gap-[15px] w-full flex-wrap">
      {[...Array(11).keys()].map((item, i) => (
        <SingleStauts key={item + i} />
      ))}
    </div>
  );
};

export default StautusBar;
function SingleStauts() {
  return (
    <button className="space-y-[5px]">
      <div className="size-[56px] rounded-[50%] border border-primary">
        <img
          src="https://placehold.co/600x400"
          alt="Status"
          className="size-full rounded-[50%] object-cover"
        />
      </div>
      <p className="text-[14px] text-textWhite-primary">John Doe</p>
    </button>
  );
}
