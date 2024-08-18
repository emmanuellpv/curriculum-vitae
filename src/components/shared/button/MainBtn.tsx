import Image from 'next/image';
import { IButtonIcon } from '@/types';
import styles from './styles.module.css';

interface MainBtnProps {
  text?: string;
  isPrimary?: boolean;
  fullRadius?: boolean;
  icon?: IButtonIcon;
  onClick: () => void;
}

export const MainBtn: React.FC<MainBtnProps> = ({
  text,
  isPrimary,
  fullRadius,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`${styles.mainBtn} ${
        isPrimary ? styles.primaryBtn : styles.secondaryBtn
      } ${fullRadius ? styles.fullRadius : styles.defaultRadius}`}
      onClick={onClick}
    >
      <div className={styles.mainBtnContent}>
        {icon ? (
          icon.type === 'material' ? (
            <i className={`${styles.materialIcon} material-symbols-outlined`}>
              {icon.name}
            </i>
          ) : icon.type === 'image' ? (
            <Image src={`/${icon.name}`} width={20} height={20} alt="Icon" />
          ) : null
        ) : null}
        {text ? <span>{text}</span> : null}
      </div>
    </button>
  );
};
