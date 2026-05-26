import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question } from '../types';
import { dimensions } from '../questions';
import { IconResolver } from './IconResolver';

interface QuizScreenProps {
  questions: Question[];
  currentIndex: number;
  answers: Record<number, number>;
  onAnswer: (questionId: number, score: number) => void;
  onBack: () => void;
  onNext: () => void;
  onReset: () => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  currentIndex,
  answers,
  onAnswer,
  onBack,
  onNext,
  onReset,
}) => {
  const currentQuestion = questions[currentIndex];
  const dimensionInfo = dimensions[currentQuestion.dimension];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);
  const currentAnswer = answers[currentQuestion.id];

  const handleOptionClick = (score: number) => {
    onAnswer(currentQuestion.id, score);
  };

  const options = [
    {
      score: 2,
      label: 'Sí, plenamente',
      description: 'El espacio cumple perfectamente con esta condición biológica.',
      bgColor: 'hover:bg-[#F0F4F0]/60 border-[#E0E7E0] active:bg-[#ECF3EC] text-[#1A2E1A]',
      activeColor: 'bg-[#2D5A27] border-[#2D5A27] text-white shadow-md shadow-[#2D5A27]/20',
      bulletColor: 'bg-white',
      icon: 'check',
    },
    {
      score: 1,
      label: 'Parcial / A veces',
      description: 'Existe presencia de este elemento o se da de forma irregular.',
      bgColor: 'hover:bg-amber-50/50 border-[#E0E7E0] active:bg-amber-50 text-[#1A2E1A]',
      activeColor: 'bg-amber-600 border-amber-650 text-white shadow-md shadow-amber-600/20',
      bulletColor: 'bg-white',
      icon: 'sparkles',
    },
    {
      score: 0,
      label: 'No, ausente',
      description: 'No disponemos de esta facilidad o es netamente deficiente.',
      bgColor: 'hover:bg-rose-50/50 border-[#E0E7E0] active:bg-rose-50 text-[#1A2E1A]',
      activeColor: 'bg-rose-705 bg-rose-700 border-rose-700 text-white shadow-md shadow-rose-700/20',
      bulletColor: 'bg-white',
      icon: 'alerttriangle',
    },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Top Header Panel */}
      <div className="flex justify-between items-center mb-4 px-1">
        <button
          onClick={onReset}
          className="text-xs text-[#5A7A5A] hover:text-[#2D5A27] flex items-center gap-1.5 font-medium transition-colors"
        >
          <IconResolver name="rotateccw" size={13} />
          Reiniciar test
        </button>
        <span className="text-xs font-mono font-bold text-[#2D5A27] bg-[#ECF3EC] px-3 py-1 rounded-md border border-[#D5E2D5]">
          DIMENSIÓN {currentIndex + 1} / {totalQuestions}
        </span>
      </div>

      {/* Progress bar container */}
      <div className="w-full h-2 bg-[#E8EDE8] rounded-full mb-8 relative overflow-hidden">
        <motion.div
          className="h-full bg-[#2D5A27] rounded-full"
          initial={{ width: `${progressPercent}%` }}
          animate={{ width: `${(currentIndex / totalQuestions) * 105}%` }}
          style={{ maxWidth: '100%' }}
          transition={{ duration: 0.3 }}
        />
        {/* Absolute indicators */}
        <div className="absolute right-3 top-0 bottom-0 flex items-center text-[9px] font-bold text-[#5A7A5A]">
          {Math.round((currentIndex / totalQuestions) * 100)}% Completado
        </div>
      </div>

      {/* Main Interactive Question Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -25 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E0E7E0] shadow-sm relative overflow-hidden"
        >
          {/* Subtle nature element inside layout */}
          <div className="absolute top-0 right-0 p-8 text-[#ECF3EC]/50 -z-10 select-none">
            <IconResolver name={dimensionInfo.iconName} size={150} />
          </div>

          {/* Dimension badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#ECF3EC] text-[#2D5A27]">
              <IconResolver name={dimensionInfo.iconName} size={20} className="stroke-[2.2]" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#86A789]">Dimensión Evaluada</span>
              <h2 className="text-sm font-bold text-[#1A2E1A] leading-tight">{currentQuestion.dimensionLabel}</h2>
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A2E1A] leading-snug">
              {currentQuestion.questionText}
            </h3>
          </div>

          {/* Insight Context box */}
          <div className="p-4 rounded-2xl bg-[#F9FBF9] border border-[#E0E7E0] flex gap-3 text-xs leading-relaxed text-[#5A7A5A] mb-8 items-start">
            <div className="p-1 rounded bg-[#ECF3EC] text-[#2D5A27] shrink-0">
              <IconResolver name="sparkles" size={13} />
            </div>
            <div>
              <strong className="text-[#2D5A27] font-semibold uppercase tracking-wider text-[10px] block mb-0.5">Por qué esto influye:</strong>
              {currentQuestion.contextText}
            </div>
          </div>

          {/* Answer Options */}
          <div className="space-y-3.5 mb-8">
            {options.map((opt) => {
              const isSelected = currentAnswer === opt.score;
              return (
                <button
                  key={opt.score}
                  id={`opt-${currentQuestion.id}-${opt.score}`}
                  onClick={() => handleOptionClick(opt.score)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer relative group ${
                    isSelected ? opt.activeColor : `bg-white border-[#E0E7E0] ${opt.bgColor}`
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-white bg-white text-[#2D5A27]' : 'border-slate-300 bg-slate-50'
                    }`}>
                      {isSelected && <div className={`w-2 h-2 rounded-full ${opt.bulletColor}`} />}
                    </div>
                    <div>
                      <span className="font-bold text-sm block">
                        {opt.label}
                      </span>
                      <span className={`text-xs block mt-0.5 leading-normal ${
                        isSelected ? 'text-white/85' : 'text-[#5A7A5A]'
                      }`}>
                        {opt.description}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-1.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-white/10 text-white' : 'bg-[#F0F4F0] text-[#5A7A5A] group-hover:scale-110 transition-transform'
                  }`}>
                    <IconResolver name={opt.icon} size={16} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Footer controls */}
          <div className="flex justify-between items-center pt-4 border-t border-[#E0E7E0]">
            <button
              onClick={onBack}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 py-2.5 w-28 px-4 rounded-xl font-medium text-xs border transition-all ${
                currentIndex === 0
                  ? 'border-[#E0E7E0]/40 bg-[#F9FBF9] text-slate-300 cursor-not-allowed'
                  : 'border-[#E0E7E0] text-[#5A7A5A] hover:bg-[#F0F4F0] cursor-pointer'
              }`}
            >
              <IconResolver name="arrowleft" size={14} />
              Anterior
            </button>

            {/* Pagination helper indicators */}
            <div className="hidden sm:flex items-center gap-1.5">
              {questions.map((_, idx) => {
                const isAnswered = answers[questions[idx].id] !== undefined;
                return (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? 'w-5 bg-[#2D5A27]'
                        : isAnswered
                        ? 'bg-[#86A789]'
                        : 'bg-[#E8EDE8]'
                    }`}
                  />
                );
              })}
            </div>

            <button
              onClick={onNext}
              disabled={currentAnswer === undefined}
              className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl w-28 font-semibold text-xs transition-all ${
                currentAnswer === undefined
                  ? 'bg-slate-100 text-slate-400 border border-slate-100 cursor-not-allowed'
                  : 'bg-[#2D5A27] text-white border border-[#2D5A27] hover:bg-[#20401C] cursor-pointer shadow-xs'
              }`}
            >
              Siguiente
              <IconResolver name="arrowright" size={14} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
