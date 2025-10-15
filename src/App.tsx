import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { MediaBar } from './components/MediaBar';
import { Footer } from './components/Footer';
import { init } from './i18n/setup';
init();
import './i18n';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })));
const Skills = lazy(() => import('./pages/Skills').then((m) => ({ default: m.Skills })));
const Portfolio = lazy(() => import('./pages/Portfolio').then((m) => ({ default: m.Portfolio })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
);

function App() {
  return (
    <main className="w-screen min-h-screen">
      <Header />
      <MediaBar />
      <section className="bg-base-100 px-3 md:px-10 lg:px-20 pb-12 min-h-screen">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </section>
      <Footer />
    </main>
  );
}

export default App;
