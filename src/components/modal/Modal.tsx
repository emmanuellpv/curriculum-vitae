import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import { MainBtn } from '../shared';

interface ModalProps {
  show: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  show,
  title,
  children,
  onClose,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  React.useEffect(() => {
    if (show) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // cleanup when component is unmounted
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [show]);

  return (
    <div
      className={`${styles.modalWrapper} ${show ? styles.show : ''}`}
      onClick={handleClickOutside}
    >
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.modalHeader}>
          <span className={styles.modalTitle}>{title}</span>
          <MainBtn
            fullRadius
            icon={{ type: 'material', name: 'close' }}
            onClick={onClose}
          />
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};
