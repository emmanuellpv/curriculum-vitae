import Image from 'next/image';
import { ISelectedCredential } from '@/types';
import styles from './styles.module.css';

interface AchievementContentProps {
  value: ISelectedCredential | undefined;
}

export const AchievementContent: React.FC<AchievementContentProps> = ({
  value,
}) => {
  return (
    <div className={styles.content}>
      <Image
        className={styles.achievementImg}
        src={value ? value.img : ''}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={value ? value.title : ''}
      />
    </div>
  );
};
