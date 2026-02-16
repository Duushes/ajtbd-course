'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import DragDrop from '@/components/DragDrop';
import InputExercise from '@/components/InputExercise';
import ScenarioCard from '@/components/ScenarioCard';
import { motion } from 'framer-motion';

export default function Module6() {
  return (
    <ModuleWrapper
      moduleIndex={6}
      title="Развитие существующего продукта"
      subtitle="Алгоритм развития продукта через AJTBD"
      readingList={[
        {
          title: 'Ваня Замесин — ABCDX-сегментация',
          url: 'https://zamesin.ru/books/product-howto/abcdx-segmentation/',
        },
        {
          title: 'Ваня Замесин — Кейс: фокусировка на сегменте вырастила выручку на 37%',
          url: 'https://zamesin.ru/producthowto/book/ajtbd-segmentation-focus-makes-extra-revenue/',
        },
        {
          title: 'Ваня Замесин — Riskiest Assumption Test',
          url: 'https://zamesin.ru/books/product-howto/riskiest-assumption-test/',
        },
        {
          title: 'Ваня Замесин — Кейс Leadl: SaaS вырос в 7,5 раз',
          url: 'https://zamesin.ru/producthowto/book/conversion-x7-5-in-ai-onboarding-with-ajtbd/',
        },
      ]}
    >
      {/* --- Введение --- */}
      <motion.div variants={fadeInItem} className="prose prose-sm max-w-none mb-8">
        <h2 className="text-xl font-semibold mb-3">Как развивать существующий продукт с помощью AJTBD</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Когда у вас уже есть продукт с платящими пользователями, главный вопрос &mdash;{' '}
          <strong className="text-foreground">куда расти дальше</strong>. Добавлять фичи наугад &mdash;
          верный путь к раздутому продукту. AJTBD даёт системный алгоритм из 5 шагов,
          который позволяет находить точки роста, валидировать их и принимать решения на основе данных.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Помните ключевые понятия: <strong className="text-foreground">Работа (Job)</strong> &mdash;
          цель/задача клиента, переход из Точки А в Точку Б, формула &laquo;хочу + глагол&raquo;.{' '}
          <strong className="text-foreground">Решение (Solution)</strong> &mdash; всё, с помощью чего
          человек выполняет работу. <strong className="text-foreground">Найм (Hiring)</strong> &mdash;
          акт выбора конкретного решения для выполнения работы.
        </p>
      </motion.div>

      {/* --- SVG: 5-шаговый алгоритм --- */}
      <motion.div variants={fadeInItem} className="my-10">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          5-шаговый алгоритм развития продукта
        </h3>
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 620 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-2xl mx-auto"
          >
            {/* Background */}
            <rect x="0" y="0" width="620" height="400" rx="16" fill="currentColor" fillOpacity="0.03" />

            {/* Step 1 */}
            <rect x="40" y="30" width="540" height="52" rx="10" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1" />
            <circle cx="70" cy="56" r="14" fill="#7c3aed" fillOpacity="0.2" />
            <text x="70" y="61" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">1</text>
            <text x="95" y="52" fontSize="11" fontWeight="600" fill="#7c3aed">Формулируем гипотезу/идею для развития</text>
            <text x="95" y="68" fontSize="9" fill="currentColor" fillOpacity="0.6">Какую новую работу продукт может обслуживать?</text>

            {/* Arrow */}
            <path d="M310 82 L310 98" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1.5" />
            <polygon points="306,95 310,103 314,95" fill="#7c3aed" fillOpacity="0.3" />

            {/* Step 2 */}
            <rect x="40" y="105" width="540" height="52" rx="10" fill="#7c3aed" fillOpacity="0.12" stroke="#7c3aed" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx="70" cy="131" r="14" fill="#7c3aed" fillOpacity="0.25" />
            <text x="70" y="136" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">2</text>
            <text x="95" y="127" fontSize="11" fontWeight="600" fill="#7c3aed">Смотрим на метрики и продуктовую стратегию</text>
            <text x="95" y="143" fontSize="9" fill="currentColor" fillOpacity="0.6">Соответствует ли идея текущим целям бизнеса?</text>

            {/* Arrow */}
            <path d="M310 157 L310 173" stroke="#7c3aed" strokeOpacity="0.35" strokeWidth="1.5" />
            <polygon points="306,170 310,178 314,170" fill="#7c3aed" fillOpacity="0.35" />

            {/* Step 3 */}
            <rect x="40" y="180" width="540" height="52" rx="10" fill="#7c3aed" fillOpacity="0.18" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="1" />
            <circle cx="70" cy="206" r="14" fill="#7c3aed" fillOpacity="0.3" />
            <text x="70" y="211" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">3</text>
            <text x="95" y="202" fontSize="11" fontWeight="600" fill="#7c3aed">ABCDX-сегментация + RAT для сегментов</text>
            <text x="95" y="218" fontSize="9" fill="currentColor" fillOpacity="0.6">Кто клиенты? Какие самые рискованные допущения?</text>

            {/* Arrow */}
            <path d="M310 232 L310 248" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="1.5" />
            <polygon points="306,245 310,253 314,245" fill="#7c3aed" fillOpacity="0.4" />

            {/* Step 4 */}
            <rect x="40" y="255" width="540" height="52" rx="10" fill="#7c3aed" fillOpacity="0.25" stroke="#7c3aed" strokeOpacity="0.45" strokeWidth="1" />
            <circle cx="70" cy="281" r="14" fill="#7c3aed" fillOpacity="0.35" />
            <text x="70" y="286" textAnchor="middle" fontSize="12" fontWeight="700" fill="#7c3aed">4</text>
            <text x="95" y="277" fontSize="11" fontWeight="600" fill="#7c3aed">UX / решенческие интервью</text>
            <text x="95" y="293" fontSize="9" fill="currentColor" fillOpacity="0.6">Как наша гипотеза показывает себя в реальности?</text>

            {/* Arrow */}
            <path d="M310 307 L310 323" stroke="#7c3aed" strokeOpacity="0.45" strokeWidth="1.5" />
            <polygon points="306,320 310,328 314,320" fill="#7c3aed" fillOpacity="0.45" />

            {/* Step 5 */}
            <rect x="40" y="330" width="540" height="52" rx="10" fill="#22c55e" fillOpacity="0.12" stroke="#22c55e" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx="70" cy="356" r="14" fill="#22c55e" fillOpacity="0.25" />
            <text x="70" y="361" textAnchor="middle" fontSize="12" fontWeight="700" fill="#22c55e">5</text>
            <text x="95" y="352" fontSize="11" fontWeight="600" fill="#22c55e">Оцениваем стоимость реализации с командой</text>
            <text x="95" y="368" fontSize="9" fill="currentColor" fillOpacity="0.6">Сколько стоит? Окупится ли? Решение: делаем / не делаем</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Детальный разбор 5 шагов --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Разбор каждого шага алгоритма</h2>
        <div className="grid gap-3">
          {[
            {
              step: '1',
              title: 'Формулируем гипотезу/идею для развития',
              desc: 'Откуда берутся идеи? Из JTBD-интервью с текущими пользователями, из анализа смежных работ, из обратной связи, из данных аналитики. Каждая идея должна быть привязана к конкретной работе клиента: «хочу + глагол». Например, Slack начинал как чат, но увидел смежную работу — «хочу автоматизировать рутинные процессы» — и вырос в платформу для рабочих процессов.',
            },
            {
              step: '2',
              title: 'Смотрим на метрики и соотносим с продуктовой стратегией',
              desc: 'Не каждая хорошая идея подходит вашему продукту. Проверьте: двигает ли она ключевую метрику (ретеншн, выручку, конверсию)? Вписывается ли в стратегию компании? Яндекс.Еда расширилась с доставки из ресторанов на продукты и аптеки — это вписывалось в стратегию «стать платформой для всех доставок».',
            },
            {
              step: '3',
              title: 'Проводим ABCDX-сегментацию и выписываем RAT',
              desc: 'Определите, для какого сегмента клиентов эта идея наиболее ценна. Проведите ABCDX-сегментацию: кто идеальные клиенты (A), кто с возражениями (B), кто сложные (C), кто неконвертируемые (D), кто будущие идеальные (X)? Для каждого сегмента выпишите RAT — самое рискованное допущение, которое нужно проверить первым.',
            },
            {
              step: '4',
              title: 'Проводим UX / решенческие интервью',
              desc: 'Покажите прототип или опишите решение целевым пользователям. Как они реагируют? Понимают ли ценность? Готовы ли «нанять» это решение вместо текущего? Spotify тестировала новые фичи на разных сегментах пользователей, приоритизируя те функции, которые резонировали с сегментами A и X.',
            },
            {
              step: '5',
              title: 'Оцениваем стоимость реализации с командой',
              desc: 'Сведите данные со всех шагов: ценность для клиента, размер сегмента, стоимость разработки, время до запуска. Обсудите с командой: при текущих ресурсах — делаем или не делаем? Какой ROI? Какие альтернативы?',
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

      {/* --- Примеры реальных продуктов --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
            <path d="M10 2L13 8H18L14 12L15.5 18L10 14.5L4.5 18L6 12L2 8H7L10 2Z" stroke="currentColor" strokeWidth="1.3" fill="none" />
          </svg>
          <h3 className="text-base font-semibold">Примеры: как продукты росли через смежные работы</h3>
        </div>
        <div className="space-y-4">
          {[
            {
              product: 'Slack',
              job: '«Хочу быстро координировать работу команды»',
              growth: 'Начали с чата, но заметили, что пользователи пытаются автоматизировать процессы через бота. Вырастили платформу воркфлоу: интеграции, автоматизации, каналы для процессов. Работа сместилась с «хочу общаться» к «хочу организовать рабочий процесс».',
            },
            {
              product: 'Яндекс.Еда',
              job: '«Хочу быстро получить то, что мне нужно, без похода в магазин»',
              growth: 'Начали с доставки из ресторанов. Увидели смежную работу — «хочу купить продукты, не выходя из дома». Затем добавили аптеки, цветы, товары из магазинов. Каждое расширение — это новый сегмент X, ставший сегментом A.',
            },
            {
              product: 'Spotify',
              job: '«Хочу слушать музыку, которая мне нравится»',
              growth: 'Использовали подход, похожий на ABCDX: сегмент A (активные слушатели) хотел персонализацию — появились Discover Weekly и Daily Mix. Сегмент X (подкастеры и их слушатели) имел потребность, но продукт её не обслуживал — добавили подкасты, что открыло новый рынок.',
            },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/30">
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs font-medium text-accent uppercase tracking-wider">{item.product}</p>
                <span className="text-xs text-muted-foreground italic">{item.job}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.growth}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- ABCDX-сегментация --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-3">ABCDX-сегментация: на каких клиентов тратить ресурсы</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Ключевой инструмент шага 3 &mdash; <strong className="text-foreground">ABCDX-сегментация</strong>.
          Она делит клиентов по ценности для бизнеса и показывает, куда направлять ресурсы.
          Главный инсайт: <strong className="text-foreground">80% выручки приходится на сегменты A и B,
          но компании часто тратят 80% усилий на C и D</strong>.
        </p>

        {/* SVG: ABCDX visual */}
        <div className="w-full overflow-x-auto mb-6">
          <svg
            viewBox="0 0 600 280"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-xl mx-auto"
          >
            <rect x="0" y="0" width="600" height="280" rx="16" fill="currentColor" fillOpacity="0.03" />

            {/* Bars representing segment value */}
            {/* A */}
            <rect x="60" y="40" width="80" height="180" rx="8" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeOpacity="0.4" strokeWidth="1" />
            <text x="100" y="75" textAnchor="middle" fontSize="24" fontWeight="800" fill="#22c55e">A</text>
            <text x="100" y="95" textAnchor="middle" fontSize="8" fontWeight="600" fill="#22c55e">Идеальные</text>
            <text x="100" y="115" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">Быстро, много,</text>
            <text x="100" y="126" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">амбассадоры</text>

            {/* B */}
            <rect x="160" y="70" width="80" height="150" rx="8" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeOpacity="0.35" strokeWidth="1" />
            <text x="200" y="105" textAnchor="middle" fontSize="24" fontWeight="800" fill="#7c3aed">B</text>
            <text x="200" y="125" textAnchor="middle" fontSize="8" fontWeight="600" fill="#7c3aed">Хорошие</text>
            <text x="200" y="145" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">С возражениями,</text>
            <text x="200" y="156" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">но стабильные</text>

            {/* C */}
            <rect x="260" y="110" width="80" height="110" rx="8" fill="#f59e0b" fillOpacity="0.12" stroke="#f59e0b" strokeOpacity="0.3" strokeWidth="1" />
            <text x="300" y="145" textAnchor="middle" fontSize="24" fontWeight="800" fill="#f59e0b">C</text>
            <text x="300" y="165" textAnchor="middle" fontSize="8" fontWeight="600" fill="#f59e0b">Сложные</text>
            <text x="300" y="180" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">Долго, мало,</text>
            <text x="300" y="191" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">нагружают</text>

            {/* D */}
            <rect x="360" y="160" width="80" height="60" rx="8" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeOpacity="0.25" strokeWidth="1" />
            <text x="400" y="185" textAnchor="middle" fontSize="24" fontWeight="800" fill="#ef4444">D</text>
            <text x="400" y="205" textAnchor="middle" fontSize="8" fontWeight="600" fill="#ef4444">Неконверт.</text>

            {/* X */}
            <rect x="460" y="40" width="80" height="180" rx="8" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="6 3" />
            <text x="500" y="75" textAnchor="middle" fontSize="24" fontWeight="800" fill="#7c3aed">X</text>
            <text x="500" y="95" textAnchor="middle" fontSize="8" fontWeight="600" fill="#7c3aed">Будущие</text>
            <text x="500" y="110" textAnchor="middle" fontSize="8" fontWeight="600" fill="#7c3aed">идеальные</text>
            <text x="500" y="130" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">Есть потребность,</text>
            <text x="500" y="141" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">продукт не</text>
            <text x="500" y="152" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5">обслуживает</text>

            {/* Arrow from X to A */}
            <path d="M500 225 C500 260 100 260 100 225" stroke="#7c3aed" strokeWidth="1.2" strokeDasharray="4 3" fill="none" />
            <polygon points="96,228 100,220 104,228" fill="#7c3aed" fillOpacity="0.5" />
            <text x="300" y="258" textAnchor="middle" fontSize="9" fontWeight="500" fill="#7c3aed">X становятся будущими A: стратегический вектор роста</text>

            {/* Bottom label */}
            <text x="300" y="278" textAnchor="middle" fontSize="9" fill="currentColor" fillOpacity="0.5">Высота столбца = ценность сегмента для бизнеса</text>
          </svg>
        </div>

        {/* Segment Cards */}
        <div className="grid gap-3 mb-6">
          {[
            {
              segment: 'A',
              title: 'Идеальные клиенты',
              desc: 'Продукт остро нужен. Покупают быстро, платят много, редко обращаются в поддержку. Амбассадоры бренда — рекомендуют другим без просьбы.',
              color: 'bg-success/10 border-success/20 text-success',
              badge: 'bg-success/15 text-success',
            },
            {
              segment: 'B',
              title: 'Хорошие клиенты с возражениями',
              desc: 'Продукт нужен, но есть сомнения или чего-то не хватает. Средний цикл сделки, платят стабильно после убеждения. Доработки для B часто повышают конверсию для всех.',
              color: 'bg-accent/10 border-accent/20 text-accent',
              badge: 'bg-accent/15 text-accent',
            },
            {
              segment: 'C',
              title: 'Сложные клиенты',
              desc: 'Долгий цикл сделки, маленький чек, постоянные обращения в поддержку. Нагружают команду непропорционально выручке. Часто требуют кастомных доработок.',
              color: 'bg-warning/10 border-warning/20 text-warning',
              badge: 'bg-warning/15 text-warning',
            },
            {
              segment: 'D',
              title: 'Неконвертируемые',
              desc: 'Много вопросов, много возражений, сделки почти не закрываются. Ещё не столкнулись с работой, которую решает продукт, или работа для них неприоритетна.',
              color: 'bg-error/10 border-error/20 text-error',
              badge: 'bg-error/15 text-error',
            },
            {
              segment: 'X',
              title: 'Будущие идеальные клиенты',
              desc: 'Ведут себя как сегмент A (готовы платить, есть острая потребность), но продукт в текущем виде их не обслуживает. Стратегический ориентир для развития продукта.',
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

        {/* ABCDX + Strategy */}
        <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Стратегия на основе ABCDX:</strong> направляйте 80%
            ресурсов поддержки на сегменты A и B (они приносят основную выручку). Продуктовое развитие
            направляйте в сторону сегмента X &mdash; это ваш вектор роста. Сегменты C и D &mdash;
            сознательно де-приоритизируйте, не тратьте на них ресурсы развития.
          </p>
        </div>
      </motion.div>

      {/* --- RAT (Riskiest Assumption Test) --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-3">RAT: Riskiest Assumption Test</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          После ABCDX-сегментации для каждого приоритетного сегмента выпишите{' '}
          <strong className="text-foreground">RAT &mdash; самое рискованное допущение</strong>,
          которое нужно проверить в первую очередь. RAT &mdash; это гипотеза, которая, если окажется
          ложной, обрушит всю идею.
        </p>
        <div className="grid gap-3 mb-4">
          {[
            {
              segment: 'A',
              rat: 'Текущие идеальные клиенты действительно используют новую фичу, а не просто говорят, что хотят.',
              test: 'Показать прототип 5 клиентам из сегмента A — попросить выполнить задачу.',
            },
            {
              segment: 'B',
              rat: 'Возражения сегмента B снимаются именно этой доработкой, а не чем-то другим.',
              test: 'Провести решенческие интервью: покажите решение и спросите, снимает ли оно конкретное возражение.',
            },
            {
              segment: 'X',
              rat: 'У сегмента X достаточно платёжеспособности и готовности платить за решение их работы.',
              test: 'Запустить лендинг или pre-sale и измерить конверсию в предоплату / заявку.',
            },
          ].map((item) => (
            <div key={item.segment} className="p-4 rounded-lg border border-border/50 bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-xs font-bold">
                  Сегмент {item.segment}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">RAT:</strong> {item.rat}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                <strong className="text-foreground">Как проверить:</strong> {item.test}
              </p>
            </div>
          ))}
        </div>
        <div className="p-5 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            Принцип RAT
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Не проверяйте всё подряд. Найдите <strong className="text-foreground">одно допущение</strong>,
            без которого вся идея не имеет смысла. Проверьте его быстро и дёшево. Если допущение
            подтвердилось &mdash; переходите к следующему шагу. Если нет &mdash; отбросьте идею
            и вернитесь к шагу 1.
          </p>
        </div>
      </motion.div>

      {/* --- Типичная ошибка --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
              <path d="M10 2L18 17H2L10 2Z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 8V12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="14.5" r="0.75" fill="#f59e0b" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Частая ошибка: пропускать шаги</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Команды часто прыгают от идеи (шаг 1) сразу к оценке стоимости (шаг 5), пропуская
                валидацию. Или проводят ABCDX-сегментацию, но не выписывают RAT и не проверяют
                допущения. Каждый шаг алгоритма существует по причине &mdash; пропуск любого
                из них повышает риск построить фичу, которая никому не нужна.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Quiz: ABCDX --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Проверьте себя
        </h3>
        <Quiz
          question="Клиенты сегмента X в ABCDX-сегментации — это:"
          options={[
            {
              text: 'Клиенты, которые уже ушли к конкурентам и не вернутся',
              explanation:
                'Сегмент X — это не ушедшие клиенты. Это потенциальные идеальные клиенты, у которых есть острая потребность, но ваш продукт в текущем виде её не обслуживает.',
            },
            {
              text: 'Будущие идеальные клиенты — есть потребность (работа), но продукт пока не обслуживает их работу',
              correct: true,
              explanation:
                'Верно! Сегмент X — стратегический ориентир для развития продукта. Они ведут себя как сегмент A (готовы платить, есть острая работа), но продукт в текущем виде их не обслуживает. Развитие в сторону X — это вектор роста.',
            },
            {
              text: 'Экспериментальные пользователи на бесплатном тарифе',
              explanation:
                'Бесплатные пользователи могут быть в любом сегменте. X — это про наличие работы, которую продукт пока не выполняет, а не про тариф.',
            },
            {
              text: 'Клиенты с самым высоким чеком',
              explanation:
                'Высокий чек характерен для сегмента A (идеальные клиенты). Сегмент X — это клиенты с потребностью, которую продукт пока не может обслужить.',
            },
          ]}
        />
      </motion.div>

      {/* --- DragDrop: соотнесите сегменты ABCDX --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Практика: соотнесите сегменты с описаниями
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          Перетащите описание клиента в правильный сегмент ABCDX.
        </p>
        <DragDrop
          instruction="Сопоставьте каждое описание клиента с его сегментом."
          items={[
            { id: 'i1', text: 'Покупает быстро, платит много, рекомендует друзьям' },
            { id: 'i2', text: 'Долгий цикл, маленький чек, постоянно в поддержке' },
            { id: 'i3', text: 'Готов платить, но продукт не решает его работу' },
            { id: 'i4', text: 'Нужен продукт, но есть сомнения и возражения' },
            { id: 'i5', text: 'Много вопросов, сделки почти не закрываются' },
          ]}
          zones={[
            { id: 'zA', label: 'Сегмент A', acceptIds: ['i1'] },
            { id: 'zB', label: 'Сегмент B', acceptIds: ['i4'] },
            { id: 'zC', label: 'Сегмент C', acceptIds: ['i2'] },
            { id: 'zD', label: 'Сегмент D', acceptIds: ['i5'] },
            { id: 'zX', label: 'Сегмент X', acceptIds: ['i3'] },
          ]}
        />
      </motion.div>

      {/* --- ScenarioCard --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Сценарий
        </h3>
        <ScenarioCard
          scenario="Вы — продакт-менеджер сервиса онлайн-бухгалтерии для малого бизнеса. Вы получили много запросов на функцию управления складом. Как поступите по алгоритму развития?"
          context="Запросы приходят от разных клиентов. Разработка займёт 3 месяца. Ваша стратегия — стать платформой для всех финансовых задач малого бизнеса."
          options={[
            {
              text: 'Сразу берём в разработку — клиенты просят, значит, нужно делать.',
              outcome:
                'Вы пропустили шаги 2-4 алгоритма. Непонятно, из какого сегмента приходят запросы (может быть, это сегмент C или D). Не проверено, соответствует ли это стратегии. Не проведён RAT. Риск потратить 3 месяца на фичу, которая не окупится.',
              score: 0,
            },
            {
              text: 'Проводим ABCDX-сегментацию запросов, выписываем RAT, проводим решенческие интервью с целевым сегментом, затем оцениваем стоимость.',
              outcome:
                'Отлично! Вы следуете алгоритму. Сегментация покажет, кто именно просит (A/B или C/D). RAT поможет проверить ключевое допущение. Решенческие интервью покажут, будут ли клиенты реально использовать фичу. Только после этого — оценка стоимости и решение.',
              score: 3,
            },
            {
              text: 'Отказываем — управление складом не связано с бухгалтерией, это не наша работа.',
              outcome:
                'Слишком поспешный отказ. Управление складом может быть смежной работой: «хочу контролировать остатки для учёта себестоимости». Нужно хотя бы проверить, вписывается ли это в стратегию (шаг 2) и какой сегмент просит (шаг 3).',
              score: 1,
            },
          ]}
        />
      </motion.div>

      {/* --- InputExercise --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Упражнение
        </h3>
        <InputExercise
          prompt="Выберите продукт, которым вы пользуетесь. Сформулируйте идею для его развития, привяжите её к работе клиента (формат «хочу + глагол»), определите целевой сегмент (A, B или X) и напишите RAT — самое рискованное допущение."
          placeholder="Продукт: ... Идея: ... Работа: «хочу + глагол» Сегмент: ... RAT: ..."
          hint="Хороший RAT — это допущение, без подтверждения которого вся идея не имеет смысла. Например: «Пользователи действительно готовы платить за эту функцию» или «Проблема возникает достаточно часто, чтобы оправдать отдельную фичу»."
          exampleAnswer="Продукт: Notion. Идея: встроенный AI-ассистент для автозаполнения таблиц. Работа: «хочу быстро структурировать данные без ручного ввода». Сегмент: X — пользователи, которые ведут базы данных, но не программисты. RAT: пользователи доверят AI заполнять данные без ручной проверки каждой ячейки."
        />
      </motion.div>

      {/* --- Итог модуля --- */}
      <motion.div variants={fadeInItem} className="mt-10 p-5 rounded-xl bg-accent/5 border border-accent/15">
        <h3 className="text-sm font-semibold text-foreground mb-2">Ключевой вывод</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Развитие существующего продукта &mdash; это системный процесс из 5 шагов:
          от формулировки гипотезы через ABCDX-сегментацию и RAT к решенческим интервью
          и оценке стоимости. <strong className="text-foreground">ABCDX-сегментация</strong> показывает,
          на каких клиентов тратить ресурсы, а <strong className="text-foreground">RAT</strong> помогает
          быстро и дёшево проверить самое рискованное допущение. Не пропускайте шаги &mdash; каждый
          из них снижает риск построить то, что никому не нужно.
        </p>
      </motion.div>
    </ModuleWrapper>
  );
}
