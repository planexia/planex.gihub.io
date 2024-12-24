import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
          ? 'bg-gradient-to-b from-black via-gray-800 to-gray-600 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="flex items-center justify-center border-[2px] border-white bg-[rgba(250, 250, 250, 0.8)] rounded-md ">
              <img
                src="/logo-planexia.png"
                className="w-28 rounded-md"
              />
              <span
                className={`text-xl font-bold tracking-tight ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {/* Logo Text if any */}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-600 hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600'
                    : 'text-white/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                isScrolled
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700'
                  : 'bg-white text-blue-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600'
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
              className="block px-3 py-2 text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 rounded-md"
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
