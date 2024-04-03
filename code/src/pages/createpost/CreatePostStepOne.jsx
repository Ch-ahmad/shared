import CreatePostFileView from './CreatePostFileView';
import { usePostContext } from './CreatePostProvider';

const CreatePostStepOne = () => {
  const { file, setFile } = usePostContext();
  return (
    <>
      {file ? (
        <CreatePostFileView />
      ) : (
        <div className="flex size-full items-center justify-center">
          <label
            className="cursor-pointer rounded-[10px] bg-secondary px-[50px] py-[7px] text-[16px] text-textWhite-primary"
            htmlFor="selectImage"
          >
            Browse from computer
          </label>

          <input
            className="sr-only size-0"
            id="selectImage"
            type="file"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
        </div>
      )}
    </>
  );
};

export default CreatePostStepOne;
