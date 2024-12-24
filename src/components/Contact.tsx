import React from 'react';

import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gradient-to-b from-black via-gray-800 to-gray-600 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
  <h2
    className="text-3xl font-bold sm:text-4xl py-4 px-8 border-4 border-white text-white inline-block"
    style={{
      backgroundColor: 'black',
      borderRadius: '8px',
    }}
  >
    Contáctenos
  </h2>
  <p className="mt-4 text-xl text-white">
    Estamos aquí para ayudarle en su transformación digital
  </p>
</div>


        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white/10 rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="bg-white/10 rounded-lg shadow-md p-8">
            <div className="space-y-8">
              <div className="flex items-start group relative">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4 relative">
                  <h3 className="text-lg font-medium text-white mb-1">Ubicación</h3>
                  <p className="mt-1 text-white">
                    Av. Rosales 1234 <br />
                    Lanus| Remedios de Escalada<br />
                    Código Postal 1824
                  </p>
                </div>
              </div>

              <div className="flex items-start group relative">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4 relative">
                  <h3 className="text-lg font-medium text-white mb-1">Teléfono</h3>
                  <p className="mt-1 text-white">+54 9 1136189648</p>
                </div>
              </div>

              <div className="flex items-start group relative">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div className="ml-4 relative">
                  <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                  <p className="mt-1 text-white">planexia.sa@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
