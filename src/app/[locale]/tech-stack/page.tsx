import { TechSection } from '@/components/techStack';
import { ITechStack } from '@/types';
import { useTranslations } from 'next-intl';

const TechStack = () => {
  const t = useTranslations();

  const frontEndStack: ITechStack = {
    title: t('techStack.frontEndStackTitle'),
    technologies: [
      {
        name: 'React 18.2.0',
        path: '/icons/react.svg',
      },
      {
        name: 'React Native 0.72.5',
        path: '/icons/react.svg',
      },
      {
        name: 'React Vite 4.4.5',
        path: '/icons/react-vite.svg',
      },
      {
        name: 'Angular 16.1.0',
        path: '/icons/angular.svg',
      },
      {
        name: 'Angular Material 16.2.14',
        path: '/icons/angular.svg',
      },
      {
        name: 'Next.js 14.2.3',
        path: '/icons/next-js.svg',
      },
      {
        name: 'Tailwind 3.3.3',
        path: '/icons/tailwind-css.svg',
      },
      {
        name: 'TypeScript 5.2.2',
        path: '/icons/typescript.svg',
      },
      {
        name: 'Bootstrap 5.3.1',
        path: '/icons/bootstrap.svg',
      },
      {
        name: 'Xamarin 5.0.0',
        path: '/icons/xamarin.svg',
      },
      {
        name: 'jQuery 3.5.0',
        path: '/icons/jquery.svg',
      },
    ],
  };
  const backEndStack: ITechStack = {
    title: t('techStack.backEndStackTitle'),
    technologies: [
      {
        name: 'Node.js 20.11.0',
        path: '/icons/node-js.svg',
      },
      {
        name: 'Laravel 8.x',
        path: '/icons/laravel.svg',
      },
      {
        name: 'CodeIgniter 3',
        path: '/icons/codeigniter.svg',
      },
    ],
  };
  const programmingLanguageStack: ITechStack = {
    title: t('techStack.programmingLanguageStackTitle'),
    technologies: [
      {
        name: 'Java',
        path: '/icons/java.svg',
      },
      {
        name: 'C#',
        path: '/icons/csharp.svg',
      },
      {
        name: 'PHP',
        path: '/icons/php.svg',
      },
    ],
  };
  const databaseStack: ITechStack = {
    title: t('techStack.databaseStackTitle'),
    technologies: [
      {
        name: 'MySQL',
        path: '/icons/mysql.svg',
      },
      {
        name: 'Microsoft SQL Server',
        path: '/icons/sql-server.svg',
      },
      {
        name: 'Oracle Database',
        path: '/icons/oracle.svg',
      },
    ],
  };
  const serviceStack: ITechStack = {
    title: t('techStack.serviceStackTitle'),
    technologies: [
      {
        name: 'Amazon Web Services',
        path: '/icons/aws.svg',
      },
      {
        name: 'Google Play Console',
        path: '/icons/google-play.svg',
      },
      {
        name: 'Huawei Developer',
        path: '/icons/huawei.svg',
      },
      {
        name: 'OneSignal',
        path: '/icons/onesignal.svg',
      },
      {
        name: 'Microsoft IIS',
        path: '/icons/microsoft.svg',
      },
      {
        name: 'SOAP',
        path: '/icons/rest-api.svg',
      },
      {
        name: 'Stripe',
        path: '/icons/stripe.svg',
      },
    ],
  };
  const versionControlStack: ITechStack = {
    title: t('techStack.versionControlStackTitle'),
    technologies: [
      {
        name: 'GitLab',
        path: '/icons/gitlab.svg',
      },
      {
        name: 'GitHub',
        path: '/icons/github.svg',
      },
    ],
  };

  return (
    <section className="page-section">
      <div className="default-container">
        <TechSection techStack={frontEndStack} />
        <TechSection techStack={backEndStack} />
        <TechSection techStack={programmingLanguageStack} />
        <TechSection techStack={databaseStack} />
        <TechSection techStack={serviceStack} />
        <TechSection techStack={versionControlStack} />
      </div>
    </section>
  );
};

export default TechStack;
