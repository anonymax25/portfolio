import { motion } from 'framer-motion';
import {
  IconCodeCircle,
  IconBrandReact,
  IconBrandVue,
  IconBrandAngular,
  IconBrandAws,
  IconBrandAnsible,
  IconCloudComputing,
  IconDatabase,
  IconBrandTypescript,
  IconBrandCSharp,
  IconBrandPython,
  IconDevicesPc,
  IconLink,
  IconLock,
  IconSunglasses,
  IconBrandCss3,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { useTranslation } from '../i18n';

export const Skills = () => {
  const { section } = SectionMotion;
  const { t } = useTranslation();
  const skills = [
    { type: 'frontend', label: 'React Ts', icon: <IconBrandReact /> },
    { type: 'frontend', label: 'Vue Ts', icon: <IconBrandVue /> },
    { type: 'frontend', label: 'Angular', icon: <IconBrandAngular /> },
    { type: 'frontend', label: 'Design', icon: <IconBrandCss3 /> },
    { type: 'backend', label: 'Node.Js', icon: <IconBrandTypescript /> },
    { type: 'backend', label: '.Net', icon: <IconBrandCSharp /> },
    { type: 'backend', label: 'python', icon: <IconBrandPython /> },
    { type: 'infrastructure', label: 'Kubernetes', icon: <IconCloudComputing /> },
    { type: 'infrastructure', label: 'AWS', icon: <IconBrandAws /> },
    { type: 'infrastructure', label: 'Monitoring', icon: <IconSunglasses /> },
    { type: 'infrastructure', label: 'Ansible', icon: <IconBrandAnsible /> },
    { type: 'infrastructure', label: 'Hosting', icon: <IconDevicesPc /> },
    { type: 'infrastructure', label: 'Database Admin', icon: <IconDatabase /> },
    { type: 'infrastructure', label: 'Domaines', icon: <IconLink /> },
    { type: 'infrastructure', label: 'Certificates', icon: <IconLock /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label={t('skills.title')}
        description={t('skills.description')}
      />
      <h1 className="text-2xl font-bold">{t('skills.frontend')}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {skills
          .filter((s) => s.type === 'frontend')
          .map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
      </div>
      <h1 className="text-2xl font-bold">{t('skills.backend')}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {skills
          .filter((s) => s.type === 'backend')
          .map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
      </div>
      <h1 className="text-2xl font-bold">{t('skills.infra')}</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {skills
          .filter((s) => s.type === 'infrastructure')
          .map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
      </div>
    </motion.section>
  );
};
