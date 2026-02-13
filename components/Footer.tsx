import React from 'react';
import CaptureForm from './CaptureForm';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative pt-24 pb-12 bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-display font-bold mb-6">
              O próximo passo para a sua <br />
              <span className="text-brand-red">liberdade financeira.</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              A Master Vision não vende sonhos. Entregamos estratégia, dados e resultados. Junte-se à elite financeira do Brasil.
            </p>
            <div className="flex items-center gap-4 text-gray-500 text-sm">
               <Shield className="text-gray-600" />
               <p>© 2024 Master Vision Capital. Todos os direitos reservados.</p>
            </div>
          </div>
          
          <div>
            <CaptureForm />
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-brand-red transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand-red transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-red transition-colors">Compliance</a>
          </div>
          <div className="text-xs text-gray-700">
            CNPJ: 00.000.000/0001-00 | Av. Faria Lima, 0000 - São Paulo, SP
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;