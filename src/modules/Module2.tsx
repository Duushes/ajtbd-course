'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import DragDrop from '@/components/DragDrop';
import InputExercise from '@/components/InputExercise';
import { motion } from 'framer-motion';

export default function Module2() {
  return (
    <ModuleWrapper
      moduleIndex={2}
      title="Core Job и Big Job"
      subtitle="Как устроен граф работ и иерархия потребностей"
      readingList={[
        {
          title: 'Ваня Замесин — Введение в Advanced Jobs To Be Done',
          url: 'https://zamesin.ru/producthowto/book/introduction-to-advanced-jobs-to-be-done/',
        },
        {
          title: 'Ваня Замесин — Невероятная сила привычки',
          url: 'https://zamesin.ru/producthowto/book/incredibly-strong-habit/',
        },
        {
          title: 'Примеры графов работ (Figma)',
          url: 'https://www.figma.com/board/kF80PkiEXq3NionAfw4TYN/',
        },
      ]}
    >
      {/* --- Введение в граф работ --- */}
      <motion.div variants={fadeInItem} className="prose prose-invert max-w-none mb-10">
        <h2 className="text-xl font-semibold mb-4">Граф работ: ключевая инновация AJTBD</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Граф работ</strong> (Job Graph) &mdash; это главное отличие
          Advanced JTBD от классического JTBD. Если классический фреймворк фокусируется на одной работе,
          то AJTBD рассматривает <strong className="text-foreground">систему связанных работ</strong>,
          которые образуют сложную сеть &mdash; не дерево, а именно граф.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          В графе работ связи <strong className="text-foreground">многие-ко-многим</strong>: одна Big Job может
          включать несколько Core Jobs, а одна Core Job может служить нескольким Big Jobs одновременно.
          Это даёт продуктовой команде полную картину: где ваш продукт, кто реальные конкуренты,
          и куда можно расти.
        </p>
      </motion.div>

      {/* --- Big Job --- */}
      <motion.div variants={fadeInItem} className="mb-8 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent">
              <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="9" cy="9" r="3" fill="currentColor" opacity="0.3" />
              <path d="M9 1.5V4.5M9 13.5V16.5M1.5 9H4.5M13.5 9H16.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            </svg>
          </div>
          <h3 className="text-base font-semibold">Big Job &mdash; Большая работа</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Big Job</strong> &mdash; это высокоуровневая жизненная или бизнес-цель.
          Она отражает глубинное стремление человека и редко меняется. Одна Big Job может быть связана
          с несколькими Core Jobs &mdash; это открывает возможности для роста продукта.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">&laquo;Быть здоровым&raquo;</span>
          <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">&laquo;Обеспечить семью&raquo;</span>
          <span className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">&laquo;Масштабировать бизнес&raquo;</span>
        </div>
      </motion.div>

      {/* --- Core Job --- */}
      <motion.div variants={fadeInItem} className="mb-8 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-success">
              <rect x="3" y="3" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M6.5 9L8.5 11L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-base font-semibold">Core Job &mdash; Основная работа</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Core Job</strong> &mdash; это конкретная работа, ради которой
          человек &laquo;нанимает&raquo; ваш продукт. Важно: одна Core Job может служить разным Big Jobs
          у разных людей. Например, &laquo;организовать перелёт&raquo; может быть частью &laquo;отдохнуть в отпуске&raquo;
          или &laquo;провести деловую встречу&raquo;.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-success/10 text-success border border-success/20">&laquo;Поддерживать физическую форму&raquo;</span>
          <span className="px-3 py-1 text-xs rounded-full bg-success/10 text-success border border-success/20">&laquo;Управлять финансами семьи&raquo;</span>
          <span className="px-3 py-1 text-xs rounded-full bg-success/10 text-success border border-success/20">&laquo;Автоматизировать продажи&raquo;</span>
        </div>
      </motion.div>

      {/* --- Small Jobs --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-warning/10 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-warning">
              <rect x="4" y="5" width="10" height="2" rx="1" fill="currentColor" />
              <rect x="4" y="8.5" width="10" height="2" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="4" y="12" width="7" height="2" rx="1" fill="currentColor" opacity="0.3" />
            </svg>
          </div>
          <h3 className="text-base font-semibold">Small Jobs &mdash; Малые работы</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Small Jobs</strong> &mdash; это подзадачи внутри Core Job.
          Ещё глубже выделяются <strong className="text-foreground">Micro Jobs</strong> &mdash; элементарные действия
          внутри Small Job. Чем детальнее вы разбиваете работу, тем точнее можете найти проблемы.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs rounded-full bg-warning/10 text-warning border border-warning/20">&laquo;Найти рейс&raquo; (Small Job)</span>
          <span className="px-3 py-1 text-xs rounded-full bg-warning/10 text-warning border border-warning/20">&laquo;Сравнить цены&raquo; (Micro Job)</span>
          <span className="px-3 py-1 text-xs rounded-full bg-warning/10 text-warning border border-warning/20">&laquo;Выбрать места&raquo; (Micro Job)</span>
        </div>
      </motion.div>

      {/* --- SVG: Job Graph Tree --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-6">Граф работ: визуальная структура</h2>
        <div className="flex justify-center my-6">
          <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            {/* Big Job (top) */}
            <rect x="210" y="10" width="180" height="50" rx="10" className="text-accent/60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="210" y="10" width="180" height="50" rx="10" className="text-accent/5" fill="currentColor" />
            <text x="300" y="40" textAnchor="middle" className="text-foreground" fontSize="12" fontWeight="600" fill="currentColor">Big Job</text>

            {/* Connectors Big → Core */}
            <line x1="260" y1="60" x2="150" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            <line x1="300" y1="60" x2="300" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-border" />
            <line x1="340" y1="60" x2="450" y2="100" stroke="currentColor" strokeWidth="1.5" className="text-border" />

            {/* Core Job 1 */}
            <rect x="60" y="100" width="180" height="50" rx="10" className="text-success/60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="60" y="100" width="180" height="50" rx="10" className="text-success/5" fill="currentColor" />
            <text x="150" y="130" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Core Job 1</text>

            {/* Core Job 2 */}
            <rect x="210" y="100" width="180" height="50" rx="10" className="text-success/60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="210" y="100" width="180" height="50" rx="10" className="text-success/5" fill="currentColor" />
            <text x="300" y="130" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Core Job 2</text>

            {/* Core Job 3 */}
            <rect x="360" y="100" width="180" height="50" rx="10" className="text-success/60" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <rect x="360" y="100" width="180" height="50" rx="10" className="text-success/5" fill="currentColor" />
            <text x="450" y="130" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Core Job 3</text>

            {/* Connectors Core 1 → Small */}
            <line x1="110" y1="150" x2="70" y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />
            <line x1="150" y1="150" x2="150" y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />
            <line x1="190" y1="150" x2="230" y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />

            {/* Small Jobs under Core 1 */}
            <rect x="30" y="190" width="80" height="36" rx="8" className="text-warning/50" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="30" y="190" width="80" height="36" rx="8" className="text-warning/5" fill="currentColor" />
            <text x="70" y="212" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Small Job</text>

            <rect x="115" y="190" width="80" height="36" rx="8" className="text-warning/50" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="115" y="190" width="80" height="36" rx="8" className="text-warning/5" fill="currentColor" />
            <text x="155" y="212" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Small Job</text>

            <rect x="200" y="190" width="80" height="36" rx="8" className="text-warning/50" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="200" y="190" width="80" height="36" rx="8" className="text-warning/5" fill="currentColor" />
            <text x="240" y="212" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Small Job</text>

            {/* Connectors Core 3 → Small */}
            <line x1="410" y1="150" x2="370" y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />
            <line x1="450" y1="150" x2="450" y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />
            <line x1="490" y1="150" x2="530" y2="190" stroke="currentColor" strokeWidth="1" className="text-border" />

            {/* Small Jobs under Core 3 */}
            <rect x="330" y="190" width="80" height="36" rx="8" className="text-warning/50" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="330" y="190" width="80" height="36" rx="8" className="text-warning/5" fill="currentColor" />
            <text x="370" y="212" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Small Job</text>

            <rect x="415" y="190" width="80" height="36" rx="8" className="text-warning/50" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="415" y="190" width="80" height="36" rx="8" className="text-warning/5" fill="currentColor" />
            <text x="455" y="212" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Small Job</text>

            <rect x="500" y="190" width="80" height="36" rx="8" className="text-warning/50" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="500" y="190" width="80" height="36" rx="8" className="text-warning/5" fill="currentColor" />
            <text x="540" y="212" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Small Job</text>

            {/* Legend */}
            <rect x="150" y="260" width="12" height="12" rx="3" className="text-accent/40" fill="currentColor" />
            <text x="170" y="270" className="text-muted-foreground" fontSize="10" fill="currentColor">Big Job</text>

            <rect x="240" y="260" width="12" height="12" rx="3" className="text-success/40" fill="currentColor" />
            <text x="260" y="270" className="text-muted-foreground" fontSize="10" fill="currentColor">Core Job</text>

            <rect x="340" y="260" width="12" height="12" rx="3" className="text-warning/40" fill="currentColor" />
            <text x="360" y="270" className="text-muted-foreground" fontSize="10" fill="currentColor">Small Job</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Критические последовательности --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <h3 className="text-base font-semibold mb-4">Критические последовательности</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          В графе работ есть <strong className="text-foreground">критические последовательности</strong> &mdash;
          цепочки работ, которые должны быть выполнены в определённом порядке. Если одна работа в цепочке
          &laquo;ломается&raquo;, вся последовательность останавливается. Это главные точки для создания ценности.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Пример (Aviasales): &laquo;Решить куда лететь&raquo; → &laquo;Найти рейс&raquo; → &laquo;Сравнить цены&raquo; →
          &laquo;Купить билет&raquo; → &laquo;Забронировать жильё&raquo;. Если &laquo;Найти рейс&raquo; слишком сложно,
          человек может отказаться от поездки целиком.
        </p>
      </motion.div>

      {/* --- Типы работ --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Три типа работ</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Каждая работа в графе может иметь <strong className="text-foreground">функциональный</strong>,{' '}
          <strong className="text-foreground">эмоциональный</strong> и{' '}
          <strong className="text-foreground">социальный</strong> компоненты. Понимание всех трёх
          помогает создать продукт, который решает работу целиком.
        </p>

        {/* SVG: Three Job Types */}
        <div className="flex justify-center my-6">
          <svg viewBox="0 0 580 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            {/* Functional */}
            <rect x="10" y="20" width="170" height="130" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-accent/50" fill="none" />
            <rect x="10" y="20" width="170" height="130" rx="12" className="text-accent/5" fill="currentColor" />
            {/* Gear icon */}
            <circle cx="95" cy="55" r="14" stroke="currentColor" strokeWidth="1.5" className="text-accent" fill="none" />
            <circle cx="95" cy="55" r="5" stroke="currentColor" strokeWidth="1.5" className="text-accent" fill="none" />
            <line x1="95" y1="41" x2="95" y2="37" stroke="currentColor" strokeWidth="1.5" className="text-accent" strokeLinecap="round" />
            <line x1="95" y1="69" x2="95" y2="73" stroke="currentColor" strokeWidth="1.5" className="text-accent" strokeLinecap="round" />
            <line x1="81" y1="55" x2="77" y2="55" stroke="currentColor" strokeWidth="1.5" className="text-accent" strokeLinecap="round" />
            <line x1="109" y1="55" x2="113" y2="55" stroke="currentColor" strokeWidth="1.5" className="text-accent" strokeLinecap="round" />
            <text x="95" y="92" textAnchor="middle" className="text-foreground" fontSize="12" fontWeight="600" fill="currentColor">Функциональная</text>
            <text x="95" y="108" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Сделать что-то</text>
            <text x="95" y="122" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">конкретное</text>
            <text x="95" y="140" textAnchor="middle" className="text-accent" fontSize="10" fontStyle="italic" fill="currentColor">&laquo;Добраться до работы&raquo;</text>

            {/* Emotional */}
            <rect x="205" y="20" width="170" height="130" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-error/50" fill="none" />
            <rect x="205" y="20" width="170" height="130" rx="12" className="text-error/5" fill="currentColor" />
            {/* Heart icon */}
            <path d="M290 48C290 44 286 40 282 40C278 40 275 43 275 46C275 43 272 40 268 40C264 40 260 44 260 48C260 56 275 65 275 65C275 65 290 56 290 48Z" stroke="currentColor" strokeWidth="1.5" className="text-error" fill="none" />
            <text x="290" y="92" textAnchor="middle" className="text-foreground" fontSize="12" fontWeight="600" fill="currentColor">Эмоциональная</text>
            <text x="290" y="108" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Чувствовать</text>
            <text x="290" y="122" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">определённым образом</text>
            <text x="290" y="140" textAnchor="middle" className="text-error" fontSize="10" fontStyle="italic" fill="currentColor">&laquo;Чувствовать себя уверенно&raquo;</text>

            {/* Social */}
            <rect x="400" y="20" width="170" height="130" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-success/50" fill="none" />
            <rect x="400" y="20" width="170" height="130" rx="12" className="text-success/5" fill="currentColor" />
            {/* People icon */}
            <circle cx="478" cy="45" r="6" stroke="currentColor" strokeWidth="1.5" className="text-success" fill="none" />
            <path d="M466 65C466 59 471 54 478 54C485 54 490 59 490 65" stroke="currentColor" strokeWidth="1.5" className="text-success" strokeLinecap="round" fill="none" />
            <circle cx="492" cy="47" r="4" stroke="currentColor" strokeWidth="1" className="text-success" fill="none" opacity="0.5" />
            <text x="485" y="92" textAnchor="middle" className="text-foreground" fontSize="12" fontWeight="600" fill="currentColor">Социальная</text>
            <text x="485" y="108" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Быть воспринятым</text>
            <text x="485" y="122" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">определённым образом</text>
            <text x="485" y="140" textAnchor="middle" className="text-success" fontSize="10" fontStyle="italic" fill="currentColor">&laquo;Выглядеть успешным&raquo;</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Зачем нужен граф --- */}
      <motion.div variants={fadeInItem} className="mb-10 prose prose-invert max-w-none">
        <h2 className="text-xl font-semibold mb-4">Зачем продуктовой команде граф работ</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Граф работ даёт три ключевых преимущества:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-2 text-accent">Конкурентный ландшафт</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Видите все решения, которые &laquo;нанимаются&raquo; на те же работы &mdash; включая неочевидных конкурентов из других категорий.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-2 text-success">Точки роста</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Находите смежные работы в графе, на которые можно расширить продукт. Так Yandex Taxi вырос из &laquo;доехать&raquo; в доставку еды и посылок.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-2 text-error">Приоритизация</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Понимаете, какие работы критичны (часть критической последовательности), а какие второстепенны. Это определяет, куда инвестировать ресурсы.
            </p>
          </div>
        </div>
      </motion.div>

      {/* --- Пример: от Big Job до Small Jobs --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <h3 className="text-base font-semibold mb-4">Пример графа: Aviasales</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Big Job:</strong> Организовать отпуск / Провести деловую поездку
            </span>
          </div>
          <div className="flex items-center gap-3 ml-6">
            <span className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Core Job:</strong> Организовать перелёт (купить билеты)
            </span>
          </div>
          <div className="flex items-center gap-3 ml-12">
            <span className="w-1.5 h-1.5 rounded-full bg-warning flex-shrink-0" />
            <span className="text-muted-foreground">Small Job: Найти подходящий рейс</span>
          </div>
          <div className="flex items-center gap-3 ml-12">
            <span className="w-1.5 h-1.5 rounded-full bg-warning flex-shrink-0" />
            <span className="text-muted-foreground">Small Job: Сравнить цены у разных авиакомпаний</span>
          </div>
          <div className="flex items-center gap-3 ml-12">
            <span className="w-1.5 h-1.5 rounded-full bg-warning flex-shrink-0" />
            <span className="text-muted-foreground">Small Job: Купить билет по лучшей цене</span>
          </div>
          <div className="flex items-center gap-3 ml-6 mt-1 opacity-70">
            <span className="w-2 h-2 rounded-full bg-success flex-shrink-0" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Core Job 2:</strong> Забронировать жильё (смежная работа &rarr; точка роста)
            </span>
          </div>
        </div>
      </motion.div>

      {/* --- Quiz --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-lg font-semibold mb-2">Проверьте понимание</h3>
        <Quiz
          question="Чем граф работ в AJTBD принципиально отличается от простого списка задач?"
          options={[
            {
              text: 'Граф работ — это просто другое название для бэклога',
              explanation: 'Бэклог — это список задач для команды. Граф работ описывает систему потребностей пользователя, это совсем другой уровень анализа.',
            },
            {
              text: 'Связи в графе многие-ко-многим: одна работа может быть частью нескольких Big Jobs',
              correct: true,
              explanation: 'Верно! Это ключевая особенность графа. Например, «организовать перелёт» может быть частью и «отдохнуть в отпуске», и «провести деловую встречу». Это раскрывает неочевидных конкурентов и точки роста.',
            },
            {
              text: 'Граф работ учитывает только функциональные задачи',
              explanation: 'Граф включает все типы работ: функциональные, эмоциональные и социальные на каждом уровне.',
            },
            {
              text: 'Граф работ строится один раз и никогда не меняется',
              explanation: 'Граф работ эволюционирует: появляются новые решения, меняются контексты, возникают новые работы. Его нужно регулярно обновлять.',
            },
          ]}
        />
      </motion.div>

      {/* --- DragDrop: типы работ --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Упражнение: Определите тип работы</h3>
        <DragDrop
          instruction="Перетащите каждую работу в правильную категорию: функциональная, эмоциональная или социальная."
          items={[
            { id: 'func1', text: '«Быстро оплатить счёт»' },
            { id: 'emot1', text: '«Не тревожиться о деньгах»' },
            { id: 'soc1', text: '«Выглядеть щедрым перед друзьями»' },
          ]}
          zones={[
            { id: 'functional', label: 'Функциональная', acceptIds: ['func1'] },
            { id: 'emotional', label: 'Эмоциональная', acceptIds: ['emot1'] },
            { id: 'social', label: 'Социальная', acceptIds: ['soc1'] },
          ]}
        />
      </motion.div>

      {/* --- InputExercise --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Практика: Постройте свой граф</h3>
        <InputExercise
          prompt="Постройте граф работ для знакомого продукта. Укажите Big Job, Core Job, 2-3 Small Jobs и хотя бы одну смежную Core Job (точку роста). Попробуйте найти связь «многие-ко-многим»."
          placeholder="Продукт: ..., Big Job: ..., Core Job: ..., Small Jobs: ..., Смежная Core Job: ..."
          hint="Начните с «Зачем человек вообще это делает?» (Big Job). Затем «Что конкретно продукт помогает?» (Core Job). «Из каких шагов это состоит?» (Small Jobs). «Какие ещё работы рядом?» (смежные Core Jobs — точки роста)."
          exampleAnswer="Продукт: Яндекс Такси. Big Job: Быстро добраться до нужного места. Core Job: Заказать поездку по городу. Small Jobs: 1) Указать адрес, 2) Выбрать тариф, 3) Отследить машину. Смежная Core Job: Доставить посылку / Заказать еду. Связь многие-ко-многим: «Заказать поездку» может служить как «Добраться до работы», так и «Организовать встречу с друзьями»."
        />
      </motion.div>
    </ModuleWrapper>
  );
}
