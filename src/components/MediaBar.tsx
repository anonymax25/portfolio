import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MediaBarMotion } from '../common/motion/MediaBar';
import {
  IconBrandCampaignmonitor,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

export const MediaBar = () => {
  const media = [
    { icon: <IconBrandGithub />, link: 'https://github.com/anonymax25' },
    {
      icon: <IconBrandLinkedin />,
      link: 'https://www.linkedin.com/in/maxime-dharboulle/',
    },
    {
      icon: <IconBrandInstagram />,
      link: 'https://www.instagram.com/anonymax.25/',
    },
    { icon: <IconBrandWhatsapp />, link: 'https://wa.me/+61420257570' },
    {
      icon: <IconBrandCampaignmonitor />,
      link: 'mailto:maxime.dharboulle@gmail.com',
    },
  ];
  const { container } = MediaBarMotion;
  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="hidden md:flex absolute z-10 flex-col gap-2 p-2 bg-accent items-center rounded-box bottom-0 md:bottom-auto md:top-80"
    >
      {media.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className="btn btn-ghost btn-sm btn-circle"
          aria-label={item.link}
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};
