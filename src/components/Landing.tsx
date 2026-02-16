'use client';

import { useState, useEffect, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    title: 'Финальный экзамен',
    desc: '15 вопросов на проверку знаний',
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
    text: '9 модулей',
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

function FourForcesDiagram() {
  return (
    <svg viewBox="0 0 280 180" fill="none" className="w-full max-w-[280px] mx-auto">
      {/* Push arrow */}
      <rect x="20" y="30" width="100" height="28" rx="6" fill="var(--success)" fillOpacity="0.12" stroke="var(--success)" strokeWidth="1.2" />
      <text x="70" y="48" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--success)">Push</text>
      <path d="M120 44 L140 44" stroke="var(--success)" strokeWidth="1.5" markerEnd="url(#arrowGreen)" />
      {/* Pull arrow */}
      <rect x="160" y="30" width="100" height="28" rx="6" fill="var(--success)" fillOpacity="0.12" stroke="var(--success)" strokeWidth="1.2" />
      <text x="210" y="48" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--success)">Pull</text>
      {/* Переключение center */}
      <rect x="90" y="80" width="100" height="28" rx="6" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="1.2" />
      <text x="140" y="98" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--accent)">Переключение</text>
      {/* Inertia arrow */}
      <rect x="20" y="130" width="100" height="28" rx="6" fill="var(--error)" fillOpacity="0.12" stroke="var(--error)" strokeWidth="1.2" />
      <text x="70" y="148" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--error)">Inertia</text>
      <path d="M120 144 L140 144" stroke="var(--error)" strokeWidth="1.5" />
      {/* Anxiety arrow */}
      <rect x="160" y="130" width="100" height="28" rx="6" fill="var(--error)" fillOpacity="0.12" stroke="var(--error)" strokeWidth="1.2" />
      <text x="210" y="148" textAnchor="middle" fontSize="10" fontWeight="600" fill="var(--error)">Anxiety</text>
      {/* Down arrows to center */}
      <path d="M70 58 L120 80" stroke="var(--success)" strokeWidth="1.2" strokeDasharray="4 2" />
      <path d="M210 58 L160 80" stroke="var(--success)" strokeWidth="1.2" strokeDasharray="4 2" />
      {/* Up arrows from bottom */}
      <path d="M70 130 L120 108" stroke="var(--error)" strokeWidth="1.2" strokeDasharray="4 2" />
      <path d="M210 130 L160 108" stroke="var(--error)" strokeWidth="1.2" strokeDasharray="4 2" />
      {/* Labels */}
      <text x="140" y="18" textAnchor="middle" fontSize="8" fill="var(--success)" fillOpacity="0.7">Толкают к новому</text>
      <text x="140" y="175" textAnchor="middle" fontSize="8" fill="var(--error)" fillOpacity="0.7">Удерживают на месте</text>
    </svg>
  );
}

function JobGraphDiagram() {
  return (
    <svg viewBox="0 0 280 160" fill="none" className="w-full max-w-[280px] mx-auto">
      {/* Big Job */}
      <rect x="100" y="5" width="80" height="30" rx="8" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="1.3" />
      <text x="140" y="24" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--accent)">Big Job</text>
      {/* Core Jobs */}
      <rect x="30" y="55" width="80" height="26" rx="6" fill="var(--accent)" fillOpacity="0.10" stroke="var(--accent)" strokeWidth="1" />
      <text x="70" y="72" textAnchor="middle" fontSize="8" fontWeight="500" fill="var(--accent)">Core Job</text>
      <rect x="170" y="55" width="80" height="26" rx="6" fill="var(--accent)" fillOpacity="0.10" stroke="var(--accent)" strokeWidth="1" />
      <text x="210" y="72" textAnchor="middle" fontSize="8" fontWeight="500" fill="var(--accent)">Core Job</text>
      {/* Small Jobs */}
      <rect x="5" y="100" width="60" height="22" rx="5" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="35" y="114" textAnchor="middle" fontSize="7" fill="var(--accent)" fillOpacity="0.8">Small Job</text>
      <rect x="75" y="100" width="60" height="22" rx="5" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="105" y="114" textAnchor="middle" fontSize="7" fill="var(--accent)" fillOpacity="0.8">Small Job</text>
      <rect x="145" y="100" width="60" height="22" rx="5" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="175" y="114" textAnchor="middle" fontSize="7" fill="var(--accent)" fillOpacity="0.8">Small Job</text>
      <rect x="215" y="100" width="60" height="22" rx="5" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" />
      <text x="245" y="114" textAnchor="middle" fontSize="7" fill="var(--accent)" fillOpacity="0.8">Small Job</text>
      {/* Adjacent */}
      <rect x="90" y="135" width="100" height="20" rx="5" fill="var(--warning)" fillOpacity="0.08" stroke="var(--warning)" strokeWidth="0.8" strokeDasharray="3 2" />
      <text x="140" y="149" textAnchor="middle" fontSize="7" fill="var(--warning)" fillOpacity="0.8">Adjacent Jobs</text>
      {/* Lines */}
      <line x1="120" y1="35" x2="90" y2="55" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="160" y1="35" x2="190" y2="55" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="55" y1="81" x2="35" y2="100" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="85" y1="81" x2="105" y2="100" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="195" y1="81" x2="175" y2="100" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="225" y1="81" x2="245" y2="100" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Dashed to adjacent */}
      <line x1="105" y1="122" x2="120" y2="135" stroke="var(--warning)" strokeWidth="0.7" strokeOpacity="0.4" strokeDasharray="3 2" />
      <line x1="175" y1="122" x2="160" y2="135" stroke="var(--warning)" strokeWidth="0.7" strokeOpacity="0.4" strokeDasharray="3 2" />
    </svg>
  );
}

function ABCDXDiagram() {
  const segments = [
    { label: 'A', h: 90, color: 'var(--success)', desc: 'Идеальные' },
    { label: 'B', h: 70, color: 'var(--accent)', desc: 'Хорошие' },
    { label: 'C', h: 45, color: 'var(--warning)', desc: 'Сложные' },
    { label: 'D', h: 20, color: 'var(--error)', desc: 'Невозможные' },
    { label: 'X', h: 60, color: 'var(--accent)', desc: 'Будущие A' },
  ];
  return (
    <svg viewBox="0 0 260 130" fill="none" className="w-full max-w-[260px] mx-auto">
      {segments.map((s, i) => (
        <g key={s.label}>
          <rect x={15 + i * 50} y={100 - s.h} width="32" height={s.h} rx="4" fill={s.color} fillOpacity="0.15" stroke={s.color} strokeWidth="1" />
          <text x={31 + i * 50} y={95 - s.h} textAnchor="middle" fontSize="11" fontWeight="700" fill={s.color}>{s.label}</text>
          <text x={31 + i * 50} y={115} textAnchor="middle" fontSize="6.5" fill={s.color} fillOpacity="0.7">{s.desc}</text>
        </g>
      ))}
      {/* X dashed arrow to A */}
      <path d="M230 50 C240 30, 50 20, 40 30" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="3 2" strokeOpacity="0.5" fill="none" />
      <text x="140" y="18" textAnchor="middle" fontSize="6" fill="var(--accent)" fillOpacity="0.6">X → A со временем</text>
    </svg>
  );
}

function AlgorithmDiagram({ steps, title }: { steps: string[]; title: string }) {
  const h = 24;
  const gap = 8;
  const totalH = steps.length * h + (steps.length - 1) * gap + 30;
  return (
    <svg viewBox={`0 0 220 ${totalH}`} fill="none" className="w-full max-w-[220px] mx-auto">
      <text x="110" y="14" textAnchor="middle" fontSize="8" fontWeight="600" fill="var(--accent)" fillOpacity="0.7">{title}</text>
      {steps.map((step, i) => {
        const y = 24 + i * (h + gap);
        return (
          <g key={i}>
            <rect x="10" y={y} width="200" height={h} rx="6" fill="var(--accent)" fillOpacity={0.06 + i * 0.02} stroke="var(--accent)" strokeWidth="0.8" strokeOpacity={0.3 + i * 0.1} />
            <text x="20" y={y + 15} fontSize="8" fill="var(--accent)" fontWeight="600">{i + 1}.</text>
            <text x="34" y={y + 15} fontSize="7.5" fill="var(--foreground)" fillOpacity="0.7">{step}</text>
            {i < steps.length - 1 && (
              <line x1="110" y1={y + h} x2="110" y2={y + h + gap} stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.3" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function DiagramLightbox({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative bg-background rounded-2xl border border-border/50 p-6 max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="w-full">{children}</div>
      </motion.div>
    </motion.div>
  );
}

function ClickableDiagram({ label, children }: { label: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="w-full cursor-pointer group relative rounded-lg hover:bg-muted/30 transition-colors p-1"
        title="Нажмите для увеличения"
      >
        {children}
        <span className="absolute top-1 right-1 text-[10px] text-muted-foreground/50 group-hover:text-accent transition-colors flex items-center gap-0.5">
          <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
            <path d="M6 2H2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14H14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 2L7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M14 14L9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <DiagramLightbox onClose={() => setOpen(false)}>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4 text-center">{label}</p>
            {children}
          </DiagramLightbox>
        )}
      </AnimatePresence>
    </>
  );
}

function CheatSheetBlock() {
  return (
    <div className="space-y-4 mt-4">
      {/* Терминология */}
      <div className="p-4 rounded-xl bg-card border border-border/50">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Терминология</p>
        <div className="grid sm:grid-cols-3 gap-2 text-xs text-muted-foreground">
          <div><strong className="text-foreground">Работа (Job)</strong> — цель клиента: Точка А → Точка Б. Формула: «хочу + глагол»</div>
          <div><strong className="text-foreground">Решение (Solution)</strong> — всё, чем выполняют работу: продукт, сервис, свои действия</div>
          <div><strong className="text-foreground">Найм (Hiring)</strong> — акт выбора решения. «Нанял Такси на работу добраться до офиса»</div>
        </div>
      </div>

      {/* Граф работ — с кликабельной диаграммой */}
      <div className="p-4 rounded-xl bg-card border border-border/50">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Граф работ</p>
        <ClickableDiagram label="Граф работ">
          <JobGraphDiagram />
        </ClickableDiagram>
      </div>

      {/* Четыре силы — с кликабельной диаграммой */}
      <div className="p-4 rounded-xl bg-card border border-border/50">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Четыре силы переключения</p>
        <p className="text-xs text-muted-foreground mb-3 text-center">
          <span className="text-success font-medium">Push + Pull</span>
          {' > '}
          <span className="text-error font-medium">Inertia + Anxiety</span>
          {' = переключение'}
        </p>
        <ClickableDiagram label="Четыре силы переключения">
          <FourForcesDiagram />
        </ClickableDiagram>
      </div>

      {/* Сегментация ABCDX — с кликабельной диаграммой */}
      <div className="p-4 rounded-xl bg-card border border-border/50">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Сегментация ABCDX</p>
        <ClickableDiagram label="ABCDX-сегментация">
          <ABCDXDiagram />
        </ClickableDiagram>
        <div className="space-y-1 text-xs text-muted-foreground mt-3">
          <div><strong className="text-foreground">Сегмент</strong> = Работа + Текущее решение</div>
          <div><strong className="text-foreground">Приоритет</strong> = Объём × Неудовлетворённость × Частота × Важность</div>
        </div>
      </div>

      {/* Алгоритмы — с кликабельными диаграммами */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="p-4 rounded-xl bg-card border border-border/50">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Запуск нового продукта</p>
          <ClickableDiagram label="Алгоритм запуска нового продукта">
            <AlgorithmDiagram
              title=""
              steps={[
                'Гипотеза о работе клиента',
                'Анализ рынка и стратегии',
                'Сегменты + валидация + RAT',
                'Решенческие интервью / UX',
                'Оценка стоимости',
              ]}
            />
          </ClickableDiagram>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border/50">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Развитие существующего</p>
          <ClickableDiagram label="Алгоритм развития продукта">
            <AlgorithmDiagram
              title=""
              steps={[
                'Гипотеза / идея развития',
                'Метрики и стратегия',
                'ABCDX + RAT',
                'Решенческие интервью / UX',
                'Оценка стоимости',
              ]}
            />
          </ClickableDiagram>
        </div>
      </div>

      {/* Стратегии + RAT + Коммуникация */}
      <div className="grid sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-xl bg-card border border-border/50">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Стратегии роста</p>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <div><strong className="text-foreground">Deeper</strong> — решать ядро лучше</div>
            <div><strong className="text-foreground">Wider</strong> — смежные работы</div>
            <div><strong className="text-foreground">Higher</strong> — к Big Job</div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border/50">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">RAT</p>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <div>Найди <strong className="text-foreground">одно допущение</strong>, без которого идея рушится</div>
            <div>Проверь минимальным экспериментом</div>
            <div>
              <span className="text-success">Да</span> → дальше,{' '}
              <span className="text-error">Нет</span> → пивот,{' '}
              <span className="text-warning">?</span> → переделай
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-card border border-border/50">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Коммуникация</p>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <div><strong className="text-foreground">Осознание</strong> — контент, блог</div>
            <div><strong className="text-foreground">Поиск</strong> — SEO, отзывы</div>
            <div><strong className="text-foreground">Покупка</strong> — демо, гарантии</div>
          </div>
        </div>
      </div>

      {/* Формула */}
      <div className="p-3 rounded-xl bg-accent/5 border border-accent/20 text-center">
        <p className="text-xs text-accent font-medium">
          Продавай работу, а не продукт. Формула: «Мы помогаем, когда [контекст], вы хотите [результат], чтобы [трансформация]»
        </p>
      </div>
    </div>
  );
}

export default function Landing() {
  const { setCurrentModule, completedModules, openCheatSheet, setOpenCheatSheet } = useCourse();
  const [showCheatSheet, setShowCheatSheet] = useState(false);
  const examPassed = completedModules.has(9);

  useEffect(() => {
    if (openCheatSheet && examPassed) {
      setShowCheatSheet(true);
      setOpenCheatSheet(false);
    }
  }, [openCheatSheet, examPassed, setOpenCheatSheet]);

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
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentModule(1)}
                className="px-6 py-2.5 bg-accent text-white text-sm font-medium rounded-lg
                  hover:opacity-90 transition-opacity cursor-pointer"
              >
                Начать курс
              </button>
              {examPassed && (
                <button
                  onClick={() => setShowCheatSheet(true)}
                  className="px-5 py-2.5 border border-accent/30 text-accent text-sm font-medium rounded-lg
                    hover:bg-accent/10 transition-colors cursor-pointer flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="1" width="12" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M5 4.5H11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <path d="M5 7H11" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    <path d="M5 9.5H8.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  Шпаргалка
                </button>
              )}
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

      {/* Cheat sheet modal */}
      <AnimatePresence>
        {showCheatSheet && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-8 px-4"
            onClick={(e) => { if (e.target === e.currentTarget) setShowCheatSheet(false); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full max-w-2xl bg-background border border-border/50 rounded-2xl shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-border/50 bg-background/95 backdrop-blur-sm rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent">
                    <rect x="2" y="1" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M5.5 5H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M5.5 8H12.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <path d="M5.5 11H9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <h2 className="text-sm font-semibold uppercase tracking-wider">Шпаргалка AJTBD</h2>
                </div>
                <button
                  onClick={() => setShowCheatSheet(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-muted/50 transition-colors cursor-pointer text-muted-foreground hover:text-foreground"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              {/* Content */}
              <div className="p-5">
                <CheatSheetBlock />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
