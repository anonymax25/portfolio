import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { INavLink } from '../types/common';
import { Link } from 'react-router-dom';
import { DrawerMotion } from '../common/motion/Drawer';
import { useTranslation } from '../i18n';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LangSwitcher } from './LangSwitcher';

interface DrawerProps {
  onClick(): void;
  links: INavLink[];
}

export const Drawer = ({ onClick, links }: DrawerProps) => {
  const { container } = DrawerMotion;
  const { t } = useTranslation();

  return (
    <motion.nav
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="bg-base-300 fixed top-0 left-0 right-0 border-b border-accent-500"
    >
      <div className="flex justify-between items-center font-bold text-lg p-4 border-b w-full">
        <Link to="/" className="hover:text-accent-500">
          {t('common.name')}
        </Link>

        <span>
          <ThemeSwitcher />
          <LangSwitcher />
        </span>

        <IconX onClick={onClick} />
      </div>

      <div className="flex flex-col p-4 space-y-2 text-center">
        {links.map((link) => (
          <Link to={link.path} key={link.path} onClick={onClick} className="hover:text-accent-500">
            {t(`header.${link.name}`)}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
