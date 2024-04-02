import React from 'react';
import CreateBrowseSteup from './CreateBrowseSteup';
import { PostProvider } from './CreatePostProvider';
export const CreatePostPage = () => {
  return (
    <PostProvider>
      <section className="mt-[60px] flex w-full flex-col items-center justify-center gap-y-[30px]">
        <h1 className="self-start text-3xl font-bold text-textWhite-primary">
          Create new Post
        </h1>
        <div className="bg-box-primary h-[400px] w-[60%] rounded">
          <CreateBrowseSteup />
        </div>
      </section>
    </PostProvider>
  );
};
