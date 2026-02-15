'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import DragDrop from '@/components/DragDrop';
import ScenarioCard from '@/components/ScenarioCard';
import { motion } from 'framer-motion';

export default function Module6() {
  return (
    <ModuleWrapper
      moduleIndex={6}
      title="Продуктовые требования"
      subtitle="Исследование для продукта: от работы к требованиям"
      readingList={[
        {
          title: 'Ваня Замесин — Кейс: IT-продукт принёс +5% выручки на клиента',
          url: 'https://zamesin.ru/producthowto/book/case-it-product-makes-extra-revenue/',
        },
        {
          title: 'Ваня Замесин — Кейс Leadl: SaaS вырос в 7,5 раз по активациям за счёт AJTBD',
          url: 'https://zamesin.ru/producthowto/book/conversion-x7-5-in-ai-onboarding-with-ajtbd/',
        },
        {
          title: 'Ваня Замесин — Как проводить UX-тесты',
          url: 'https://zamesin.ru/books/product-howto/ux-test-101/',
        },
        {
          title: 'Гайд AJTBD-интервью для B2B (Notion)',
          url: 'https://www.notion.so/ivanzamesin/v3-3-JTBD-B2B-a109bc94fb964a6dbe5ba0c943f25050',
        },
      ]}
    >
      {/* --- Введение --- */}
      <motion.div variants={fadeInItem} className="prose prose-sm max-w-none mb-8">
        <h2 className="text-xl font-semibold mb-3">Исследование для продукта: второй тип JTBD-исследования</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          После того как вы нашли целевой сегмент (работа + текущее решение), нужно понять,
          <strong className="text-foreground"> как именно люди выполняют эту работу пошагово</strong>.
          Исследование для продукта разбивает Core Job на Small Jobs и Micro Jobs, находит
          проблемы на каждом шаге и превращает их в продуктовые требования.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Ключевой вопрос интервью: &laquo;Проведите меня через последний раз, когда вы [делали работу].
          Что вы сделали первым? Что потом?&raquo;. Так вы получаете детальную карту шагов с проблемами.
        </p>
      </motion.div>

      {/* --- Job Mapping --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Разбивка на Small Jobs и Micro Jobs</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Разбейте Core Job на <strong className="text-foreground">Small Jobs</strong> (ключевые шаги),
          а каждый Small Job &mdash; на <strong className="text-foreground">Micro Jobs</strong> (элементарные действия).
          На каждом шаге фиксируйте: какой инструмент/метод используется сейчас, какие проблемы
          возникают, и оценку эмоции × частоту для расчёта Problem Score.
        </p>
        <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Пример: шаги работы &laquo;организовать командную встречу&raquo;
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              'Определить цель встречи',
              'Найти свободное время',
              'Пригласить участников',
              'Подготовить повестку',
              'Провести встречу',
              'Записать решения',
              'Проконтролировать исполнение',
            ].map((step, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5"
              >
                <span className="px-2.5 py-1.5 rounded-md border border-accent/20 bg-accent/5 text-accent font-medium">
                  {i + 1}. {step}
                </span>
                {i < 6 && (
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-muted-foreground/30 flex-shrink-0">
                    <path d="M0 4H12M12 4L8 1M12 4L8 7" stroke="currentColor" strokeWidth="1" />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- Opportunity Score --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Problem Score: от проблем к требованиям</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Для каждой проблемы на каждом шаге работы рассчитайте Problem Score:
        </p>
        <div className="p-4 rounded-xl bg-muted/50 border border-border/50 mb-4">
          <p className="text-sm font-mono text-center text-foreground">
            Problem Score = Средняя эмоция (1-5) &times; Средняя частота (1-5)
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Максимум 25 баллов. Чем выше &mdash; тем важнее решить эту проблему в продукте.
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Высокая эмоция + высокая частота</strong> = приоритетное
          требование к продукту. Человек часто сталкивается с этой проблемой и сильно от неё страдает.
          Решив эту проблему, вы создадите максимальную ценность.
        </p>
      </motion.div>

      {/* --- SVG-диаграмма: Opportunity Score Matrix --- */}
      <motion.div variants={fadeInItem} className="my-10">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Матрица Problem Score
        </h3>
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 600 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-xl mx-auto"
          >
            {/* Background */}
            <rect x="0" y="0" width="600" height="500" rx="16" fill="currentColor" fillOpacity="0.03" />

            {/* Grid area */}
            <rect x="100" y="50" width="440" height="380" rx="4" fill="currentColor" fillOpacity="0.02" />

            {/* Quadrant backgrounds */}
            {/* Top-left: High importance, Low satisfaction = OPPORTUNITY */}
            <rect x="100" y="50" width="220" height="190" fill="#7c3aed" fillOpacity="0.1" />
            {/* Top-right: High importance, High satisfaction = Keep up */}
            <rect x="320" y="50" width="220" height="190" fill="#22c55e" fillOpacity="0.06" />
            {/* Bottom-left: Low importance, Low satisfaction = Low priority */}
            <rect x="100" y="240" width="220" height="190" fill="currentColor" fillOpacity="0.03" />
            {/* Bottom-right: Low importance, High satisfaction = Overkill */}
            <rect x="320" y="240" width="220" height="190" fill="#f59e0b" fillOpacity="0.06" />

            {/* Divider lines */}
            <line x1="320" y1="50" x2="320" y2="430" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 3" />
            <line x1="100" y1="240" x2="540" y2="240" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 3" />

            {/* Quadrant labels */}
            {/* Top-left */}
            <rect x="120" y="65" width="180" height="50" rx="8" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1" />
            <text x="210" y="85" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">
              ВОЗМОЖНОСТЬ
            </text>
            <text x="210" y="102" textAnchor="middle" fontSize="9" fill="#7c3aed" fillOpacity="0.7">
              Высокая важность, низкая удовл.
            </text>

            {/* Top-right */}
            <rect x="340" y="65" width="180" height="50" rx="8" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeOpacity="0.25" strokeWidth="1" />
            <text x="430" y="85" textAnchor="middle" fontSize="12" fontWeight="700" fill="#22c55e">
              ПОДДЕРЖИВАТЬ
            </text>
            <text x="430" y="102" textAnchor="middle" fontSize="9" fill="#22c55e" fillOpacity="0.7">
              Высокая важность, высокая удовл.
            </text>

            {/* Bottom-left */}
            <rect x="120" y="255" width="180" height="50" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
            <text x="210" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor" fillOpacity="0.7">
              НИЗКИЙ ПРИОРИТЕТ
            </text>
            <text x="210" y="292" textAnchor="middle" fontSize="9" fill="currentColor" fillOpacity="0.55">
              Низкая важность, низкая удовл.
            </text>

            {/* Bottom-right */}
            <rect x="340" y="255" width="180" height="50" rx="8" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeOpacity="0.25" strokeWidth="1" />
            <text x="430" y="275" textAnchor="middle" fontSize="12" fontWeight="600" fill="#f59e0b">
              ИЗБЫТОЧНОСТЬ
            </text>
            <text x="430" y="292" textAnchor="middle" fontSize="9" fill="#f59e0b" fillOpacity="0.7">
              Низкая важность, высокая удовл.
            </text>

            {/* Example dots */}
            {/* Opportunity zone */}
            <circle cx="175" cy="155" r="8" fill="#7c3aed" fillOpacity="0.6" />
            <text x="175" y="159" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">A</text>
            <circle cx="240" cy="180" r="8" fill="#7c3aed" fillOpacity="0.5" />
            <text x="240" y="184" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">B</text>
            <circle cx="155" cy="195" r="8" fill="#7c3aed" fillOpacity="0.4" />
            <text x="155" y="199" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">C</text>

            {/* Keep up zone */}
            <circle cx="420" cy="160" r="8" fill="#22c55e" fillOpacity="0.5" />
            <text x="420" y="164" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">D</text>
            <circle cx="480" cy="140" r="8" fill="#22c55e" fillOpacity="0.5" />
            <text x="480" y="144" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">E</text>

            {/* Low priority zone */}
            <circle cx="200" cy="360" r="8" fill="currentColor" fillOpacity="0.2" />
            <text x="200" y="364" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" fillOpacity="0.6">F</text>

            {/* Overkill zone */}
            <circle cx="430" cy="370" r="8" fill="#f59e0b" fillOpacity="0.4" />
            <text x="430" y="374" textAnchor="middle" fontSize="9" fontWeight="700" fill="white">G</text>

            {/* Axis labels */}
            {/* Y-axis: Importance */}
            <text x="55" y="245" textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor" fillOpacity="0.7" transform="rotate(-90 55 245)">
              Важность
            </text>
            <text x="80" y="68" textAnchor="end" fontSize="9" fill="currentColor" fillOpacity="0.6">Выс.</text>
            <text x="80" y="435" textAnchor="end" fontSize="9" fill="currentColor" fillOpacity="0.6">Низ.</text>

            {/* X-axis: Satisfaction */}
            <text x="320" y="465" textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor" fillOpacity="0.7">
              Удовлетворённость
            </text>
            <text x="100" y="452" textAnchor="start" fontSize="9" fill="currentColor" fillOpacity="0.6">Низкая</text>
            <text x="540" y="452" textAnchor="end" fontSize="9" fill="currentColor" fillOpacity="0.6">Высокая</text>

            {/* Arrows on axes */}
            <path d="M90 430 L90 55 L86 65 M90 55 L94 65" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
            <path d="M100 440 L535 440 L525 436 M535 440 L525 444" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />

            {/* Legend */}
            <text x="300" y="490" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.6">
              Фокусируйтесь на квадранте &laquo;Возможность&raquo; -- там максимальный потенциал роста
            </text>
          </svg>
        </div>
      </motion.div>

      {/* --- 4 шага для роста --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4 шага: от работы к требованиям</h2>
        <div className="grid gap-3">
          {[
            {
              step: '1',
              title: 'Проведите интервью «проведите меня через»',
              desc: 'Попросите респондентов пошагово рассказать, как они в последний раз выполняли работу. Фиксируйте каждый шаг, инструменты и проблемы.',
            },
            {
              step: '2',
              title: 'Разбейте на Small Jobs → Micro Jobs',
              desc: 'Из интервью выделите шаги работы (Small Jobs). Детализируйте каждый шаг до элементарных действий (Micro Jobs).',
            },
            {
              step: '3',
              title: 'Рассчитайте Problem Score для каждой проблемы',
              desc: 'Для каждой проблемы на каждом шаге: средняя эмоция × средняя частота. Отсортируйте от высшего к низшему.',
            },
            {
              step: '4',
              title: 'Переведите проблемы в требования',
              desc: 'Каждая проблема с высоким Problem Score становится требованием к продукту. Выберите механику ценности: убить работу, автоматизировать, сократить задержку и т.д.',
            },
          ].map((s) => (
            <div
              key={s.step}
              className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-sm font-bold">
                {s.step}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- ABCDX-сегментация --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-3">ABCDX-сегментация: какие клиенты ценнее всего</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Когда у продукта уже есть платящие пользователи, нужно понять, на каких клиентов тратить
          ресурсы развития. Метод <strong className="text-foreground">ABCDX-сегментации</strong>,
          разработанный Ильёй Красинским во время работы в акселераторе ФРИИ и протестированный на сотнях
          стартапов, классифицирует клиентов по ценности для бизнеса и стоимости обслуживания.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Главный инсайт: <strong className="text-foreground">80% выручки приходится на сегменты A и B,
          но компании тратят 80% усилий на сегменты C и D</strong>. ABCDX делает этот дисбаланс видимым.
        </p>

        {/* Segment Cards */}
        <div className="grid gap-3 mb-6">
          {[
            {
              segment: 'A',
              title: 'Идеальные клиенты',
              desc: 'Продукт остро нужен. Покупают быстро, платят много, редко обращаются в поддержку. Амбассадоры бренда.',
              color: 'bg-success/10 border-success/20 text-success',
              badge: 'bg-success/15 text-success',
            },
            {
              segment: 'B',
              title: 'Хорошие клиенты с возражениями',
              desc: 'Продукт нужен, но есть сомнения или чего-то не хватает. Средний цикл сделки, платят стабильно после убеждения.',
              color: 'bg-accent/10 border-accent/20 text-accent',
              badge: 'bg-accent/15 text-accent',
            },
            {
              segment: 'C',
              title: 'Сложные клиенты',
              desc: 'Спрос есть, но не обязательно на ваш продукт. Долгий цикл, маленький чек, постоянные проблемы, нагружают поддержку непропорционально выручке.',
              color: 'bg-warning/10 border-warning/20 text-warning',
              badge: 'bg-warning/15 text-warning',
            },
            {
              segment: 'D',
              title: 'Неконвертируемые',
              desc: 'Много вопросов, много возражений, сделки почти не закрываются. Ещё не столкнулись с проблемой, которую решает продукт.',
              color: 'bg-error/10 border-error/20 text-error',
              badge: 'bg-error/15 text-error',
            },
            {
              segment: 'X',
              title: 'Будущие идеальные клиенты',
              desc: 'Ведут себя как сегмент A (готовы платить, есть острая потребность), но продукт в текущем виде их не обслуживает. Стратегический ориентир для развития.',
              color: 'bg-accent/10 border-accent/20 text-accent',
              badge: 'bg-accent/15 text-accent',
            },
          ].map((s) => (
            <div
              key={s.segment}
              className={`flex items-start gap-4 p-4 rounded-lg border ${s.color}`}
            >
              <div className={`flex-shrink-0 w-9 h-9 rounded-lg ${s.badge} flex items-center justify-center text-sm font-bold`}>
                {s.segment}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How to apply */}
        <div className="p-5 rounded-xl bg-muted/50 border border-border/50 mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Как применять ABCDX
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">1. Выгрузите данные</strong> — кумулятивная маржа, частота покупок, нагрузка на поддержку по каждому клиенту.</p>
            <p><strong className="text-foreground">2. Классифицируйте</strong> — распределите клиентов по сегментам A-D на основе данных и интервью с командой продаж.</p>
            <p><strong className="text-foreground">3. Найдите сегмент X</strong> — среди тех, кто хотел купить, но не смог (ушёл на этапе онбординга, отказался из-за отсутствия фичи).</p>
            <p><strong className="text-foreground">4. Перенаправьте ресурсы</strong> — 80% усилий на A и B (поддержка выручки), продуктовое развитие — в сторону X (рост).</p>
          </div>
        </div>

        {/* ABCDX + JTBD connection */}
        <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">ABCDX + JTBD:</strong> ABCDX показывает <em>кто</em> ценнее
            всего, JTBD объясняет <em>почему</em> они покупают. Проведите JTBD-интервью с сегментом A,
            чтобы понять их Core Job, затем с сегментом X, чтобы узнать, какую работу продукт пока не
            выполняет. Это даёт точный вектор для развития продукта: укреплять ядро (A/B) и расти
            в сторону X.
          </p>
        </div>
      </motion.div>

      {/* --- Квиз --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Проверьте себя
        </h3>
        <Quiz
          question="Проблема «долго искать свободное время для встречи» получила среднюю эмоцию 4.2 и среднюю частоту 4.8. Чему равен Problem Score?"
          options={[
            {
              text: '9.0 (по формуле 4.2 + 4.8)',
              explanation:
                'Problem Score — это произведение, а не сумма. Формула: средняя эмоция × средняя частота.',
            },
            {
              text: '20.16 (по формуле 4.2 × 4.8)',
              correct: true,
              explanation:
                'Верно! PS = 4.2 × 4.8 = 20.16. Это очень высокий скор из максимальных 25, что означает приоритетное требование к продукту.',
            },
            {
              text: '0.6 (по формуле 4.8 - 4.2)',
              explanation:
                'Разница эмоции и частоты не используется в Problem Score. Формула: средняя эмоция × средняя частота.',
            },
            {
              text: '4.5 (среднее между 4.2 и 4.8)',
              explanation:
                'Среднее арифметическое не даёт Problem Score. Нужно произведение: эмоция × частота.',
            },
          ]}
        />
      </motion.div>

      {/* --- DragDrop: приоритизация фич --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Практика: расставьте приоритеты
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Перед вами четыре возможные фичи для календарного приложения. Расставьте их
          по приоритету на основе Opportunity Score (от высшего к низшему).
        </p>
        <DragDrop
          instruction="Перетащите требования в порядке приоритета по Problem Score (наивысший — первый)."
          items={[
            { id: 'f1', text: 'Автоподбор свободного времени (PS: 22.1)' },
            { id: 'f2', text: 'Тёмная тема интерфейса (PS: 4.2)' },
            { id: 'f3', text: 'Умные напоминания (PS: 18.5)' },
            { id: 'f4', text: 'Интеграция с видеозвонками (PS: 15.8)' },
          ]}
          zones={[
            { id: 'z1', label: 'Приоритет 1', acceptIds: ['f1'] },
            { id: 'z2', label: 'Приоритет 2', acceptIds: ['f3'] },
            { id: 'z3', label: 'Приоритет 3', acceptIds: ['f4'] },
            { id: 'z4', label: 'Приоритет 4', acceptIds: ['f2'] },
          ]}
        />
      </motion.div>

      {/* --- Сценарий --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Сценарий
        </h3>
        <ScenarioCard
          scenario="Вы -- продакт-менеджер устоявшегося продукта. Ретеншн падает: пользователи уходят через 3 месяца. Что делать?"
          context="У вас есть данные аналитики, но причины оттока неясны. Команда предлагает три подхода."
          options={[
            {
              text: 'Добавить программу лояльности с бонусами и скидками, чтобы мотивировать пользователей оставаться.',
              outcome:
                'Программа лояльности борется с симптомами, а не с причиной. Если продукт плохо выполняет работу пользователя, скидки лишь отложат уход. Вы потратите бюджет, но не решите корневую проблему.',
              score: 1,
            },
            {
              text: 'Провести AJTBD-интервью с ушедшими пользователями, понять, на какую работу они нанимали продукт, где он не справился, и на что они переключились.',
              outcome:
                'Отличный подход! Интервью с ушедшими пользователями покажут: какую работу они пытались выполнить, в каком шаге продукт их подвёл и какое решение они «наняли» вместо вашего. Это даст точные данные для улучшений, которые напрямую повлияют на ретеншн.',
              score: 3,
            },
            {
              text: 'Посмотреть, что делают конкуренты, и скопировать их новые фичи, чтобы не отставать.',
              outcome:
                'Копирование фич конкурентов без понимания работ -- это гонка вооружений, которую невозможно выиграть. Конкуренты могут решать другие работы, и их фичи могут быть нерелевантны для ваших пользователей. Вы рискуете раздуть продукт бесполезными функциями.',
              score: 0,
            },
          ]}
        />
      </motion.div>

      {/* --- Итог модуля --- */}
      <motion.div variants={fadeInItem} className="mt-10 p-5 rounded-xl bg-accent/5 border border-accent/15">
        <h3 className="text-sm font-semibold text-foreground mb-2">Ключевой вывод</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Исследование для продукта &mdash; это разбивка Core Job на Small Jobs → Micro Jobs,
          поиск проблем на каждом шаге и их приоритизация через{' '}
          <strong className="text-foreground">Problem Score</strong> (эмоция × частота).
          Каждая проблема с высоким скором становится требованием к продукту, а механики ценности
          из AJTBD подсказывают, как именно решить эту проблему.
        </p>
      </motion.div>
    </ModuleWrapper>
  );
}
