import type { ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
}

export const Modal = ({ children, isOpen }: ModalProps) => {
  const handleWrapperClick: React.MouseEventHandler = (event) => event.stopPropagation();

  return <div>{isOpen && <div>{children}</div>}</div>;
};
