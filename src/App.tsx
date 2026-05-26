import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { questions } from './questions';
import { QuizAnswers } from './types';
import { WelcomeScreen } from './components/WelcomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { LoaderTransition } from './components/LoaderTransition';
import { ResultsScreen } from './components/ResultsScreen';
import { IconResolver } from './components/IconResolver';

export default function App() {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'analyzing' | 'results'>('welcome');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  
  // Handlers
  const handleStart = () => {
    setStep('quiz');
    setCurrentIndex(0);
    setAnswers({});
  };

  const handleAnswer = (questionId: number, score: number) => {
    const updatedAnswers = { ...answers, [questionId]: score };
    setAnswers(updatedAnswers);

    // Auto-advance to next question with a small delay for premium sensory experience
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        // Trigger intermediate audits loader before calculations display
        setStep('analyzing');
      }
    }, 280);
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStep('analyzing');
    }
  };

  const handleReset = () => {
    setStep('welcome');
    setCurrentIndex(0);
    setAnswers({});
  };

  const handleAnalysisComplete = () => {
    setStep('results');
  };

  return (
    <div className="min-h-screen bg-[#F9FBF9] text-[#1A2E1A] font-sans flex flex-col selection:bg-[#2D5A27]/20 selection:text-[#2D5A27]">
      
      {/* Sticky Premium Corporate Header */}
      <header className="sticky top-0 bg-white border-b border-[#E0E7E0] z-50 transition-all duration-300 print:hidden h-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 h-full flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleReset}>
            {/* Elegant Leaf Symbol */}
            <div className="w-8 h-8 rounded-lg bg-[#2D5A27] flex items-center justify-center text-white shadow-sm shadow-[#2D5A27]/20">
              <IconResolver name="leaf" size={15} />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#1A2E1A]">Conexión Natural <span className="font-light text-[#5A7A5A]">| Espacio Saludable</span></span>
              <span className="text-[9px] text-[#86A789] font-bold block leading-none tracking-wider uppercase mt-0.5">BIOPHILIC AUDIT SYSTEM</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ECF3EC] text-[#2D5A27] text-[11px] font-semibold border border-[#D5E2D5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D5A27] animate-pulse" />
              Auditoría v1.2 • Activa
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-6 sm:px-10 py-10 sm:py-16 flex flex-col justify-center print:py-0">
        <AnimatePresence mode="wait">
          {step === 'welcome' && (
            <WelcomeScreen key="welcome" onStart={handleStart} />
          )}

          {step === 'quiz' && (
            <QuizScreen
              key="quiz"
              questions={questions}
              currentIndex={currentIndex}
              answers={answers}
              onAnswer={handleAnswer}
              onBack={handleBack}
              onNext={handleNext}
              onReset={handleReset}
            />
          )}

          {step === 'analyzing' && (
            <LoaderTransition key="analyzing" onComplete={handleAnalysisComplete} />
          )}

          {step === 'results' && (
            <ResultsScreen
              key="results"
              questions={questions}
              answers={answers}
              onReset={handleReset}
              userEmail="jcaguilar@preving.com"
            />
          )}
        </AnimatePresence>
      </main>

      {/* Corporate Policy-Conformed Footer */}
      <footer className="py-6 bg-[#F0F4F0] border-t border-[#E0E7E0] flex flex-col sm:flex-row items-center justify-between px-6 sm:px-10 text-[10px] text-[#86A789] font-medium print:hidden gap-3">
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
          <span>© {new Date().getFullYear()} HEALTH & SAFETY AUDIT</span>
          <span className="hover:text-[#2D5A27] cursor-pointer">METODOLOGÍA BIOPHILIC DESIGN</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#2D5A27] rounded-full"></span>
          SISTEMA ZERO-FRICTION ACTIVADO
        </div>
      </footer>
    </div>
  );
}
