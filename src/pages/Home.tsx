import { Portfolio } from './Portfolio';
import { Skills } from './Skills';
import { Contact } from './Contact';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { useTranslation } from '../i18n';
import {
  HeroSection,
  CoreTechnologies,
  WhyWorkWithMe,
  ExpertiseAreas,
} from '../components/HeroSections';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const Home = () => {
  const { t } = useTranslation();
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);

  useEffect(() => {
    const handleOpenPdfViewer = () => setShowPdfViewer(true);
    window.addEventListener('openPdfViewer', handleOpenPdfViewer);
    return () => window.removeEventListener('openPdfViewer', handleOpenPdfViewer);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

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
