import createMiddleware from 'next-intl/middleware';
import { locales } from '../i18n.config';

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localePrefix: 'never',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
