'use client';
import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { useTranslations } from 'next-intl';
import { AchievementContent, Modal } from '@/components/modal';
import { CertificationStack, CourseStack } from '@/components/certification';
import { ICertification, ICourse, ISelectedCredential } from '@/types';
import { COLORS } from '@/constants';
import { showSnackbarAlert } from '@/providers';
import englishCertifiedImg from '../../../../public/courses/english-certified.jpg';

const images: { [key: string]: StaticImageData } = {
  'courses/english-certified.jpg': englishCertifiedImg,
};

const Certifications = () => {
  const t = useTranslations();
  const certifications: ICertification[] = [
    {
      achievement: t('certifications.certification3.achievement'),
      institution: t('certifications.certification3.institution'),
      date: t('certifications.certification3.date'),
      url: t('certifications.certification3.url'),
      displayMode: 'new_tab',
    },
    {
      achievement: t('certifications.certification2.achievement'),
      institution: t('certifications.certification2.institution'),
      date: t('certifications.certification2.date'),
      url: t('certifications.certification2.url'),
      displayMode: 'new_tab',
    },
    {
      achievement: t('certifications.certification1.achievement'),
      institution: t('certifications.certification1.institution'),
      date: t('certifications.certification1.date'),
      url: t('certifications.certification1.url'),
      displayMode: 'new_tab',
    },
  ];
  const courses: ICourse[] = [
    {
      achievement: t('courses.course1.achievement'),
      institution: t('courses.course1.institution'),
      date: t('courses.course1.date'),
      url: t('courses.course1.url'),
      displayMode: 'modal',
    },
  ];
  const [selectedCredential, setSelectedCredential] =
    useState<ISelectedCredential>();
  const [showCertificationModal, setShowCertificationModal] = useState(false);

  /**
   * Handle open new tab to show credential.
   * @param url string
   */
  const handleOpenNewTab = async (url: string) => {
    window.open(url, '_blank');
  };

  /**
   * Handle open modal to show credential.
   * @param title string
   * @param path string
   */
  const handleOpenModal = async (title: string, path: string) => {
    try {
      const img = images[path];

      // // set in and display modal
      setSelectedCredential({ title, img });
      setShowCertificationModal(true);
    } catch (error) {
      console.error('Error[handleShowCredential]', error);
      showSnackbarAlert({
        iconColor: COLORS.danger,
        iconName: 'cancel',
        message: t('alert.error'),
      });
    }
  };

  return (
    <section className="page-section">
      <div className="default-container">
        <div className="row">
          <div className="col-6">
            <CertificationStack
              list={certifications}
              onRedirect={handleOpenNewTab}
              onOpenModal={handleOpenModal}
            />
          </div>
          <div className="col-6">
            <CourseStack
              list={courses}
              onRedirect={handleOpenNewTab}
              onOpenModal={handleOpenModal}
            />
          </div>
        </div>
      </div>
      {showCertificationModal ? (
        <Modal
          show={showCertificationModal}
          title={selectedCredential ? selectedCredential.title : ''}
          onClose={() => setShowCertificationModal(false)}
        >
          <AchievementContent value={selectedCredential} />
        </Modal>
      ) : null}
    </section>
  );
};

export default Certifications;
