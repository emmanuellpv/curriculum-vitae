import Image from 'next/image';
import { ITechStack } from '@/types';
import styles from './styles.module.css';

interface TechSectionProps {
  techStack: ITechStack;
}

export const TechSection: React.FC<TechSectionProps> = ({ techStack }) => {
  return (
    <div className={styles.stackContainer}>
      <div className={styles.stackContent}>
        <h3 className={styles.title}>{techStack.title}</h3>
        <div className={styles.cardContainer}>
          {techStack.technologies.map((value, index) => (
            <div key={`technology-${index}`} className={styles.card}>
              <div className={styles.cardImg}>
                <Image
                  src={value.path}
                  width={40}
                  height={40}
                  alt={value.name}
                />
              </div>
              <div className={styles.cardContent}>
                <p>{value.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
