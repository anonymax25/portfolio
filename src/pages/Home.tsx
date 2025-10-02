import { motion } from 'framer-motion';
import { HomeMotion } from '../common/motion/Home';
import { useTranslation } from '../i18n';
import { Portfolio } from './Portfolio';
import { Skills } from './Skills';
import { ContactCard } from '../components/ContactCard';
import { Contact } from './Contact';
import { useEffect } from 'react';

export const Home = () => {
  const { t } = useTranslation();
  useEffect(() => {
    console.log(import.meta.env);
  }, []);

  const { description, resume: resumeMotion, wrapImg, image } = HomeMotion;

  const resume = () => (
    <a href={`files/resume.pdf`} target="_blank" className="flex justify-center" rel="noreferrer">
      <motion.div
        initial={resumeMotion.initial}
        animate={resumeMotion.animated}
        transition={resumeMotion.transition}
        className="rounded-3xl w-max border px-4 py-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-black hover:border-accent-500"
      >
        {t('home.resume')}
      </motion.div>
    </a>
  );

  return (
    <>
      <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
        <motion.div
          className="flex flex-1 flex-col space-y-6 items-center md:items-start"
          initial={description.initial}
          animate={description.animated}
          transition={description.transition}
        >
          <div className="flex flex-col justify-center gap-2 text-md lg:text-2xl font-medium font-sora">
            <h1 className="text-accent text-center font-extrabold text-4xl md:text-6xl">
              {t('common.name')}
            </h1>
            <h2 className="text-accent text-center font-bold text-xl md:text-3xl">
              {t('home.engineer')}
            </h2>
          </div>
          <p className="text-center md:text-start text-xs m-2 md:text-base">{t('home.intro')}</p>
          <p className="text-center md:text-start text-xs m-2 md:text-base">
            {t('home.objectives')}
          </p>
          <div className="flex">
            <ContactCard
              name="Email"
              description="maxime.dharboulle@gmail.com"
              link="mailto:maxime.dharboulle@gmail.com"
              id={0}
            />
          </div>
        </motion.div>

        <motion.div
          initial={wrapImg.initial}
          animate={wrapImg.animated}
          transition={wrapImg.transition}
          className="flex flex-1 items-center justify-center bg-gradient-to-bl from-accent to-black m-4 overflow-hidden"
        >
          <motion.img
            initial={image.initial}
            animate={image.animated}
            transition={image.transition}
            src="images/me.jpeg"
            alt="profile"
            width="100%"
            height="100%"
          />
        </motion.div>
      </section>
      <div className="divider" />
      <section>
        {resume()}
        <div className="divider" />
        <Portfolio />
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Skills />
      </section>
    </>
  );
};
