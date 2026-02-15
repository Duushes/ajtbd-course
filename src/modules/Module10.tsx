'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCourse } from '@/context/CourseContext';
import Confetti from '@/components/Confetti';

interface ExamQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const questions: ExamQuestion[] = [
  {
    question: '1. Что такое «работа» (Job) в методологии JTBD?',
    options: [
      'Функция продукта, которую использует клиент',
      'Прогресс, которого человек хочет достичь в определённых обстоятельствах',
      'Задача, которую ставит менеджер продукта',
      'KPI, по которому измеряется успех продукта',
    ],
    correctIndex: 1,
    explanation: 'Работа — это прогресс, которого человек хочет достичь в конкретном контексте. Это не функция продукта и не метрика.',
  },
  {
    question: '2. Чем Core Job отличается от Big Job?',
    options: [
      'Core Job важнее Big Job',
      'Core Job — конкретная работа, на которую нанимают продукт, Big Job — высокоуровневая жизненная цель',
      'Big Job относится к B2B, Core Job — к B2C',
      'Это одно и то же, просто разные названия',
    ],
    correctIndex: 1,
    explanation: 'Core Job — это конкретная работа, для которой человек нанимает продукт. Big Job — более высокоуровневая жизненная или бизнес-цель, в рамках которой существует Core Job.',
  },
  {
    question: '3. Какие четыре силы влияют на переключение между продуктами?',
    options: [
      'Цена, качество, бренд, доступность',
      'Push, Pull, Inertia, Anxiety (Толчок, Притяжение, Инерция, Тревога)',
      'Потребность, желание, возможность, мотивация',
      'Осведомлённость, интерес, решение, покупка',
    ],
    correctIndex: 1,
    explanation: 'Четыре силы переключения: Push (неудовлетворённость текущим решением), Pull (привлекательность нового), Inertia (привычка к текущему), Anxiety (страх перед новым).',
  },
  {
    question: '4. Как JTBD подход к сегментации отличается от традиционного?',
    options: [
      'JTBD сегментирует только по доходу',
      'JTBD группирует людей по работе, которую они хотят выполнить, а не по демографии',
      'JTBD не использует сегментацию вовсе',
      'JTBD сегментирует по поведению на сайте',
    ],
    correctIndex: 1,
    explanation: 'JTBD-сегментация группирует людей по общей работе, которую они пытаются выполнить. CEO и студент могут быть в одном сегменте, если нанимают продукт для одной работы.',
  },
  {
    question: '5. Что такое Product-Market Fit через призму JTBD?',
    options: [
      'Когда продукт нравится инвесторам',
      'Когда у продукта много пользователей',
      'Когда продукт решает реальную работу лучше, чем альтернативы',
      'Когда продукт дешевле конкурентов',
    ],
    correctIndex: 2,
    explanation: 'PMF через JTBD — это когда ваш продукт решает реальную работу (job) лучше, чем текущие альтернативы, которые люди используют.',
  },
  {
    question: '6. Как рассчитывается Opportunity Score?',
    options: [
      'Доход × Количество клиентов',
      'Важность + (Важность - Удовлетворённость)',
      'NPS × Retention Rate',
      'Частота использования × Время сессии',
    ],
    correctIndex: 1,
    explanation: 'Opportunity Score = Importance + (Importance - Satisfaction). Высокая важность и низкая удовлетворённость = максимальная возможность.',
  },
  {
    question: '7. Как правильно формулировать Job Story?',
    options: [
      '«Как [персона], я хочу [функцию], чтобы [выгода]»',
      '«Когда я [ситуация], я хочу [мотивация], чтобы [желаемый результат]»',
      '«Пользователь должен иметь возможность [действие]»',
      '«Если [условие], то [результат]»',
    ],
    correctIndex: 1,
    explanation: 'Job Story: «Когда я [ситуация/контекст], я хочу [мотивация/работа], чтобы [желаемый результат]». Это фокусирует на контексте и прогрессе, а не на персоне.',
  },
  {
    question: '8. Какая из стратегий роста означает «решать смежные работы»?',
    options: [
      'Go Deeper — углубляться в Core Job',
      'Go Wider — расширяться на смежные работы',
      'Go Higher — подниматься к Big Job',
      'Go Faster — делать то же самое быстрее',
    ],
    correctIndex: 1,
    explanation: 'Go Wider — стратегия расширения на смежные работы (adjacent jobs), которые связаны с текущей Core Job.',
  },
  {
    question: '9. Что нужно спрашивать на AJTBD-интервью?',
    options: [
      '«Какие фичи вы бы хотели?»',
      '«Купили бы вы такой продукт?»',
      '«Расскажите о последнем разе, когда вы...» — о реальном прошлом опыте переключения',
      '«Оцените по шкале от 1 до 10...»',
    ],
    correctIndex: 2,
    explanation: 'AJTBD-интервью фокусируется на реальном прошлом поведении — история переключения. Не гипотетические вопросы, а «Расскажите о последнем разе, когда...»',
  },
  {
    question: '10. Компания делает таск-трекер. Пользователи жалуются на сложность. Что делать по JTBD?',
    options: [
      'Добавить обучающие видео о текущих функциях',
      'Провести AJTBD-интервью, понять какие работы пользователи на самом деле пытаются выполнить, и упростить продукт под эти работы',
      'Скопировать интерфейс конкурента',
      'Снизить цену, чтобы компенсировать сложность',
    ],
    correctIndex: 1,
    explanation: 'Правильный подход — понять, какие работы пользователи на самом деле выполняют (возможно, им не нужны все фичи), и оптимизировать продукт под реальные работы.',
  },
];

export default function Module10() {
  const { completeModule, setExamScore, setCurrentModule } = useCourse();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const score = answers.reduce<number>((acc, ans, i) => {
    if (ans === questions[i].correctIndex) return acc + 1;
    return acc;
  }, 0);

  const handleSelect = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQ] = optionIndex;
    setAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setShowResults(true);
      const finalScore = answers.reduce<number>((acc, ans, i) => {
        if (ans === questions[i].correctIndex) return acc + 1;
        return acc;
      }, 0);
      setExamScore(finalScore);
      completeModule(10);
    }
  };

  const getMessage = () => {
    if (score >= 8) return 'Вы больше не строите фичи. Вы проектируете прогресс.';
    if (score >= 6) return 'Хороший результат! Ещё немного практики — и вы мастер JTBD.';
    if (score >= 4) return 'Неплохое начало. Рекомендуем пройти модули ещё раз.';
    return 'Стоит вернуться к материалам и пройти курс заново. Вы справитесь!';
  };

  const getEmoji = () => {
    if (score >= 8) return '🏆';
    if (score >= 6) return '👏';
    if (score >= 4) return '📚';
    return '💪';
  };

  if (showResults) {
    return (
      <>
        <Confetti active={score >= 8} />
        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
              className="text-6xl mb-6"
            >
              {getEmoji()}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-8 rounded-2xl border border-border/50 bg-card"
            >
              <h2 className="text-3xl font-bold mb-2">
                {score} из {questions.length}
              </h2>
              <div className="w-full h-2 bg-muted rounded-full mt-4 mb-6 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / questions.length) * 100}%` }}
                  transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`h-full rounded-full ${score >= 8 ? 'bg-success' : score >= 5 ? 'bg-accent' : 'bg-error'}`}
                />
              </div>
              <p className="text-lg text-muted-foreground">{getMessage()}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 space-y-3"
            >
              {questions.map((q, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-lg text-sm text-left
                    ${answers[i] === q.correctIndex ? 'bg-success/5 text-success' : 'bg-error/5 text-error'}`}
                >
                  <span className="flex-shrink-0">
                    {answers[i] === q.correctIndex ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.25 4.75L6 12L2.75 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                  <span className="text-foreground/70">{q.question.replace(/^\d+\.\s*/, '')}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10"
            >
              <button
                onClick={() => {
                  setCurrentModule(0);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-accent text-white text-sm font-medium rounded-lg
                  hover:opacity-90 transition-opacity cursor-pointer"
              >
                На главную →
              </button>
            </motion.div>
          </motion.div>
        </div>
      </>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xs font-medium text-accent uppercase tracking-widest">
          Финальный экзамен
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2 tracking-tight mb-8">
          Проверьте свои знания
        </h1>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent rounded-full"
              animate={{ width: `${((currentQ + (showExplanation ? 1 : 0)) / questions.length) * 100}%` }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <span className="text-xs text-muted-foreground font-mono">
            {currentQ + 1}/{questions.length}
          </span>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg font-medium mb-6">{q.question}</p>

          <div className="space-y-2">
            {q.options.map((opt, i) => {
              let style = 'border-border/50 hover:border-accent/50 cursor-pointer';
              if (showExplanation) {
                if (i === q.correctIndex) {
                  style = 'border-success bg-success/5';
                } else if (i === selectedOption && i !== q.correctIndex) {
                  style = 'border-error bg-error/5';
                } else {
                  style = 'border-border/30 opacity-50';
                }
                style += ' cursor-default';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 disabled:opacity-100 ${style}`}
                >
                  <span className="text-sm">{opt}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className={`mt-4 p-4 rounded-lg text-sm ${
                  selectedOption === q.correctIndex ? 'bg-success/10' : 'bg-error/10'
                }`}>
                  <p className={selectedOption === q.correctIndex ? 'text-success font-medium' : 'text-error font-medium'}>
                    {selectedOption === q.correctIndex ? 'Верно!' : 'Неверно.'}
                  </p>
                  <p className="text-foreground/70 mt-1">{q.explanation}</p>
                </div>

                <button
                  onClick={handleNext}
                  className="mt-4 px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-lg
                    hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {currentQ < questions.length - 1 ? 'Следующий вопрос' : 'Показать результаты'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
