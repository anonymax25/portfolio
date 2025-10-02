import { IconLanguage } from '@tabler/icons-react';
import { useTranslation } from '../i18n';
import { DefaultSupportedLngs } from '../i18n/setup';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: DefaultSupportedLngs) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="dropdown">
      <summary className="btn m-1 rounded-box">
        <IconLanguage />
      </summary>
      <ul className="dropdown-content bg-base-300 rounded-box z-1 p-2 shadow-2xl">
        <li>
          <input
            type="radio"
            name="lang-dropdown"
            className="w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="English"
            onClick={() => changeLanguage('en-US')}
          />
        </li>
        <li>
          <input
            type="radio"
            name="lang-dropdown"
            className="w-full btn btn-sm btn-block btn-ghost justify-start"
            aria-label="Français"
            onClick={() => changeLanguage('fr-FR')}
          />
        </li>
      </ul>
    </div>
  );
};
