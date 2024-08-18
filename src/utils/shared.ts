/**
 * Handle redirect to open new with indicated url.
 * @param url string
 */
export const handleOpenNewTab = (url: string) => {
  window.open(url, '_blank');
};
