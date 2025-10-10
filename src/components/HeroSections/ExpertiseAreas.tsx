import { motion } from 'framer-motion';
import { useTranslation } from '../../i18n';

export const ExpertiseAreas = () => {
  const { t } = useTranslation();

  const expertise = [
    {
      title: t('home.sections.expertise.areas.fullStack.title'),
      description: t('home.sections.expertise.areas.fullStack.description'),
      icon: '⚙️',
    },
    {
      title: t('home.sections.expertise.areas.infra.title'),
      description: t('home.sections.expertise.areas.infra.description'),
      icon: '🌐',
    },
    {
      title: t('home.sections.expertise.areas.uiux.title'),
      description: t('home.sections.expertise.areas.uiux.description'),
      icon: '🎨',
    },
  ];

  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        {t('home.sections.expertise.title')}
      </h2>
      <p className="text-center text-lg opacity-80 mb-12 max-w-2xl mx-auto">
        {t('home.sections.expertise.subtitle')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {expertise.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="p-6 bg-base-200 rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="text-5xl mb-4">{area.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{area.title}</h3>
            <p className="opacity-80 leading-relaxed">{area.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
