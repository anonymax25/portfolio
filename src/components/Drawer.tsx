import { IconX, IconLanguage } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { INavLink } from '../types/common';
import { Link } from 'react-router-dom';
import { DrawerMotion } from '../common/motion/Drawer';
import { useTranslation } from '../i18n';
import { DefaultSupportedLngs } from '../i18n/setup';

interface DrawerProps {
  onClick(): void;
  links: INavLink[];
}

export const Drawer = ({ onClick, links }: DrawerProps) => {
  const { container } = DrawerMotion;
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: DefaultSupportedLngs) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <motion.nav
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="bg-black p-4 fixed top-0 left-0 right-0 border-b border-teal-500 rounded-b-xl"
    >
      <div className="flex justify-between font-bold text-lg mb-4 border-b border-white py-2 w-full">
        <Link to="/" className="text-white hover:text-teal-500">
          {t('common.name')}
        </Link>
        <IconLanguage onClick={() => {
          changeLanguage(i18n.language === 'en-US' ? 'fr-FR' : 'en-US');
          onClick();
          }} />
        <IconX onClick={onClick} />
      </div>
      <div className="flex flex-col space-y-2 text-center">
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            onClick={onClick}
            className="text-white hover:text-teal-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
