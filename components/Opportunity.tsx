import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Opportunity: React.FC = () => {
  return (
    <section id="opportunity" className="py-24 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] border border-brand-red rounded-full animate-[spin_10s_linear_infinite]" style={{ borderStyle: 'dashed' }} />
        <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ borderStyle: 'dotted' }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-4 py-1 rounded-full text-brand-red font-bold text-sm mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brand-red"></span>
            RADAR DE OPORTUNIDADE ATIVO
          </div>

          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            2026 será o ano dos <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">novos milionários.</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Já temos informações estratégicas sobre novos IPOs e movimentos de mercado. As portas estão abertas — e um dos próximos milionários pode ser você.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
             {[
               { label: "Setor de IA", status: "Alta Demanda" },
               { label: "Commodities", status: "Ciclo de Ouro" },
               { label: "Criptoativos", status: "Halving" },
               { label: "IPOs Tech", status: "Confirmados" }
             ].map((item, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                 <div className="text-gray-400 text-xs mb-1">{item.label}</div>
                 <div className="text-white font-bold flex items-center justify-center gap-1">
                   {item.status} <ArrowUpRight size={14} className="text-green-500" />
                 </div>
               </div>
             ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Opportunity;