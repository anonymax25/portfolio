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
    <motion.div className="card card-side bg-base-200 border border-accent w-full md:w-max min-w-[300px]">
      <figure className="pl-4">{image && <div className="w-20 h-20">{image}</div>}</figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions">
          <Link to={link} target="_blank" className="btn btn-accent btn-sm">
            {t('contact.send')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
