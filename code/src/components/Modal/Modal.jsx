import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { HiMiniXMark } from 'react-icons/hi2';
import { cn } from '../../utils/lib';

const Modal = ({ children, open, onOpenChange }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    {children}
  </Dialog.Root>
);

Modal.Button = Dialog.Trigger;
Modal.Close = Dialog.Close;
Modal.Content = ModalContent;
export default Modal;

function ModalContent({
  children,
  className,
  titleClassName,
  title,
  crossButton = true,
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/80" />
      <Dialog.Content
        className={cn(
          'data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
          className
        )}
      >
        {title && (
          <Dialog.Title
            className={cn('m-0 text-[17px] font-medium', titleClassName)}
          >
            {title}
          </Dialog.Title>
        )}
        {crossButton && (
          <Dialog.Close asChild>
            <button>
              <HiMiniXMark className="absolute right-[10px] top-[10px] size-[25px] text-black hover:text-black/70" />
            </button>
          </Dialog.Close>
        )}
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
