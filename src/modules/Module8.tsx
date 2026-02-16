'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import DragDrop from '@/components/DragDrop';
import ScenarioCard from '@/components/ScenarioCard';
import InputExercise from '@/components/InputExercise';
import { motion } from 'framer-motion';

export default function Module8() {
  return (
    <ModuleWrapper
      moduleIndex={8}
      title="Стратегия роста"
      subtitle="Как строить продуктовую стратегию на основе работ"
      readingList={[
        {
          title: 'Ваня Замесин — OODA-цикл: стратегический цикл принятия решений',
          url: 'https://zamesin.ru/producthowto/book/ooda-strategy-loop/',
        },
        {
          title: 'Ваня Замесин — Кейс: фокусировка на сегменте вырастила выручку на 37%',
          url: 'https://zamesin.ru/producthowto/book/ajtbd-segmentation-focus-makes-extra-revenue/',
        },
        {
          title: 'Примеры графов работ (Figma)',
          url: 'https://www.figma.com/board/kF80PkiEXq3NionAfw4TYN/',
        },
      ]}
    >
      {/* --- Введение --- */}
      <motion.div variants={fadeInItem} className="prose prose-invert max-w-none mb-10">
        <h2 className="text-xl font-semibold mb-4">Стратегия = выбор работ + привычка</h2>
        <p className="text-muted-foreground leading-relaxed">
          Продуктовая стратегия через AJTBD &mdash; это выбор: <strong className="text-foreground">какие работы</strong> решать,
          <strong className="text-foreground">в каком порядке</strong> расширять граф работ, и как использовать
          <strong className="text-foreground"> привычку</strong> как конкурентное преимущество.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Привычка &mdash; это автоматическое выполнение работы без сознательного решения. Она даёт три ценности:
          <strong className="text-foreground"> экономит когнитивную энергию</strong>,{' '}
          <strong className="text-foreground">даёт предсказуемость результата</strong> и{' '}
          <strong className="text-foreground">становится частью идентичности</strong>.
          Это мощнейший инструмент и удержания, и конкуренции.
        </p>
      </motion.div>

      {/* --- Три стратегии роста --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Три стратегии роста через работы</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          У каждого продукта есть три вектора развития. Выбор зависит от зрелости рынка,
          силы конкуренции и ваших ресурсов.
        </p>

        {/* SVG Diagram: Three concentric circles */}
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 580 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
            {/* Big Job (outer circle) */}
            <circle cx="280" cy="265" r="190" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="6 4" fill="#7c3aed" fillOpacity="0.03" />

            {/* Adjacent Jobs (middle circle) */}
            <circle cx="280" cy="265" r="125" stroke="#7c3aed" strokeWidth="1.5" fill="#7c3aed" fillOpacity="0.06" />

            {/* Core Job (center circle) */}
            <circle cx="280" cy="265" r="55" stroke="#7c3aed" strokeWidth="2" fill="#7c3aed" fillOpacity="0.12" />

            {/* Labels above outer circle */}
            <text x="280" y="52" textAnchor="middle" fontSize="12" fontWeight="600" fill="#7c3aed">БОЛЬШАЯ РАБОТА</text>
            <text x="280" y="68" textAnchor="middle" fontSize="10" className="text-muted-foreground" fill="currentColor">Жизненная цель клиента</text>

            {/* Labels between outer and middle (in outer ring) */}
            <text x="280" y="108" textAnchor="middle" fontSize="11" fontWeight="600" fill="#7c3aed">СМЕЖНЫЕ РАБОТЫ</text>
            <text x="280" y="124" textAnchor="middle" fontSize="10" className="text-muted-foreground" fill="currentColor">Связанные задачи вокруг ядра</text>

            {/* Core labels */}
            <text x="280" y="255" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">ЯДРО</text>
            <text x="280" y="273" textAnchor="middle" fontSize="10" className="text-foreground" fontWeight="500" fill="currentColor">Основная</text>
            <text x="280" y="287" textAnchor="middle" fontSize="10" className="text-foreground" fontWeight="500" fill="currentColor">работа</text>

            {/* Arrow: Go Deeper (below inner circle) */}
            <line x1="280" y1="320" x2="280" y2="370" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="275,368 280,380 285,368" fill="#7c3aed" />
            <text x="280" y="400" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed">ГЛУБЖЕ</text>
            <text x="280" y="414" textAnchor="middle" fontSize="10" className="text-muted-foreground" fill="currentColor">Решать ядро лучше</text>

            {/* Arrow: Go Wider (right of middle circle) */}
            <line x1="405" y1="265" x2="455" y2="265" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="453,260 465,265 453,270" fill="#7c3aed" />
            <text x="510" y="259" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed">ШИРЕ</text>
            <text x="510" y="273" textAnchor="middle" fontSize="10" className="text-muted-foreground" fill="currentColor">Смежные работы</text>

            {/* Arrow: Go Higher (outside outer circle, upper-left) */}
            <line x1="160" y1="150" x2="60" y2="35" stroke="#7c3aed" strokeWidth="1.5" />
            <polygon points="53,30 62,28 57,40" fill="#7c3aed" />
            <text x="32" y="18" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed">ВЫШЕ</text>
            <text x="60" y="18" fontSize="10" className="text-muted-foreground" fill="currentColor">Большая работа</text>

            {/* Example labels — in center of each ring */}
            <text x="185" y="310" textAnchor="middle" fontSize="8.5" fill="#7c3aed" opacity="0.65" fontStyle="italic">трекинг расходов</text>
            <text x="395" y="170" textAnchor="middle" fontSize="8.5" fill="#7c3aed" opacity="0.65" fontStyle="italic">бюджет, инвестиции</text>
            <text x="430" y="460" textAnchor="middle" fontSize="8.5" fill="#7c3aed" opacity="0.65" fontStyle="italic">финансовая свобода</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Детали стратегий --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <div className="grid gap-4">
          {/* Strategy 1: Go Deeper */}
          <div className="p-5 rounded-xl bg-card border border-border/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                  <path d="M10 3V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 13L10 17L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 7H16" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">Стратегия 1: Идти глубже</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Решать <strong className="text-foreground">основную работу лучше</strong>, чем кто-либо другой.
                  Увеличивать скорость, надёжность, удобство. Это стратегия для ранних стадий продукта
                  или высококонкурентного рынка.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Пример:</strong> Notion начал как простой инструмент для заметок.
                    Вместо добавления новых функций, они сначала довели редактор до совершенства &mdash;
                    блочная структура, drag-and-drop, markdown-поддержка.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy 2: Go Wider */}
          <div className="p-5 rounded-xl bg-card border border-border/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                  <path d="M3 10H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M13 6L17 10L13 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 6L3 10L7 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">Стратегия 2: Идти шире</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Решать <strong className="text-foreground">смежные работы</strong>, которые возникают у клиента
                  до, во время или после основной работы. Это стратегия для продуктов, которые уже хорошо
                  решают ядро.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Пример:</strong> Slack начал как мессенджер для команд (основная работа:
                    быстрая коммуникация). Затем добавил каналы, интеграции, workflow &mdash; решая смежные
                    работы: &laquo;не терять информацию&raquo;, &laquo;автоматизировать рутину&raquo;.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Strategy 3: Go Higher */}
          <div className="p-5 rounded-xl bg-card border border-border/50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                  <path d="M10 17V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M6 7L10 3L14 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="3" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-1">Стратегия 3: Идти выше</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Подняться к <strong className="text-foreground">Большой Работе</strong> (Big Job) &mdash;
                  жизненной цели или трансформации, к которой стремится клиент. Это самая амбициозная
                  стратегия, которая создаёт платформы и экосистемы.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-muted/30">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Пример:</strong> Duolingo начал с работы &laquo;выучить новые слова
                    на иностранном языке&raquo;. Большая Работа &mdash; &laquo;свободно общаться на другом языке и
                    расширить карьерные возможности&raquo;. Сейчас они движутся к ней через тесты, подкасты,
                    сертификацию.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Стратегическая карта --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Стратегическая карта: вы vs конкуренты</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Постройте карту, где по одной оси &mdash; <strong className="text-foreground">важность работы</strong> для клиента,
          а по другой &mdash; <strong className="text-foreground">удовлетворённость</strong> текущим решением.
          Так вы найдёте &laquo;белые пятна&raquo; &mdash; важные работы, которые никто не решает хорошо.
        </p>

        {/* SVG: Opportunity Map */}
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
            {/* Axes */}
            <line x1="80" y1="330" x2="460" y2="330" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" />
            <line x1="80" y1="330" x2="80" y2="50" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" />

            {/* Arrow tips */}
            <polygon points="458,325 468,330 458,335" className="text-muted-foreground" fill="currentColor" />
            <polygon points="75,52 80,42 85,52" className="text-muted-foreground" fill="currentColor" />

            {/* Axis labels */}
            <text x="270" y="370" textAnchor="middle" fontSize="11" fontWeight="600" className="text-foreground" fill="currentColor">Важность работы</text>
            <text x="30" y="190" textAnchor="middle" fontSize="11" fontWeight="600" className="text-foreground" fill="currentColor" transform="rotate(-90, 30, 190)">Удовлетворённость</text>

            {/* Grid lines */}
            <line x1="270" y1="330" x2="270" y2="50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-border" />
            <line x1="80" y1="190" x2="460" y2="190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="text-border" />

            {/* Quadrant labels */}
            <text x="175" y="110" textAnchor="middle" fontSize="10" className="text-muted-foreground" fill="currentColor" opacity="0.7">Не приоритет</text>
            <text x="365" y="110" textAnchor="middle" fontSize="10" className="text-muted-foreground" fill="currentColor" opacity="0.7">Перенасыщено</text>
            <text x="175" y="275" textAnchor="middle" fontSize="10" className="text-muted-foreground" fill="currentColor" opacity="0.7">Низкий потенциал</text>

            {/* Opportunity zone highlight */}
            <rect x="275" y="195" width="175" height="125" rx="8" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="362" y="240" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">ВОЗМОЖНОСТЬ</text>
            <text x="362" y="258" textAnchor="middle" fontSize="10" fill="#7c3aed">Важно + Не решено</text>

            {/* Dots: competitors */}
            <circle cx="350" cy="130" r="8" fill="#7c3aed" fillOpacity="0.3" stroke="#7c3aed" strokeWidth="1" />
            <text x="370" y="134" fontSize="10" className="text-muted-foreground" fill="currentColor">Конкурент A</text>

            <circle cx="320" cy="162" r="6" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="1" />
            <text x="338" y="166" fontSize="10" className="text-muted-foreground" fill="currentColor">Конкурент B</text>

            {/* Dot: your product */}
            <circle cx="190" cy="240" r="8" fill="#7c3aed" stroke="#7c3aed" strokeWidth="2" />
            <text x="208" y="244" fontSize="10" fontWeight="600" fill="#7c3aed">Вы</text>

            {/* Dot: opportunity */}
            <circle cx="400" cy="290" r="12" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 2" />
            <text x="400" y="294" textAnchor="middle" fontSize="10" fill="#7c3aed">?</text>

            {/* Arrow from "you" to opportunity */}
            <path d="M200 236 C250 215 340 245 390 284" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
            <polygon points="386,278 394,284 384,286" fill="#7c3aed" />
          </svg>
        </div>
      </motion.div>

      {/* --- Привычка как стратегический инструмент --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Привычка: конкурентный ров и ловушка</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Привычка &mdash; одновременно <strong className="text-foreground">драйвер удержания</strong> (пользователи
          не уходят, потому что привыкли) и <strong className="text-foreground">барьер миграции</strong> (новые
          пользователи не приходят, потому что привыкли к конкурентам). Стратегия: переиспользуйте
          существующие привычки, а не боритесь с ними.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-success/5 border border-success/20">
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-success">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M6 9L8 11L12 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h4 className="text-sm font-semibold text-success">Переиспользуй привычки</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Если пользователи привыкли делать работу определённым образом, <strong className="text-foreground">используйте
              этот паттерн</strong>. Сделайте так, чтобы переход на ваш продукт не ломал привычки.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-1.5">
                <span className="text-success mt-0.5">&#9679;</span>
                <span>Сохраняйте знакомые паттерны взаимодействия</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-success mt-0.5">&#9679;</span>
                <span>Импортируйте данные из привычного инструмента</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-success mt-0.5">&#9679;</span>
                <span>Делайте атомарные (маленькие) изменения, а не радикальный редизайн</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-error/5 border border-error/20">
            <div className="flex items-center gap-2 mb-3">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-error">
                <path d="M9 2L2 16H16L9 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
                <path d="M9 7V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="13.5" r="0.8" fill="currentColor" />
              </svg>
              <h4 className="text-sm font-semibold text-error">Опасность радикального редизайна</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Радикальный редизайн ломает привычки пользователей. Когда привычка сломана,
              пользователь <strong className="text-foreground">снова оказывается в режиме выбора</strong> &mdash;
              и может уйти к конкуренту.
            </p>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-1.5">
                <span className="text-error mt-0.5">&#9679;</span>
                <span>Редизайн ломает автоматизм &rarr; нужны когнитивные усилия</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-error mt-0.5">&#9679;</span>
                <span>Пользователь начинает сравнивать &rarr; замечает альтернативы</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-error mt-0.5">&#9679;</span>
                <span>Если переключение дёшево &rarr; массовый отток</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* --- Стратегические паттерны AJTBD --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" fill="none" />
            <path d="M10 5V10L13 13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h3 className="text-base font-semibold">Стратегические паттерны из AJTBD</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          AJTBD даёт конкретные стратегические паттерны для роста. Каждый использует механики
          создания ценности из графа работ:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-lg bg-muted/30">
            <p className="text-xs font-semibold text-error mb-1">Убить ненужные работы</p>
            <p className="text-xs text-muted-foreground">Автоматизируйте рутинные шаги, сделайте их ненужными.
              Пример: автоплатежи убивают работу &laquo;не забыть заплатить за квартиру&raquo;.</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <p className="text-xs font-semibold text-success mb-1">Расширить граф работ</p>
            <p className="text-xs text-muted-foreground">Решайте смежные работы из графа. Так Yandex Taxi
              вырос из &laquo;доехать&raquo; в доставку еды и посылок.</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <p className="text-xs font-semibold text-accent mb-1">Сократить задержки</p>
            <p className="text-xs text-muted-foreground">Убирайте ожидание между шагами. Мгновенные
              переводы, доставка за 15 минут, одобрение кредита онлайн.</p>
          </div>
          <div className="p-4 rounded-lg bg-muted/30">
            <p className="text-xs font-semibold text-warning mb-1">Переиспользовать привычки</p>
            <p className="text-xs text-muted-foreground">Не ломайте существующие привычки &mdash;
              используйте их. Это снижает барьер входа и ускоряет адопшн.</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-4">
          Ключевой кейс: Aviasales не просто искал дешёвые билеты (Core Job). Он расширился
          на &laquo;выбрать направление&raquo; и &laquo;забронировать отель&raquo; &mdash; смежные работы в графе.
        </p>
      </motion.div>

      {/* --- Кейс: Amazon Go Wider --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <h3 className="text-base font-semibold mb-4">Кейс: Amazon &mdash; мастер стратегии &laquo;Идти шире&raquo;</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Amazon &mdash; классический пример последовательного расширения графа работ. Каждый новый продукт
          решал смежную работу, которую клиенты уже пытались выполнить.
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">1</div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Ядро:</strong> &laquo;Купить книгу, не выходя из дома&raquo; &mdash;
              онлайн-магазин книг (1994). Текущее решение &mdash; поход в книжный магазин.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">2</div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Шире:</strong> &laquo;Купить что угодно, не выходя из дома&raquo; &mdash;
              маркетплейс (1998). Смежная работа: если человек уже доверяет онлайн-покупке книг, он хочет покупать
              и электронику, одежду, бытовую технику.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">3</div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Ещё шире:</strong> &laquo;Получить покупку быстрее&raquo; &mdash; Amazon Prime (2005).
              Работа возникала после покупки: &laquo;Уже заказал, но ждать 5 дней мучительно&raquo;.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">4</div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Выше (Big Job):</strong> &laquo;Получить всё, что мне нужно, мгновенно и без усилий&raquo; &mdash;
              Prime Video, Alexa, Whole Foods. Amazon движется к решению Большой Работы: убрать трение из повседневной жизни.
            </span>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-xs text-accent">
            <strong>Принцип Amazon:</strong> Каждое расширение основано на реальной работе клиента, а не на
            технологической возможности. Безос говорил: &laquo;Начните с клиента и двигайтесь назад к технологии&raquo;.
            Это чистый JTBD-подход к стратегии роста.
          </p>
        </div>
      </motion.div>

      {/* --- Quiz --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-lg font-semibold mb-2">Проверьте понимание</h3>
        <Quiz
          question="Финтех-стартап отлично решает работу «быстро перевести деньги другу». Что значит стратегия «Идти шире» для этого продукта?"
          options={[
            {
              text: 'Сделать переводы ещё быстрее — за 0.5 секунды вместо 3',
              explanation: 'Это стратегия «Идти глубже» — улучшение основной работы. «Шире» означает решать другие работы.',
            },
            {
              text: 'Начать решать смежные работы: разделить счёт в ресторане, отслеживать кто кому должен',
              correct: true,
              explanation: 'Верно! «Шире» — это расширение на смежные работы, которые возникают в том же контексте: совместные расходы, долги, общие бюджеты.',
            },
            {
              text: 'Запустить рекламную кампанию на новые рынки',
              explanation: 'Расширение географии — это маркетинговая стратегия, а не продуктовая стратегия через работы.',
            },
            {
              text: 'Добавить криптовалютные переводы',
              explanation: 'Это может быть как «глубже» (другой способ решить ту же работу), так и фича ради фичи. Настоящее «шире» — это новые работы, а не новые технологии для старой работы.',
            },
          ]}
        />
      </motion.div>

      {/* --- ScenarioCard --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Сценарий: стратегия роста финтеха</h3>
        <ScenarioCard
          scenario="Вы CEO финтех-стартапа с 50К пользователей. Ваш продукт помогает фрилансерам отслеживать расходы и формировать отчёты для налоговой. Основная работа решена хорошо — NPS 62, retention 45%. Инвесторы требуют x3 рост за год. Какую стратегию выберете?"
          context="Из интервью: фрилансеры также жалуются на сложность выставления счетов клиентам, неуверенность в ценообразовании и страх перед налоговой проверкой."
          options={[
            {
              text: 'Идти глубже: добавить AI-распознавание чеков и автокатегоризацию',
              outcome: 'Улучшение ядра — хорошо для retention, но при NPS 62 основная работа уже решена достаточно. Это даст прирост в 10-20%, но не x3. Для кратного роста нужна новая ценность.',
              score: 2,
            },
            {
              text: 'Идти шире: добавить выставление счетов и модуль ценообразования',
              outcome: 'Отлично! Вы решаете смежные работы из того же контекста (финансы фрилансера). Пользователи уже доверяют вам в финансовых вопросах, а выставление счетов — частая и плохо решённая работа. Это увеличивает ценность продукта и снижает отток.',
              score: 3,
            },
            {
              text: 'Идти выше: стать «финансовым директором для фрилансера» — налоги, пенсия, инвестиции',
              outcome: 'Амбициозно и правильно как долгосрочная визия. Но для x3 за год это слишком масштабно — каждый новый блок требует глубокой экспертизы. Лучше двигаться к Big Job поэтапно, начиная со смежных работ.',
              score: 2,
            },
          ]}
        />
      </motion.div>

      {/* --- DragDrop --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Упражнение: стратегия для ситуации</h3>
        <DragDrop
          instruction="Соотнесите каждую стратегию роста с ситуацией, в которой она наиболее уместна."
          items={[
            { id: 'deeper', text: 'Идти глубже' },
            { id: 'wider', text: 'Идти шире' },
            { id: 'higher', text: 'Идти выше' },
          ]}
          zones={[
            {
              id: 'zone-mature',
              label: 'Ядро решено хорошо, retention высокий, нужен рост',
              acceptIds: ['wider'],
            },
            {
              id: 'zone-early',
              label: 'Ранний продукт, сильные конкуренты, нужно выделиться',
              acceptIds: ['deeper'],
            },
            {
              id: 'zone-platform',
              label: 'Смежные работы покрыты, пора становиться платформой',
              acceptIds: ['higher'],
            },
          ]}
        />
      </motion.div>
      {/* --- InputExercise: стратегия для своего продукта --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Практика: спроектируйте стратегию роста</h3>
        <InputExercise
          prompt="Выберите продукт (свой или знакомый). Опишите его текущую основную работу (ядро) и предложите по одному конкретному шагу для каждой стратегии: Глубже, Шире, Выше."
          placeholder="Продукт: ... Ядро (основная работа): ... Глубже: ... Шире: ... Выше: ..."
          hint="Для «Глубже» подумайте: что можно улучшить в текущем решении ядра? Для «Шире»: какие смежные работы возникают до, во время или после? Для «Выше»: какая Большая Работа стоит за ядром?"
          exampleAnswer="Продукт: Figma. Ядро: «быстро создать макет интерфейса и показать команде». Глубже: добавить AI-генерацию UI-компонентов, чтобы создавать макеты ещё быстрее. Шире: решить смежную работу «передать дизайн разработчикам без потери деталей» — Dev Mode. Выше: Big Job «создать отличный продукт, который понравится пользователям» — добавить прототипирование, пользовательское тестирование, аналитику прямо в Figma."
        />
      </motion.div>
    </ModuleWrapper>
  );
}
