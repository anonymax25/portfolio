import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CopyToClipboardProps {
  text: string;
  label?: string;
  children?: React.ReactNode;
}

export const CopyToClipboard = ({ text, label, children }: CopyToClipboardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="relative inline-block">
      <button onClick={handleCopy} className="btn btn-sm gap-2 relative" title="Click to copy">
        {children || label || 'Copy'}
        <motion.span animate={{ scale: copied ? [1, 1.2, 1] : 1 }} transition={{ duration: 0.3 }}>
          {copied ? '✓' : '📋'}
        </motion.span>
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: -40, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-success text-success-content px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const CopyableText = ({ text, displayText }: { text: string; displayText?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className="relative group inline-flex items-center gap-2 bg-base-200 px-3 py-2 rounded-lg">
      <code className="text-sm">{displayText || text}</code>
      <button
        onClick={handleCopy}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        title="Copy to clipboard"
      >
        <motion.span animate={{ scale: copied ? [1, 1.3, 1] : 1 }} className="text-lg">
          {copied ? '✓' : '📋'}
        </motion.span>
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: -30 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 transform -translate-x-1/2 -top-2 bg-success text-success-content px-2 py-1 rounded text-xs font-semibold whitespace-nowrap"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
