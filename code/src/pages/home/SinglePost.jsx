import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSaveDown2 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const SinglePost = () => {
  return (
    <div className="w-full space-y-[5px]">
      <PostHeader />
      <div className="w-full h-[400px] rounded-[10px]">
        <img
          src="https://placehold.co/600x400"
          alt="Status"
          className="size-full rounded-[10px] object-fill"
        />
      </div>
      <PostFooter />
      <PostComment />
    </div>
  );
};

export default SinglePost;

function PostHeader() {
  return (
    <div className="flex w-full justify-between">
      <div className="space-x-[10px] flex items-center">
        {" "}
        <img
          src="https://placehold.co/600x400"
          alt="Status"
          className="size-[53px] rounded-[50%] object-cover"
        />
        <div className="flex ">
          <h2 className="text-[16px] font-bold text-textWhite-primary">
            John Doe
          </h2>
          <span className="text-textWhite-secondary font-light text-[16px] ml-[10px]">
            .3m
          </span>
        </div>
      </div>
      <button>
        <HiDotsHorizontal className="text-textWhite-primary size-[22px]" />
      </button>
    </div>
  );
}
function PostFooter() {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked((prv) => !prv);
  };
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-x-[15px]">
        <button
          className=""
          onClick={handleLike}
        >
          {isLiked ? (
            <FaHeart className="size-[30px] text-secondary   " />
          ) : (
            <CiHeart className="size-[30px] text-textWhite-primary " />
          )}
        </button>
        <button className="">
          <FaRegComment className="size-[28px] text-textWhite-primary " />
        </button>
        <button className="">
          <IoIosSend className="size-[30px] text-textWhite-primary " />
        </button>
      </div>
      <button>
        <CiSaveDown2 className="size-[25px] text-textWhite-primary " />
      </button>
    </div>
  );
}
function PostComment() {
  return (
    <div className="">
      <p className="text-textWhite-primary">
        Liked by <bold>hasni3062</bold> and others
      </p>
    </div>
  );
}
