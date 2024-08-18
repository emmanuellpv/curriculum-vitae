import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { saveAs } from 'file-saver';
import { useRouter, type Locale } from '@/../i18n.config';
import { Modal, ShareContent } from '../modal';
import { MainBtn, SelectInput } from '../shared';
import { Sidenav } from './Sidenav';
import { RouterModel } from '@/models';
import styles from './styles.module.css';

interface NavbarProps {
  locale: string;
}

export const Navbar: React.FC<NavbarProps> = ({ locale }) => {
  const router = useRouter();
  const t = useTranslations();
  const { theme, setTheme } = useTheme();

  const [brightnessIcon, setBrightnessIcon] = useState('settings_brightness');
  const [showShareModal, setShowShareModal] = useState(false);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  /**
   * Handle download CV.
   */
  const handleDownload = async () => {
    try {
      const path = '/curriculum.pdf';
      const response = await fetch(path);

      if (!response.ok) throw new Error(t('alert.notFound'));

      // convert the response to a blob
      const blob = await response.blob();

      // use FileSaver.js to save the blob
      saveAs(blob, path.split('/').pop() || 'file.pdf');
    } catch (error) {
      console.error('Error[handleDownload]', error);
    }
  };

  /**
   * Handle change locale: en | es
   * @param value string
   */
  const handleChangeLocale = (value: string) => {
    const newLocale = value as Locale;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  /**
   * Handle switch theme: dark | light
   */
  const handleSwitchTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setBrightnessIcon(theme === 'dark' ? 'light_mode' : 'dark_mode');
  };

  React.useEffect(() => {
    setBrightnessIcon(theme === 'dark' ? 'dark_mode' : 'light_mode');
  }, []);

  React.useEffect(() => {
    if (isSidenavOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // cleanup when component is unmounted
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [isSidenavOpen]);

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftSide}>
          <Link href={RouterModel.url.home}>{t('header.navbar.title')}</Link>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.desktopMode}>
            <MainBtn
              isPrimary
              text={t('header.navbar.downloadBtn')}
              icon={{
                type: 'material',
                name: 'download',
              }}
              onClick={handleDownload}
            />
            <MainBtn
              text={t('header.navbar.shareBtn')}
              icon={{
                type: 'material',
                name: 'share',
              }}
              onClick={() => setShowShareModal(true)}
            />
            <SelectInput
              id="lang"
              selectedValue={locale}
              values={[
                { value: 'es', viewValue: t('global.codeEs') },
                { value: 'en', viewValue: t('global.codeEn') },
              ]}
              onChange={handleChangeLocale}
            />
            <MainBtn
              icon={{
                type: 'material',
                name: brightnessIcon,
              }}
              onClick={handleSwitchTheme}
            />
          </div>
          <div className={styles.mobileMode}>
            <div className={styles.hamburgerBtn}>
              <MainBtn
                fullRadius
                icon={{
                  type: 'material',
                  name: 'menu',
                }}
                onClick={() => setIsSidenavOpen(!isSidenavOpen)}
              />
            </div>
          </div>
        </div>
      </div>
      <Sidenav
        isOpen={isSidenavOpen}
        brightnessIcon={brightnessIcon}
        locale={locale}
        onDownload={handleDownload}
        onShare={() => setShowShareModal(true)}
        onSwitchTheme={handleSwitchTheme}
        onChangeLang={handleChangeLocale}
        onCloseNav={() => setIsSidenavOpen(false)}
      />
      {showShareModal ? (
        <Modal
          show={showShareModal}
          title={t('modal.share.title')}
          onClose={() => setShowShareModal(false)}
        >
          <ShareContent onClose={() => setShowShareModal(false)} />
        </Modal>
      ) : null}
    </>
  );
};
