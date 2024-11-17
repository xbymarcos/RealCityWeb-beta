'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, ArrowRight, LogIn } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const serviceOptions = [
  { id: 'scripts', label: 'Scripts Premium' },
  { id: 'server', label: 'Servidor QBCore Elite' },
  { id: 'optimization', label: 'Optimización Pro' },
  { id: 'support', label: 'Soporte Premium' },
];

const budgetRanges = [
  { id: 'under500', label: 'Menos de 500€' },
  { id: '500to1000', label: '500€ - 1000€' },
  { id: '1000to2000', label: '1000€ - 2000€' },
  { id: 'over2000', label: 'Más de 2000€' },
];

export default function Contact() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discordUsername: '',
    service: '',
    budget: '',
    pricingInfo: false,
    message: '',
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        service: serviceParam,
        pricingInfo: true,
      }));

      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [searchParams]);


  const handleSubmit = (e: React.FormEvent) => {
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {/* Floating Badge */}
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-8 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            <span className="text-blue-600 font-medium">¿Hablamos?</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            <span className="block">Contacta con </span>
            <span className="relative inline-block">
              <span className="relative z-10 gradient-text">Nuestro Equipo</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/30 -skew-x-6 transform"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
          </p>
        </div>

        {/* {!session ? (
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Inicia sesión para contactar</h3>
              <p className="text-gray-600 mb-6">
                Para poder enviar el formulario, necesitas iniciar sesión con tu cuenta de Discord.
              </p>
              <button
                onClick={() => signIn('discord')}
                className="w-full group flex items-center justify-center px-6 py-4 rounded-xl text-white bg-[#5865F2] hover:bg-[#4752C4] transition-colors duration-300 font-medium"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Iniciar sesión con Discord
              </button>
            </div>
          </div>
        ) : ( */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors bg-gray-50"
                    value={formData.name}
                    disabled
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors bg-gray-50"
                    value={formData.email}
                    disabled
                  />
                </div>

                {/* Discord Username */}
                <div className="relative">
                  <label htmlFor="discordUsername" className="block text-sm font-medium text-gray-700 mb-2">
                    Usuario de Discord
                  </label>
                  <input
                    type="text"
                    id="discordUsername"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors bg-gray-50"
                    value={formData.discordUsername}
                    disabled
                  />
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">Selecciona un servicio</option>
                    {serviceOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div className="relative">
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Presupuesto Estimado
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    required
                  >
                    <option value="">Selecciona un rango</option>
                    {budgetRanges.map((range) => (
                      <option key={range.id} value={range.id}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Message Input */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={8}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Cuéntanos más sobre tu proyecto..."
                  ></textarea>
                </div>

                {/* Pricing Info Checkbox */}
                <div className="relative flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="pricingInfo"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      checked={formData.pricingInfo}
                      onChange={(e) => setFormData({ ...formData, pricingInfo: e.target.checked })}
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="pricingInfo" className="text-sm text-gray-600">
                      Me gustaría recibir información detallada sobre precios y planes
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full group flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enviar Mensaje
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

            {/* Contact Methods */}
            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:contact@realcitydev.com"
                className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  <Mail className="h-6 w-6" />
                </div>
                <span className="font-medium">contact@realcitydev.com</span>
              </a>
              <a
                href="https://discord.gg/realcitydev"
                className="group flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <div className="p-3 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <span className="font-medium">Discord</span>
              </a>
            </div>
          </div>
        {/* )} */}
      </div>
    </section>
  );
}