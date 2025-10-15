import { useTranslation } from '../i18n';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer footer-center p-4 border-t border-accent text-accent w-screen">
      <aside>
        <p>{t('copyright')}</p>
      </aside>
    </footer>
  );
};
