import React, { useState } from 'react';
import Button from './ui/Button';
import { Lock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CaptureForm: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    // Simulate API
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center p-12 bg-white/5 border border-brand-red/30 rounded-2xl backdrop-blur-xl"
      >
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Inscrição Confirmada</h3>
        <p className="text-gray-400">Nossos consultores entrarão em contato em breve.</p>
      </motion.div>
    );
  }

  return (
    <div id="capture-form" className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-transparent rounded-2xl opacity-20 blur-md"></div>
      <div className="relative bg-brand-black/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl">
        <h3 className="text-2xl font-display font-bold text-center mb-2">Solicitar Consultoria</h3>
        <p className="text-center text-gray-500 text-sm mb-8">Vagas limitadas para o ciclo atual.</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Nome Completo</label>
            <input 
              type="text" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red/50 focus:bg-white/10 transition-all"
              placeholder="Digite seu nome"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">WhatsApp</label>
            <input 
              type="tel" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red/50 focus:bg-white/10 transition-all"
              placeholder="(XX) 99999-9999"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 ml-1">Email Corporativo ou Principal</label>
            <input 
              type="email" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-red/50 focus:bg-white/10 transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <Button 
            variant="primary" 
            fullWidth 
            type="submit" 
            className="!mt-8 !py-4 text-lg shadow-glow"
            disabled={formState === 'loading'}
          >
            {formState === 'loading' ? 'Processando...' : 'Quero Minha Consultoria Gratuita'}
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-600 pt-2">
            <Lock size={12} />
            <span>Seus dados estão protegidos com criptografia de ponta.</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaptureForm;