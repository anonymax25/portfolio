import { IconMenu2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from './Drawer';
import { INavLink } from '../types/common';
import { useTranslation } from '../i18n';
import { LangSwitcher } from './LangSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const [openDrawer, setOpenDrawer] = useState(false);
  const navLink: INavLink[] = [
    { name: 'portfolio', path: '/portfolio' },
    { name: 'contact', path: '/contact' },
    { name: 'skills', path: '/skills' },
  ];
  function toggleDrawer() {
    setOpenDrawer(!openDrawer);
  }
  return (
    <motion.header className="navbar bg-base-300 w-full sticky top-0 z-20 mb-4 md:px-20">
      <div className="navbar-start">
        <Link to="/">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="btn btn-ghost normal-case text-md md:text-3xl text-accent"
          >
            {t('common.name')}
          </motion.div>
        </Link>
      </div>
      <div className="navbar-end gap-4">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden lg:flex menu menu-horizontal px-1 gap-2"
        >
          {navLink.map((item) => (
            <Link key={item.path} to={item.path} className="btn btn-ghost">
              {t(`header.${item.name}`)}
            </Link>
          ))}
        </motion.nav>
        <div className="hidden lg:flex flex-row gap-2">
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
        <button onClick={toggleDrawer} className="btn btn-ghost btn-circle lg:hidden">
          <IconMenu2 />
        </button>
        {openDrawer && <Drawer onClick={toggleDrawer} links={navLink} />}
      </div>
    </motion.header>
  );
};
