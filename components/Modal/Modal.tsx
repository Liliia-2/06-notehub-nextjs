import type {
    ReactNode
} from 'react';
import { useEffect } from 'react';
import type { MouseEvent } from 'react';

import { createPortal } from 'react-dom';

import css from './Modal.module.css';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const modalRoot = document.getElementById('modal-root')!;

export default function Modal({
  children,
  onClose,
}: ModalProps) {
    useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEscape = (
      event: KeyboardEvent
    ): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);

        return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener(
        'keydown',
        handleEscape
      );
    };
  }, [onClose]);

  const handleBackdropClick = (
    event: MouseEvent<HTMLDivElement>
  ): void => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}