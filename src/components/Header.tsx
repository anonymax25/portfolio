import { IconMenu2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from './Drawer';
import { INavLink } from '../types/common';
import { useTranslation } from '../i18n';

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
    <motion.header className="bg-base-300 w-full sticky md:px-20 top-0 z-20 mb-4 flex items-center justify-between p-4">
      <Link to="/">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-2 font-bold text-md md:text-3xl text-accent-400"
        >
          {t('common.name')}
        </motion.div>
      </Link>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className="hidden lg:flex space-x-10"
      >
        {navLink.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="text-white font-bold hover:text-accent-400"
          >
            {t(`header.${item.name}`)}
          </Link>
        ))}
      </motion.nav>
      <IconMenu2 onClick={toggleDrawer} className="cursor-pointer flex lg:hidden" />
      {openDrawer && <Drawer onClick={toggleDrawer} links={navLink} />}
    </motion.header>
  );
};
