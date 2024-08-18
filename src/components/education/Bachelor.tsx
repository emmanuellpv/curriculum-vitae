import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ucrImg from '../../../public/companies/ucr.png';
import degreeImg from '../../../public/education/bachelor-degree.jpg';
import styles from './styles.module.css';

export const Bachelor = () => {
  const t = useTranslations();
  return (
    <div className={styles.degreeContainer}>
      <div className={styles.degreeHeader}>
        <div className={styles.containerImg}>
          <Image
            fill
            src={ucrImg}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            alt={t('education.bachelor.university')}
          />
        </div>
        <div>
          <p className={styles.degreeName}>{t('education.bachelor.degree')}</p>
          <a
            className={styles.universityName}
            target="_blank"
            href="https://www.ucr.ac.cr/"
          >
            {t('education.bachelor.university')}
          </a>
          <p className={styles.universityPeriod}>
            {t('education.bachelor.period')}
          </p>
        </div>
      </div>
      <div className={styles.degreeContent}>
        <Image
          className={styles.degreeImg}
          src={degreeImg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={t('education.bachelor.degreeAlt')}
        />
      </div>
    </div>
  );
};
