import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
export interface ProjectCardProps {
  name: string;
  src: string;
  i18n: string;
  type: 'url' | 'img';
}

export const ProjectCard = ({ name, src, type, i18n }: ProjectCardProps) => {
  const { t } = useTranslation();
  return (
    <Link to={src} target="_blank">
      <motion.div
        initial={{
          scale: 1,
        }}
        whileHover={{
          scale: 1.02,
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        }}
        transition={{
          duration: 0.2,
        }}
        className="card bg-base-200 card-border flex flex-col items-center max-w-full md:max-w-lg overflow-hidden rounded-xl"
      >
        {type === 'url' ? (
          <iframe
            title={name}
            className="object-cover w-full h-60"
            src={src}
            width="800"
            height="800"
          />
        ) : (
          <img src={`${src}`} alt={name} />
        )}

        <div className="flex flex-col justify-start p-4 text-sm">
          <h2 className="text-lg font-bold">
            {type === 'url' && (
              <img src={`${src}/favicon.ico`} alt={name} height={'16px'} width={'16px'} />
            )}
            <span>{name}</span>
          </h2>
          <p className="text-sm">{t(`${i18n}.description`)}</p>
          {type === 'url' && (
            <a className="link" href={src}>
              {src}
            </a>
          )}
        </div>
      </motion.div>
    </Link>
  );
};
