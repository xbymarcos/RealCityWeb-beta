import React from 'react';
import { ArrowRight, Code2, Star, Sparkles, Terminal, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="relative z-10">
            {/* Floating Badge */}
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-8 animate-float">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
              <span className="text-blue-600 font-medium">Líder en Desarrollo FiveM</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block text-gray-900">Potencia tu</span>
              <div className="relative inline-block">
                <span className="relative z-10 gradient-text">Servidor FiveM</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-blue-200/30 -skew-x-6 transform"></div>
              </div>
              <span className="block text-gray-900 mt-2">al Siguiente Nivel</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Desarrollamos soluciones <span className="font-semibold text-blue-600">premium y personalizadas</span> para 
              crear experiencias únicas en tu servidor QBCore.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#services"
                className="group flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group flex items-center justify-center px-8 py-4 text-lg font-medium rounded-xl text-gray-700 hover:text-blue-600 bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-200 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Proyectos
                <Star className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm">Garantía 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-sm">Soporte 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block">
            {/* Main Visual Element */}
            <div className="relative">
              {/* Code Window */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-800 rounded-md w-3/4"></div>
                  <div className="h-6 bg-blue-500/20 rounded-md"></div>
                  <div className="h-6 bg-gray-800 rounded-md w-5/6"></div>
                  <div className="h-6 bg-gray-800 rounded-md w-4/6"></div>
                  <div className="h-6 bg-blue-500/20 rounded-md w-5/6"></div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 animate-bounce">
                  <div className="bg-blue-600 rounded-xl p-3 shadow-lg">
                    <Terminal className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 animate-pulse">
                  <div className="bg-indigo-600 rounded-xl p-3 shadow-lg">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { number: '50+', label: 'Scripts', icon: Code2 },
                  { number: '100+', label: 'Clientes', icon: Star },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <stat.icon className="h-6 w-6 text-blue-600 mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Gradients */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}