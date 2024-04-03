import { useState } from 'react';
import usePostComments from '../../hooks/fetch/usePostComments';
import PostCommentTextArea from './PostCommentTextArea';
import SingleCommentView from './SingleCommentView';
import { SkeletonRounded } from '../../components/Skeleton/Skeleton';

function PostComment({ id }) {
  const { isLoading, response, refetch } = usePostComments(id);
  const [viewAllComments, setViewAllComments] = useState(false);
  const firstComment = response ? response[0] : [];
  if (isLoading) {
    return (
      <div className="w-full space-y-[5px]">
        <div className="flex w-full items-center gap-x-[10px]">
          <div className="flex items-center gap-x-[4px]">
            <SkeletonRounded className={'size-[30px] rounded-[50%]'} />
            <SkeletonRounded className={'h-[15px] w-[100px]'} />
          </div>
          <SkeletonRounded className={'h-[15px] w-[120px]'} />
        </div>
        <div className="flex w-full items-center gap-x-[10px]">
          <div className="flex items-center gap-x-[4px]">
            <SkeletonRounded className={'size-[30px] rounded-[50%]'} />
            <SkeletonRounded className={'h-[15px] w-[100px]'} />
          </div>
          <SkeletonRounded className={'h-[15px] w-[120px]'} />
        </div>
      </div>
    );
  }
  if (response?.length === 0) {
    return (
      <div className="w-full space-y-[15px]">
        <h2 className="text-[14px] font-bold text-textWhite-primary">
          Be the first one to comment
        </h2>
        <PostCommentTextArea postId={id} refetch={refetch} />
      </div>
    );
  }
  return (
    <>
      {viewAllComments ? (
        <div className="w-full space-y-[5px]">
          {response?.map((comment) => (
            <SingleCommentView
              key={comment?._id}
              name={comment?.user_id?.name}
              src={comment?.user_id?.profile_image}
              message={comment?.message}
            />
          ))}
          <PostCommentTextArea postId={id} refetch={refetch} />
        </div>
      ) : (
        <div className="w-full">
          <SingleCommentView
            name={firstComment?.user_id?.name}
            src={firstComment?.user_id?.profile_image}
            message={firstComment?.message}
          />
          <button
            className="text-[14px] font-bold text-textWhite-primary"
            onClick={() => setViewAllComments(true)}
          >
            View All Comments
          </button>
          <PostCommentTextArea postId={id} refetch={refetch} />
        </div>
      )}
    </>
  );
}
export default PostComment;
