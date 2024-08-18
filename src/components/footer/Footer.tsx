'use client';
import { MainBtn } from '../shared';
import { GlobalUrl } from '@/constants';
import { handleOpenNewTab } from '@/utils';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <MainBtn
          icon={{ type: 'image', name: 'companies/linkedin.png' }}
          onClick={() => handleOpenNewTab(GlobalUrl.linkedIn)}
        />
        <MainBtn
          icon={{ type: 'image', name: 'companies/github.png' }}
          onClick={() => handleOpenNewTab(GlobalUrl.gitHub)}
        />
      </div>
    </footer>
  );
};
