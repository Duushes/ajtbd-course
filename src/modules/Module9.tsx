'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCourse } from '@/context/CourseContext';
import Confetti from '@/components/Confetti';

interface ExamQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  type?: 'ordering';
}

const questions: ExamQuestion[] = [
  {
    question: '1. Что такое «работа» (Job) в методологии JTBD?',
    options: [
      'Функция продукта, которую регулярно использует клиент',
      'Задача клиента: перейти из Точки А в Точку Б',
      'Задача, которую менеджер ставит команде разработки',
      'Метрика прогресса пользователя в продукте',
    ],
    correctIndex: 1,
    explanation: 'Работа (Job) — это цель/задача клиента: перейти из Точки А (контекст, триггер) в Точку Б (результат, позитивные эмоции). Формула: «хочу + глагол». Это не фича продукта и не метрика.',
  },
  {
    question: '2. Какое из утверждений верно описывает «решение» (Solution) в JTBD?',
    options: [
      'Это только коммерческий продукт на рынке',
      'Это конкретная функция внутри вашего продукта',
      'Это любой способ выполнить работу, включая свои действия',
      'Это рекомендация по итогам JTBD-интервью',
    ],
    correctIndex: 2,
    explanation: 'Решение — это всё, с помощью чего человек выполняет работу. Netflix, Excel, репетитор, «попросить друга» — всё это решения.',
  },
  {
    question: '3. Что такое «найм» (Hiring) в контексте JTBD?',
    options: [
      'Первое взаимодействие пользователя с продуктом',
      'Выбор конкретного решения для выполнения работы',
      'Оформление подписки или оплата продукта',
      'Переход пользователя на платный тариф',
    ],
    correctIndex: 1,
    explanation: '«Найм» — это акт выбора решения для выполнения работы. Например: «Человек нанял Яндекс Такси на работу быстро добраться до офиса».',
  },
  {
    question: '4. Чем Core Job отличается от Big Job?',
    options: [
      'Core Job всегда важнее и приоритетнее Big Job',
      'Core Job — это конкретная задача, Big Job — жизненная цель',
      'Big Job относится к B2B, а Core Job — к B2C',
      'Big Job описывает частоту, Core Job — эмоцию',
    ],
    correctIndex: 1,
    explanation: 'Core Job — это конкретная работа, для которой человек нанимает решение. Big Job — более высокоуровневая жизненная или бизнес-цель, в рамках которой существует Core Job.',
  },
  {
    question: '5. Пользователи в интервью говорят: «Хочу чувствовать уверенность, что мне заплатят вовремя». Какой это тип работы?',
    options: [
      'Функциональная работа',
      'Эмоциональная работа',
      'Социальная работа',
      'Операционная работа',
    ],
    correctIndex: 1,
    explanation: '«Чувствовать уверенность» — это эмоциональная работа. Функциональная была бы «получить оплату вовремя», социальная — «выглядеть профессионально перед клиентом».',
  },
  {
    question: '6. Какие четыре силы влияют на переключение между решениями?',
    options: [
      'Цена, качество, бренд, доступность',
      'Push, Pull, Inertia, Anxiety',
      'Потребность, желание, возможность, мотивация',
      'Осведомлённость, интерес, решение, действие',
    ],
    correctIndex: 1,
    explanation: 'Четыре силы переключения: Push (толчок от текущего решения), Pull (притяжение нового), Inertia (инерция привычки), Anxiety (страх перед новым).',
  },
  {
    question: '7. SaaS-продукт видит падение retention. Исследование показало: Push слабый, но Anxiety высокий — клиенты боятся потерять данные. Какой приоритет?',
    options: [
      'Снизить цену, чтобы усилить Pull',
      'Добавить фич для увеличения Push от конкурентов',
      'Работать с Anxiety: гарантии, миграция, отзывы',
      'Запустить реферальную программу для роста базы',
    ],
    correctIndex: 2,
    explanation: 'Когда Anxiety — главный барьер, нужно работать с ним напрямую: снизить страх перед переходом через гарантии, помощь с миграцией и социальные доказательства.',
  },
  {
    question: '8. CEO и студент покупают кофе из одного автомата утром. Они в одном JTBD-сегменте?',
    options: [
      'Нет, у них разный доход и соцстатус',
      'Да, если у них одна работа и одно текущее решение',
      'Нет, B2B и B2C клиенты всегда в разных сегментах',
      'Да, потому что они пользуются одним продуктом',
    ],
    correctIndex: 1,
    explanation: 'JTBD-сегмент = работа + текущее решение. Демография не определяет сегмент. Если оба нанимают кофе на одну и ту же работу — они в одном сегменте.',
  },
  {
    question: '9. Вы запускаете новый продукт. Расставьте 5 шагов алгоритма AJTBD в правильном порядке.',
    type: 'ordering',
    options: [
      'Гипотеза о работе клиента',
      'Анализ рынка и бизнес-стратегии',
      'Поиск сегментов + валидация + RAT',
      'UX / решенческие интервью',
      'Оценка стоимости реализации',
    ],
    correctIndex: 0,
    explanation: 'Правильный порядок: 1) Гипотеза о работе → 2) Анализ рынка → 3) Сегменты + RAT → 4) UX-интервью → 5) Оценка стоимости. Нельзя начинать с анализа рынка без гипотезы — не знаешь, что искать.',
  },
  {
    question: '10. Что проверяет RAT (Riskiest Assumption Test)?',
    options: [
      'Общую жизнеспособность бизнес-модели продукта',
      'Одно самое рискованное допущение в гипотезе',
      'Готовность рынка к запуску новой категории',
      'Юзабилити прототипа на целевой аудитории',
    ],
    correctIndex: 1,
    explanation: 'RAT — это проверка самого рискованного допущения. Вместо того чтобы проверять всё, вы находите допущение, от которого зависит вся идея, и тестируете его первым.',
  },
  {
    question: '11. После ABCDX-сегментации: A — 5%, B — 15%, D — 40%. Куда направить ресурсы?',
    options: [
      'На сегмент D — он самый большой по объёму',
      'На сегменты A и B — понять их работы и привлечь похожих',
      'Равномерно распределить между всеми сегментами',
      'На сегмент X — он даёт стратегический рост',
    ],
    correctIndex: 1,
    explanation: 'Сегменты A и B — ваши целевые клиенты. Сегмент D невозможно удовлетворить, тратить на них ресурсы неэффективно. Сегмент X важен стратегически, но сначала укрепите A и B.',
  },
  {
    question: '12. Как рассчитывается приоритет сегмента в AJTBD?',
    options: [
      'NPS × Retention Rate × средний чек',
      'Объём сегмента × неудовлетворённость × частота × важность',
      'Доход от сегмента × количество клиентов в нём',
      'Средняя эмоция × средняя частота использования',
    ],
    correctIndex: 1,
    explanation: 'Приоритет = Объём × Неудовлетворённость × Частота × Важность. Каждый фактор оценивается от 1 до 5, максимальный приоритет — 625.',
  },
  {
    question: '13. Сегмент: объём 4, неудовлетворённость 5, частота 3, важность 4. Приоритет = 240. Конкурентный сегмент: объём 5, неудовлетворённость 2, частота 5, важность 3 = 150. Какой вывод?',
    options: [
      'Выбрать второй — у него больший объём и частота',
      'Выбрать первый — высокая неудовлетворённость даёт лучшую мотивацию переключиться',
      'Оба слабые — нужен сегмент с приоритетом выше 500',
      'Нельзя сравнивать без данных о рынке',
    ],
    correctIndex: 1,
    explanation: 'Первый сегмент с приоритетом 240 выигрывает: высокая неудовлетворённость (5) означает сильную мотивацию переключиться на ваш продукт. Объём можно нарастить, а заставить людей страдать от текущего решения — нельзя.',
  },
  {
    question: '14. Сервис доставки еды занял 30% рынка в своём городе. Retention высокий, NPS > 50. Рост замедлился. Команда предлагает три стратегии: (A) улучшить UX заказа и скорость доставки, (B) добавить доставку продуктов и цветов, (C) стать платформой «всё для дома» с уборкой, ремонтом, няней. Какая комбинация стратегий оптимальна?',
    options: [
      'Только A (Go Deeper) — сначала нужно стать лучшими в ядре',
      'A + B: укрепить ядро и расшириться на смежные работы',
      'Сразу C (Go Higher) — захватить Big Job «управлять бытом»',
      'B + C одновременно — максимальный рост через широкий охват',
    ],
    correctIndex: 1,
    explanation: 'При высоком Retention и NPS ядро уже сильное, но Go Deeper (A) продолжает укреплять позицию. Go Wider (B) — естественный следующий шаг: adjacent jobs «купить продукты», «заказать цветы» близки к текущей работе. Go Higher (C) слишком рискован без проверки — Big Job «управлять бытом» требует совершенно других компетенций.',
  },
  {
    question: '15. Вы развиваете существующий продукт. Расставьте 5 шагов алгоритма AJTBD в правильном порядке.',
    type: 'ordering',
    options: [
      'Гипотеза / идея для развития',
      'Метрики и продуктовая стратегия',
      'ABCDX-сегментация + RAT',
      'UX / решенческие интервью',
      'Оценка стоимости реализации',
    ],
    correctIndex: 0,
    explanation: 'Правильный порядок: 1) Гипотеза → 2) Метрики и стратегия → 3) ABCDX + RAT → 4) UX-интервью → 5) Оценка стоимости. Сначала идея, потом проверка по метрикам — не наоборот.',
  },
];

export default function Module9() {
  const { completeModule, setExamScore, setCurrentModule } = useCourse();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [orderState, setOrderState] = useState<number[]>([]);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  useEffect(() => {
    const q = questions[currentQ];
    if (q.type === 'ordering') {
      const indices = q.options.map((_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      if (indices.every((v, i) => v === i)) {
        [indices[0], indices[1]] = [indices[1], indices[0]];
      }
      setOrderState(indices);
    }
    setDragOverIndex(null);
  }, [currentQ]);

  const moveItem = (fromIndex: number, direction: number) => {
    const toIndex = fromIndex + direction;
    if (toIndex < 0 || toIndex >= orderState.length) return;
    const newOrder = [...orderState];
    [newOrder[fromIndex], newOrder[toIndex]] = [newOrder[toIndex], newOrder[fromIndex]];
    setOrderState(newOrder);
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(index));
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
    if (fromIndex === toIndex) { setDragOverIndex(null); return; }
    const newOrder = [...orderState];
    const item = newOrder.splice(fromIndex, 1)[0];
    newOrder.splice(toIndex, 0, item);
    setOrderState(newOrder);
    setDragOverIndex(null);
  };

  const handleCheckOrder = () => {
    const isCorrect = orderState.every((v, i) => v === i);
    const newAnswers = [...answers];
    newAnswers[currentQ] = isCorrect ? 0 : 1;
    setAnswers(newAnswers);
    setSelectedOption(isCorrect ? 0 : 1);
    setShowExplanation(true);
  };

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
      completeModule(9);
    }
  };

  const getMessage = () => {
    if (score >= 13) return 'Вы больше не строите фичи. Вы проектируете прогресс.';
    if (score >= 10) return 'Хороший результат! Ещё немного практики — и вы мастер JTBD.';
    if (score >= 7) return 'Неплохое начало. Рекомендуем пройти модули ещё раз.';
    return 'Стоит вернуться к материалам и пройти курс заново. Вы справитесь!';
  };

  const getEmoji = () => {
    if (score >= 13) return '\u{1F3C6}';
    if (score >= 10) return '\u{1F44F}';
    if (score >= 7) return '\u{1F4DA}';
    return '\u{1F4AA}';
  };

  if (showResults) {
    return (
      <>
        <Confetti active={score >= 13} />
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
                  className={`h-full rounded-full ${score >= 13 ? 'bg-success' : score >= 8 ? 'bg-accent' : 'bg-error'}`}
                />
              </div>
              <p className="text-lg text-muted-foreground">{getMessage()}</p>
              <p className="text-base text-foreground font-medium mt-6 leading-relaxed">
                Вы теперь знаете, что важно не просто пилить фичи.<br />
                А решать задачи клиентов.
              </p>
              {score >= 10 && (
                <p className="text-sm text-accent mt-4">
                  Шпаргалка со всеми основными идеями курса ждёт вас на главной странице.
                </p>
              )}
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

          {q.type === 'ordering' ? (
            <div>
              <p className="text-xs text-muted-foreground mb-3">Перетащите шаги или используйте стрелки для изменения порядка</p>
              <div className="space-y-2">
                {orderState.map((stepIndex, position) => (
                  <div
                    key={stepIndex}
                    draggable={!showExplanation}
                    onDragStart={(e) => handleDragStart(e, position)}
                    onDragOver={(e) => handleDragOver(e, position)}
                    onDrop={(e) => handleDrop(e, position)}
                    onDragLeave={() => setDragOverIndex(null)}
                    onDragEnd={() => setDragOverIndex(null)}
                    className={`flex items-center gap-3 p-3.5 rounded-lg border transition-all select-none
                      ${showExplanation
                        ? stepIndex === position
                          ? 'border-success bg-success/5'
                          : 'border-error bg-error/5'
                        : dragOverIndex === position
                          ? 'border-accent bg-accent/5'
                          : 'border-border/50 hover:border-accent/40'
                      }
                      ${!showExplanation ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
                    `}
                  >
                    <span className={`text-xs font-bold w-5 text-center flex-shrink-0 ${
                      showExplanation
                        ? stepIndex === position ? 'text-success' : 'text-error'
                        : 'text-accent'
                    }`}>{position + 1}</span>
                    <span className="text-sm flex-1">{q.options[stepIndex]}</span>
                    {!showExplanation && (
                      <div className="flex flex-col gap-0.5 ml-2 flex-shrink-0">
                        <button
                          onClick={(e) => { e.stopPropagation(); moveItem(position, -1); }}
                          disabled={position === 0}
                          className="text-muted-foreground hover:text-accent disabled:opacity-20 transition-colors cursor-pointer disabled:cursor-default p-0.5"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 8.5L7 4.5L11 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); moveItem(position, 1); }}
                          disabled={position === orderState.length - 1}
                          className="text-muted-foreground hover:text-accent disabled:opacity-20 transition-colors cursor-pointer disabled:cursor-default p-0.5"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    )}
                    {!showExplanation && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-muted-foreground/30 flex-shrink-0">
                        <circle cx="5" cy="3" r="1" fill="currentColor" />
                        <circle cx="9" cy="3" r="1" fill="currentColor" />
                        <circle cx="5" cy="7" r="1" fill="currentColor" />
                        <circle cx="9" cy="7" r="1" fill="currentColor" />
                        <circle cx="5" cy="11" r="1" fill="currentColor" />
                        <circle cx="9" cy="11" r="1" fill="currentColor" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              {!showExplanation && (
                <button
                  onClick={handleCheckOrder}
                  className="mt-4 px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-lg
                    hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Проверить порядок
                </button>
              )}
            </div>
          ) : (
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
          )}

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
