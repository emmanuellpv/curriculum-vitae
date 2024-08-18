import { useTranslations } from 'next-intl';
import { MainBtn } from '../../shared';
import { showSnackbarAlert } from '@/providers';
import { COLORS } from '@/constants';
import styles from './styles.module.css';

interface ShareContentProps {
  onClose: () => void;
}

export const ShareContent: React.FC<ShareContentProps> = ({ onClose }) => {
  const t = useTranslations();
  const websiteUrl = 'https://google.com';

  /**
   * Share to LinkedIn.
   */
  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      websiteUrl
    )}`;
    window.open(url, '_blank');
  };

  /**
   * Share to Facebook.
   */
  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      websiteUrl
    )}`;
    window.open(url, '_blank');
  };

  /**
   * Share to Twitter.
   */
  const shareToTwitter = () => {
    const url = `https://twitter.com/share?url=${encodeURIComponent(
      websiteUrl
    )}&text=Check%20this%20out!`;
    window.open(url, '_blank');
  };

  /**
   * Copy link to clipboard.
   */
  const copyLink = () => {
    navigator.clipboard
      .writeText(websiteUrl)
      .then(() => {
        onClose();
        showSnackbarAlert({
          iconColor: COLORS.success,
          iconName: 'check_circle',
          message: t('modal.share.copiedLink'),
        });
      })
      .catch((err) => {
        console.error('Failed to copy the link: ', err);
        showSnackbarAlert({
          iconColor: COLORS.danger,
          iconName: 'cancel',
          message: t('modal.share.notCopiedLink'),
        });
      });
  };

  return (
    <div className={styles.content}>
      <MainBtn
        text={t('modal.share.linkedInBtn')}
        icon={{
          type: 'image',
          name: 'companies/linkedin.png',
        }}
        onClick={shareToLinkedIn}
      />
      <MainBtn
        text={t('modal.share.facebookBtn')}
        icon={{
          type: 'image',
          name: 'companies/facebook.png',
        }}
        onClick={shareToFacebook}
      />
      <MainBtn
        text={t('modal.share.twitterBtn')}
        icon={{
          type: 'image',
          name: 'companies/x.png',
        }}
        onClick={shareToTwitter}
      />
      <MainBtn
        text={t('modal.share.copyLinkBtn')}
        icon={{
          type: 'material',
          name: 'content_copy',
        }}
        onClick={copyLink}
      />
    </div>
  );
};
