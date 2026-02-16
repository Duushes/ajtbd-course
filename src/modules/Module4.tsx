'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import InputExercise from '@/components/InputExercise';
import ScenarioCard from '@/components/ScenarioCard';
import DragDrop from '@/components/DragDrop';
import { motion } from 'framer-motion';

export default function Module4() {
  return (
    <ModuleWrapper
      moduleIndex={4}
      title="Сегментация по работам"
      subtitle="Как находить и выбирать сегменты по работам"
      readingList={[
        {
          title: 'Ваня Замесин — JTBD-исследование для поиска сегмента',
          url: 'https://zamesin.ru/books/product-howto/find-the-segment-using-jtbd-research/',
        },
        {
          title: 'Ваня Замесин — ABCDX-сегментация',
          url: 'https://zamesin.ru/books/product-howto/abcdx-segmentation/',
        },
        {
          title: 'Ваня Замесин — Кейс: фокусировка на сегменте вырастила выручку на 37%',
          url: 'https://zamesin.ru/producthowto/book/ajtbd-segmentation-focus-makes-extra-revenue/',
        },
        {
          title: 'AJTBD-гайды и материалы (Notion)',
          url: 'https://ivanzamesin.notion.site/AJTBD-092a5ca1939a454e89ba09056f265e55',
        },
      ]}
    >
      {/* --- Введение: почему классическая сегментация не работает --- */}
      <motion.div variants={fadeInItem} className="prose prose-sm max-w-none mb-8">
        <h2 className="text-xl font-semibold mb-3">Сегмент = работа + текущее решение</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          В JTBD-подходе <strong className="text-foreground">сегмент -- это не группа людей по демографии или
          психографии</strong>. Сегмент -- это пара: <strong className="text-foreground">&laquo;работа + текущее
          решение&raquo;</strong>. Два совершенно разных человека -- CEO крупной компании и студент первого курса --
          могут &laquo;нанять&raquo; один и тот же стакан кофе на одну и ту же работу:
          <em> оставаться сфокусированным в следующие два часа</em>. Если они используют одно и то же текущее
          решение (например, кофе из автомата в офисе) -- они в одном сегменте.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
          Почему демографическая сегментация не работает? Потому что люди с одинаковой демографией могут выполнять
          совершенно разные работы и нуждаться в разных продуктах. А люди с разной демографией могут иметь одну
          и ту же работу. Именно поэтому JTBD-сегментация группирует людей по тому,{' '}
          <strong className="text-foreground">что они пытаются сделать</strong> и{' '}
          <strong className="text-foreground">чем они для этого пользуются сейчас</strong>.
        </p>
      </motion.div>

      {/* --- Consideration Set --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Consideration Set: набор решений одной работы</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Consideration Set</strong> -- это набор всех решений, которые
          человек рассматривает для выполнения одной работы. Ключевой инсайт: эти решения могут принадлежать
          к совершенно разным продуктовым категориям. Например, для работы &laquo;снять стресс после рабочего
          дня&raquo; человек может рассматривать: бокал вина, пробежку в парке, сериал на Netflix, сеанс
          массажа и медитацию в приложении. Все эти решения -- конкуренты друг другу, потому что нанимаются
          на одну работу.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Настоящий конкурент -- это не тот, кто продаёт похожий продукт, а тот, чьё решение нанимают
          на ту же самую работу. Поэтому при сегментации важно определить, какое именно текущее решение
          человек использует -- это и формирует сегмент.
        </p>
      </motion.div>

      {/* --- SVG-диаграмма: сравнение подходов --- */}
      <motion.div variants={fadeInItem} className="my-10">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
          Сравнение подходов к сегментации
        </h3>
        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 720 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-2xl mx-auto"
          >
            {/* Background */}
            <rect x="0" y="0" width="720" height="370" rx="16" fill="currentColor" fillOpacity="0.03" />

            {/* Left Column - Traditional */}
            <rect x="30" y="20" width="320" height="50" rx="10" fill="#7c3aed" fillOpacity="0.15" />
            <text x="190" y="51" textAnchor="middle" fontSize="15" fontWeight="700" fill="#7c3aed">
              Демографическая сегментация
            </text>

            <rect x="40" y="85" width="300" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.12" />
            <text x="190" y="111" textAnchor="middle" fontSize="12" fill="currentColor" fillOpacity="0.8">
              Пол, возраст, доход
            </text>

            <rect x="40" y="135" width="300" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.12" />
            <text x="190" y="161" textAnchor="middle" fontSize="12" fill="currentColor" fillOpacity="0.8">
              География, образование
            </text>

            <rect x="40" y="185" width="300" height="40" rx="8" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.12" />
            <text x="190" y="211" textAnchor="middle" fontSize="12" fill="currentColor" fillOpacity="0.8">
              Одинаковая демография, разные работы
            </text>

            <rect x="40" y="245" width="300" height="42" rx="8" fill="#ef4444" fillOpacity="0.08" stroke="#ef4444" strokeOpacity="0.25" />
            <text x="190" y="263" textAnchor="middle" fontSize="11" fontWeight="600" fill="#ef4444">
              Не объясняет, ЗАЧЕМ покупают
            </text>
            <text x="190" y="278" textAnchor="middle" fontSize="10" fill="#ef4444" fillOpacity="0.85">
              Одна демография = разные потребности
            </text>

            {/* Divider */}
            <line x1="360" y1="30" x2="360" y2="340" stroke="currentColor" strokeOpacity="0.1" strokeWidth="1" strokeDasharray="6 4" />

            {/* Right Column - JTBD */}
            <rect x="370" y="20" width="320" height="50" rx="10" fill="#7c3aed" fillOpacity="0.9" />
            <text x="530" y="51" textAnchor="middle" fontSize="15" fontWeight="700" fill="white">
              JTBD-сегментация
            </text>

            <rect x="380" y="85" width="300" height="40" rx="8" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeOpacity="0.2" />
            <text x="530" y="111" textAnchor="middle" fontSize="12" fill="#7c3aed">
              Работа + текущее решение = сегмент
            </text>

            <rect x="380" y="135" width="300" height="40" rx="8" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeOpacity="0.2" />
            <text x="530" y="161" textAnchor="middle" fontSize="12" fill="#7c3aed">
              Consideration Set = конкуренты по работе
            </text>

            <rect x="380" y="185" width="300" height="40" rx="8" fill="#7c3aed" fillOpacity="0.08" stroke="#7c3aed" strokeOpacity="0.2" />
            <text x="530" y="211" textAnchor="middle" fontSize="12" fill="#7c3aed">
              Разная демография, одна работа = 1 сегмент
            </text>

            <rect x="380" y="245" width="300" height="42" rx="8" fill="#22c55e" fillOpacity="0.08" stroke="#22c55e" strokeOpacity="0.25" />
            <text x="530" y="263" textAnchor="middle" fontSize="11" fontWeight="600" fill="#22c55e">
              Объясняет ЗАЧЕМ и ЧЕМ пользуются
            </text>
            <text x="530" y="278" textAnchor="middle" fontSize="10" fill="#22c55e" fillOpacity="0.85">
              Работа + решение = точный сегмент
            </text>

            {/* Bottom note */}
            <text x="360" y="330" textAnchor="middle" fontSize="11" fill="currentColor" fillOpacity="0.6">
              CEO и студент с одной работой и одним решением -- один JTBD-сегмент
            </text>

            {/* Arrow icons */}
            <circle cx="190" y="315" cy="325" r="8" fill="#ef4444" fillOpacity="0.15" />
            <text x="190" y="329" textAnchor="middle" fontSize="10" fill="#ef4444">&#x2717;</text>
            <circle cx="530" cy="325" r="8" fill="#22c55e" fillOpacity="0.15" />
            <text x="530" y="329" textAnchor="middle" fontSize="10" fill="#22c55e">&#x2713;</text>
          </svg>
        </div>
      </motion.div>

      {/* --- B2B-специфика сегментации --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-3">B2B-специфика: сегментация по роли и компании</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          В B2B сегментация работает иначе. <strong className="text-foreground">Исполнитель работы -- это
          роль в компании</strong>, а не конкретный человек. Например, &laquo;финансовый директор среднего
          бизнеса&raquo; или &laquo;руководитель отдела продаж&raquo;. При этом в принятии решения о покупке
          часто участвуют несколько стейкхолдеров: инициатор, пользователь, лицо принимающее решение и
          закупщик. У каждого своя работа и свои критерии.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Для B2B-исследования сегментации достаточно <strong className="text-foreground">8--10 респондентов</strong>,
          потому что ролевые работы более однородны. Для B2C оптимальная выборка -- <strong className="text-foreground">16
          респондентов</strong> (минимум 12).
        </p>
      </motion.div>

      {/* --- Шаги сегментации и приоритизация --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Как провести сегментационное исследование</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Сегментационное исследование -- это один из трёх типов JTBD-исследований (для сегмента, для продукта,
          для коммуникации). Его цель -- понять, какие работы существуют, какие текущие решения используются
          и какие проблемы с ними возникают.
        </p>
        <div className="p-4 rounded-xl bg-muted/50 border border-border/50 mb-4">
          <p className="text-sm font-semibold text-foreground mb-2">Приоритет сегмента: формула оценки</p>
          <p className="text-sm font-mono text-center text-foreground">
            Приоритет = Объём сегмента &times; Неудовлетворённость &times; Частота &times; Важность
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Каждый множитель оценивается от 1 до 5. Чем больше людей, чем сильнее неудовлетворённость текущим решением,
            чем чаще возникает работа и чем она важнее -- тем выше приоритет сегмента.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            {
              step: '1',
              title: 'Проведите интервью (B2C: 16, B2B: 8-10 человек)',
              desc: 'На интервью выясните: какую работу человек выполняет, какое текущее решение использует и какие у него проблемы с этим решением.',
            },
            {
              step: '2',
              title: 'Сгруппируйте по парам "работа + решение"',
              desc: 'Каждая уникальная пара "работа + текущее решение" -- это отдельный сегмент. Люди с одной работой, но разными текущими решениями -- это разные сегменты.',
            },
            {
              step: '3',
              title: 'Рассчитайте приоритет каждого сегмента',
              desc: 'Для каждого сегмента оцените четыре фактора от 1 до 5: объём (сколько людей), неудовлетворённость текущим решением, частоту работы и её важность. Перемножьте их — это и есть приоритет сегмента.',
            },
            {
              step: '4',
              title: 'Выберите приоритетный сегмент',
              desc: 'Сегмент с самым высоким приоритетом -- это ваша лучшая возможность. Большой объём + сильная неудовлетворённость + частая и важная работа = максимальный потенциал для вашего продукта.',
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

      {/* --- RAT: Riskiest Assumption Test --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-3">RAT: тест самого рискованного допущения</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Когда вы рассчитали приоритет и нашли несколько перспективных сегментов, возникает вопрос: а что если наши допущения
          о сегменте ошибочны? Метод <strong className="text-foreground">RAT (Riskiest Assumption Test)</strong>,
          предложенный Риком Хигэмом и развитый в работах Дэвида Бланда (<em>Testing Business Ideas</em>)
          и Тересы Торрес (<em>Continuous Discovery Habits</em>), помогает проверить это до того, как
          вы потратите ресурсы на разработку.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Идея RAT: вместо того чтобы строить MVP, сначала найдите <strong className="text-foreground">самое
          рискованное допущение</strong> &mdash; то, которое убьёт идею, если окажется неверным &mdash;
          и протестируйте именно его минимальным экспериментом.
        </p>

        {/* RAT Process Steps */}
        <div className="grid gap-3 mb-6">
          {[
            {
              step: '1',
              title: 'Выявите все допущения',
              desc: 'Для каждого сегмента запишите: «Мы допускаем, что [утверждение]». Например: «Сегмент достаточно большой», «Люди готовы платить», «Проблема действительно болезненна», «Мы можем дотянуться до этих людей».',
              color: 'text-accent',
            },
            {
              step: '2',
              title: 'Расставьте по риску на матрице Бланда',
              desc: 'Разместите каждое допущение на матрице 2×2: ось X — «Есть доказательства ↔ Нет доказательств», ось Y — «Критично для успеха ↔ Было бы неплохо». Фокус — правый верхний квадрант: критично + нет доказательств.',
              color: 'text-error',
            },
            {
              step: '3',
              title: 'Спроектируйте минимальный эксперимент',
              desc: 'Для самого рискованного допущения задайте вопрос Тома Чи (Google X): «Что минимальное мы можем сделать, чтобы проверить это?». Это может быть лендинг, опрос, коридорный тест или рекламная кампания-пробник — но не продукт.',
              color: 'text-warning',
            },
            {
              step: '4',
              title: 'Оцените результат и решите',
              desc: 'Три исхода: подтверждено → переходите к следующему допущению; опровергнуто → пивот (меняете сегмент или решение); неясно → переделайте эксперимент. Повторяйте, пока ключевые допущения не подтвердятся.',
              color: 'text-success',
            },
          ].map((s) => (
            <div
              key={s.step}
              className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card"
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 ${s.color} flex items-center justify-center text-sm font-bold`}>
                {s.step}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{s.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Four Big Risks */}
        <div className="p-5 rounded-xl bg-muted/50 border border-border/50 mb-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            4 категории рисков (Марти Каган, SVPG)
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Ценность', desc: 'Будут ли пользователи это покупать / использовать?', icon: '♦' },
              { label: 'Юзабилити', desc: 'Смогут ли пользователи разобраться, как это работает?', icon: '◎' },
              { label: 'Реализуемость', desc: 'Можем ли мы это построить с текущими ресурсами?', icon: '⚙' },
              { label: 'Бизнес-жизнеспособность', desc: 'Вписывается ли это в нашу бизнес-модель?', icon: '△' },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-card border border-border/30">
                <span className="text-accent text-lg leading-none">{r.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.label}</p>
                  <p className="text-xs text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-accent/5 border border-accent/15">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">RAT + JTBD:</strong> JTBD-интервью дают вам гипотезы о
            сегментах (работа + решение + приоритет). RAT помогает проверить, верны ли эти гипотезы,
            до начала разработки. Сначала найдите работу, потом проверьте самое рискованное допущение
            о ней &mdash; и только потом стройте продукт.
          </p>
        </div>
      </motion.div>

      {/* --- Кейс: Тинькофф --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <h3 className="text-base font-semibold mb-4">Кейс: Как Тинькофф использует JTBD-сегментацию</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Тинькофф &mdash; один из немногих крупных российских банков, который явно использует JTBD-подход для сегментации.
          Вместо деления клиентов по доходу или возрасту, они группируют по работам и текущим решениям.
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">1</div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Сегмент &laquo;Контроль расходов&raquo;:</strong> Работа &mdash; &laquo;понимать,
              куда уходят деньги&raquo;. Текущее решение &mdash; Excel-таблица или заметки в телефоне.
              Приоритет высокий: объём 5 &times; неудовлетворённость 4 &times; частота 5 &times; важность 4 = 400.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">2</div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Сегмент &laquo;Накопить на цель&raquo;:</strong> Работа &mdash; &laquo;откладывать
              деньги на квартиру/машину/отпуск&raquo;. Текущее решение &mdash; &laquo;просто стараюсь не тратить&raquo;.
              Приоритет средний: объём 4 &times; неудовлетворённость 3 &times; частота 3 &times; важность 4 = 144.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">3</div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Сегмент &laquo;Инвестировать без стресса&raquo;:</strong> Работа &mdash; &laquo;приумножить
              сбережения, не разбираясь в фондовом рынке&raquo;. Текущее решение &mdash; банковский депозит.
              Приоритет низкий: объём 3 &times; неудовлетворённость 2 &times; частота 2 &times; важность 3 = 36.
            </span>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-xs text-accent">
            <strong>Результат:</strong> Фокус на сегменте с приоритетом 400 позволил Тинькофф создать
            автоматическую категоризацию расходов &mdash; фичу, которая стала одной из главных причин
            выбора банка. Они не пытались решить все работы сразу, а начали с самой приоритетной.
          </p>
        </div>
      </motion.div>

      {/* --- DragDrop: типы сегментации --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Упражнение: определите подход к сегментации</h3>
        <DragDrop
          instruction="Распределите примеры сегментов по подходу к сегментации: демографический или JTBD."
          items={[
            { id: 'demo1', text: 'Мужчины 25-34 лет с доходом выше среднего' },
            { id: 'jtbd1', text: '«Быстро добраться до работы» + такси-приложение' },
            { id: 'demo2', text: 'Жители Москвы с высшим образованием' },
            { id: 'jtbd2', text: '«Не забыть заплатить за квартиру» + напоминания в телефоне' },
          ]}
          zones={[
            {
              id: 'zone-demo',
              label: 'Демографическая сегментация',
              acceptIds: ['demo1', 'demo2'],
            },
            {
              id: 'zone-jtbd',
              label: 'JTBD-сегментация (работа + решение)',
              acceptIds: ['jtbd1', 'jtbd2'],
            },
          ]}
        />
      </motion.div>

      {/* --- Квиз --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Проверьте себя
        </h3>
        <Quiz
          question="Что такое сегмент в JTBD-подходе?"
          options={[
            {
              text: 'Группа людей с похожей демографией (возраст, пол, доход)',
              explanation:
                'Демография не определяет сегмент в JTBD. Люди с одинаковой демографией могут иметь совершенно разные работы.',
            },
            {
              text: 'Пара "работа + текущее решение", которое человек использует для выполнения этой работы',
              correct: true,
              explanation:
                'Верно! Сегмент в JTBD -- это именно связка работы и текущего решения. Люди с одной работой, но разными текущими решениями -- это разные сегменты.',
            },
            {
              text: 'Группа людей, которые пользуются одним и тем же продуктом',
              explanation:
                'Одним продуктом могут пользоваться люди с совершенно разными работами. Это не сегмент, а просто пользовательская база.',
            },
            {
              text: 'Психографический профиль: ценности, интересы, образ жизни',
              explanation:
                'Психографика, как и демография, не объясняет, почему человек нанимает конкретный продукт. Сегмент определяется работой и текущим решением.',
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
          prompt="Выберите один продукт и опишите 3 разных JTBD-сегмента: для каждого укажите работу и текущее решение, которое человек использует сейчас. Помните: сегмент = работа + текущее решение."
          placeholder="Например: Продукт -- сервис авиабилетов. Сегмент 1: работа 'организовать бюджетный отпуск' + текущее решение 'ищу на агрегаторах самые дешёвые билеты'. Сегмент 2: работа 'быстро добраться до клиента' + текущее решение 'секретарь бронирует через корп. портал'..."
          hint="Подумайте: какие разные работы нанимают для одного продукта? И какие текущие решения (даже из совершенно других категорий) люди уже используют?"
          exampleAnswer="Продукт -- такси-приложение. Сегмент 1: работа 'добраться на работу вовремя' + текущее решение 'езжу на метро, но опаздываю из-за пересадок'. Сегмент 2: работа 'безопасно доехать домой ночью' + текущее решение 'прошу друзей подвезти или жду утра'. Сегмент 3: работа 'доставить ребёнка на кружок' + текущее решение 'отвожу сам, теряя рабочее время'. У каждого сегмента разный приоритет (объём × неудовлетворённость × частота × важность)."
        />
      </motion.div>

      {/* --- Сценарий --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
          Сценарий
        </h3>
        <ScenarioCard
          scenario="Вы проводите сегментационное исследование для нового сервиса доставки еды. Провели 16 интервью и нашли три сегмента (пары 'работа + решение'). Какой выбрать?"
          context="У вас ограниченный бюджет на запуск. Нужно сфокусироваться на одном сегменте с наивысшим приоритетом."
          options={[
            {
              text: 'Сегмент A: Работа "быстро пообедать, не покидая офис" + решение "хожу в столовую в соседнем здании". Приоритет: объём 4 × неудовлетворённость 2 × частота 5 × важность 2 = 80.',
              outcome:
                'Не лучший выбор. Несмотря на высокую частоту, неудовлетворённость и важность работы низкие -- люди не очень страдают от текущего решения. Приоритет 80 означает слабую мотивацию переключиться.',
              score: 1,
            },
            {
              text: 'Сегмент B: Работа "кормить семью разнообразно и полезно" + решение "готовлю сам по вечерам, устаю". Приоритет: объём 4 × неудовлетворённость 5 × частота 4 × важность 5 = 400.',
              outcome:
                'Отличный выбор! Самый высокий приоритет (400): большой объём, сильная неудовлетворённость, частая и важная работа. Эти люди каждый день мучаются с текущим решением и готовы платить за лучшую альтернативу.',
              score: 3,
            },
            {
              text: 'Сегмент C: Работа "порадовать себя чем-то вкусным" + решение "заказываю из ресторанов через другие приложения". Приоритет: объём 3 × неудовлетворённость 2 × частота 2 × важность 2 = 24.',
              outcome:
                'Слабый выбор. Приоритет всего 24 -- неудовлетворённость текущим решением низкая, работа нечастая и не критичная. К тому же конкуренция с устоявшимися сервисами доставки будет крайне высокой.',
              score: 1,
            },
          ]}
        />
      </motion.div>
    </ModuleWrapper>
  );
}
