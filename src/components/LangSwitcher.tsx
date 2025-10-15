import { useTranslation } from '../i18n';
import { DefaultSupportedLngs } from '../i18n/setup';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: DefaultSupportedLngs) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value as DefaultSupportedLngs)}
      className="select select-bordered select-sm bg-base-300"
    >
      <option value="en-US">English</option>
      <option value="fr-FR">Français</option>
    </select>
  );
};
