'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizOption {
  text: string;
  correct?: boolean;
  explanation?: string;
}

interface QuizProps {
  question: string;
  options: QuizOption[];
  onCorrect?: () => void;
}

export default function Quiz({ question, options, onCorrect }: QuizProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (index: number) => {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (options[index].correct && onCorrect) {
      onCorrect();
    }
  };

  const isCorrect = selected !== null && options[selected].correct;

  return (
    <div className="my-8">
      <p className="text-base font-medium mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((opt, i) => {
          let borderClass = 'border-border/50 hover:border-accent/50';
          if (showResult && i === selected) {
            borderClass = opt.correct
              ? 'border-success bg-success/5'
              : 'border-error bg-error/5';
          } else if (showResult && opt.correct) {
            borderClass = 'border-success/30';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border transition-all duration-200
                ${borderClass} ${!showResult ? 'cursor-pointer' : 'cursor-default'}
                disabled:opacity-100`}
            >
              <span className="text-sm">{opt.text}</span>
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {showResult && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`mt-3 p-4 rounded-lg text-sm ${isCorrect ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
              {isCorrect ? 'Верно!' : 'Не совсем.'}{' '}
              {selected !== null && options[selected].explanation && (
                <span className="text-foreground/70">{options[selected].explanation}</span>
              )}
              {!isCorrect && options.find(o => o.correct)?.explanation && (
                <span className="text-foreground/70">
                  {options.find(o => o.correct)?.explanation}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
