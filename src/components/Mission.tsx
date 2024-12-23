import React from 'react';

export default function Mission() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgba(30,58,138,0.8)] backdrop-blur-sm rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Nuestra Misión</h2>
          <p className="text-gray-200 text-lg mb-8 max-w-3xl mx-auto">
            Brindar soluciones estratégicas empresariales y mejorar la toma de decisiones a través de consultoría experta y tecnología innovadora.
          </p>

          <h3 className="text-2xl font-bold text-white mb-6">Nuestros Valores</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* Valores con tamaño uniforme y efecto hover */}
            {[
              "Honestidad y Transparencia",
              "Excelencia en Resultados",
              "Compromiso con la Calidad",
              "Innovación Constante",
              "Orientación al Cliente",
              "Mejora Continua",
            ].map((valor, index) => (
              <div key={index} className="group relative">
                {/* Gradiente dinámico */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[rgba(30,58,138,0.8)] to-[rgba(30,58,138,0.5)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Contenedor principal con tamaño uniforme */}
                <div className="bg-white/10 rounded-lg p-4 relative min-h-[100px] flex items-center justify-center">
                  <p className="text-white text-center">{valor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
