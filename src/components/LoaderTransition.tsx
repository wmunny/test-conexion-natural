import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { IconResolver } from './IconResolver';

interface LoaderTransitionProps {
  onComplete: () => void;
}

export const LoaderTransition: React.FC<LoaderTransitionProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  const stages = [
    { text: 'Analizando condiciones visuales y lumínicas...', icon: 'eye' },
    { text: 'Procesando confort acústico y calidad del aire...', icon: 'wind' },
    { text: 'Estableciendo correlaciones del Índice de Conexión Natural (ICN)...', icon: 'sprout' }
  ];

  useEffect(() => {
    // Stage 1 at 400ms
    const timer1 = setTimeout(() => setStage(1), 500);
    // Stage 2 at 800ms
    const timer2 = setTimeout(() => setStage(2), 1000);
    // Complete at 1500ms
    const timer3 = setTimeout(() => {
      onComplete();
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div className="max-w-md mx-auto py-16 text-center space-y-8">
      <div className="relative inline-flex items-center justify-center">
        {/* Animated spin pulses */}
        <div className="w-20 h-20 rounded-full border-4 border-[#ECF3EC] border-t-[#2D5A27] animate-spin" />
        <div className="absolute w-14 h-14 rounded-full bg-[#ECF3EC] text-[#2D5A27] flex items-center justify-center shadow-inner">
          <IconResolver
            name={stages[stage]?.icon || 'leaf'}
            className="text-[#2D5A27] animate-pulse"
            size={24}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-lg font-bold text-[#1A2E1A]">
          Procesando Auditoría Biofílica
        </h3>
        
        {/* Animated status text */}
        <div className="h-6">
          <motion.p
            key={stage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-sm text-[#5A7A5A] font-medium"
          >
            {stages[stage]?.text}
          </motion.p>
        </div>
      </div>

      {/* Tiny progress ticks */}
      <div className="flex gap-2 justify-center">
        {stages.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx <= stage ? 'w-8 bg-[#2D5A27]' : 'w-2 bg-[#E8EDE8]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
