'use client';
import React from 'react';
import { Navbar } from './Navbar';
import { TabNavigator } from './TabNavigator';
import styles from './styles.module.css';

interface HeaderProps {
  locale: string;
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  return (
    <header className={styles.header}>
      <Navbar locale={locale} />
      <TabNavigator />
    </header>
  );
};
