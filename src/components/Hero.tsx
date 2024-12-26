import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div id="home" className="relative bg-white pt-16" ref={ref}>
      <div className="h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
            alt="Office"
          />
          {/* Superposición con gradiente violeta oscuro */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-700 to-black mix-blend-multiply" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="text-2xl sm:text-3xl text-white mb-2 block"
            style={{
              color: 'white',
              textShadow: `
                0 0 5px #fff, 
                0 0 10px #fff, 
                0 0 20px #fff, 
                0 0 30px #fff, 
                0 0 40px #fff, 
                0 0 50px #fff, 
                0 0 75px #fff`,
              animation: 'glow 2s infinite'
            }}
          >
            PLANEXIA
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Soluciones Empresariales<br />
            ERP y CRM
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Empresa joven especializada en soluciones estratégicas empresariales y mejora en la toma de decisiones
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-all"
            >
              Contáctenos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 transition-all"
            >
              Nuestros Servicios
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hero;
