import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { MainBtn } from '@/components/shared';
import { IAlert } from '../types';
import styles from './styles.module.css';

let currentSnackbar: { container: HTMLElement; root: Root } | null = null;

const NotificationSnackbar: React.FC<IAlert> = ({
  iconColor,
  iconName,
  message,
}) => {
  const [show, setShow] = React.useState(true);

  // close the snackbar after 5 seconds automatically
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.snackbarProvider}>
      <div className={styles.snackbarContent}>
        <div className={styles.snackbarMessage}>
          <i style={{ color: iconColor }} className="material-symbols-outlined">
            {iconName}
          </i>
          <p>{message}</p>
        </div>
        <MainBtn
          fullRadius
          icon={{ type: 'material', name: 'close' }}
          onClick={() => setShow(false)}
        />
      </div>
    </div>
  );
};

/**
 * Display snackbar alert.
 * @param element IAlert
 */
export const showSnackbarAlert = ({ iconColor, iconName, message }: IAlert) => {
  // if there's an existing alert, remove it
  if (currentSnackbar) {
    currentSnackbar.root.unmount();
    if (document.body.contains(currentSnackbar.container)) {
      document.body.removeChild(currentSnackbar.container);
    }
    currentSnackbar = null;
  }

  // create a new container for the alert
  const container = document.createElement('div');
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(
    <NotificationSnackbar
      iconColor={iconColor}
      iconName={iconName}
      message={message}
    />
  );

  // track the current snackbar to remove it when a new one is triggered
  currentSnackbar = { container, root };

  // cleanup after the snackbar is closed
  setTimeout(() => {
    if (currentSnackbar?.container === container) {
      root.unmount();
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
      currentSnackbar = null;
    }
  }, 5000);
};
