import { useTranslation } from "../i18n";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-teal-500 text-center bg-black p-4 border-t border-teal-500 w-screen flex items-center justify-center">
      <p>{t('copyright')}</p>
    </footer>
  );
};
