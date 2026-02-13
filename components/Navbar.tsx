import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCapture = () => {
    document.getElementById('capture-form')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'py-4 bg-brand-black/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded-lg flex items-center justify-center shadow-glow-sm">
              <span className="font-bold text-white text-lg">M</span>
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-white">
              Master Vision<span className="text-brand-red">.</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#authority" className="text-sm text-gray-400 hover:text-white transition-colors">Expertise</a>
            <a href="#insights" className="text-sm text-gray-400 hover:text-white transition-colors">Mercado</a>
            <a href="#opportunity" className="text-sm text-gray-400 hover:text-white transition-colors">Oportunidade</a>
            <Button variant="secondary" onClick={scrollToCapture} className="!py-2 !px-6 text-sm">
              Consultoria
            </Button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 z-30 bg-brand-black pt-24 px-6 md:hidden"
          >
             <div className="flex flex-col gap-6 text-center">
              <a onClick={() => setIsOpen(false)} href="#authority" className="text-xl text-gray-300">Expertise</a>
              <a onClick={() => setIsOpen(false)} href="#insights" className="text-xl text-gray-300">Mercado</a>
              <a onClick={() => setIsOpen(false)} href="#opportunity" className="text-xl text-gray-300">Oportunidade</a>
              <Button onClick={scrollToCapture} variant="primary" fullWidth>
                Quero Consultoria
              </Button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;