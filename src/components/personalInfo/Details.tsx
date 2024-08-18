import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Chip } from '../shared';
import styles from './styles.module.css';

export const Details = () => {
  const t = useTranslations();
  return (
    <div className={styles.detailsContainer}>
      <div className="row">
        <div className={`col-12 ${styles.detailInfo}`}>
          <p className={styles.title}>
            {t('personalInfo.details.email.label')}
          </p>
          <a href="mailto:emmanuellpv@hotmail.com">
            {t('personalInfo.details.email.value')}
          </a>
        </div>
        <div className="line"></div>
        <div className={`col-12 ${styles.detailInfo}`}>
          <p className={styles.title}>
            {t('personalInfo.details.phoneNumber.label')}
          </p>
          <a href="tel:+50688905255">
            {t('personalInfo.details.phoneNumber.value')}
          </a>
        </div>
        <div className="line"></div>
        <div className={`col-12 ${styles.detailInfo}`}>
          <p className={styles.title}>
            {t('personalInfo.details.openTo.label')}
          </p>
          <div className="chips">
            <Chip text={t('personalInfo.details.openTo.chips.chip1')} />
            <Chip text={t('personalInfo.details.openTo.chips.chip2')} />
            <Chip text={t('personalInfo.details.openTo.chips.chip3')} />
          </div>
        </div>
        <div className="line"></div>
        <div className={`col-12 ${styles.detailInfo}`}>
          <p className={styles.title}>
            {t('personalInfo.details.languages.label')}
          </p>
          <div className={styles.flag}>
            <Image
              src={'/flags/spain.png'}
              width={20}
              height={20}
              alt="Spain"
            />
            <span>{t('personalInfo.details.languages.spanish')}</span>
          </div>
          <div className={styles.flag}>
            <Image
              src={'/flags/us.png'}
              width={20}
              height={20}
              alt="United States"
            />
            <span>{t('personalInfo.details.languages.english')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
