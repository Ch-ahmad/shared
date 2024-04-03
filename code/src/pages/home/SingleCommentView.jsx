import Image from '../../components/Image';

const SingleCommentView = ({ src, name, message }) => {
  return (
    <div className="flex w-full items-center gap-x-[10px]">
      <div className="flex items-center gap-x-[4px]">
        <Image src={src} className={'size-[30px] rounded-[50%] object-cover'} />
        <h2 className="text-[14px] font-bold text-textWhite-primary">{name}</h2>
      </div>

      <span className="w-[200px] truncate text-[13px] text-textWhite-primary">
        {message}
      </span>
    </div>
  );
};

export default SingleCommentView;
