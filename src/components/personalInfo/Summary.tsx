import { useTranslations } from 'next-intl';
import styles from './styles.module.css';

export const Summary = () => {
  const t = useTranslations();
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryContent}>
        <h2 className={styles.title}>{t('personalInfo.summary.title')}</h2>
        <p className="paragraph">
          {t('personalInfo.summary.paragraph1')}
          <a
            className="custom-link"
            target="_blank"
            href="https://movilmultimediasa.com/"
          >
            {t('personalInfo.summary.link1')}
          </a>
          {t('personalInfo.summary.paragraph2')}
        </p>
        <p>{t('personalInfo.summary.paragraph3')}</p>
      </div>
    </div>
  );
};
