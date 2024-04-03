import { useMemo, useState } from 'react';
import { CiHeart, CiSaveDown1 } from 'react-icons/ci';
import { FaHeart, FaRegComment } from 'react-icons/fa';
import { IoIosSend } from 'react-icons/io';
import useApiRequest from '../../hooks/useRequestApi';
import useMe from '../../hooks/fetch/useMe';
import { useQueryClient } from '@tanstack/react-query';
import { REQUTEST_URL } from '../../utils/requests_url';

function PostFooter({ likes, postId, caption }) {
  const queryClient = useQueryClient();
  const { response } = useMe();
  const loggedInUser = response?._id;
  const [postLikes, setPostLikes] = useState(likes);
  const isPostLiked = useMemo(
    () => postLikes?.find((like) => like?.user_id === loggedInUser),
    [postLikes, loggedInUser]
  );
  console.log(isPostLiked);

  const { mutationFunction } = useApiRequest({
    method: 'put',
    isSuccessToast: false,
  });
  const handleLike = () => {
    setPostLikes((prev) => {
      if (isPostLiked) {
        return prev?.filter((like) => like?.user_id !== loggedInUser);
      } else {
        return [...prev, { user_id: loggedInUser }];
      }
    });
    mutationFunction({
      data: {
        userId: loggedInUser,
      },
      path: `/like-post/${postId}`,
      callback() {
        queryClient.invalidateQueries({
          queryKey: [REQUTEST_URL.posts],
        });
      },
    });
  };
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-[15px]">
          <button className="" onClick={handleLike}>
            {isPostLiked ? (
              <FaHeart className="size-[30px] text-secondary   " />
            ) : (
              <CiHeart
                className="size-[30px] text-textWhite-primary "
                path=""
              />
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
          <CiSaveDown1 className="size-[25px] text-textWhite-primary " />
        </button>
      </div>
      <div className="mt-[5px]">
        <h3 className="text-[16px] font-bold text-textWhite-primary">
          {postLikes?.length} Likes
        </h3>
        <h3 className="mb-[20px] text-[14px] font-semibold text-textWhite-primary">
          {caption}
        </h3>
      </div>
    </>
  );
}
export default PostFooter;
