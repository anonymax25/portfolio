import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Skills } from './pages/Skills';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { MediaBar } from './components/MediaBar';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';

import { init } from './i18n/setup';
init();
import './i18n';

function App() {
  return (
    <main className="w-screen min-h-screen">
      <Header />
      <MediaBar />
      <section className="bg-base-100 px-3 md:px-10 lg:px-20 pb-12 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />
    </main>
  );
}

export default App;
