import { usePostContext } from './CreatePostProvider';
import { motion } from 'framer-motion';
const CreatePostStepTwo = () => {
  const { captionText, setCaptionText, isPending } = usePostContext();
  return (
    <motion.div
      className="relative flex h-[88%] w-full items-center justify-center p-[10px] "
      initial={{
        x: 500,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        mass: 3,
      }}
      exit={{
        x: 500,
      }}
    >
      <textarea
        className="h-[60%] w-full rounded-[10px] border border-textWhite-secondary bg-transparent px-[13px] py-[5px] text-textWhite-primary"
        value={captionText}
        disabled={isPending}
        onChange={(e) => {
          setCaptionText(e.target.value);
        }}
        placeholder="Write a caption....."
      ></textarea>
    </motion.div>
  );
};

export default CreatePostStepTwo;
