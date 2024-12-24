import React from 'react';

import { 
  Leaf,
  ChartSpline,
  BarChart, 
  Calculator, 
  Briefcase, 
  Building2, 
  TrendingUp,
  Database,
  Users,
  Settings,
  Shield,
  Phone,
  LineChart,
  Landmark
} from 'lucide-react';

const serviceCategories = [
  {
    services: [
      {
        title: 'Implementación Dolibarr',
        description: 'Instalación, configuración y personalización completa de Dolibarr para su empresa',
        icon: Database
      },
      {
        title: 'Soporte Técnico',
        description: 'Asistencia continua y mantenimiento para su sistema Dolibarr',
        icon: Phone
      },
      {
        title: 'Personalización',
        description: 'Desarrollo de módulos personalizados y adaptación a sus necesidades específicas',
        icon: Settings
      }
    ]
  },
  {
    title: 'Gestión Empresarial',
    services: [
      {
        title: 'Planificación Estratégica',
        description: 'Estado de situación, plan de acción y planeamiento de objetivos empresariales',
        icon: Briefcase
      },
      {
        title: 'Análisis Organizacional',
        description: 'Evaluación de organigrama e implementación de indicadores de gestión',
        icon: ChartSpline
      },
      {
        title: 'Seguimiento Operativo',
        description: 'Control de producción, ventas y seguimiento de objetivos',
        icon: BarChart
      }
    ]
  },
  {
    title: 'Consultoría Financiera',
    services: [
      {
        title: 'Análisis Financiero',
        description: 'Análisis de balance y evaluación de estados financieros',
        icon: Calculator
      },
      {
        title: 'Gestión Tributaria',
        description: 'Asesoramiento en impuestos y optimización fiscal',
        icon: Landmark
      },
      {
        title: 'Inversiones',
        description: 'Asesoramiento en inversiones y seguimiento de valores/futuros',
        icon: TrendingUp
      }
    ]
  },
  {
    title: 'Sector Agropecuario',
    services: [
      {
        title: 'Gestión Agropecuaria',
        description: 'Soluciones especializadas para el sector agrícola y ganadero',
        icon: Leaf
      }
    ]
  }
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gradient-to-b from-black via-gray-800 to-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frase antes de la foto */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{
              textShadow: `
                0 0 2px #fff,
                0 0 5px #fff,
                0 0 10px #0000ff,
                0 0 15px #0000ff
              `
            }}
          >
            Simplifique su Gestión con Dolibarr ERP/CRM
          </h2>
        </div>

        {/* Nueva imagen de Dolibarr */}
        <div className="relative mb-24 flex justify-center">
          <img
            src="https://viaziza.com/wp-content/uploads/2024/02/erp-dolibar.jpg"
            alt="Modern Dolibarr ERP/CRM"
            className="sm:w-2/5 h-48 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Sección de servicios */}
        <div className="mt-16 mb-4 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold text-gray-200"
            style={{
              textShadow: `
                0 0 2px #fff,
                0 0 5px #fff,
                0 0 10px #0000ff,
                0 0 15px #0000ff
              `
            }}
          >
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Soluciones integrales para la gestión y transformación de su empresa
          </p>
        </div>

        <div className="mt-20 space-y-16 sm:space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={category.title === 'Sector Agropecuario' ? 'flex flex-col items-center' : ''}>
              {/* Título de categoría con brillo suave */}
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-200 mb-8 text-center"
                style={{
                  textShadow: `
                    0 0 2px #fff,
                    0 0 5px #fff,
                    0 0 10px #0000ff,
                    0 0 15px #0000ff
                  `
                }}
              >
                {category.title}
              </h3>
              <div 
                className={`grid ${
                  category.title === 'Sector Agropecuario' ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                } gap-8`}>
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="relative group bg-white/10 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    {/* Efecto gradiente al pasar el mouse */}
                    <div className="absolute inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white/10 p-6 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                      <h3 className="mt-4 text-lg sm:text-xl font-bold text-gray-200">{service.title}</h3>
                      <p className="mt-2 text-gray-300">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
