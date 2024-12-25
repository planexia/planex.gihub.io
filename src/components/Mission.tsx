import React from 'react';

export default function Mission() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-800 to-gray-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgba(0,0,0,0.8)] backdrop-blur-sm rounded-lg p-8">
          {/* Título principal con brillo suave */}
          <h2
            className="text-4xl font-bold text-white mb-12 text-center"
            style={{
              textShadow: `
                0 0 2px #fff,
                0 0 5px #fff,
                0 0 10px #ff00ff,
                0 0 15px #ff00ff
              `,
            }}
          >
            Transformación digital con soluciones integrales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12">
            <p className="text-white text-lg font-bold max-w-3xl mx-auto">
              En nuestra empresa, nos especializamos en la implementación de soluciones ERP y CRM que impulsan la transformación digital de tu negocio. 
              Proporcionamos herramientas avanzadas que optimizan la gestión empresarial, mejoran la eficiencia operativa y potencian la experiencia del cliente.
            </p>
            <p className="text-white text-lg font-bold max-w-3xl mx-auto">
              Nuestros servicios incluyen la integración de sistemas ERP para automatizar procesos clave como contabilidad, recursos humanos y gestión de inventarios. 
              Además, ofrecemos soluciones de CRM personalizadas que fortalecen las relaciones con clientes y mejoran las estrategias de ventas y marketing.
            </p>
          </div>

          {/* Sección Misión */}
          <h2
            className="text-4xl font-bold text-white mb-12 text-center"
            style={{
              textShadow: `
                0 0 2px #fff,
                0 0 5px #fff,
                0 0 10px #00ff00,
                0 0 15px #00ff00
              `,
            }}
          >
            Nuestra Misión
          </h2>
          <p className="text-white text-lg font-bold mb-16 max-w-3xl mx-auto text-center">
            Somos una empresa joven con la misión de brindar soluciones estratégicas empresariales y mejorar la toma de decisiones. Nuestra visión es lograr el cumplimiento y la maximización de los objetivos de nuestros clientes. 
            Nuestros valores parten de la honestidad y la transparencia, buscamos la excelencia en los resultados y estamos comprometidos con la calidad de todas las fases del trabajo. 
            Abiertos a la innovación y totalmente orientados a las necesidades del cliente. Consultoría estratégica: - Empresarial - Financiera - Agropecuaria - Impexpo - ERP - Software de gestión estratégica - Seguimiento e indicadores.
          </p>

          {/* Sección Valores */}
          <h3
            className="text-4xl font-bold text-white mb-12 text-center"
            style={{
              textShadow: `
                0 0 2px #fff,
                0 0 5px #fff,
                0 0 10px #0000ff,
                0 0 15px #0000ff
              `,
            }}
          >
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              "Honestidad y Transparencia",
              "Excelencia en Resultados",
              "Compromiso con la Calidad",
              "Innovación Constante",
              "Orientación al Cliente",
              "Mejora Continua",
            ].map((valor, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-white/10 rounded-lg p-4 relative min-h-[100px] flex items-center justify-center">
                  <p className="text-white text-center font-bold">{valor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
