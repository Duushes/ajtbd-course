'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import DragDrop from '@/components/DragDrop';
import InputExercise from '@/components/InputExercise';
import ScenarioCard from '@/components/ScenarioCard';
import { motion } from 'framer-motion';

export default function Module5() {
  return (
    <ModuleWrapper
      moduleIndex={5}
      title="Запуск нового продукта"
      subtitle="Алгоритм запуска нового продукта через AJTBD"
      readingList={[
        {
          title: 'Ваня Замесин — Riskiest Assumption Test',
          url: 'https://zamesin.ru/books/product-howto/riskiest-assumption-test/',
        },
        {
          title: 'Ваня Замесин — PMF с помощью сегментации Шона Эллиса',
          url: 'https://zamesin.ru/books/product-howto/sean-ellis-segmentation/',
        },
        {
          title: 'Ваня Замесин — JTBD-исследование для поиска продукта',
          url: 'https://zamesin.ru/books/product-howto/how-to-find-product-requirements-using-jtbd-research/',
        },
      ]}
    >
      {/* --- Введение --- */}
      <motion.div variants={fadeInItem} className="prose prose-sm max-w-none mb-8">
        <h2 className="text-xl font-semibold mb-3">Зачем нужен алгоритм запуска?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Большинство новых продуктов проваливаются не потому, что плохо сделаны, а потому что
          решают <strong className="text-foreground">несуществующую проблему</strong> или нацелены
          на неверный сегмент. AJTBD-подход предлагает <strong className="text-foreground">5-шаговый
          алгоритм</strong>, который снижает риск провала: вы двигаетесь от гипотезы к валидации,
          а не от идеи сразу к разработке.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Ключевая идея: <strong className="text-foreground">работа (Job)</strong> &mdash; это цель
          клиента перейти из Точки А в Точку Б. Формула: &laquo;хочу + глагол&raquo;.
          <strong className="text-foreground"> Решение (Solution)</strong> &mdash; всё, с помощью чего
          человек выполняет работу. <strong className="text-foreground">Найм (Hiring)</strong> &mdash;
          акт выбора конкретного решения для выполнения работы. Алгоритм помогает убедиться, что
          ваш продукт будет &laquo;нанят&raquo; на реальную работу.
        </p>
      </motion.div>

      {/* --- SVG: 5 шагов алгоритма --- */}
      <motion.div variants={fadeInItem} className="my-10">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          5 шагов запуска нового продукта
        </h3>
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 700 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-2xl mx-auto"
          >
            {/* Background */}
            <rect x="0" y="0" width="700" height="480" rx="16" fill="currentColor" fillOpacity="0.03" />

            {/* Step 1 */}
            <rect x="50" y="30" width="600" height="65" rx="12" fill="#7c3aed" fillOpacity="0.10" stroke="#7c3aed" strokeOpacity="0.25" strokeWidth="1" />
            <circle cx="90" cy="62" r="18" fill="#7c3aed" fillOpacity="0.20" />
            <text x="90" y="67" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">1</text>
            <text x="130" y="55" fontSize="13" fontWeight="600" fill="#7c3aed">Формулируем гипотезу / идею</text>
            <text x="130" y="75" fontSize="10" fill="#7c3aed" fillOpacity="0.75">Какую работу (Job) мы хотим решить? Для кого?</text>

            {/* Arrow 1-2 */}
            <path d="M350 95 L350 115" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1.5" />
            <path d="M345 110 L350 118 L355 110" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1.5" fill="none" />

            {/* Step 2 */}
            <rect x="50" y="120" width="600" height="65" rx="12" fill="#7c3aed" fillOpacity="0.18" stroke="#7c3aed" strokeOpacity="0.30" strokeWidth="1" />
            <circle cx="90" cy="152" r="18" fill="#7c3aed" fillOpacity="0.25" />
            <text x="90" y="157" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">2</text>
            <text x="130" y="145" fontSize="13" fontWeight="600" fill="#7c3aed">Смотрим на рынок / бизнес-стратегию</text>
            <text x="130" y="165" fontSize="10" fill="#7c3aed" fillOpacity="0.75">Есть ли рынок? Соответствует ли стратегии компании?</text>

            {/* Arrow 2-3 */}
            <path d="M350 185 L350 205" stroke="#7c3aed" strokeOpacity="0.35" strokeWidth="1.5" />
            <path d="M345 200 L350 208 L355 200" stroke="#7c3aed" strokeOpacity="0.35" strokeWidth="1.5" fill="none" />

            {/* Step 3 */}
            <rect x="50" y="210" width="600" height="65" rx="12" fill="#7c3aed" fillOpacity="0.28" stroke="#7c3aed" strokeOpacity="0.40" strokeWidth="1" />
            <circle cx="90" cy="242" r="18" fill="#7c3aed" fillOpacity="0.35" />
            <text x="90" y="247" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">3</text>
            <text x="130" y="235" fontSize="13" fontWeight="600" fill="#7c3aed">Ищем сегменты, валидируем, выписываем RAT</text>
            <text x="130" y="255" fontSize="10" fill="#7c3aed" fillOpacity="0.75">JTBD-интервью + Riskiest Assumption Test</text>

            {/* Arrow 3-4 */}
            <path d="M350 275 L350 295" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="1.5" />
            <path d="M345 290 L350 298 L355 290" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />

            {/* Step 4 */}
            <rect x="50" y="300" width="600" height="65" rx="12" fill="#7c3aed" fillOpacity="0.40" stroke="#7c3aed" strokeOpacity="0.50" strokeWidth="1" />
            <circle cx="90" cy="332" r="18" fill="#7c3aed" fillOpacity="0.50" />
            <text x="90" y="337" textAnchor="middle" fontSize="14" fontWeight="700" fill="white">4</text>
            <text x="130" y="325" fontSize="13" fontWeight="600" fill="white">Решенческие интервью: проверяем UX</text>
            <text x="130" y="345" fontSize="10" fill="white" fillOpacity="0.80">Как пользователи реагируют на наше решение?</text>

            {/* Arrow 4-5 */}
            <path d="M350 365 L350 385" stroke="#7c3aed" strokeOpacity="0.5" strokeWidth="1.5" />
            <path d="M345 380 L350 388 L355 380" stroke="#7c3aed" strokeOpacity="0.5" strokeWidth="1.5" fill="none" />

            {/* Step 5 */}
            <rect x="50" y="390" width="600" height="65" rx="12" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.35" strokeWidth="1" />
            <circle cx="90" cy="422" r="18" fill="#22c55e" fillOpacity="0.25" />
            <text x="90" y="427" textAnchor="middle" fontSize="14" fontWeight="700" fill="#22c55e">5</text>
            <text x="130" y="415" fontSize="13" fontWeight="600" fill="#22c55e">Оцениваем стоимость реализации с командой</text>
            <text x="130" y="435" fontSize="10" fill="#22c55e" fillOpacity="0.75">Сколько будет стоить? Готовы ли мы инвестировать?</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Шаг 1: Гипотеза --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Шаг 1. Формулируем гипотезу / идею</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Всё начинается с <strong className="text-foreground">гипотезы о работе</strong>. Вы
          предполагаете, что у определённой группы людей есть работа (Job), которую они выполняют
          плохо или с большими затратами. Ваша идея &mdash; предложить решение (Solution), которое
          будет &laquo;нанято&raquo; (Hiring) вместо текущего.
        </p>
        <div className="p-5 rounded-xl bg-card border border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Пример: Airbnb
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Основатели Airbnb обнаружили работу: <strong className="text-accent">&laquo;хочу найти
            доступное краткосрочное жильё в городах, где отели дорогие&raquo;</strong>. Их гипотеза:
            люди готовы снимать комнату у незнакомцев, если это дешевле отеля. Они начали с простейшей
            валидации &mdash; сдали свою квартиру во время конференции в Сан-Франциско и убедились,
            что спрос реален.
          </p>
        </div>
      </motion.div>

      {/* --- Шаг 2: Рынок и стратегия --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Шаг 2. Смотрим на рынок и бизнес-стратегию</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Прежде чем бросаться в исследования, убедитесь, что идея <strong className="text-foreground">
          соответствует стратегии компании</strong> и что рынок достаточно большой. Задайте вопросы:
          есть ли у нас компетенции? Вписывается ли это в наше позиционирование? Какой размер рынка?
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              label: 'Размер рынка',
              desc: 'Достаточно ли людей с этой работой? Готовы ли они платить?',
              color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/25',
            },
            {
              label: 'Стратегия',
              desc: 'Соответствует ли идея миссии и текущему фокусу компании?',
              color: 'bg-violet-500/15 text-violet-400 border-violet-500/25',
            },
            {
              label: 'Компетенции',
              desc: 'Есть ли у нас ресурсы и экспертиза для реализации?',
              color: 'bg-purple-500/15 text-purple-400 border-purple-500/25',
            },
            {
              label: 'Конкуренция',
              desc: 'Какие текущие решения используют люди? Можем ли мы быть лучше?',
              color: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/25',
            },
          ].map((item, i) => (
            <div key={i} className={`p-3 rounded-lg border ${item.color}`}>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-xs mt-1 opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- Шаг 3: Сегменты, валидация, RAT --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Шаг 3. Ищем сегменты, валидируем, выписываем RAT</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Это самый важный шаг. Проведите <strong className="text-foreground">JTBD-интервью</strong> (B2C:
          16 респондентов, B2B: 8-10), чтобы найти пары &laquo;работа + текущее решение&raquo;.
          Рассчитайте <strong className="text-foreground">приоритет сегмента</strong> (объём &times; неудовлетворённость &times; частота &times; важность)
          для каждого сегмента. Затем для приоритетного сегмента выпишите <strong className="text-foreground">
          RAT (Riskiest Assumption Test)</strong> &mdash; самые рискованные допущения, которые нужно
          проверить до начала разработки.
        </p>
        <div className="p-5 rounded-xl bg-card border border-border/50 mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Пример: Notion
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Команда Notion начала с гипотезы: <strong className="text-accent">&laquo;хочу объединить
            все рабочие инструменты в одном пространстве&raquo;</strong>. Через интервью они обнаружили
            сегмент: стартап-команды, которые используют 5-7 разных инструментов (Trello, Google Docs,
            Confluence) и теряют контекст при переключении. RAT: &laquo;Люди действительно готовы
            перенести данные из привычных инструментов в новый?&raquo; Это проверили через бета-тест.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-sm font-semibold text-foreground mb-2">RAT: три исхода проверки</p>
          <div className="grid sm:grid-cols-3 gap-3 mt-3">
            {[
              { label: 'Подтверждено', desc: 'Переходите к следующему допущению', color: 'text-success' },
              { label: 'Опровергнуто', desc: 'Пивот: меняйте сегмент или решение', color: 'text-error' },
              { label: 'Неясно', desc: 'Переделайте эксперимент', color: 'text-warning' },
            ].map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-card border border-border/30 text-center">
                <p className={`text-sm font-semibold ${item.color}`}>{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- Шаг 4: UX и решенческие интервью --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Шаг 4. Решенческие интервью: проверяем UX</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Когда сегмент валидирован и ключевые допущения подтверждены, пора проверить, как
          пользователи <strong className="text-foreground">реагируют на ваше решение</strong>.
          Покажите прототип, макет или минимальный продукт и наблюдайте: понимают ли они ценность?
          Могут ли выполнить работу с помощью вашего продукта? Где спотыкаются?
        </p>
        <div className="p-5 rounded-xl bg-card border border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Пример: Telegram
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Telegram начинался с гипотезы о работе: <strong className="text-accent">&laquo;хочу
            быстро и безопасно обмениваться сообщениями&raquo;</strong>. На этапе решенческих
            интервью команда проверяла, насколько пользователи ценят скорость доставки сообщений
            и шифрование. Результат: скорость оказалась важнее шифрования для большинства &mdash;
            это определило приоритеты разработки.
          </p>
        </div>
      </motion.div>

      {/* --- Шаг 5: Оценка стоимости --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Шаг 5. Оцениваем стоимость реализации</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Финальный шаг &mdash; собрать команду и <strong className="text-foreground">оценить,
          сколько будет стоить реализация</strong>. Это не только деньги, но и время, ресурсы,
          альтернативные издержки. Сравните стоимость с потенциалом сегмента (приоритет,
          готовность платить, размер рынка) и примите решение: строить, пивотить или отказаться.
        </p>
        <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Что оценивать с командой
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              { label: 'Сроки разработки', color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/25' },
              { label: 'Стоимость MVP', color: 'bg-violet-500/15 text-violet-400 border-violet-500/25' },
              { label: 'Техдолг', color: 'bg-purple-500/15 text-purple-400 border-purple-500/25' },
              { label: 'Альтернативные издержки', color: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/25' },
              { label: 'ROI прогноз', color: 'bg-pink-500/15 text-pink-400 border-pink-500/25' },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className={`px-2.5 py-1 rounded-md border font-medium ${item.color}`}>
                  {item.label}
                </span>
                {i < 4 && (
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-muted-foreground/40 flex-shrink-0">
                    <path d="M0 4H14M14 4L10 1M14 4L10 7" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- Предупреждение: главная ошибка --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
              <path d="M10 2L18 17H2L10 2Z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 8V12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="14.5" r="0.75" fill="#f59e0b" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Главная ошибка: пропускать шаги</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Самая частая ошибка &mdash; перескочить от идеи (шаг 1) сразу к разработке (шаг 5),
                минуя валидацию. Без JTBD-интервью и RAT вы рискуете потратить месяцы на продукт,
                который никто не &laquo;наймёт&raquo;. Airbnb, Notion, Telegram &mdash; все они
                прошли через валидацию, прежде чем масштабироваться.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Сводная таблица шагов --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Сводка: 5 шагов и их результаты</h2>
        <div className="grid gap-3">
          {[
            {
              step: '1',
              title: 'Гипотеза / идея',
              desc: 'Результат: формулировка работы (Job) в формате «хочу + глагол» и предполагаемый сегмент.',
            },
            {
              step: '2',
              title: 'Анализ рынка и стратегии',
              desc: 'Результат: подтверждение, что рынок достаточно большой и идея соответствует стратегии компании.',
            },
            {
              step: '3',
              title: 'Сегменты + валидация + RAT',
              desc: 'Результат: карта сегментов с приоритетами, список проверенных (или опровергнутых) допущений.',
            },
            {
              step: '4',
              title: 'Решенческие интервью / UX',
              desc: 'Результат: понимание, как пользователи реагируют на решение, приоритеты по фичам.',
            },
            {
              step: '5',
              title: 'Оценка стоимости реализации',
              desc: 'Результат: стоимость MVP, сроки, решение — строить, пивотить или отказаться.',
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

      {/* --- Quiz --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Проверьте себя
        </h3>
        <Quiz
          question="Что нужно сделать ПЕРЕД тем, как оценивать стоимость реализации нового продукта?"
          options={[
            {
              text: 'Сразу собрать команду разработки и начать оценку — время дороже всего',
              explanation:
                'Без валидации гипотезы и проверки UX вы рискуете оценить стоимость продукта, который никому не нужен. Сначала пройдите шаги 1-4.',
            },
            {
              text: 'Провести JTBD-интервью, найти сегменты, проверить RAT и провести решенческие интервью',
              correct: true,
              explanation:
                'Верно! Шаги 1-4 алгоритма (гипотеза, рынок, сегменты + RAT, решенческие интервью) должны быть пройдены до оценки стоимости. Это гарантирует, что вы оцениваете реализацию валидированной идеи.',
            },
            {
              text: 'Написать бизнес-план на 50 страниц и согласовать его с инвесторами',
              explanation:
                'Бизнес-план без валидации — это документ, основанный на непроверенных допущениях. Сначала подтвердите, что работа (Job) реальна и сегмент достаточно большой.',
            },
            {
              text: 'Запустить рекламную кампанию и посмотреть на конверсию',
              explanation:
                'Реклама без понимания работы и сегмента не даст достоверных данных. Вы не знаете, какое сообщение транслировать и кому, пока не пройдёте шаги 1-4.',
            },
          ]}
        />
      </motion.div>

      {/* --- ScenarioCard --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Сценарий
        </h3>
        <ScenarioCard
          scenario="Вы продакт-менеджер в финтех-стартапе. CEO пришёл с идеей: «Давайте сделаем приложение для учёта личных финансов». Как вы поступите?"
          context="У вас есть команда из 5 разработчиков, дизайнер и 3 месяца до следующего раунда финансирования. Ресурсы ограничены."
          options={[
            {
              text: 'Сразу начну дизайнить и разрабатывать — у нас мало времени до раунда, нужно показать продукт инвесторам.',
              outcome:
                'Опасный путь. Без валидации работы (Job) вы потратите 3 месяца на продукт, который, возможно, никто не «наймёт». Инвесторы ценят не только продукт, но и доказательства спроса. Вы пропустили шаги 2-4 алгоритма.',
              score: 0,
            },
            {
              text: 'Сформулирую гипотезу о работе, проверю рынок, проведу 10-12 JTBD-интервью, выпишу RAT и проверю самое рискованное допущение за 2-3 недели.',
              outcome:
                'Отличное решение! Вы следуете алгоритму: гипотеза (шаг 1) → рынок (шаг 2) → сегменты и RAT (шаг 3). За 2-3 недели вы получите данные для шагов 4-5 или поймёте, что нужен пивот. Это самый эффективный путь при ограниченных ресурсах.',
              score: 3,
            },
            {
              text: 'Проведу опрос в социальных сетях: «Кому нужно приложение для учёта финансов?» — и если наберём 1000 лайков, начнём делать.',
              outcome:
                'Лайки и опросы в соцсетях не валидируют работу. Люди говорят «да» на гипотетические вопросы, но это не значит, что они «наймут» ваш продукт. Нужны JTBD-интервью о реальном прошлом опыте, а не гипотетические вопросы.',
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
          prompt="Сформулируйте гипотезу для нового продукта по формуле: «Я предполагаю, что [сегмент людей] имеет работу [хочу + глагол], и сейчас использует [текущее решение], которое плохо справляется, потому что [проблема]»."
          placeholder="Я предполагаю, что [кто] имеет работу [хочу + глагол], и сейчас использует [что], которое плохо справляется, потому что [почему]..."
          hint="Используйте формулу работы «хочу + глагол». Укажите конкретный сегмент, текущее решение и проблему с ним. Чем конкретнее — тем лучше."
          exampleAnswer="Я предполагаю, что удалённые команды из 5-15 человек имеют работу «хочу быстро находить нужную информацию по проекту», и сейчас используют комбинацию Slack + Google Docs + Notion, которая плохо справляется, потому что информация разбросана по трём инструментам и поиск занимает 15-20 минут в день."
        />
      </motion.div>

      {/* --- DragDrop: порядок шагов --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Расставьте шаги в правильном порядке
        </h3>
        <DragDrop
          instruction="Перетащите шаги алгоритма запуска нового продукта в правильном порядке — от первого к пятому."
          items={[
            { id: 'step-ux', text: 'Решенческие интервью / UX' },
            { id: 'step-cost', text: 'Оценка стоимости реализации' },
            { id: 'step-hypothesis', text: 'Формулируем гипотезу / идею' },
            { id: 'step-segments', text: 'Сегменты + валидация + RAT' },
            { id: 'step-market', text: 'Анализ рынка и стратегии' },
          ]}
          zones={[
            { id: 'zone-1', label: 'Шаг 1', acceptIds: ['step-hypothesis'] },
            { id: 'zone-2', label: 'Шаг 2', acceptIds: ['step-market'] },
            { id: 'zone-3', label: 'Шаг 3', acceptIds: ['step-segments'] },
            { id: 'zone-4', label: 'Шаг 4', acceptIds: ['step-ux'] },
            { id: 'zone-5', label: 'Шаг 5', acceptIds: ['step-cost'] },
          ]}
        />
      </motion.div>
    </ModuleWrapper>
  );
}
