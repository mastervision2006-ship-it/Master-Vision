import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Zap, DollarSign, BarChart3 } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Ano 1', bitcoin: 1000, poupanca: 1000 },
  { name: 'Ano 3', bitcoin: 15000, poupanca: 1150 },
  { name: 'Ano 5', bitcoin: 85000, poupanca: 1300 },
  { name: 'Ano 7', bitcoin: 250000, poupanca: 1450 },
  { name: 'Ano 10', bitcoin: 510000, poupanca: 1600 },
];

const ipos = [
  { name: 'Apple', return: '+125,000%', year: '1980' },
  { name: 'Tesla', return: '+22,000%', year: '2010' },
  { name: 'Nubank', return: 'Disruptivo', year: '2021' },
];

const MarketInsights: React.FC = () => {
  return (
    <section id="insights" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-2 mb-4">
               <Zap className="text-brand-red w-5 h-5" />
               <span className="text-brand-red font-bold tracking-wider text-sm uppercase">Poder da Informação</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              No mercado financeiro, informação é <span className="text-white border-b-2 border-brand-red">vantagem competitiva.</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Se você tivesse investido <strong className="text-white">R$ 1.000</strong> em Bitcoin há 10 anos, hoje teria mais de <strong className="text-brand-red text-2xl">R$ 510.000</strong>.
            </p>

            <div className="grid gap-4">
              {ipos.map((ipo, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.06] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gray flex items-center justify-center font-bold text-gray-400">
                      {ipo.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">IPO {ipo.name}</h4>
                      <span className="text-xs text-gray-500">{ipo.year}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-brand-red font-bold">{ipo.return}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chart Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-red/10 blur-[100px] rounded-full" />
            
            <div className="relative bg-brand-black border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                   <h3 className="text-xl font-bold flex items-center gap-2">
                     <BarChart3 className="text-brand-red" />
                     Comparativo Histórico
                   </h3>
                   <p className="text-sm text-gray-500">Crescimento Exponencial vs Tradicional</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-500">+51,000%</div>
                  <div className="text-xs text-gray-400">Retorno Total</div>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorBtc" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C1121F" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#C1121F" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#333" />
                    <YAxis stroke="#333" tickFormatter={(value) => `R$${value/1000}k`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0B0B0F', borderColor: '#333', borderRadius: '8px' }}
                      itemStyle={{ color: '#fff' }}
                      formatter={(value: number) => [`R$ ${value.toLocaleString()}`, 'Valor']}
                    />
                    <Area type="monotone" dataKey="bitcoin" stroke="#C1121F" strokeWidth={3} fillOpacity={1} fill="url(#colorBtc)" />
                    <Area type="monotone" dataKey="poupanca" stroke="#444" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-brand-red rounded-full"></div>
                  <span className="text-gray-300">Oportunidades Master Vision</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  <span className="text-gray-500">Investimento Tradicional</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketInsights;