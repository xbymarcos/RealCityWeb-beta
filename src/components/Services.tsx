'use client';

import React from 'react';
import { Code, Server, Wrench, Shield, Check, Star, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const services = [
  {
    id: 'scripts',
    icon: Code,
    title: 'Scripts Premium',
    description: 'Scripts exclusivos que transformarán la experiencia de tu servidor FiveM.',
    price: 'Desde 99€',
    features: [
      'Interfaz UI/UX Moderna',
      'Optimización Avanzada',
      'Documentación Detallada',
      'Código Fuente Incluido',
      'Actualizaciones Gratuitas',
    ],
    popular: false,
    highlight: 'Personalización Total',
    gradient: 'from-blue-600 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50/50',
  },
  {
    id: 'server',
    icon: Server,
    title: 'Servidor QBCore Elite',
    description: 'La solución definitiva para tu servidor: preconfigurado, optimizado y listo para usar.',
    price: 'Desde 299€',
    features: [
      'Instalación Completa',
      'Framework Personalizado',
      'Base de Datos Optimizada',
      'Sistema Anti-Trampas',
      'Pack Scripts Premium',
      'Soporte 30 Días',
    ],
    popular: true,
    highlight: 'Más Vendido',
    gradient: 'from-indigo-600 to-purple-600',
    bgGradient: 'from-indigo-50 to-purple-50/50',
  },
  {
    id: 'optimization',
    icon: Wrench,
    title: 'Optimización Pro',
    description: 'Maximiza el rendimiento de tu servidor con nuestra optimización profesional.',
    price: 'Desde 149€',
    features: [
      'Análisis Completo',
      'Optimización de Scripts',
      'Gestión de Memoria',
      'Mejora de Base de Datos',
      'Informe Detallado',
    ],
    popular: false,
    highlight: 'Rendimiento Máximo',
    gradient: 'from-purple-600 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50/50',
  },
  // {
  //   id: 'support',
  //   icon: Shield,
  //   title: 'Soporte Premium',
  //   description: 'Asistencia técnica profesional 24/7 para mantener tu servidor en perfecto estado.',
  //   price: 'Desde 79€/mes',
  //   features: [
  //     'Soporte Prioritario 24/7',
  //     'Actualizaciones Regulares',
  //     'Parches de Seguridad',
  //     'Monitoreo Continuo',
  //     'Informes Mensuales',
  //   ],
  //   popular: false,
  //   highlight: 'Tranquilidad Total',
  //   gradient: 'from-pink-600 to-rose-600',
  //   bgGradient: 'from-pink-50 to-rose-50/50',
  // },
];

export default function Services() {
  const router = useRouter();

  const handleServiceClick = (serviceId: string) => {
    router.push(`/#contact?service=${serviceId}`);
  };

  return (
    <section id="services" className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {/* Floating Badge */}
          <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-8 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            <span className="text-blue-600 font-medium">Soluciones Premium</span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            <span className="block">Nuestros </span>
            <span className="relative inline-block">
              <span className="relative z-10 gradient-text">Servicios Elite</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/30 -skew-x-6 transform"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones profesionales diseñadas para llevar tu servidor FiveM al siguiente nivel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>

          {services.map((service) => (
            <div
              key={service.title}
              className={`relative group bg-white rounded-3xl transition-all duration-500 hover:scale-105 flex flex-col ${
                service.popular 
                  ? 'ring-2 ring-indigo-600 shadow-2xl lg:scale-105' 
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0.5 rounded-3xl bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {service.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${service.gradient} shadow-lg`}>
                    <Star className="h-4 w-4 mr-1" />
                    Más Popular
                  </span>
                </div>
              )}

              <div className="relative p-8 flex-grow">
                {/* Service Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className={`h-8 w-8 bg-gradient-to-r ${service.gradient} [background-clip:text] [-webkit-background-clip:text] text-transparent`} />
                </div>
                
                {/* Highlight Badge */}
                <div className="absolute -top-4 -right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.gradient} text-white`}>
                    {service.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <p className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} [background-clip:text] [-webkit-background-clip:text] text-transparent mb-6`}>
                  {service.price}
                </p>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className={`p-1 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}>
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button Container - Fixed at Bottom */}
              <div className="relative p-8 pt-0">
                <button
                  onClick={() => handleServiceClick(service.id)}
                  className={`group flex items-center justify-center w-full px-6 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 font-medium text-lg
                    ${service.popular
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-xl`
                      : 'bg-white text-gray-900 border-2 hover:border-transparent hover:text-white hover:bg-gradient-to-r ' + service.gradient
                    }`}
                >
                  Solicitar Ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-xl text-gray-600 mb-8">
            ¿Necesitas una solución personalizada? Contáctanos para un presupuesto a medida.
          </p>
          <button
            onClick={() => router.push('/#contact')}
            className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contactar Ahora
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}