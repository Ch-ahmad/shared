import { useState } from 'react';
import useApiRequest from '../../hooks/useRequestApi';
import useMe from '../../hooks/fetch/useMe';

const PostCommentTextArea = ({ postId, refetch }) => {
  const { response } = useMe();
  const [commentText, setCommentText] = useState('');
  const { isPending, mutationFunction } = useApiRequest({
    isSuccessToast: false,
  });
  console.log('response Inside of Comment Section', response);
  const handleCommentSubmition = (e) => {
    e.preventDefault();
    if (isPending) {
      return;
    }

    mutationFunction({
      data: {
        comment: commentText,
        user_id: response?._id,
      },
      path: 'add-comment/' + postId,
      callback() {
        setCommentText('');
        refetch();
      },
    });
  };
  return (
    <form
      className="mb-[10px] flex w-full items-center border-b border-textWhite-secondary"
      onSubmit={handleCommentSubmition}
    >
      <textarea
        className=" textarea no-scrollbar w-full resize-none bg-transparent text-[15px] text-textWhite-primary outline-none"
        placeholder="Write a comment"
        value={commentText}
        onChange={(e) => {
          setCommentText(e.target.value);
        }}
      ></textarea>
      <button
        className="text-secondary"
        type="submit"
        disabled={commentText === ''}
      >
        {commentText === '' ? '' : 'Post'}
      </button>
    </form>
  );
};

export default PostCommentTextArea;
