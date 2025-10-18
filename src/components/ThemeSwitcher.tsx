import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { useState, useEffect } from 'react';

const iconVariants: Variants = {
  initial: (direction: number) => ({
    rotate: direction * 90,
    opacity: 0,
    scale: 0.6,
  }),
  animate: {
    rotate: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    rotate: direction * -90,
    opacity: 0,
    scale: 0.6,
  }),
};

const iconTransition: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme =
      window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    const theme = savedTheme || systemTheme;
    setIsDark(theme === 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const handleToggle = () => {
    const newTheme = isDark ? 'light' : 'dark';

    // Add transition class before theme change
    document.documentElement.style.setProperty(
      'transition',
      'background-color 0.5s ease, color 0.5s ease',
    );

    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Create a ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'theme-transition-ripple';
    ripple.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 99999;
      animation: ripple-expand 0.8s ease-out forwards;
    `;

    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 800);

    // Remove transition after theme change completes
    setTimeout(() => {
      document.documentElement.style.removeProperty('transition');
    }, 500);
  };

  return (
    <label className="cursor-pointer" aria-label="Toggle theme">
      <input
        type="checkbox"
        className="theme-controller hidden"
        value="light"
        onChange={handleToggle}
        checked={!isDark}
      />
      <div className="relative w-8 h-8">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.svg
              key="sun"
              custom={1}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={iconTransition}
              className="absolute inset-0 h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="moon"
              custom={-1}
              variants={iconVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={iconTransition}
              className="absolute inset-0 h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </label>
  );
};
