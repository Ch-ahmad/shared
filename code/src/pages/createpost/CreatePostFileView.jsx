import { motion } from 'framer-motion';
import { HiMiniXMark } from 'react-icons/hi2';
import { usePostContext } from './CreatePostProvider';
const CreatePostFileView = () => {
  const { file, setFile } = usePostContext();
  return (
    <motion.div
      className="relative h-[85%] w-full p-[10px]"
      initial={{
        scaleY: 0,
        opacity: 0,
      }}
      animate={{
        scaleY: 1,
        opacity: 1,
      }}
      exit={{
        scaleY: 0,
        opacity: 0,
      }}
      transition={{
        mass: 3,
      }}
    >
      <HiMiniXMark
        className="absolute right-[10px] top-[10px] size-[30px] cursor-pointer text-secondary"
        onClick={() => {
          setFile();
        }}
      />
      <img
        src={URL.createObjectURL(file)}
        alt="Post File"
        className="size-full rounded object-contain"
      />
    </motion.div>
  );
};

export default CreatePostFileView;
