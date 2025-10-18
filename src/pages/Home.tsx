import { Portfolio } from './Portfolio';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { useState, useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import { useTranslation } from '../i18n';
import {
  HeroSection,
  CoreTechnologies,
  WhyWorkWithMe,
  ExpertiseAreas,
} from '../components/HeroSections';
import { PdfViewer } from '../components/PdfViewer';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Home = () => {
  const { t } = useTranslation();
  const [showPdfViewer, setShowPdfViewer] = useState(false);

  useEffect(() => {
    const handleOpenPdfViewer = () => setShowPdfViewer(true);
    window.addEventListener('openPdfViewer', handleOpenPdfViewer);
    return () => window.removeEventListener('openPdfViewer', handleOpenPdfViewer);
  }, []);

  return (
    <>
      <PdfViewer
        isOpen={showPdfViewer}
        onClose={() => setShowPdfViewer(false)}
        fileUrl="files/resume.pdf"
        title={t('home.cta.viewResume')}
      />
      <HeroSection />
      <div className="divider my-12" />
      <CoreTechnologies />
      <div className="divider my-12" />
      <WhyWorkWithMe />
      <div className="divider my-12" />
      <section className="py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('home.sections.featuredProjects.title')}
        </h2>
        <Portfolio />
      </section>
      <div className="divider my-12" />
      <ExpertiseAreas />
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
