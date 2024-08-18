import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { MainBtn } from '../shared';
import { GlobalUrl } from '@/constants';
import styles from './styles.module.css';

/**
 * Handle redirect to show linkedin profile.
 * @param url string
 */
const handleOpenNewTab = (url: string) => {
  window.open(url, '_blank');
};

export const Profile = () => {
  const t = useTranslations();

  return (
    <div className={styles.profileContainer}>
      <Image
        priority
        src="/profile.jpg"
        width={200}
        height={200}
        alt="Profile"
        style={{
          borderRadius: '50%',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        }}
      />
      <div className={styles.profileInfo}>
        <p className={styles.fullName}>{t('personalInfo.profile.fullName')}</p>
        <p className={styles.profession}>
          {t('personalInfo.profile.profession')}
        </p>
      </div>
      <div className={styles.profileActions}>
        <MainBtn
          text={t('personalInfo.profile.linkedInBtn')}
          icon={{
            type: 'image',
            name: 'companies/linkedin.png',
          }}
          onClick={() => handleOpenNewTab(GlobalUrl.linkedIn)}
        />
      </div>
    </div>
  );
};
