import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Admission from './pages/Admission';
import AboutUs from './pages/AboutUs';
import NewsPage from './pages/NewsPage';
import ContactForm from './components/ContactForm';
import VirtualAssistant from './components/VirtualAssistant';
import { translations } from './translations';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [lang, setLang] = useState('es');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  // Sync theme class with html element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const t = translations[lang] || translations['es'];

  return (
    <>
      {loading && <LoadingScreen onFinished={() => setLoading(false)} />}
      <Router>
        <div className="min-h-screen flex flex-col transition-colors duration-300 bg-bg-general dark:bg-dark-bg text-slate-text dark:text-dark-text pb-6 relative">
        {/* Global floating background orbs */}
        <div className="fixed top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-soft-pulse pointer-events-none" />
        <div className="fixed bottom-1/3 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-soft-pulse pointer-events-none" style={{ animationDelay: '4s' }} />
        <div className="fixed top-2/3 left-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

        <Navbar lang={lang} setLang={setLang} darkMode={darkMode} setDarkMode={setDarkMode} t={t} />
        
        {/* Main Content wrapper */}
        <main className="flex-1 w-full mt-4">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/careers" element={<Careers t={t} />} />
            <Route path="/admission" element={<Admission t={t} />} />
            <Route path="/about" element={<AboutUs t={t} />} />
            <Route path="/news" element={<NewsPage t={t} />} />
            <Route path="/contact" element={
              <div className="py-12 px-4 flex justify-center items-center">
                <ContactForm t={t} />
              </div>
            } />
          </Routes>
        </main>

        <Footer t={t} />
        <VirtualAssistant />
      </div>
      </Router>
    </>
  );
}

export default App;
