import React from 'react';
import { motion } from 'framer-motion';
import Particles from './ui/Particles';
import Button from './ui/Button';
import GlassCard from './ui/GlassCard';
import { TrendingUp, ShieldCheck, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCapture = () => {
    document.getElementById('capture-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <Particles />
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs font-semibold tracking-wider uppercase mb-6">
              Fintech de Elite Global
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-4">
              Master Vision <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-red to-red-400">
                Informação que cria milionários.
              </span>
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Uma das maiores consultorias de investimentos da atualidade. Tecnologia, acesso estratégico e o timing exato que transformam pessoas comuns em investidores de alta performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button variant="primary" icon onClick={scrollToCapture}>
              Quero Acesso à Consultoria Gratuita
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('insights')?.scrollIntoView({ behavior: 'smooth'})}>
              Descobrir Oportunidades
            </Button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 font-medium"
          >
             <div className="flex items-center gap-2">
               <ShieldCheck className="w-5 h-5 text-brand-red" />
               <span>Regulado & Seguro</span>
             </div>
             <div className="flex items-center gap-2">
               <Globe className="w-5 h-5 text-brand-red" />
               <span>Acesso Global</span>
             </div>
          </motion.div>
        </div>

        {/* Visual Element / Floating Cards */}
        <div className="relative hidden lg:block h-[600px]">
          {/* Central Glass Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-20"
          >
            <GlassCard glow className="backdrop-blur-2xl bg-brand-black/40">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider">Performance Total</h3>
                  <div className="text-4xl font-display font-bold mt-1 text-white">+142.8%</div>
                </div>
                <div className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <TrendingUp size={14} /> 24h
                </div>
              </div>
              
              {/* Fake Chart */}
              <div className="h-32 flex items-end gap-2 mb-6">
                {[40, 65, 50, 80, 75, 95, 120, 110, 140, 130, 160].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h / 1.6}%` }}
                    transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
                    className={`flex-1 rounded-t-sm ${i === 10 ? 'bg-brand-red shadow-glow' : 'bg-white/10'}`}
                  />
                ))}
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center font-bold text-xs">₿</div>
                    <span className="font-medium">Bitcoin</span>
                  </div>
                  <span className="text-green-400 font-mono">+5.2%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                   <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center font-bold text-xs">T</div>
                    <span className="font-medium">Tesla Inc.</span>
                  </div>
                  <span className="text-green-400 font-mono">+2.4%</span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-20 right-0 z-10"
          >
            <div className="px-6 py-3 rounded-xl bg-brand-black/60 backdrop-blur-xl border border-white/10 shadow-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Novo IPO Detectado</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-0 z-10"
          >
             <div className="px-6 py-3 rounded-xl bg-brand-black/60 backdrop-blur-xl border border-white/10 shadow-xl">
               <span className="text-xs text-gray-400 block">Clientes Satisfeitos</span>
               <span className="text-lg font-bold text-white">+ 2.400</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;