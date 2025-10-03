import { motion } from 'framer-motion';
import { HomeMotion } from '../../common/motion/Home';
import { useTranslation } from '../../i18n';

export const HeroSection = () => {
  const { t } = useTranslation();
  const { description, wrapImg, image } = HomeMotion;

  return (
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh] gap-8">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center lg:items-start max-w-2xl"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center lg:text-left">
            {t('home.hi')} <span className="text-accent">{t('common.name')}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-left opacity-80">
            {t('home.engineer')}
          </h2>
        </div>

        <p className="text-center lg:text-left text-base md:text-lg opacity-90">
          {t('home.intro')}
        </p>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className="px-6 py-3 bg-accent text-accent-content rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t('home.cta.getInTouch')}
          </a>
          <button
            onClick={() => {
              const event = new CustomEvent('openPdfViewer');
              window.dispatchEvent(event);
            }}
            className="px-6 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-content transition-all"
          >
            {t('home.cta.viewResume')}
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center max-w-md lg:max-w-lg"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="images/me.jpeg"
          alt="profile"
          className="rounded-2xl w-full h-auto shadow-2xl"
        />
      </motion.div>
    </section>
  );
};
