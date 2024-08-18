'use client';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ItemBox } from './ItemBox';
import { ContainerBtn } from '../shared';
import { RouterModel } from '@/models';
import { IPortfolio } from '@/types';
import styles from './styles.module.css';

export const About = () => {
  const router = useRouter();
  const t = useTranslations();

  const elements: IPortfolio[] = [
    {
      icon: 'person',
      text: t('home.portfolio.personalInfo'),
      path: RouterModel.url.personalInfo,
    },
    {
      icon: 'deployed_code',
      text: t('home.portfolio.techStack'),
      path: RouterModel.url.techStack,
    },
    {
      icon: 'work',
      text: t('home.portfolio.workExperience'),
      path: RouterModel.url.workExperience,
    },
    {
      icon: 'school',
      text: t('home.portfolio.education'),
      path: RouterModel.url.education,
    },
    {
      icon: 'collections_bookmark',
      text: t('home.portfolio.certifications'),
      path: RouterModel.url.certifications,
    },
  ];

  /**
   * Handle navigate to a route.
   * @param path string
   */
  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <div>
      <h2 className={styles.title}>{t('home.title')}</h2>
      <div className={styles.aboutBox}>
        <div className={styles.aboutContent}>
          {elements.map((value, index) => (
            <ContainerBtn
              key={`portfolio-${index}`}
              onClick={() => handleNavigate(value.path)}
            >
              <ItemBox icon={value.icon} text={value.text} />
            </ContainerBtn>
          ))}
        </div>
      </div>
    </div>
  );
};
