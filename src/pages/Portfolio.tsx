import { motion } from 'framer-motion';
import { IconBrandCodepen } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard, ProjectCardProps } from '../components/ProjectCard';
import { useTranslation } from '../i18n';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const { t } = useTranslation();

  const portfolios: ProjectCardProps[] = [
    {
      name: 'Mizipet / Mizipet Pro',
      src: 'https://pro.mizipet.com',
      type: 'url',
    },
    {
      name: 'Grafana Monitoring Stack',
      src: 'images/grafana.png',
      type: 'img',
    },
    {
      name: 'Kubernetes cluster development & admin',
      src: 'images/kubernetes.png',
      type: 'img',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBrandCodepen />}
        label={t('portfolio.title')}
        description={t('portfolio.description')}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((portfolio) => (
          <ProjectCard key={portfolio.name} {...portfolio} />
        ))}
      </div>
    </motion.section>
  );
};
