import Image from 'next/image';
import styles from './styles.module.css';
import { IProject } from '@/types';

interface ProjectBoxProps {
  value: IProject;
}

export const ProjectBox: React.FC<ProjectBoxProps> = ({ value }) => {
  return (
    <div className={styles.projectBox}>
      <div className={styles.projectContent}>
        <Image
          fill
          src={value.imgUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
          alt={value.name}
        />
        <div className={styles.overlay}>
          <p className={styles.projectName}>{value.name}</p>
          <p>{value.type}</p>
        </div>
      </div>
    </div>
  );
};
