import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { Lang } from '@/constants';
import './globals.css';
import './globalIcons.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Emmanuell Pineda Vargas',
  description:
    'Curriculum Vitae - Personal information, Projects, Work experience, Certifications and more.',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: Lang;
  };
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, params }) => {
  const messages = useMessages();
  return (
    <html suppressHydrationWarning lang={params.locale}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <main className="main-page">
              <Header locale={params.locale} />
              {children}
              <Footer />
            </main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
