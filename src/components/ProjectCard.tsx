import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import { useTilt } from '../hooks/useTilt';

export interface ProjectCardProps {
  name: string;
  src: string;
  i18n: string;
  type: 'url' | 'img';
}

export const ProjectCard = ({ name, src, type, i18n }: ProjectCardProps) => {
  const { t } = useTranslation();
  const { ref, style } = useTilt({ maxTilt: 10, scale: 1.02 });

  return (
    <Link to={src} target="_blank">
      <motion.div
        ref={ref}
        style={style}
        initial={{
          scale: 1,
        }}
        whileHover={{
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
        }}
        transition={{
          duration: 0.2,
        }}
        className="card bg-base-200 shadow-xl max-w-full md:max-w-lg overflow-hidden"
      >
        <figure>
          {type === 'url' ? (
            <iframe title={name} className="w-full h-60" src={src} width="800" height="800" />
          ) : (
            <img src={`${src}`} alt={name} className="w-full" />
          )}
        </figure>

        <div className="card-body">
          <h2 className="card-title">
            {type === 'url' && (
              <img src={`${src}/favicon.ico`} alt={name} height={'16px'} width={'16px'} />
            )}
            <span>{name}</span>
          </h2>
          <p>{t(`${i18n}.description`)}</p>
          {type === 'url' && <span className="link link-primary">{src}</span>}
        </div>
      </motion.div>
    </Link>
  );
};
