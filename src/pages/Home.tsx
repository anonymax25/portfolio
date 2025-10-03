import { motion } from 'framer-motion';
import { HomeMotion } from '../common/motion/Home';
import { useTranslation } from '../i18n';
import { Portfolio } from './Portfolio';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Home = () => {
  const { t } = useTranslation();
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const { description, wrapImg, image } = HomeMotion;

  const technologies = [
    { name: t('home.technologies.react'), icon: '⚛️' },
    { name: t('home.technologies.typescript'), icon: '📘' },
    { name: t('home.technologies.angular'), icon: '🅰️' },
    { name: t('home.technologies.dotnet'), icon: '🟣' },
    { name: t('home.technologies.devops'), icon: '⚙️' },
  ];

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

  const expertise = [
    {
      title: t('home.sections.expertise.areas.webDev.title'),
      description: t('home.sections.expertise.areas.webDev.description'),
      icon: '🌐',
    },
    {
      title: t('home.sections.expertise.areas.uiux.title'),
      description: t('home.sections.expertise.areas.uiux.description'),
      icon: '🎨',
    },
    {
      title: t('home.sections.expertise.areas.fullStack.title'),
      description: t('home.sections.expertise.areas.fullStack.description'),
      icon: '⚙️',
    },
  ];

  return (
    <>
      {showPdfViewer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="bg-base-100 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-base-300">
              <h3 className="text-xl font-bold">{t('home.cta.viewResume')}</h3>
              <button
                onClick={() => setShowPdfViewer(false)}
                className="btn btn-sm btn-circle btn-ghost"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-auto flex flex-col items-center p-4">
              <Document file="files/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from(new Array(numPages), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    className="mb-4"
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                  />
                ))}
              </Document>
            </div>
            {numPages > 0 && (
              <div className="p-4 border-t border-base-300 text-center">
                <p className="text-sm opacity-70">
                  {numPages} {numPages === 1 ? 'page' : 'pages'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

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
              onClick={() => setShowPdfViewer(true)}
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

      <div className="divider my-12" />

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
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-semibold text-lg">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="divider my-12" />

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

      <div className="divider my-12" />

      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('home.sections.featuredProjects.title')}
        </h2>
        <Portfolio />
      </section>

      <div className="divider my-12" />

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

      <div className="divider my-12" />

      <section id="contact" className="py-12">
        <Contact />
      </section>

      <div className="divider my-12" />

      <section className="py-12">
        <Skills />
      </section>
    </>
  );
};
