import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';

import Image from '../../components/Image';
import { IMAGE_URL } from '../../utils/constant';
import PostFooter from './PostFooter';
import PostComment from './PostComment';

const SinglePost = ({ post }) => {
  return (
    <div className="w-full space-y-[5px]">
      <PostHeader
        imageSrc={post?.user_id?.profile_image}
        name={post?.user_id?.name}
      />
      <div className="h-[400px] w-full rounded-[10px]">
        <img
          src={IMAGE_URL + post?.media_url}
          alt="Status"
          className="size-full rounded-[10px] object-fill"
        />
      </div>
      <PostFooter
        likes={post?.likes}
        postId={post?._id}
        caption={post?.caption}
      />
      <PostComment id={post?._id} />
    </div>
  );
};

export default SinglePost;

function PostHeader({ imageSrc, name }) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center space-x-[10px]">
        {' '}
        <Image
          src={imageSrc}
          alt={'Post User Profile'}
          className={'size-[53px] rounded-[50%] object-cover'}
        />
        <div className="flex ">
          <h2 className="text-[16px] font-bold text-textWhite-primary">
            {name}
          </h2>
          <span className="ml-[10px] text-[16px] font-light text-textWhite-secondary">
            .3m
          </span>
        </div>
      </div>
      <button>
        <HiDotsHorizontal className="size-[22px] text-textWhite-primary" />
      </button>
    </div>
  );
}
