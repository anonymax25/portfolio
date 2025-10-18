import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Show shortcuts with '?' key
      if (e.key === '?' && !e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey) {
        // Make sure we're not in an input field
        if (!(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
          e.preventDefault();
          setIsOpen((prev) => !prev);
        }
      }

      // Close with Escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  const shortcuts = [
    {
      category: 'Navigation',
      items: [
        { keys: ['Alt', '1'], description: 'Go to Home' },
        { keys: ['Alt', '2'], description: 'Go to Skills' },
        { keys: ['Alt', '3'], description: 'Go to Portfolio' },
        { keys: ['Alt', '4'], description: 'Go to Contact' },
        { keys: ['⌘', 'K'], description: 'Open Command Palette' },
      ],
    },
    {
      category: 'Scrolling',
      items: [
        { keys: ['Home'], description: 'Scroll to top' },
        { keys: ['End'], description: 'Scroll to bottom' },
        { keys: ['Shift', '↑'], description: 'Scroll up' },
        { keys: ['Shift', '↓'], description: 'Scroll down' },
      ],
    },
    {
      category: 'History',
      items: [
        { keys: ['Shift', '←'], description: 'Go back' },
        { keys: ['Shift', '→'], description: 'Go forward' },
      ],
    },
    {
      category: 'Easter Eggs',
      items: [
        { keys: ['↑', '↑', '↓', '↓', '←', '→', '←', '→', 'B', 'A'], description: 'Konami Code' },
      ],
    },
  ];

  return (
    <>
      {/* Help button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 z-[9998] btn btn-circle btn-sm btn-accent shadow-lg"
        title="Keyboard Shortcuts (Press ?)"
      >
        <span className="text-lg">⌨️</span>
      </button>

      {/* Shortcuts modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="bg-base-100 rounded-2xl shadow-2xl border border-base-300 p-6 m-4">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="btn btn-circle btn-sm btn-ghost"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-6">
                  {shortcuts.map((section) => (
                    <div key={section.category}>
                      <h3 className="text-lg font-semibold mb-3 text-accent">{section.category}</h3>
                      <div className="space-y-2">
                        {section.items.map((shortcut, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 bg-base-200 rounded-lg"
                          >
                            <span className="text-sm">{shortcut.description}</span>
                            <div className="flex gap-1">
                              {shortcut.keys.map((key, keyIndex) => (
                                <kbd
                                  key={keyIndex}
                                  className="kbd kbd-sm bg-base-300 border border-base-content/20"
                                >
                                  {key}
                                </kbd>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-base-300 text-center text-sm text-base-content/60">
                  Press <kbd className="kbd kbd-sm">?</kbd> to toggle this menu
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
