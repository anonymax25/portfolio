import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] gap-6">
      <h1 className="text-4xl font-bold">{t('notFound.title')}</h1>
      <p className="text-lg opacity-80">{t('notFound.message')}</p>
      <Link to="/" className="text-white bg-accent-600 py-2 px-4 rounded-3xl hover:text-white">
        {t('notFound.backToHome')}
      </Link>
    </div>
  );
};
