import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Planexia</span>
            </div>
            <p className="text-sm">
              Soluciones integrales de ERP y CRM para impulsar la transformación digital de su empresa.
              Experiencia, innovación y compromiso con su éxito empresarial.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-500 text-sm">Inicio</a></li>
              <li><a href="#services" className="hover:text-blue-500 text-sm">Servicios</a></li>
              <li><a href="#about" className="hover:text-blue-500 text-sm">Nosotros</a></li>
              <li><a href="#contact" className="hover:text-blue-500 text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-blue-500">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {currentYear} Planexia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}