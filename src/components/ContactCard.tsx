import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { useState } from 'react';

interface ContactCardProps {
  id: number;
  image?: React.ReactNode;
  name: string;
  description: string;
  link: string;
}

export const ContactCard = (props: ContactCardProps) => {
  const { image, name, description, link } = props;
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(description);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <motion.div className="card card-side bg-base-200 border border-accent w-full md:w-max min-w-[300px] relative">
      <figure className="pl-4">{image && <div className="w-20 h-20">{image}</div>}</figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions gap-2">
          <Link to={link} target="_blank" className="btn btn-accent btn-sm">
            {t('contact.send')}
          </Link>
          <button onClick={handleCopy} className="btn btn-outline btn-sm" title="Copy to clipboard">
            {copied ? '✓' : '📋'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-2 right-2 bg-success text-success-content px-3 py-1 rounded-lg text-xs font-semibold shadow-lg"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
