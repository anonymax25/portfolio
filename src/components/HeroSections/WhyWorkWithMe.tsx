import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n';

export const WhyWorkWithMe = () => {
  const { t } = useTranslation();

  const metrics = [
    {
      label: t('home.sections.whyWorkWithMe.metrics.experience.label'),
      description: t('home.sections.whyWorkWithMe.metrics.experience.description'),
    },
    {
      label: t('home.sections.whyWorkWithMe.metrics.projects.label'),
      description: t('home.sections.whyWorkWithMe.metrics.projects.description'),
    },
    {
      label: t('home.sections.whyWorkWithMe.metrics.satisfaction.label'),
      description: t('home.sections.whyWorkWithMe.metrics.satisfaction.description'),
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {t('home.sections.whyWorkWithMe.title')}
      </h2>
      <p className="text-center text-lg opacity-80 mb-12 max-w-2xl mx-auto">
        {t('home.sections.whyWorkWithMe.subtitle')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="text-center p-6 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
          >
            <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{metric.label}</div>
            <div className="text-lg opacity-80">{metric.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
