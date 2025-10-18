import { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n';

interface Command {
  id: string;
  label: string;
  icon: string;
  action: () => void;
  keywords: string[];
}

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: 'home',
      label: t('commandPalette.commands.home.label'),
      icon: '🏠',
      action: () => navigate('/'),
      keywords: t('commandPalette.commands.home.keywords').split(' '),
    },
    {
      id: 'skills',
      label: t('commandPalette.commands.skills.label'),
      icon: '💪',
      action: () => navigate('/skills'),
      keywords: t('commandPalette.commands.skills.keywords').split(' '),
    },
    {
      id: 'portfolio',
      label: t('commandPalette.commands.portfolio.label'),
      icon: '💼',
      action: () => navigate('/portfolio'),
      keywords: t('commandPalette.commands.portfolio.keywords').split(' '),
    },
    {
      id: 'contact',
      label: t('commandPalette.commands.contact.label'),
      icon: '📧',
      action: () => navigate('/contact'),
      keywords: t('commandPalette.commands.contact.keywords').split(' '),
    },
    {
      id: 'resume',
      label: t('commandPalette.commands.resume.label'),
      icon: '📄',
      action: () => {
        const event = new CustomEvent('openPdfViewer');
        window.dispatchEvent(event);
      },
      keywords: t('commandPalette.commands.resume.keywords').split(' '),
    },
    {
      id: 'theme',
      label: t('commandPalette.commands.theme.label'),
      icon: '🌓',
      action: () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme?.includes('dark') ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      },
      keywords: t('commandPalette.commands.theme.keywords').split(' '),
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const searchLower = search.toLowerCase();
    return (
      cmd.label.toLowerCase().includes(searchLower) ||
      cmd.keywords.some((keyword) => keyword.includes(searchLower))
    );
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearch('');
        setSelectedIndex(0);
      }

      if (e.key === 'Escape') {
        setIsOpen(false);
        setSearch('');
        setSelectedIndex(0);
      }

      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      }

      if (e.key === 'Enter' && filteredCommands[selectedIndex]) {
        e.preventDefault();
        filteredCommands[selectedIndex].action();
        setIsOpen(false);
        setSearch('');
        setSelectedIndex(0);
      }
    },
    [isOpen, filteredCommands, selectedIndex],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9995]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="fixed top-[20%] left-1/2 transform -translate-x-1/2 w-full max-w-2xl z-[9996] px-4"
          >
            <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 overflow-hidden">
              <div className="p-4 border-b border-base-300">
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={t('commandPalette.placeholder')}
                  className="w-full bg-transparent outline-none text-lg"
                />
              </div>
              <div className="max-h-96 overflow-y-auto">
                {filteredCommands.length === 0 ? (
                  <div className="p-8 text-center text-base-content/50">
                    {t('commandPalette.noCommands')}
                  </div>
                ) : (
                  filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => {
                        cmd.action();
                        setIsOpen(false);
                        setSearch('');
                      }}
                      className={`w-full p-4 flex items-center gap-4 hover:bg-base-200 transition-colors ${
                        index === selectedIndex ? 'bg-base-200' : ''
                      }`}
                    >
                      <span className="text-2xl">{cmd.icon}</span>
                      <span className="flex-1 text-left">{cmd.label}</span>
                      {index === selectedIndex && (
                        <span className="text-xs px-2 py-1 bg-accent text-accent-content rounded">
                          Enter
                        </span>
                      )}
                    </button>
                  ))
                )}
              </div>
              <div className="p-3 border-t border-base-300 bg-base-200/50 text-xs text-base-content/70 flex items-center justify-between">
                <div className="flex gap-4">
                  <span>↑↓ {t('commandPalette.hints.navigate')}</span>
                  <span>↵ {t('commandPalette.hints.select')}</span>
                  <span>ESC {t('commandPalette.hints.close')}</span>
                </div>
                <span>{t('commandPalette.hints.open')}</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
