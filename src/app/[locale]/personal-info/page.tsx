'use client';
import { Details, Profile, Summary } from '@/components/personalInfo';
import styles from './styles.module.css';

const PersonalInfo = () => {
  return (
    <section className="page-section">
      <div className="default-container">
        <div className={`row ${styles.personalPreview}`}>
          <div className="col-4">
            <Profile />
          </div>
          <div className="col-8">
            <Details />
          </div>
        </div>
        <Summary />
      </div>
    </section>
  );
};

export default PersonalInfo;
