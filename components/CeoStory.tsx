import React from 'react';
import GlassCard from './ui/GlassCard';
import { Quote } from 'lucide-react';

const CeoStory: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-brand-black to-[#0f0f12]">
      <div className="container mx-auto px-6">
        <div className="relative">
          
          <GlassCard className="max-w-5xl mx-auto overflow-hidden !p-0 border-brand-red/20">
            <div className="grid md:grid-cols-2">
              
              {/* Image Placeholder Area with Effect */}
              <div className="relative h-80 md:h-auto bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center grayscale opacity-60 hover:scale-105 transition-transform duration-1000"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/90 md:to-brand-black"></div>
                <div className="absolute bottom-6 left-6 z-10">
                  <h4 className="text-2xl font-bold text-white">Roberto Marçal</h4>
                  <p className="text-brand-red font-medium">CEO & Fundador Master Vision</p>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                <Quote className="absolute top-8 right-8 text-brand-red/20 w-16 h-16" />
                
                <h3 className="text-3xl font-display font-bold mb-6">
                  Começou com R$ 1.000. <br />
                  Em 6 meses, <span className="text-brand-red">R$ 1.000.000.</span>
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  "Não foi sorte. Foi método. O mercado financeiro é um jogo de soma zero: para alguém ganhar muito, alguém precisa perder. A diferença está em quem tem a informação privilegiada e sabe agir no timing exato."
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                    <span>Informação Estratégica</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                    <span>Timing Correto</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                    <span>Decisão Inteligente</span>
                  </div>
                </div>

              </div>

            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
};

export default CeoStory;