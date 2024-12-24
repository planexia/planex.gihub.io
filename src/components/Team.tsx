import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Lic. Luis Paulo Ruiz Pereira',
    role: 'Socio Gerente',
    image: 'https://media.licdn.com/dms/image/v2/D4E03AQFGNqWfpB4ILg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1692010967090?e=2147483647&v=beta&t=NgRq1reevbdmbFE5dnS0KloEb3Q2WQzxbI-akGS5h6M',
    bio: 'Experto en soluciones CRM y estrategias de transformación digital.',
    Linkedin:' https://www.linkedin.com/in/luis-paulo-ruiz-pereira-60b766230/'
  },
  {
    name: 'Roberto Andres Ruiz Pereira',
    role: 'Socio Gerente',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQHNOXD-nEKmgg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1639681377888?e=2147483647&v=beta&t=hc2Ku6ZOHv9Bw_3gBfgJ8-X-XJtDiPMZ695az9Dv_Fg',
    bio: 'Especialista en implementación de sistemas ERP y optimización de procesos empresariales.',
  Linkedin: 'https://www.linkedin.com/in/roberto-andres-ruiz-pereira-9933241a6/'
  }
];

export default function Team() {
  return (
    <div id="about" className="py-24 bg-gradient-to-b from-black via-gray-800 to-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
  <h2
    className="text-3xl font-bold sm:text-4xl py-4 px-8 border-4 border-white text-white inline-block"
    style={{
      backgroundColor: 'black', // Fondo negro
      borderRadius: '8px', // Bordes redondeados
    }}
  >
    Nuestro Equipo
  </h2>
  <p className="mt-4 text-xl text-gray-300">
    Líderes expertos en transformación digital y consultoría empresarial
  </p>
</div>



        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 border-4 border-indigo-500 rounded-lg bg-white/10"
            >
              <img
                className="w-48 h-48 rounded-full object-cover"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-6 text-xl font-medium text-gray-200">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
              <p className="mt-2 text-gray-300 text-center max-w-xs">{member.bio}</p>
              <div className="mt-4 flex space-x-4">
                <a href={member.Linkedin} className="text-gray-400 hover:text-blue-600">
                  <Linkedin className="h-5 w-5" />
                </a>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
