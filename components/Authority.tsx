import React from 'react';
import GlassCard from './ui/GlassCard';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: "+7 Anos", label: "De Mercado e Resultados" },
  { icon: Users, value: "Centenas", label: "De Clientes Impactados" },
  { icon: Briefcase, value: "R$ 50k", label: "Faturamento Médio Mensal de Clientes" },
  { icon: TrendingUp, value: "+300%", label: "Crescimento Médio da Carteira" },
];

const Authority: React.FC = () => {
  return (
    <section id="authority" className="py-24 relative bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            7 anos criando <span className="text-brand-red">resultados reais.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nossa metodologia proprietária combina análise de dados institucionais com estratégias de private equity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="flex flex-col items-center text-center group" glow>
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold font-display text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authority;