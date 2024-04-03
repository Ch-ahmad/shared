import Modal from '../../components/Modal/Modal';
import CreateBrowseSteup from './CreateBrowseSteup';
import { usePostContext } from './CreatePostProvider';
const CreatePostModal = ({ icon, title }) => {
  const { open, setOpen, setFile, setCaptionText, setStep } = usePostContext();
  return (
    <>
      <button
        className="flex w-full items-center gap-x-[0] rounded-[10px] py-[10px] pl-[10px] text-[16px] font-medium text-white transition-colors hover:bg-[#ffffff1a] aria-[current=page]:bg-hoverBg aria-[current=page]:font-bold lg:gap-x-[10px]"
        onClick={() => {
          setFile();
          setStep(1);
          setCaptionText();
          setOpen(true);
        }}
      >
        {icon}
        <p className="hidden lg:block">{title}</p>
      </button>
      <Modal
        open={open}
        onOpenChange={() => {
          setOpen(false);
        }}
      >
        <Modal.Content className={'bg-box-primary p-0'} crossButton={false}>
          <div className="h-[400px] w-full rounded bg-box-primary">
            <CreateBrowseSteup />
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CreatePostModal;
