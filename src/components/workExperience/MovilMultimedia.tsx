'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ProjectBox } from './ProjectBox';
import { IProject } from '@/types';
import movilMultimediaImg from '../../../public/companies/movil-multimedia.png';
import pprImg from '../../../public/projects/ppr-logo.webp';
import ayaImg from '../../../public/projects/aya-logo.webp';
import myMetAppImg from '../../../public/projects/mymetapp-logo.webp';
import vipTucanImg from '../../../public/projects/vip-tucan.webp';
import jaquematteImg from '../../../public/projects/jaquematte-logo.webp';
import bcrImg from '../../../public/projects/bcr-logo.webp';
import styles from './styles.module.css';

export const MovilMultimedia = () => {
  const t = useTranslations();
  const projects: IProject[] = [
    {
      id: 1,
      name: t('workExperience.movilMultimedia.projects.ppr.name'),
      type: t('workExperience.movilMultimedia.projects.ppr.type'),
      imgUrl: pprImg,
      status: 'progressing',
    },
    {
      id: 2,
      name: t('workExperience.movilMultimedia.projects.aya.name'),
      type: t('workExperience.movilMultimedia.projects.aya.type'),
      imgUrl: ayaImg,
      status: 'ended',
    },
    {
      id: 3,
      name: t('workExperience.movilMultimedia.projects.myMetApp.name'),
      type: t('workExperience.movilMultimedia.projects.myMetApp.type'),
      imgUrl: myMetAppImg,
      status: 'ended',
    },
    {
      id: 4,
      name: t('workExperience.movilMultimedia.projects.vipTucan.name'),
      type: t('workExperience.movilMultimedia.projects.vipTucan.type'),
      imgUrl: vipTucanImg,
      status: 'ended',
    },
    {
      id: 5,
      name: t('workExperience.movilMultimedia.projects.jaquematte.name'),
      type: t('workExperience.movilMultimedia.projects.jaquematte.type'),
      imgUrl: jaquematteImg,
      status: 'ended',
    },
    {
      id: 6,
      name: t('workExperience.movilMultimedia.projects.bcr.name'),
      type: t('workExperience.movilMultimedia.projects.bcr.type'),
      imgUrl: bcrImg,
      status: 'ended',
    },
  ];

  return (
    <div className={styles.companyContainer}>
      <div className={styles.companyHeader}>
        <div className={styles.containerImg}>
          <Image
            fill
            src={movilMultimediaImg}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            alt={t('workExperience.movilMultimedia.name')}
          />
        </div>
        <div>
          <a
            className={styles.companyName}
            target="_blank"
            href="https://movilmultimediasa.com/"
          >
            {t('workExperience.movilMultimedia.name')}
          </a>
          <p className={styles.companyPeriod}>
            {t('workExperience.movilMultimedia.period')}
          </p>
        </div>
      </div>
      <div>
        <p className="paragraph">
          {t('workExperience.movilMultimedia.paragraph1')}
        </p>
        <p className="paragraph">
          {t('workExperience.movilMultimedia.paragraph2')}
        </p>
        <ul className="list">
          <li>{t('workExperience.movilMultimedia.ul.li1')}</li>
          <li>{t('workExperience.movilMultimedia.ul.li2')}</li>
          <li>{t('workExperience.movilMultimedia.ul.li3')}</li>
          <li>{t('workExperience.movilMultimedia.ul.li4')}</li>
          <li>{t('workExperience.movilMultimedia.ul.li5')}</li>
          <li>{t('workExperience.movilMultimedia.ul.li6')}</li>
        </ul>
        <p className="paragraph">
          {t('workExperience.movilMultimedia.paragraph3')}
        </p>
        <p className="paragraph">
          {t('workExperience.movilMultimedia.paragraph4')}
        </p>
        <p className="paragraph">
          {t('workExperience.movilMultimedia.paragraph5')}
        </p>
        <p className="paragraph">
          {t('workExperience.movilMultimedia.paragraph6')}
        </p>
        <p className="paragraph">
          {t('workExperience.movilMultimedia.paragraph7')}
        </p>
        <div className={styles.projectSection}>
          <h3 className="paragraph">
            {t('workExperience.movilMultimedia.projects.title')}
          </h3>
          <div className={styles.myProjects}>
            {projects.map((value, index) => (
              <ProjectBox key={`project-${index}`} value={value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
