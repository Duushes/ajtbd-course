'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import InputExercise from '@/components/InputExercise';
import ScenarioCard from '@/components/ScenarioCard';
import { motion } from 'framer-motion';

export default function Module5() {
  return (
    <ModuleWrapper
      moduleIndex={5}
      title="JTBD-исследования"
      subtitle="Три типа исследований: для сегмента, продукта и коммуникации"
      readingList={[
        {
          title: 'Ваня Замесин — JTBD-исследование для поиска продукта',
          url: 'https://zamesin.ru/books/product-howto/how-to-find-product-requirements-using-jtbd-research/',
        },
        {
          title: 'Ваня Замесин — Riskiest Assumption Test',
          url: 'https://zamesin.ru/books/product-howto/riskiest-assumption-test/',
        },
        {
          title: 'Ваня Замесин — PMF с помощью сегментации Шона Эллиса',
          url: 'https://zamesin.ru/books/product-howto/sean-ellis-segmentation/',
        },
        {
          title: 'Гайд AJTBD-интервью для B2C (Notion)',
          url: 'https://ivanzamesin.notion.site/v3-3-AJTBD-B2C-950101210c704d91bc5d1cf45da5ca8b',
        },
      ]}
    >
      {/* --- Введение: три типа исследований --- */}
      <motion.div variants={fadeInItem} className="prose prose-sm max-w-none mb-8">
        <h2 className="text-xl font-semibold mb-3">Три типа JTBD-исследований</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          В AJTBD выделяют <strong className="text-foreground">три типа исследований</strong>, каждый
          из которых отвечает на свой ключевой вопрос бизнеса. Выбор типа зависит от задачи:
          ищете ли вы сегмент, проектируете продукт или строите коммуникацию.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Главный инструмент всех трёх типов &mdash; <strong className="text-foreground">глубинное интервью</strong>.
          Ключевой вопрос: &laquo;Расскажите, как в последний раз вы [делали работу]?&raquo;.
          Никаких гипотетических вопросов &mdash; только реальный прошлый опыт.
        </p>
      </motion.div>

      {/* --- Три типа исследований --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Обзор трёх типов</h2>
        <div className="grid gap-3">
          {[
            {
              step: '1',
              title: 'Исследование для СЕГМЕНТА',
              desc: 'Какие работы существуют? Какие решения люди используют? Результат: карта сегментов «работа + текущее решение». Выборка: B2C — 16, B2B — 8-10 респондентов.',
            },
            {
              step: '2',
              title: 'Исследование для ПРОДУКТА',
              desc: 'Как пользователи выполняют работу пошагово? Где проблемы? Результат: требования к продукту, приоритизированные по Problem Score.',
            },
            {
              step: '3',
              title: 'Исследование для КОММУНИКАЦИИ',
              desc: 'Как люди осознают работу, ищут и выбирают решение? Результат: маркетинговая стратегия, каналы и сообщения для каждой фазы.',
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

      {/* --- Методология интервью --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Методология JTBD-интервью</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Все три типа исследований используют <strong className="text-foreground">глубинное интервью</strong>.
          Ключевые правила: спрашивайте только о <em>реальном прошлом опыте</em>, никогда &mdash;
          о гипотетическом будущем. Вместо &laquo;Вы бы стали?..&raquo; спрашивайте
          &laquo;Расскажите, как в последний раз вы...&raquo;. Копайте в контекст: когда, где, с кем,
          что происходило до этого.
        </p>
        <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Структура интервью
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {[
              { label: 'Контекст работы', color: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/25' },
              { label: 'Текущее решение', color: 'bg-violet-500/15 text-violet-400 border-violet-500/25' },
              { label: 'Проблемы', color: 'bg-purple-500/15 text-purple-400 border-purple-500/25' },
              { label: 'Эмоции (1-5)', color: 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/25' },
              { label: 'Частота (1-5)', color: 'bg-pink-500/15 text-pink-400 border-pink-500/25' },
              { label: 'Альтернативы', color: 'bg-rose-500/15 text-rose-400 border-rose-500/25' },
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className={`px-2.5 py-1 rounded-md border font-medium ${item.color}`}>
                  {item.label}
                </span>
                {i < 5 && (
                  <svg width="16" height="8" viewBox="0 0 16 8" fill="none" className="text-muted-foreground/40 flex-shrink-0">
                    <path d="M0 4H14M14 4L10 1M14 4L10 7" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                )}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- SVG-диаграмма: воронка поиска PMF --- */}
      <motion.div variants={fadeInItem} className="my-10">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Problem Score: формула приоритизации
        </h3>
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 600 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-xl mx-auto"
          >
            {/* Background */}
            <rect x="0" y="0" width="600" height="420" rx="16" fill="currentColor" fillOpacity="0.03" />

            {/* Funnel layers - widest to narrowest */}
            {/* Layer 1: Lots of jobs */}
            <path d="M80 60 L520 60 L490 130 L110 130 Z" fill="#7c3aed" fillOpacity="0.12" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1" />
            <text x="300" y="88" textAnchor="middle" fontSize="13" fontWeight="600" fill="#7c3aed">
              Все найденные пары «работа + решение»
            </text>
            <text x="300" y="108" textAnchor="middle" fontSize="10" fill="#7c3aed" fillOpacity="0.8">
              Из 16 интервью (B2C) или 8-10 (B2B)
            </text>

            {/* Layer 2: Evaluated jobs */}
            <path d="M110 140 L490 140 L455 210 L145 210 Z" fill="#7c3aed" fillOpacity="0.22" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="1" />
            <text x="300" y="168" textAnchor="middle" fontSize="13" fontWeight="600" fill="#7c3aed">
              Problem Score = Эмоция × Частота
            </text>
            <text x="300" y="188" textAnchor="middle" fontSize="10" fill="#7c3aed" fillOpacity="0.7">
              Средняя эмоция (1-5) × Средняя частота (1-5)
            </text>

            {/* Layer 3: Target job */}
            <path d="M145 220 L455 220 L410 290 L190 290 Z" fill="#7c3aed" fillOpacity="0.4" stroke="#7c3aed" strokeOpacity="0.5" strokeWidth="1" />
            <text x="300" y="248" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">
              Целевой сегмент
            </text>
            <text x="300" y="268" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.8">
              Работа + решение с максимальным Problem Score
            </text>

            {/* Layer 4: Solution */}
            <path d="M190 300 L410 300 L375 355 L225 355 Z" fill="#7c3aed" fillOpacity="0.6" stroke="#7c3aed" strokeOpacity="0.6" strokeWidth="1" />
            <text x="300" y="325" textAnchor="middle" fontSize="13" fontWeight="700" fill="white">
              Исследование для продукта
            </text>
            <text x="300" y="343" textAnchor="middle" fontSize="10" fill="white" fillOpacity="0.8">
              Детальная разбивка на Small/Micro Jobs
            </text>

            {/* Layer 5: PMF */}
            <rect x="240" y="365" width="120" height="36" rx="8" fill="#22c55e" fillOpacity="0.85" />
            <text x="300" y="388" textAnchor="middle" fontSize="13" fontWeight="800" fill="white">
              PMF
            </text>

            {/* Side arrows with labels */}
            <text x="48" y="100" textAnchor="middle" fontSize="22" fill="#7c3aed" fillOpacity="0.5">&#x2BC7;</text>
            <text x="552" y="100" textAnchor="middle" fontSize="22" fill="#7c3aed" fillOpacity="0.5">&#x2BC8;</text>

            {/* Down arrows between layers */}
            <path d="M300 130 L300 140" stroke="#7c3aed" strokeOpacity="0.3" strokeWidth="1.5" />
            <path d="M300 210 L300 220" stroke="#7c3aed" strokeOpacity="0.4" strokeWidth="1.5" />
            <path d="M300 290 L300 300" stroke="#7c3aed" strokeOpacity="0.5" strokeWidth="1.5" />
            <path d="M300 355 L300 365" stroke="#22c55e" strokeOpacity="0.6" strokeWidth="1.5" />
          </svg>
        </div>
      </motion.div>

      {/* --- Главная ошибка стартапов --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <div className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-0.5">
              <path d="M10 2L18 17H2L10 2Z" stroke="#f59e0b" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 8V12" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="10" cy="14.5" r="0.75" fill="#f59e0b" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Главные ошибки интервью</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Не спрашивайте &laquo;А вы бы стали пользоваться...?&raquo; &mdash; это гипотетический вопрос,
                ответ на который ничего не значит. Не спрашивайте про фичи &mdash; спрашивайте про работу.
                Не подсказывайте ответы. Спрашивайте &laquo;Почему?&raquo; минимум 5 раз, чтобы докопаться
                до глубинной мотивации.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* --- Квиз --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Проверьте себя
        </h3>
        <Quiz
          question="Как правильно рассчитать Problem Score для сегмента?"
          options={[
            {
              text: 'Количество респондентов × важность проблемы',
              explanation:
                'Problem Score не зависит от количества респондентов напрямую. Формула: средняя эмоция × средняя частота.',
            },
            {
              text: 'Средняя эмоция (1-5) × средняя частота (1-5)',
              correct: true,
              explanation:
                'Верно! Problem Score = средняя эмоция × средняя частота. Максимум 25 баллов. Чем выше — тем больше потенциал для создания ценности в этом сегменте.',
            },
            {
              text: 'Сумма всех негативных оценок из интервью',
              explanation:
                'Простая сумма не даёт сравнимый показатель. Нужны средние значения по двум шкалам: эмоция и частота.',
            },
            {
              text: 'Процент респондентов, которые назвали эту проблему',
              explanation:
                'Процент упоминаний — полезная метрика, но Problem Score учитывает интенсивность эмоции и частоту столкновения с проблемой.',
            },
          ]}
        />
      </motion.div>

      {/* --- Сценарий --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Сценарий
        </h3>
        <ScenarioCard
          scenario="Вы проводите JTBD-исследование для сегментации. Какой вопрос зададите респонденту?"
          context="Вы исследуете рынок онлайн-обучения. Перед вами человек, который недавно купил онлайн-курс."
          options={[
            {
              text: '«Какие функции вы хотите видеть в идеальной платформе для обучения?»',
              outcome:
                'Это вопрос о гипотетическом будущем и о фичах — двойная ошибка. Люди не могут точно описать, что им нужно, в отрыве от контекста. Вы получите список «хотелок», а не понимание работы.',
              score: 0,
            },
            {
              text: '«Расскажите, как в последний раз вы решили пройти онлайн-курс. Что тогда происходило в вашей жизни?»',
              outcome:
                'Отличный вопрос! Вы спрашиваете о реальном прошлом опыте и копаете в контекст. Ответ покажет работу (зачем учился), текущее решение (какой курс выбрал), триггер (что подтолкнуло) и проблемы.',
              score: 3,
            },
            {
              text: '«Оцените по шкале от 1 до 10, насколько вам нравится платформа X?»',
              outcome:
                'Количественная оценка одной платформы не даёт понимания работы. Вы не узнаете, ЗАЧЕМ человек учится, какие альтернативы рассматривал и какие проблемы у него есть.',
              score: 1,
            },
          ]}
        />
      </motion.div>

      {/* --- Упражнение --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Упражнение
        </h3>
        <InputExercise
          prompt="Сформулируйте 3 вопроса для JTBD-интервью о работе «организовать отпуск». Помните: только о прошлом опыте, копайте в контекст и эмоции."
          placeholder="1. Расскажите, как в последний раз вы... 2. Что происходило, когда вы... 3. Как вы себя чувствовали, когда..."
          hint="Хорошие вопросы начинаются с «Расскажите...», «Что происходило...», «Как вы себя чувствовали...». Плохие — с «А вы бы стали...», «Какие функции...», «Нравится ли вам...»."
          exampleAnswer="1. «Расскажите, как вы в последний раз планировали отпуск. Что тогда происходило в вашей жизни, что подтолкнуло вас?» 2. «Какими инструментами вы пользовались для поиска билетов и жилья? Что было неудобно?» 3. «Как вы себя чувствовали, когда всё было забронировано? А в процессе — что вызывало стресс?»"
        />
      </motion.div>
    </ModuleWrapper>
  );
}
