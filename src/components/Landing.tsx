'use client';

import { motion } from 'framer-motion';
import { useCourse } from '@/context/CourseContext';

const modules = [
  {
    title: 'Введение в AJTBD',
    desc: 'Что такое Jobs To Be Done и зачем это нужно',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="6" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Core Job и Big Job',
    desc: 'Граф работ, типы и иерархия',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="7.5" y1="6" x2="5" y2="12" stroke="currentColor" strokeWidth="1" />
        <line x1="10.5" y1="6" x2="13" y2="12" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    title: 'Ценность продукта',
    desc: 'Как сделать продукт ценным через призму работ',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11.5 7H6.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 7V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 12L9 16L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Сегментация',
    desc: 'Как находить и выбирать сегменты',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Запуск нового продукта',
    desc: 'Поиск Product-Market Fit через JTBD',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 14V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 8L9 4L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Развитие существующего продукта',
    desc: 'Рост и эволюция текущего продукта',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 14L6 10L10 12L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4H16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Упаковка и рост продаж',
    desc: 'Конверсия, позиционирование, упаковка',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 9L1 7L5 3H13L17 7L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 9V15L9 17L15 15V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11V17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Стратегия роста',
    desc: 'Продуктовая стратегия через JTBD',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" />
        <path d="M9 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 14V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 9H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Алгоритм AJTBD',
    desc: 'Пошаговый процесс и инструменты',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="3" y="2" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 6H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 9H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Финальный экзамен',
    desc: '10 вопросов на проверку знаний',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2L11 6.5L16 7.2L12.5 10.5L13.3 15.5L9 13.2L4.7 15.5L5.5 10.5L2 7.2L7 6.5L9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

function HeroGraphic() {
  const nodes = [
    { cx: 160, cy: 80, r: 28, label: 'Big Job', delay: 0.3 },
    { cx: 80, cy: 180, r: 22, label: 'Core Job', delay: 0.5 },
    { cx: 240, cy: 180, r: 22, label: 'Core Job', delay: 0.6 },
    { cx: 40, cy: 270, r: 14, label: '', delay: 0.8 },
    { cx: 120, cy: 280, r: 14, label: '', delay: 0.9 },
    { cx: 200, cy: 260, r: 14, label: '', delay: 1.0 },
    { cx: 280, cy: 270, r: 14, label: '', delay: 1.1 },
  ];

  const edges = [
    { x1: 145, y1: 105, x2: 95, y2: 160, delay: 0.4 },
    { x1: 175, y1: 105, x2: 225, y2: 160, delay: 0.45 },
    { x1: 68, y1: 198, x2: 48, y2: 258, delay: 0.7 },
    { x1: 88, y1: 200, x2: 115, y2: 268, delay: 0.75 },
    { x1: 228, y1: 198, x2: 205, y2: 248, delay: 0.8 },
    { x1: 248, y1: 200, x2: 272, y2: 258, delay: 0.85 },
  ];

  return (
    <svg viewBox="0 0 320 340" fill="none" className="w-full max-w-[280px] sm:max-w-[320px]">
      {/* Glow behind main node */}
      <circle cx="160" cy="80" r="60" fill="var(--accent)" fillOpacity="0.08" />
      <circle cx="160" cy="80" r="100" fill="var(--accent)" fillOpacity="0.03" />

      {/* Edges */}
      {edges.map((e, i) => (
        <motion.line
          key={`e-${i}`}
          x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
          stroke="var(--accent)"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: e.delay, duration: 0.6, ease: 'easeOut' }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.g key={`n-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: n.delay, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        >
          <circle cx={n.cx} cy={n.cy} r={n.r} fill="var(--accent)" fillOpacity={i === 0 ? 0.15 : i < 3 ? 0.1 : 0.06} stroke="var(--accent)" strokeWidth={i === 0 ? 2 : 1.5} strokeOpacity={i < 3 ? 0.5 : 0.3} />
          {n.label && (
            <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize={i === 0 ? '10' : '8'} fontWeight="600" fill="var(--accent)" fillOpacity="0.8">
              {n.label}
            </text>
          )}
        </motion.g>
      ))}

      {/* Pulse on main node */}
      <motion.circle
        cx="160" cy="80" r="28"
        fill="none" stroke="var(--accent)" strokeWidth="1"
        initial={{ r: 28, opacity: 0.4 }}
        animate={{ r: 50, opacity: 0 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* Small decorative dots */}
      {[
        { cx: 20, cy: 140 },
        { cx: 300, cy: 120 },
        { cx: 60, cy: 320 },
        { cx: 260, cy: 310 },
      ].map((d, i) => (
        <motion.circle
          key={`dot-${i}`}
          cx={d.cx} cy={d.cy} r="2"
          fill="var(--accent)"
          fillOpacity="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ delay: 1.5 + i * 0.3, duration: 3, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

const trustItems = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="1" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 4H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M5 6.5H9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M5 9H7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    text: '10 модулей',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="1" y="5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6 7.5H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M10.5 6V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    text: 'Интерактивные задания',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 7L6.5 8.5L9 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: 'Финальный экзамен',
  },
];

export default function Landing() {
  const { setCurrentModule, completedModules } = useCourse();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl mx-auto px-6 py-16"
    >
      {/* Hero section */}
      <motion.div variants={item} className="mb-16 relative">
        {/* Gradient glow */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/[0.06] blur-[100px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 relative">
          <div className="flex-1">
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4"
              variants={item}
            >
              Интерактивный курс
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]"
              variants={item}
            >
              Advanced Jobs
              <br />
              To Be Done
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground mt-4 max-w-lg"
              variants={item}
            >
              Научитесь понимать, почему люди покупают, и создавайте продукты,
              которые люди действительно нанимают для решения своих задач.
            </motion.p>
            <motion.div variants={item} className="mt-8 flex gap-3">
              <button
                onClick={() => setCurrentModule(1)}
                className="px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-lg
                  hover:opacity-90 transition-opacity cursor-pointer"
              >
                Начать курс
              </button>
              <span className="text-sm text-muted-foreground self-center">
                ~25 минут
              </span>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-4">
              {trustItems.map((t, i) => (
                <div key={i} className="flex items-center gap-1.5 text-muted-foreground">
                  <span className="opacity-60">{t.icon}</span>
                  <span className="text-xs">{t.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero graphic */}
          <motion.div
            variants={item}
            className="flex-shrink-0 hidden sm:block"
          >
            <HeroGraphic />
          </motion.div>
        </div>
      </motion.div>

      {/* Module list */}
      <motion.div variants={item}>
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
          Содержание
        </h2>
        <div className="space-y-1">
          {modules.map((mod, i) => (
            <motion.button
              key={i}
              variants={item}
              onClick={() => setCurrentModule(i + 1)}
              className="w-full text-left p-4 rounded-lg hover:bg-muted/50 transition-colors
                flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent group-hover:bg-accent/20 transition-colors">
                  {mod.icon}
                </div>
                <div>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors">
                    {mod.title}
                  </span>
                  <span className="text-xs text-muted-foreground block mt-0.5">{mod.desc}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {completedModules.has(i + 1) && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-success">
                    <path d="M13.25 4.75L6 12L2.75 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground/30 group-hover:text-accent transition-colors">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
