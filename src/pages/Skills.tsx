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
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { useTranslation } from '../i18n';

export const Skills = () => {
  const { section } = SectionMotion;
  const { t } = useTranslation();
  const skills = [
    { type: 'frontend', label: 'React Js', icon: <IconBrandReact /> },
    { type: 'frontend', label: 'Vue Js', icon: <IconBrandVue /> },
    { type: 'frontend', label: 'Angular', icon: <IconBrandAngular /> },
    { type: 'backend', label: 'Node.Js', icon: <IconBrandTypescript /> },
    { type: 'backend', label: '.Net', icon: <IconBrandCSharp /> },
    { type: 'backend', label: 'python', icon: <IconBrandPython /> },
    { type: 'infrastructure', label: 'Kubernetes', icon: <IconCloudComputing /> },
    { type: 'infrastructure', label: 'AWS', icon: <IconBrandAws /> },
    { type: 'infrastructure', label: 'Monitoring', icon: <IconSunglasses /> },
    { type: 'infrastructure', label: 'Ansible', icon: <IconBrandAnsible /> },
    { type: 'infrastructure', label: 'Hosting', icon: <IconDevicesPc /> },
    { type: 'infrastructure', label: 'Database Admin', icon: <IconDatabase /> },
    { type: 'infrastructure', label: 'Domaine management', icon: <IconLink /> },
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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        Frontend
        {skills
          .filter((s) => s.type === 'frontend')
          .map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        Backend
        {skills
          .filter((s) => s.type === 'backend')
          .map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        Infrastructure
        {skills
          .filter((s) => s.type === 'infrastructure')
          .map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
      </div>
    </motion.section>
  );
};
