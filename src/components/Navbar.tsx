import React, { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#services', label: 'Servicios' },
    { href: '#about', label: 'Nosotros' },
    { href: '#contact', label: 'Contacto' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
{/* Logo */}
<div className="flex items-center ">
  <div className="flex items-center space-x-2">
    <img
      src="/dist/assets/logo-planexia.png"
      alt="Planexia Logo"
      className="h-20 w-26"
    />
    <span
      className={`text-xl font-bold tracking-tight ${
        isScrolled ? 'text-gray-900' : 'text-white'
      }`}
    >
      
    </span>
  </div>
</div>




          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-blue-600'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              }`}
            >
              Contactar
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled
                  ? 'text-gray-600 hover:text-blue-600'
                  : 'text-white hover:text-white/80'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}