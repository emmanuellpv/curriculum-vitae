import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { MainBtn, SelectInput } from '../shared';
import { RouterModel } from '@/models';
import styles from './styles.module.css';

interface SidenavProps {
  isOpen: boolean;
  brightnessIcon: string;
  locale: string;
  onDownload: () => void;
  onShare: () => void;
  onSwitchTheme: () => void;
  onChangeLang: (value: string) => void;
  onCloseNav: () => void;
}

export const Sidenav: React.FC<SidenavProps> = ({
  isOpen,
  brightnessIcon,
  locale,
  onDownload,
  onShare,
  onSwitchTheme,
  onChangeLang,
  onCloseNav,
}) => {
  const pathname = usePathname();
  const t = useTranslations();
  return (
    <div>
      <div className={`${styles.sidenav} ${isOpen ? styles.sidenavOpen : ''}`}>
        <Link
          className={pathname === RouterModel.url.home ? styles.active : ''}
          href={RouterModel.url.home}
          onClick={onCloseNav}
        >
          {t('header.tabNavigator.home')}
        </Link>
        <Link
          className={
            pathname === RouterModel.url.personalInfo ? styles.active : ''
          }
          href={RouterModel.url.personalInfo}
          onClick={onCloseNav}
        >
          {t('header.tabNavigator.personalInfo')}
        </Link>
        <Link
          className={
            pathname === RouterModel.url.techStack ? styles.active : ''
          }
          href={RouterModel.url.techStack}
          onClick={onCloseNav}
        >
          {t('header.tabNavigator.techStack')}
        </Link>
        <Link
          className={
            pathname === RouterModel.url.workExperience ? styles.active : ''
          }
          href={RouterModel.url.workExperience}
          onClick={onCloseNav}
        >
          {t('header.tabNavigator.workExperience')}
        </Link>
        <Link
          className={
            pathname === RouterModel.url.education ? styles.active : ''
          }
          href={RouterModel.url.education}
          onClick={onCloseNav}
        >
          {t('header.tabNavigator.education')}
        </Link>
        <Link
          className={
            pathname === RouterModel.url.certifications ? styles.active : ''
          }
          href={RouterModel.url.certifications}
          onClick={onCloseNav}
        >
          {t('header.tabNavigator.certifications')}
        </Link>
        <div className={styles.actions}>
          <MainBtn
            isPrimary
            text={t('header.navbar.downloadBtn')}
            icon={{
              type: 'material',
              name: 'download',
            }}
            onClick={onDownload}
          />
          <MainBtn
            isPrimary
            text={t('header.navbar.shareBtn')}
            icon={{
              type: 'material',
              name: 'share',
            }}
            onClick={onShare}
          />
          <MainBtn
            isPrimary
            text={
              brightnessIcon === 'dark_mode'
                ? t('header.navbar.darkModeBtn')
                : brightnessIcon === 'light_mode'
                ? t('header.navbar.lightModeBtn')
                : ''
            }
            icon={{
              type: 'material',
              name: brightnessIcon,
            }}
            onClick={onSwitchTheme}
          />
          <SelectInput
            id="lang"
            selectedValue={locale}
            values={[
              { value: 'es', viewValue: t('global.langEs') },
              { value: 'en', viewValue: t('global.langEn') },
            ]}
            onChange={onChangeLang}
          />
        </div>
      </div>
    </div>
  );
};
