import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QuizAnswers } from '../types';
import { dimensions, Question } from '../questions';
import { IconResolver } from './IconResolver';

interface ResultsScreenProps {
  questions: Question[];
  answers: QuizAnswers;
  onReset: () => void;
  userEmail: string;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  questions,
  answers,
  onReset,
  userEmail: initialUserEmail,
}) => {
  // 1. Calculate scores
  // Max score: 12 questions * 2 points = 24 points
  const totalScore = (Object.values(answers) as number[]).reduce((acc, curr) => acc + curr, 0);
  const icnPercentage = Math.round((totalScore / 24) * 100);

  // Calculate scores per dimension
  // Each dimension has 2 questions. Max score per dimension = 4 points.
  const dimensionScores: Record<string, { earned: number; max: number }> = {
    vista: { earned: 0, max: 0 },
    olfato: { earned: 0, max: 0 },
    oido: { earned: 0, max: 0 },
    tacto: { earned: 0, max: 0 },
    gusto: { earned: 0, max: 0 },
    diseno: { earned: 0, max: 0 },
  };

  questions.forEach((q) => {
    const score = answers[q.id] || 0;
    dimensionScores[q.dimension].earned += score;
    dimensionScores[q.dimension].max += 2;
  });

  // Determine diagnostic bracket
  let bracket: 'critical' | 'ornamental' | 'regenerative' = 'ornamental';
  if (icnPercentage <= 39) {
    bracket = 'critical';
  } else if (icnPercentage >= 75) {
    bracket = 'regenerative';
  }

  // Diagnostic copy variables
  const config = {
    critical: {
      color: 'rose', 
      title: 'Espacio Crítico (Déficit Sensorial)',
      subTitle: 'Nivel Insuficiente de Conexión • Pérdida de Productividad',
      textColor: 'text-rose-900',
      bgColor: 'bg-rose-50/50 border-rose-250 border-rose-200',
      progressColor: 'from-rose-600 to-red-500',
      ringColor: 'stroke-rose-600',
      badgeBg: 'bg-rose-100 text-rose-800',
      badgeIcon: 'flame',
      bulletBg: 'bg-rose-600',
      desc: 'Tu espacio actual de trabajo está biológicamente desconectado de los ritmos de la naturaleza. Según el célebre informe de Arup, un hábitat con semejante déficit sensorial provoca una pérdida contrastada de hasta el 15% en la productividad ejecutiva y promueve de forma sostenida la fatiga mental crónica. Las oficinas grises inducen dolores de cabeza recurrentes e impiden la recuperación cognitiva diaria ante la sobreestimulación técnica.'
    },
    ornamental: {
      color: 'amber',
      title: 'Espacio Ornamental (Cosmética Ineficaz)',
      subTitle: 'Nivel Decorativo Superficial • Conexión Pasiva',
      textColor: 'text-amber-900',
      bgColor: 'bg-amber-50/50 border-amber-200',
      progressColor: 'from-amber-600 to-yellow-500',
      ringColor: 'stroke-amber-600',
      badgeBg: 'bg-amber-100 text-amber-800',
      badgeIcon: 'alerttriangle',
      bulletBg: 'bg-amber-500',
      desc: 'La oficina posee una presencia natural que resulta meramente superficial, cosmética o ineficaz a nivel neurológico (p. ej., plantas distribuidas al azar sobre plástico simulado). Aunque atenúa ligeramente la dureza industrial del hormigón, no llega a configurar las frecuencias que el sistema límbico necesita para contrarrestar inteligentemente los picos de cortisol y mitigar de manera tangible la incidencia de bajas laborales.'
    },
    regenerative: {
      color: 'emerald',
      title: 'Hábitat Regenerativo (Espacio Óptimo)',
      subTitle: 'Bienestar Activo Avanzado • Prevención de Absentismo',
      textColor: 'text-[#1A2E1A]',
      bgColor: 'bg-[#ECF3EC]/50 border-[#D5E2D5]',
      progressColor: 'from-[#2D5A27] to-[#5A7A5A]',
      ringColor: 'stroke-[#2D5A27]',
      badgeBg: 'bg-[#ECF3EC] text-[#2D5A27] border border-[#D5E2D5]',
      badgeIcon: 'shieldcheck',
      bulletBg: 'bg-[#2D5A27]',
      desc: '¡Excelente diagnóstico! El espacio evaluado califica como un Hábitat Óptimo alineado con la biofilia de alto nivel. La oficina incorpora dinámicas sensoriales reales y variadas que estimulan pacíficamente el sistema nervioso autónomo. Este flujo regenerativo no solo blinda a la plantilla reduciendo drásticamente las bajas por absentismo, sino que estimula de forma exponencial los periodos de hiperenfoque creativo e incrementa la retención de talento corporativo.'
    }
  }[bracket];

  const handlePrint = () => {
    window.print();
  };

  // SVG parameters for radial bar
  const r = 64;
  const circ = 2 * Math.PI * r; // ~402.12
  const offset = circ - (icnPercentage / 100) * circ;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-8 print:space-y-4 print:py-0 print:max-w-full"
    >
      {/* Printable page header */}
      <div className="hidden print:flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h2 className="text-xl font-bold font-display text-[#1A2E1A]">Auditoría de Biofilia — Espacio Saludable</h2>
          <p className="text-xs text-[#5A7A5A]">Informe de Auditoría de Conexión Natural (ICN)</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-mono font-medium text-[#5A7A5A]">Fecha: {new Date().toLocaleDateString('es-ES')}</p>
          <p className="text-xs font-mono font-semibold text-[#2D5A27]">ICN: {icnPercentage}%</p>
        </div>
      </div>

      {/* Main Results Board */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E0E7E0] shadow-sm relative overflow-hidden print:shadow-none print:border-none print:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Circular Graph Gauge Area - cols 5 */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center py-4">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              {/* Spinning background effect for visual flair */}
              <div className="absolute inset-0 rounded-full bg-[#F0F4F0]/60 -z-10 scale-95" />
              
              {/* Raw SVG gauge */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                {/* Background track circle */}
                <circle
                  cx="80"
                  cy="80"
                  r={r}
                  className="stroke-[#E8EDE8]"
                  strokeWidth="12"
                  fill="transparent"
                />
                {/* Colored progress circle */}
                <motion.circle
                  cx="80"
                  cy="80"
                  r={r}
                  className={`${config.ringColor} transition-colors duration-500`}
                  strokeWidth="12"
                  fill="transparent"
                  strokeLinecap="round"
                  strokeDasharray={circ}
                  initial={{ strokeDashoffset: circ }}
                  animate={{ strokeDashoffset: offset }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </svg>

              {/* Inside gauge labels */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#86A789]">Su Índice ICN</span>
                <span id="txt-percentage-score" className="font-display text-5xl sm:text-6xl font-black text-[#1A2E1A] tracking-tight leading-none my-1">
                  {icnPercentage}%
                </span>
                <div className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${config.badgeBg} shadow-xs flex items-center gap-1`}>
                  <IconResolver name={config.badgeIcon} size={11} />
                  {bracket === 'critical' ? 'Crítico' : bracket === 'ornamental' ? 'Ornamental' : 'Regenerativo'}
                </div>
              </div>
            </div>

            <div className="mt-5 text-xs text-[#86A789] font-mono">
              Evaluación sobre 24 puntos máximos
            </div>
          </div>

          {/* Executive Diagnosis Statement Block - cols 7 */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-[#2D5A27]"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">Resultado del Diagnóstico</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#1A2E1A] leading-tight">
              {config.title}
            </h2>
            <div className="text-xs font-bold text-[#5A7A5A] flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${config.bulletBg}`} />
              {config.subTitle}
            </div>

            {/* Diagnostic card */}
            <div className={`p-5 sm:p-6 rounded-2xl border ${config.bgColor} ${config.textColor} transition-all duration-300 text-sm leading-relaxed space-y-3`}>
              <p className="font-medium leading-relaxed">{config.desc}</p>
            </div>
          </div>

        </div>
      </div>

      {/* Grid: Dimensions Breakdowns + Quick Tips */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:block">
        
        {/* Dimensions Score list - Left cols 7 */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E0E7E0] shadow-sm space-y-6 print:shadow-none print:border-none print:p-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-px w-8 bg-[#2D5A27]"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">Detalle de Conexión</span>
            </div>
            <h3 className="font-display text-lg font-bold text-[#1A2E1A] mb-1">
              Desglose de Conexión por Dimensión Sensorial
            </h3>
            <p className="text-xs text-[#5A7A5A]">Respuestas ponderadas en la oficina para cada estímulo corporal humano.</p>
          </div>

          <div className="space-y-4">
            {Object.entries(dimensionScores).map(([key, item]) => {
              const info = dimensions[key];
              const scorePercent = Math.round((item.earned / item.max) * 100);
              
              // Select color based on dimension percentage
              let barColor = 'bg-rose-500';
              if (scorePercent >= 40 && scorePercent < 75) {
                barColor = 'bg-amber-400';
              } else if (scorePercent >= 75) {
                barColor = 'bg-[#2D5A27]';
              }

              return (
                <div key={key} className="space-y-2 border-b border-[#E0E7E0]/40 pb-3 last:border-0 last:pb-0 break-inside-avoid">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-md bg-[#F0F4F0] text-[#2D5A27]">
                        <IconResolver name={info.iconName} size={14} />
                      </div>
                      <span className="text-xs font-bold text-[#1A2E1A]">{info.label}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#2D5A27] bg-[#ECF3EC] px-2 py-0.5 rounded border border-[#D5E2D5]">
                      {item.earned}/{item.max} Puntos • {scorePercent}%
                    </span>
                  </div>

                  {/* Horizontal progress representation */}
                  <div className="w-full h-2 bg-[#E8EDE8] rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${barColor}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${scorePercent}%` }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>

                  {/* Recommendation action tip display */}
                  <p className="text-[11px] leading-relaxed text-[#5A7A5A] pl-1 font-light">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#86A789] block mb-0.5 font-sans">Acción Recomendada:</span>
                    {info.tip}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actions Panel - Right cols 5 */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-6 print:hidden">
          
          {/* Action Tools */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E0E7E0] shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-[#2D5A27]"></div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D5A27]">Opciones</span>
            </div>
            <h3 className="font-display text-base font-bold text-[#1A2E1A] leading-snug">
              ¿Qué deseas realizar con los resultados?
            </h3>
            <p className="text-xs text-[#5A7A5A] leading-relaxed font-light">
              Puedes imprimir o descargar este informe en rastro digital PDF para compartirlo con tu equipo de prevención o recursos humanos.
            </p>

            <div className="space-y-3 pt-2">
              <button
                onClick={handlePrint}
                className="w-full py-3 px-4 rounded-xl border border-[#E0E7E0] hover:border-[#2D5A27]/40 hover:bg-[#F0F4F0] text-[#5A7A5A] hover:text-[#2D5A27] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconResolver name="printer" size={14} />
                Imprimir / Guardar PDF
              </button>
              <button
                onClick={onReset}
                className="w-full py-3 px-4 rounded-xl bg-[#F0F4F0] hover:bg-[#E0E7E0] text-[#2D5A27] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <IconResolver name="rotateccw" size={14} />
                Repetir el Test
              </button>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
