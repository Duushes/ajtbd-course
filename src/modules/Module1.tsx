'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import DragDrop from '@/components/DragDrop';
import InputExercise from '@/components/InputExercise';
import { motion } from 'framer-motion';

export default function Module1() {
  return (
    <ModuleWrapper
      moduleIndex={1}
      title="Введение в AJTBD"
      subtitle="Почему люди покупают? Не потому что хотят ваш продукт."
      readingList={[
        {
          title: 'Ваня Замесин — Jobs To Be Done на пальцах',
          url: 'https://zamesin.ru/books/product-howto/jtbd-101/',
        },
        {
          title: 'Ваня Замесин — Введение в Advanced Jobs To Be Done',
          url: 'https://zamesin.ru/producthowto/book/introduction-to-advanced-jobs-to-be-done/',
        },
        {
          title: 'Ваня Замесин — Главное про Jobs To Be Done',
          url: 'https://zamesin.ru/producthowto/book/about-jobs-to-be-done/',
        },
        {
          title: 'Ваня Замесин — Бесплатная лекция по Advanced JTBD',
          url: 'https://zamesin.ru/producthowto/free-lecture/',
        },
        {
          title: 'AJTBD-гайды и материалы (Notion)',
          url: 'https://ivanzamesin.notion.site/AJTBD-092a5ca1939a454e89ba09056f265e55',
        },
      ]}
    >
      {/* --- Введение --- */}
      <motion.div variants={fadeInItem} className="prose prose-invert max-w-none mb-10">
        <h2 className="text-xl font-semibold mb-4">Люди не покупают продукты</h2>
        <p className="text-muted-foreground leading-relaxed">
          Фреймворк <strong className="text-foreground">Jobs To Be Done</strong> переворачивает
          привычный взгляд на маркетинг и продуктовую разработку. Его ключевая идея проста:
          люди не покупают продукты и услуги &mdash; они <em>&laquo;нанимают&raquo;</em> их для
          выполнения определённой <strong className="text-foreground">работы</strong> (Job).
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          <strong className="text-foreground">Работа (Job)</strong> &mdash; это прогресс,
          которого человек хочет достичь в конкретных обстоятельствах. Человек находится
          в <strong className="text-foreground">Точке А</strong> (текущая ситуация) и хочет
          попасть в <strong className="text-foreground">Точку Б</strong> (желаемая ситуация).
          Продукт &mdash; это инструмент, который он нанимает для этого перехода.
        </p>
      </motion.div>

      {/* --- Эволюция JTBD --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <h3 className="text-base font-semibold mb-4">От классического JTBD к Advanced JTBD</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          Классический JTBD включает три основных подхода:
        </p>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#9679;</span>
            <span><strong className="text-foreground">Кристенсен</strong> &mdash; история с милкшейком, фокус на понимании работы клиента</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#9679;</span>
            <span><strong className="text-foreground">ODI (Тони Ульвик)</strong> &mdash; Outcome-Driven Innovation, фокус на измеримых результатах</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#9679;</span>
            <span><strong className="text-foreground">Switch (Боб Моэста)</strong> &mdash; четыре силы прогресса, фокус на переключении</span>
          </li>
        </ul>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          <strong className="text-foreground">Advanced JTBD (Иван Замесин)</strong> &mdash; это эволюция классического подхода.
          AJTBD добавляет <strong className="text-foreground">граф работ</strong> как ключевую единицу анализа,
          50+ механик создания ценности и алгоритмы решения бизнес-задач. Кейсы: Aviasales, Сбербанк Домклик, Яндекс Такси.
        </p>
      </motion.div>

      {/* --- Формула работы по Замесину --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Формула работы по Замесину</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Каждая работа описывается по формуле:
        </p>
        <div className="p-5 rounded-xl bg-accent/5 border border-accent/20 mb-6">
          <p className="text-sm text-accent font-semibold text-center">
            &laquo;Когда [контекст], хочу [результат], чтобы [эмоциональное преображение]&raquo;
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Эта формула объединяет три элемента: <strong className="text-foreground">контекст</strong> (обстоятельства,
          в которых возникает работа), <strong className="text-foreground">результат</strong> (что человек хочет
          получить), и <strong className="text-foreground">эмоциональное преображение</strong> (как человек хочет
          себя чувствовать после). Одновременно работа описывается как переход из Точки А (текущая ситуация)
          в Точку Б (желаемая ситуация), которому предшествует триггер &mdash; момент осознания.
        </p>
      </motion.div>

      {/* --- Пример с милкшейком --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
            <rect x="6" y="2" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M5 6H15L14 18H6L5 6Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M8 9V15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <path d="M10 9V15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
            <path d="M12 9V15" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          </svg>
          <h3 className="text-base font-semibold">Классический пример: Милкшейк</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Клейтон Кристенсен обнаружил, что 40% милкшейков в сети фастфуда покупали утром.
          Покупатели не &laquo;хотели милкшейк&raquo; &mdash; они <strong className="text-foreground">нанимали</strong> его
          на работу. В формате Замесина:
        </p>
        <div className="mt-3 p-4 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-sm text-accent italic">
            &laquo;Когда еду на работу утром (контекст), хочу не скучать и быть сытым (результат),
            чтобы чувствовать, что утро прошло продуктивно (преображение)&raquo;
          </p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Конкурентами милкшейка были не другие напитки, а бананы, бейглы и скука &mdash;
          любые решения, которые человек мог <em>нанять</em> на ту же работу.
          Понимание работы полностью меняет конкурентный ландшафт.
        </p>
      </motion.div>

      {/* --- Ключевая модель: Point A → Trigger → Point B --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Ключевая модель: A &rarr; Триггер &rarr; B</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Каждая &laquo;работа&raquo; описывается переходом человека из <strong className="text-foreground">Точки А</strong>{' '}
          (текущая ситуация) в <strong className="text-foreground">Точку Б</strong>{' '}
          (желаемая ситуация), которому предшествует <strong className="text-foreground">триггерное событие</strong> &mdash;
          момент, когда человек осознаёт работу. Набор решений, из которых человек выбирает
          для выполнения одной работы, называется <strong className="text-foreground">Consideration Set</strong>.
        </p>

        {/* SVG Diagram: Point A → Trigger → Point B */}
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            {/* Point A block */}
            <rect x="20" y="40" width="160" height="80" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-error/60" fill="none" />
            <rect x="20" y="40" width="160" height="80" rx="12" className="text-error/5" fill="currentColor" />
            <text x="100" y="72" textAnchor="middle" className="text-foreground" fontSize="13" fontWeight="600" fill="currentColor">Точка А</text>
            <text x="100" y="92" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Текущая ситуация</text>
            <text x="100" y="106" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Контекст + проблема</text>

            {/* Arrow A → Trigger */}
            <line x1="180" y1="80" x2="230" y2="80" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" strokeDasharray="4 3" />
            <polygon points="228,75 238,80 228,85" className="text-muted-foreground" fill="currentColor" />

            {/* Trigger block */}
            <rect x="240" y="40" width="160" height="80" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-accent/60" fill="none" />
            <rect x="240" y="40" width="160" height="80" rx="12" className="text-accent/5" fill="currentColor" />
            {/* Lightning icon */}
            <path d="M316 56L310 72H318L312 88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" />
            <text x="320" y="72" textAnchor="middle" className="text-foreground" fontSize="13" fontWeight="600" fill="currentColor">Триггер</text>
            <text x="320" y="92" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Осознание работы</text>
            <text x="320" y="106" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;Мне нужно решение&raquo;</text>

            {/* Arrow Trigger → B */}
            <line x1="400" y1="80" x2="450" y2="80" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground" strokeDasharray="4 3" />
            <polygon points="448,75 458,80 448,85" className="text-muted-foreground" fill="currentColor" />

            {/* Point B block */}
            <rect x="460" y="40" width="160" height="80" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-success/60" fill="none" />
            <rect x="460" y="40" width="160" height="80" rx="12" className="text-success/5" fill="currentColor" />
            <text x="540" y="72" textAnchor="middle" className="text-foreground" fontSize="13" fontWeight="600" fill="currentColor">Точка Б</text>
            <text x="540" y="92" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Желаемая ситуация</text>
            <text x="540" y="106" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Результат + преображение</text>

            {/* Bottom label */}
            <text x="320" y="150" textAnchor="middle" className="text-accent" fontSize="11" fontWeight="500" fill="currentColor">Продукт = инструмент перехода из А в Б</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Алгоритм выполнения работы --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Алгоритм выполнения работы (6 шагов)</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          По Замесину, каждая работа проходит через шесть последовательных шагов.
          Проблемы возникают не с самой работой, а с <strong className="text-foreground">решениями</strong> на каждом из этих шагов &mdash;
          решения ломаются, тормозят, стоят дорого, неудобны.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">1</span>
              <h4 className="text-sm font-semibold">Осознание работы</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Человек осознаёт, что ему нужно выполнить определённую работу. Это момент триггера.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">2</span>
              <h4 className="text-sm font-semibold">Поиск решения</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Человек ищет варианты: спрашивает знакомых, гуглит, вспоминает прошлый опыт. Формирует Consideration Set.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">3</span>
              <h4 className="text-sm font-semibold">Выбор решения</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Из набора вариантов человек выбирает одно решение. Сравнивает по энергоэффективности: время, деньги, усилия.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">4</span>
              <h4 className="text-sm font-semibold">Покупка</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Человек приобретает решение: платит деньги, регистрируется, скачивает, заказывает.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">5</span>
              <h4 className="text-sm font-semibold">Использование</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Человек использует решение для выполнения работы. Здесь решение либо справляется, либо нет.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold flex items-center justify-center">6</span>
              <h4 className="text-sm font-semibold">Оценка результата</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Человек оценивает: выполнена ли работа? Достигнуто ли преображение? Нанять это решение снова или искать другое?
            </p>
          </div>
        </div>
      </motion.div>

      {/* --- Проблемы возникают с решениями --- */}
      <motion.div variants={fadeInItem} className="mb-10 prose prose-invert max-w-none">
        <h2 className="text-xl font-semibold mb-4">Проблемы возникают с решениями, а не с работой</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ключевой инсайт Замесина: проблемы возникают не с самой работой, а с <strong className="text-foreground">решениями</strong>,
          которые человек нанимает для её выполнения. Решения ломаются, работают медленно, стоят дорого, неудобны.
          Работа остаётся той же &mdash; меняются решения.
        </p>
        <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-error mt-0.5">&#9679;</span>
            <span>Текущее решение ломается или перестаёт справляться (качество, скорость, удобство)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">&#9679;</span>
            <span>Меняются обстоятельства, и решение перестаёт подходить под новый контекст</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-success mt-0.5">&#9679;</span>
            <span>Появляется более энергоэффективное решение &mdash; быстрее, дешевле, проще</span>
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Конкурент &mdash; это не тот, кто продаёт похожий продукт. Конкурент &mdash; это
          <em> любое решение</em>, которое человек нанимает на ту же работу. Милкшейк конкурирует
          с бананом, бейглом и скукой. Сегментация идёт не по демографии, а по парам
          &laquo;работа + текущее решение&raquo;.
        </p>
      </motion.div>

      {/* --- Quiz --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-lg font-semibold mb-2">Проверьте понимание</h3>
        <Quiz
          question="Какой правильный формат описания работы по Замесину?"
          options={[
            {
              text: '«Я хочу [продукт], чтобы [получить фичу]»',
              explanation: 'Работа описывается не через продукт и его фичи, а через контекст, результат и преображение человека.',
            },
            {
              text: '«Когда [контекст], хочу [результат], чтобы [эмоциональное преображение]»',
              correct: true,
              explanation: 'Верно! Это формула Замесина. Контекст задаёт обстоятельства, результат — что нужно получить, преображение — как хочется себя чувствовать.',
            },
            {
              text: '«Как [роль], я хочу [действие], чтобы [бизнес-цель]»',
              explanation: 'Это формат User Story из Agile. В JTBD фокус на контексте жизни и эмоциональном преображении, а не на роли и бизнес-цели.',
            },
            {
              text: '«Целевая аудитория: [демография], потребность: [категория товара]»',
              explanation: 'JTBD принципиально отказывается от демографической сегментации. Сегментация идёт по парам «работа + текущее решение».',
            },
          ]}
        />
      </motion.div>

      {/* --- DragDrop --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Упражнение: Алгоритм выполнения работы</h3>
        <DragDrop
          instruction="Расставьте шаги алгоритма выполнения работы в правильном порядке."
          items={[
            { id: 'step-use', text: 'Использование решения' },
            { id: 'step-search', text: 'Поиск решения' },
            { id: 'step-aware', text: 'Осознание работы' },
            { id: 'step-eval', text: 'Оценка результата' },
            { id: 'step-buy', text: 'Покупка' },
            { id: 'step-choose', text: 'Выбор решения' },
          ]}
          zones={[
            { id: 'zone-1', label: 'Шаг 1', acceptIds: ['step-aware'] },
            { id: 'zone-2', label: 'Шаг 2', acceptIds: ['step-search'] },
            { id: 'zone-3', label: 'Шаг 3', acceptIds: ['step-choose'] },
            { id: 'zone-4', label: 'Шаг 4', acceptIds: ['step-buy'] },
            { id: 'zone-5', label: 'Шаг 5', acceptIds: ['step-use'] },
            { id: 'zone-6', label: 'Шаг 6', acceptIds: ['step-eval'] },
          ]}
        />
      </motion.div>

      {/* --- InputExercise --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Практика: Опишите работу по формуле Замесина</h3>
        <InputExercise
          prompt="Вспомните последнюю значимую покупку. Опишите работу по формуле: «Когда [контекст], хочу [результат], чтобы [преображение]». Затем определите, кто конкуренты этого решения — какие другие решения вы рассматривали для той же работы?"
          placeholder="Когда ..., хочу ..., чтобы ... Конкуренты: ..."
          hint="Думайте не о характеристиках продукта, а о ситуации, результате и чувстве. Конкуренты — это любые решения той же работы, даже из другой категории."
          exampleAnswer="Когда возвращаюсь поздно с работы уставший (контекст), хочу быстро поесть вкусную еду (результат), чтобы чувствовать заботу о себе и расслабиться (преображение). Конкуренты: доставка еды, замороженная пицца, бутерброд, попросить партнёра приготовить, пойти в кафе у дома."
        />
      </motion.div>
    </ModuleWrapper>
  );
}
