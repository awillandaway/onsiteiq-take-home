import type { ReactNode } from 'react';
import { ModalBackdrop, ModalWrapper } from './Modal.styles';

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  toggleModal: () => void;
}

export const Modal = ({ children, isOpen, toggleModal }: ModalProps) => {
  const handleWrapperClick: React.MouseEventHandler = (event) => event.stopPropagation();

  return (
    <div>
      {isOpen && (
        <ModalBackdrop onClick={toggleModal}>
          <ModalWrapper onClick={handleWrapperClick}>{children}</ModalWrapper>
        </ModalBackdrop>
      )}
    </div>
  );
};
