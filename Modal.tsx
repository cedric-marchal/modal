// Modal.tsx
import { PropsWithChildren, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex overflow-auto bg-gray-400 "
      onClick={onClose}
    >
      <div className="relative flex items-center justify-between w-full max-w-md m-auto bg-white rounded-lg p-14">
        {children}

        <span className="p-4 cursor-pointer" onClick={onClose}>
          X
        </span>
      </div>
    </div>
  );
};
