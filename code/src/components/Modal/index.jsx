import { cn as twMerge } from '../../utils/lib';
import * as Dialog from '@radix-ui/react-dialog';
import { HiMiniXMark } from 'react-icons/hi2';
export default function Modal({ open, onOpenChange, children }) {
  return <Dialog.Root>{children}</Dialog.Root>;
}

function ModalContent({
  title,
  children,
  crossButton = true,
  className,
  titleClassName,
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
      <Dialog.Content
        className={twMerge(
          'fixed left-1/2 top-1/2 z-50 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[10px] text-gray-900 shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms] ',
          className
        )}
      >
        <div className="flex items-center justify-between">
          {title && (
            <Dialog.Title
              className={twMerge(
                'font-primary text-16 font-bold',
                titleClassName
              )}
            >
              {title}
            </Dialog.Title>
          )}
          {crossButton && (
            <Dialog.Close className="text-gray-400 hover:text-gray-500">
              <HiMiniXMark className="size-[30px] text-black" />
            </Dialog.Close>
          )}
        </div>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
