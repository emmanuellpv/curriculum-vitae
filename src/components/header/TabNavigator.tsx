import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { TabBtn } from '../shared';
import { RouterModel } from '@/models';
import { ITab } from '@/types';
import styles from './styles.module.css';
import stylesBtn from '../shared/button/styles.module.css';

export const TabNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const tabs: ITab[] = [
    {
      path: `${RouterModel.url.personalInfo}`,
      name: t('header.tabNavigator.personalInfo'),
    },
    {
      path: RouterModel.url.techStack,
      name: t('header.tabNavigator.techStack'),
    },
    {
      path: RouterModel.url.workExperience,
      name: t('header.tabNavigator.workExperience'),
    },
    {
      path: RouterModel.url.education,
      name: t('header.tabNavigator.education'),
    },
    {
      path: RouterModel.url.certifications,
      name: t('header.tabNavigator.certifications'),
    },
  ];

  const [currentTab, setCurrentTab] = React.useState(pathname);
  const [indicatorStyle, setIndicatorStyle] = React.useState({});

  /**
   * Handle tab event to change the page.
   * @param path string
   */
  const handleChangeTab = (path: string) => {
    setCurrentTab(path);
    router.push(path);
  };

  const updateIndicator = React.useCallback(() => {
    setCurrentTab(pathname);
    const defaultTabButton = document.querySelector(
      `.${stylesBtn.tabBtn}.active`
    );
    const basePath = '/';

    if (defaultTabButton && pathname !== basePath) {
      const tabButtonRect = defaultTabButton.getBoundingClientRect();
      setIndicatorStyle({
        width: `${tabButtonRect.width}px`,
        left: `${tabButtonRect.left}px`,
      });
    } else {
      setIndicatorStyle({});
    }
  }, [pathname]);

  React.useEffect(() => {
    updateIndicator();
    const timeoutId = setTimeout(updateIndicator, 100);

    // add event listener for window resize
    window.addEventListener('resize', updateIndicator);

    // clean up event listener and timeout on component unmount
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateIndicator);
    };
  }, [pathname, updateIndicator]);

  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabActions}>
        {tabs.map((value, index) => (
          <TabBtn
            key={`tab-${index}`}
            text={value.name}
            tab={value.path}
            tabSelected={currentTab}
            onClick={() => handleChangeTab(value.path)}
          />
        ))}
      </div>
      <div style={indicatorStyle} className={styles.tabIndicator}></div>
    </div>
  );
};
