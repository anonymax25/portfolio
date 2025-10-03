import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { INavLink } from '../types/common';
import { Link } from 'react-router-dom';
import { DrawerMotion } from '../common/motion/Drawer';
import { useTranslation } from '../i18n';
import { ThemeSwitcher } from './ThemeSwitcher';
import { LangSwitcher } from './LangSwitcher';
import { useEffect } from 'react';

interface DrawerProps {
  onClick(): void;
  links: INavLink[];
}

export const Drawer = ({ onClick, links }: DrawerProps) => {
  const { container } = DrawerMotion;
  const { t } = useTranslation();

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClick();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClick]);

  return (
    <motion.nav
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="bg-base-300 fixed top-0 left-0 right-0 border-b border-accent-500 z-50"
      role="navigation"
      aria-label="Mobile navigation menu"
    >
      <div className="flex justify-between items-center font-bold text-lg p-4 border-b w-full">
        <Link to="/" className="hover:text-accent-500">
          {t('common.name')}
        </Link>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <ThemeSwitcher />
            <LangSwitcher />
          </span>
          <button
            onClick={onClick}
            className="btn btn-ghost btn-sm btn-circle"
            aria-label="Close menu"
          >
            <IconX />
          </button>
        </div>
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
