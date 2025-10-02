import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
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
  return (
    <motion.div className="card bg-base-200 card-border border-accent flex items-center space-x-4 w-full md:w-max min-w-[300px] p-4 rounded-xl">
      {image && <div className="w-20 h-20">{image}</div>}
      <div className="flex flex-col space-y-2 items-start text-sm">
        <div>
          <h2 className="text-lg font-bold">{name}</h2>
          <span>{description}</span>
        </div>
        <Link
          to={link}
          target="_blank"
          className="hover:text-white hover:bg-accent-600 rounded-md p-1"
        >
          {t('contact.send')}
        </Link>
      </div>
    </motion.div>
  );
};
