import { useTranslation } from '../i18n';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-accent-500 text-center bg-black p-4 border-t border-accent-500 w-screen flex items-center justify-center">
      <p>{t('copyright')}</p>
    </footer>
  );
};
