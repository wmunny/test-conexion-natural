import React from 'react';
import { motion } from 'motion/react';
import { dimensions } from '../questions';
import { IconResolver } from './IconResolver';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="max-w-5xl mx-auto"
    >
      {/* Brand Hero Heading */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#ECF3EC] text-[#2D5A27] border border-[#D5E2D5] text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
          <IconResolver name="leaf" size={14} className="text-[#2D5A27] animate-pulse" />
          Conexión Natural — Espacio Saludable Activo
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1A2E1A] mb-4 leading-tight">
          Quick Test de <span className="text-[#2D5A27] font-extrabold">Conexión Natural</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5A7A5A] max-w-2xl mx-auto leading-relaxed">
          Evalúa el bienestar biofílico y el Índice de Conexión Natural (ICN) de tu oficina.
          Mide el impacto directo de las 6 dimensiones sensoriales del ser humano en la prevención activa del estrés.
        </p>
      </div>

      {/* Main Grid: Info + Dimensiones */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
        {/* Left: Scientific Context & CTA */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E0E7E0] shadow-sm relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F0F4F0]/60 rounded-full blur-2xl -z-10 translate-x-8 -translate-y-8" />
            
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-6 bg-[#2D5A27]"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#2D5A27]">Impacto del Hábitat</span>
            </div>
            
            <div className="space-y-4 text-sm text-[#1A2E1A] leading-relaxed">
              <p>
                Los entornos con elementos naturales reportan un <strong className="text-[#2D5A27] font-semibold">15% más de niveles de bienestar</strong> y un <strong className="text-[#2D5A27] font-semibold">6% más de productividad</strong>.
              </p>
              <p className="border-l-2 border-[#2D5A27] pl-3 italic text-xs text-[#5A7A5A] bg-[#ECF3EC]/40 py-1.5 pr-2 rounded-r-lg">
                "La incorporación de biofilia en el diseño de oficinas reduce de forma inmediata los niveles percibidos de estrés y el absentismo laboral."
                <span className="block text-right mt-1.5 font-sans text-[9px] uppercase font-bold text-[#86A789]">— Informe Global de Espacios Humanos (Arup)</span>
              </p>
              <p className="text-[#5A7A5A] text-xs">
                Este Quick Test es <strong className="text-[#1A2E1A] font-medium">100% interactivo, gratuito</strong> y se ejecuta en tu navegador de forma inmediata, sin bloqueos ni recopilación forzada de datos.
              </p>
            </div>

            <div className="mt-8">
              <button
                id="btn-iniciar-test"
                onClick={onStart}
                className="w-full py-4 px-6 rounded-xl bg-[#2D5A27] hover:bg-[#20401C] text-white font-semibold text-base transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                Comenzar Diagnóstico
                <IconResolver name="arrowright" size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <div className="text-center mt-3 text-xs text-[#86A789] font-medium">
                ⏱️ Duración estimada: 2 minutos • 12 Preguntas Rápidas
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F0F4F0]/60 border border-[#E0E7E0] flex items-start gap-3">
            <IconResolver name="shieldcheck" className="text-[#2D5A27] shrink-0 mt-0.5" size={20} />
            <div className="text-[11px] leading-relaxed text-[#5A7A5A]">
              <strong className="text-[#1A2E1A] font-semibold">Privacidad Garantizada:</strong> Todas sus respuestas se calculan en tiempo real en el lado del cliente. No almacenamos datos personales en servidores durante el test, lo que descarta esperas por arranques en frío.
            </div>
          </div>
        </div>

        {/* Right: The 6 Dimensions Overview */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#2D5A27]"></div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#2D5A27]">Análisis Sensorial</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(dimensions).map(([key, dim]) => (
              <div
                key={key}
                className="bg-white rounded-2xl p-5 border border-[#E0E7E0] shadow-xs hover:shadow-md transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#E0E7E0] group-hover:bg-[#2D5A27] transition-colors" />
                <div className="flex gap-4.5 items-start">
                  <div className="p-2.5 rounded-xl bg-[#ECF3EC] text-[#2D5A27] group-hover:bg-[#2D5A27] group-hover:text-white transition-colors">
                    <IconResolver name={dim.iconName} size={18} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-medium text-sm text-[#1A2E1A] group-hover:text-[#2D5A27] transition-colors">
                      {dim.label}
                    </h4>
                    <p className="text-xs text-[#5A7A5A] leading-normal font-light">
                      {dim.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
