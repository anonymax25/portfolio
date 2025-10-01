import { motion } from 'framer-motion';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';

export const Home = () => {
  const { t } = useTranslation();
  const { description, resume, wrapImg, image } = HomeMotion;
  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex flex-col justify-center gap-2 text-md lg:text-2xl font-medium font-sora">
          {/* <div className="flex flex-row  text-center  gap-2 text-md lg:text-2xl font-medium font-sora">
            <span>{t('home.hi')}</span>{' '}
            <div className="ml-1 animate-waving-hand">👋</div>
          </div> */}

          <h1 className="text-white text-center font-extrabold text-4xl md:text-6xl">
            {t('common.name')}
          </h1>
          <h2 className="text-teal-500 text-center font-bold text-xl md:text-3xl">
            {t('home.engineer')}
          </h2>
        </div>
        <p className="text-center md:text-start text-xs md:text-base">
          {t('home.intro')}
        </p>
        <p className="text-center md:text-start text-xs md:text-base">
          {t('home.objectives')}
        </p>
        <Link to="./resume.pdf" target="_blank">
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
            className="rounded-3xl w-max border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
          >
            {t('home.resume')}
          </motion.div>
        </Link>
      </motion.div>
      <br />
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/me.jpeg"
          alt="profile"
          width="100%"
          height="100%"
        />
      </motion.div>
    </section>
  );
};
