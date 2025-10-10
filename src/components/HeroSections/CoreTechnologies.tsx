import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n';

export const CoreTechnologies = () => {
  const { t } = useTranslation();

  const technologies = [
    { name: t('home.technologies.typescript'), icon: '📘' },
    { name: t('home.technologies.dotnet'), icon: '🟣' },
    { name: t('home.technologies.devops'), icon: '⚙️' },
    { name: t('home.technologies.kubernetes'), icon: '☸️' },
    { name: t('home.technologies.react'), icon: '⚛️' },
    { name: t('home.technologies.angular'), icon: '🅰️' },
    { name: t('home.technologies.etc') },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {t('home.sections.coreTechnologies.title')}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="px-6 py-4 bg-base-200 rounded-lg flex items-center gap-3 hover:bg-base-300 transition-colors"
          >
            {tech.icon && <span className="text-2xl">{tech.icon}</span>}
            <span className="font-semibold text-lg">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
