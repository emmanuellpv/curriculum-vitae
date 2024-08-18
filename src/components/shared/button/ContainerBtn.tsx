import { ReactNode } from 'react';
import styles from './styles.module.css';

interface ContainerBtnProps {
  children: ReactNode;
  onClick: () => void;
}

export const ContainerBtn: React.FC<ContainerBtnProps> = ({
  children,
  onClick,
}) => {
  return (
    <button className={styles.containerBtn} onClick={onClick}>
      {children}
    </button>
  );
};
