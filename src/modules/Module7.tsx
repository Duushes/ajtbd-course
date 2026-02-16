'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import InputExercise from '@/components/InputExercise';
import ScenarioCard from '@/components/ScenarioCard';
import DragDrop from '@/components/DragDrop';
import { motion } from 'framer-motion';

export default function Module7() {
  return (
    <ModuleWrapper
      moduleIndex={7}
      title="Маркетинг и коммуникация"
      subtitle="Как исследовать коммуникацию и продавать работу, а не продукт"
      readingList={[
        {
          title: 'Ваня Замесин — JTBD-исследование для поиска коммуникации и продаж',
          url: 'https://zamesin.ru/books/product-howto/understand-how-to-sell-a-product-with-jtbd-research/',
        },
        {
          title: 'Ваня Замесин — В два раза больше платящих клиентов с бесплатного продукта',
          url: 'https://zamesin.ru/producthowto/book/tripwire-doubles-paid-clients/',
        },
        {
          title: 'Ваня Замесин — Решенческие интервью',
          url: 'https://zamesin.ru/books/product-howto/solution-interview/',
        },
        {
          title: 'AJTBD-гайды и материалы (Notion)',
          url: 'https://ivanzamesin.notion.site/AJTBD-092a5ca1939a454e89ba09056f265e55',
        },
      ]}
    >
      {/* --- Введение: Коммуникационное исследование --- */}
      <motion.div variants={fadeInItem} className="prose prose-invert max-w-none mb-10">
        <h2 className="text-xl font-semibold mb-4">Коммуникационное исследование &mdash; третий тип JTBD-исследования</h2>
        <p className="text-muted-foreground leading-relaxed">
          В AJTBD существует три типа исследований: <strong className="text-foreground">сегментное</strong> (кто ваши клиенты и какие у них работы),{' '}
          <strong className="text-foreground">продуктовое</strong> (как улучшить решение) и{' '}
          <strong className="text-foreground">коммуникационное</strong> (как донести ценность до клиента и продать).
          Коммуникационное исследование отвечает на главный вопрос: как человек проходит путь от осознания своей работы до покупки вашего продукта?
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Ключевой принцип Замесина: <strong className="text-foreground">&laquo;Продавайте работу, а не продукт&raquo;</strong>.
          Ваш маркетинг должен показать, что вы понимаете ситуацию человека, а не перечислять фичи.
          Люди покупают не характеристики &mdash; они покупают решение своей проблемы.
        </p>
      </motion.div>

      {/* --- Типичная ошибка --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-error">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M10 6V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="10" cy="14" r="1" fill="currentColor" />
          </svg>
          <h3 className="text-base font-semibold">Типичная ошибка: язык фич вместо языка работы</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-error/5 border border-error/20">
            <p className="text-xs font-medium text-error uppercase tracking-wider mb-2">Язык фич</p>
            <p className="text-sm text-muted-foreground">
              &laquo;Aviasales &mdash; поиск по 2000+ авиакомпаниям, мета-поисковик с фильтрами по цене,
              багажу и пересадкам&raquo;
            </p>
          </div>
          <div className="p-4 rounded-lg bg-success/5 border border-success/20">
            <p className="text-xs font-medium text-success uppercase tracking-wider mb-2">Язык работы</p>
            <p className="text-sm text-muted-foreground">
              &laquo;Найдите дешёвые билеты на отпуск вашей мечты &mdash; без стресса и часов сравнения цен&raquo;
            </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
          Aviasales продаёт не дешёвые билеты, а мечту о лёгком отпуске. Маркетинговое сообщение должно говорить на языке работы клиента, а не на языке технических возможностей продукта.
        </p>
      </motion.div>

      {/* --- Три фазы коммуникации --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Три фазы коммуникационного исследования</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Коммуникационное исследование изучает, как человек проходит три ключевые фазы на пути к покупке.
          Для каждой фазы нужны свои каналы, сообщения и формат коммуникации.
        </p>

        {/* SVG Diagram: Three Communication Phases */}
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 680 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            {/* Phase 1: Awareness */}
            <rect x="10" y="30" width="190" height="100" rx="12" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
            <rect x="10" y="30" width="190" height="100" rx="12" fill="#7c3aed" fillOpacity="0.05" />
            <text x="105" y="55" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed" style={{ letterSpacing: '1px' }}>ОСОЗНАНИЕ</text>
            <text x="105" y="75" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Как человек понимает,</text>
            <text x="105" y="89" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">что у него есть работа?</text>
            <text x="105" y="108" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Триггеры, слова, контекст</text>

            {/* Arrow 1 */}
            <line x1="200" y1="80" x2="238" y2="80" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
            <polygon points="236,75 246,80 236,85" fill="#7c3aed" />

            {/* Phase 2: Search */}
            <rect x="248" y="30" width="190" height="100" rx="12" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
            <rect x="248" y="30" width="190" height="100" rx="12" fill="#7c3aed" fillOpacity="0.05" />
            <text x="343" y="55" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed" style={{ letterSpacing: '1px' }}>ПОИСК</text>
            <text x="343" y="75" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Где и как ищет</text>
            <text x="343" y="89" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">решение?</text>
            <text x="343" y="108" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Источники, доверие, критерии</text>

            {/* Arrow 2 */}
            <line x1="438" y1="80" x2="476" y2="80" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="4 3" />
            <polygon points="474,75 484,80 474,85" fill="#7c3aed" />

            {/* Phase 3: Purchase */}
            <rect x="486" y="30" width="190" height="100" rx="12" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
            <rect x="486" y="30" width="190" height="100" rx="12" fill="#7c3aed" fillOpacity="0.05" />
            <text x="581" y="55" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed" style={{ letterSpacing: '1px' }}>ПОКУПКА</text>
            <text x="581" y="75" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Что триггерит</text>
            <text x="581" y="89" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">решение о покупке?</text>
            <text x="581" y="108" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Страхи, барьеры, финальный толчок</text>

            {/* Bottom label */}
            <text x="340" y="165" textAnchor="middle" fill="#7c3aed" fontSize="11" fontWeight="500">Коммуникационное исследование = Осознание + Поиск + Покупка</text>
          </svg>
        </div>

        <div className="p-5 rounded-xl bg-muted/50 border border-border/50">
          <p className="text-xs font-medium text-accent uppercase tracking-wider mb-3">Формула маркетингового сообщения</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Мы помогаем, когда</strong> [контекст/ситуация клиента],{' '}
            <strong className="text-foreground">вы хотите</strong> [желаемый результат],{' '}
            <strong className="text-foreground">чтобы</strong> [трансформация/изменение в жизни].
          </p>
          <p className="text-xs text-muted-foreground mt-2 italic">
            Пример: &laquo;Мы помогаем, когда вы устали сравнивать цены на билеты по десяткам сайтов, вы хотите быстро найти лучший вариант перелёта, чтобы спокойно спланировать отпуск без стресса&raquo;.
          </p>
        </div>
      </motion.div>

      {/* --- Каналы для каждой фазы --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Каналы и сообщения для каждой фазы</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Каждая фаза требует своих каналов коммуникации и типов сообщений.
          Нельзя использовать одно и то же сообщение для человека, который только осознаёт проблему,
          и для того, кто уже сравнивает решения.
        </p>
        <div className="grid gap-4">
          {[
            {
              step: '01',
              title: 'Фаза осознания: контент-маркетинг',
              desc: 'Человек ещё не ищет решение &mdash; он только осознаёт, что у него есть работа. Задача: попасть в его информационное поле. Выясните, какими словами люди описывают свою проблему, и используйте эти слова.',
              example: 'Каналы: блог, соцсети, подкасты, SEO-статьи. Сообщение: «Знакомо? Вы тратите 3 часа на сравнение цен перелётов, а потом всё равно не уверены в выборе»',
              color: 'text-error',
            },
            {
              step: '02',
              title: 'Фаза поиска: SEO, отзывы, экспертный контент',
              desc: 'Человек уже ищет решение. Он гуглит, спрашивает друзей, читает отзывы. Задача: быть там, где он ищет, и говорить на языке, которому он доверяет. Узнайте, кому ваши клиенты доверяют и какие источники считают авторитетными.',
              example: 'Каналы: SEO, обзоры, рейтинги, рекомендации экспертов. Сообщение: «Сравните 10 сервисов поиска билетов &mdash; честный обзор»',
              color: 'text-orange-400',
            },
            {
              step: '03',
              title: 'Фаза покупки: лендинг, демо, снятие страхов',
              desc: 'Человек готов купить, но его удерживают страхи и барьеры. Задача: снять последние возражения и дать толчок к действию. Выясните, чего боятся клиенты перед покупкой и какая информация им нужна для принятия решения.',
              example: 'Каналы: лендинг, демо, триал, кейсы. Сообщение: «Попробуйте бесплатно. Если не найдём дешевле &mdash; вернём разницу»',
              color: 'text-success',
            },
            {
              step: '04',
              title: 'Принцип: зеркалируйте формат работы',
              desc: 'Маркетинговое сообщение должно зеркалировать формат работы клиента: «Мы помогаем, когда [контекст], вы хотите [результат], чтобы [трансформация]». Покажите, что вы понимаете его ситуацию &mdash; не перечисляйте фичи.',
              example: 'Не «у нас 50 фильтров», а «мы понимаем, что вы хотите найти билеты быстро и не переплатить &mdash; поэтому показываем лучшую цену сразу»',
              color: 'text-accent',
            },
          ].map((item) => (
            <div key={item.step} className="p-5 rounded-xl bg-card border border-border/50">
              <div className="flex items-start gap-3">
                <span className={`text-2xl font-bold ${item.color} opacity-60 leading-none`}>{item.step}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  <p className="text-xs text-muted-foreground/70 mt-2 italic">{item.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- Вопросы коммуникационного исследования --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Что спрашивать в коммуникационном исследовании</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          Для каждой фазы есть свой набор вопросов. Задача &mdash; понять путь клиента от первой мысли до покупки.
        </p>

        {/* SVG: Communication Research Questions */}
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 440 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm">
            {/* Funnel shape */}
            <path d="M60 20 L340 20 L280 100 L120 100 Z" stroke="#7c3aed" strokeWidth="1.5" fill="#7c3aed" fillOpacity="0.08" />
            <path d="M120 100 L280 100 L250 170 L150 170 Z" stroke="#7c3aed" strokeWidth="1.5" fill="#7c3aed" fillOpacity="0.12" />
            <path d="M150 170 L250 170 L230 230 L170 230 Z" stroke="#7c3aed" strokeWidth="1.5" fill="#7c3aed" fillOpacity="0.18" />

            {/* Labels */}
            <text x="200" y="50" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Осознание</text>
            <text x="200" y="68" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;Как вы поняли, что есть проблема?&raquo;</text>

            <text x="200" y="126" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Поиск</text>
            <text x="200" y="144" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;Где вы искали решение? Кому доверяли?&raquo;</text>

            <text x="200" y="198" textAnchor="middle" className="text-foreground" fontSize="11" fontWeight="600" fill="currentColor">Покупка</text>
            <text x="200" y="214" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;Что подтолкнуло к решению? Чего боялись?&raquo;</text>

            {/* Right-side annotations */}
            <line x1="342" y1="60" x2="370" y2="60" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
            <text x="375" y="64" fontSize="10" fill="#7c3aed" fontWeight="500">Контент, блог</text>

            <line x1="282" y1="135" x2="370" y2="135" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
            <text x="375" y="139" fontSize="10" fill="#7c3aed" fontWeight="500">SEO, отзывы</text>

            <line x1="252" y1="200" x2="370" y2="200" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
            <text x="375" y="204" fontSize="10" fill="#7c3aed" fontWeight="500">Лендинг, демо</text>
          </svg>
        </div>

        <div className="space-y-3">
          {[
            {
              label: 'Фаза осознания',
              desc: 'Как вы впервые поняли, что вам нужно решить эту задачу? Что происходило в вашей жизни? Какими словами вы описали бы эту ситуацию?',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                  <rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              label: 'Фаза поиска',
              desc: 'Где вы начали искать решение? Кого спрашивали? Что гуглили? Каким источникам доверяли? Что отпугивало при оценке вариантов?',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M5.5 9.5C6 10.5 7 11 8 11C9 11 10 10.5 10.5 9.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="6" cy="7" r="0.8" fill="currentColor" />
                  <circle cx="10" cy="7" r="0.8" fill="currentColor" />
                </svg>
              ),
            },
            {
              label: 'Фаза покупки',
              desc: 'Что в итоге подтолкнуло к решению? Какие страхи были? Какая информация помогла бы принять решение быстрее? Что чуть не остановило?',
              icon: (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-accent">
                  <circle cx="5.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="10.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M1 14C1 11.5 3 10 5.5 10C6.5 10 7.4 10.3 8 10.8C8.6 10.3 9.5 10 10.5 10C13 10 15 11.5 15 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30">
              <span className="mt-0.5">{item.icon}</span>
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- Примеры коммуникации через работы --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
            <path d="M10 2L13 8H18L14 12L15.5 18L10 14.5L4.5 18L6 12L2 8H7L10 2Z" stroke="currentColor" strokeWidth="1.3" fill="none" />
          </svg>
          <h3 className="text-base font-semibold">До и после: маркетинг через язык работы</h3>
        </div>
        <div className="space-y-4">
          {[
            {
              product: 'Aviasales',
              before: '«Поиск по 2000+ авиакомпаниям, мета-поисковик с гибкими фильтрами»',
              after: '«Найдите отпуск вашей мечты без головной боли — мы покажем лучшую цену сразу»',
            },
            {
              product: 'Домклик (Сбербанк)',
              before: '«Онлайн-платформа для покупки недвижимости с ипотечным калькулятором»',
              after: '«Купите квартиру без страха — проведём вас от выбора до ключей в руках»',
            },
            {
              product: 'Яндекс Такси',
              before: '«Быстрый заказ такси через приложение, 50K водителей»',
              after: '«Доберитесь куда нужно без стресса — когда нет времени ждать и разбираться»',
            },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-lg bg-muted/30">
              <p className="text-xs font-medium text-accent uppercase tracking-wider mb-2">{item.product}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-error/70 mb-1">Фичи:</p>
                  <p className="text-sm text-muted-foreground">{item.before}</p>
                </div>
                <div>
                  <p className="text-xs text-success/70 mb-1">Работа:</p>
                  <p className="text-sm text-muted-foreground">{item.after}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- Quiz --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-lg font-semibold mb-2">Проверьте понимание</h3>
        <Quiz
          question="Человек рассказывает вам: «Я увидел рекламу вашего сервиса, но не понял, зачем он мне нужен, пока коллега не рассказал, как он решил такую же проблему». К какой фазе коммуникации это относится?"
          options={[
            {
              text: 'Фаза осознания — человек ещё не понимал, что у него есть работа',
              explanation: 'Осознание — это когда человек понимает, что у него есть проблема. Здесь же он уже знает о продукте, но не понимает его ценность.',
            },
            {
              text: 'Фаза поиска — человек ищет решение и доверяет рекомендации коллеги',
              correct: true,
              explanation: 'Верно! Человек находится в фазе поиска: он уже знает о продукте, но ему нужен авторитетный источник (коллега), чтобы понять ценность. Это показывает, что для фазы поиска важны отзывы и рекомендации реальных людей.',
            },
            {
              text: 'Фаза покупки — человек принимает решение о покупке на основе рекомендации',
              explanation: 'Покупка — это финальное решение. Рекомендация коллеги помогла понять ценность, но решение о покупке ещё не принято.',
            },
            {
              text: 'Это не относится к коммуникационному исследованию',
              explanation: 'Это прямо относится к коммуникационному исследованию — оно показывает, каким источникам человек доверяет в фазе поиска.',
            },
          ]}
        />
      </motion.div>

      {/* --- InputExercise: Маркетинговое сообщение --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Практика: напишите маркетинговое сообщение через работу</h3>
        <InputExercise
          prompt="Выберите продукт, которым пользуетесь. Напишите маркетинговое сообщение в формате: «Мы помогаем, когда [контекст/ситуация], вы хотите [результат], чтобы [трансформация]». Покажите, что понимаете ситуацию клиента, а не перечисляете фичи."
          placeholder="Мы помогаем, когда ..., вы хотите ..., чтобы ..."
          hint="Подумайте: в какой конкретной ситуации человек осознаёт свою работу? Какими словами он описал бы свою проблему? Каким должен быть результат, чтобы он «нанял» ваш продукт?"
          exampleAnswer="Продукт: Notion. «Мы помогаем, когда ваши заметки разбросаны по десяткам приложений и вы не можете найти нужное, вы хотите собрать всё в одном месте и быстро находить информацию, чтобы работать спокойно и не тратить время на поиски»."
        />
      </motion.div>

      {/* --- DragDrop: фазы коммуникации --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Упражнение: соотнесите действие с фазой</h3>
        <DragDrop
          instruction="Определите, к какой фазе коммуникации относится каждое маркетинговое действие."
          items={[
            { id: 'awareness', text: 'Статья «5 признаков, что вам пора менять CRM»' },
            { id: 'search', text: 'Сравнительная таблица «Наш продукт vs конкуренты»' },
            { id: 'purchase', text: 'Бесплатный 14-дневный триал без карты' },
            { id: 'awareness2', text: 'Пост в соцсети: «Знакомо? 3 часа на отчёт, который можно сделать за 10 минут»' },
          ]}
          zones={[
            {
              id: 'zone-awareness',
              label: 'Фаза осознания — человек ещё не ищет решение',
              acceptIds: ['awareness', 'awareness2'],
            },
            {
              id: 'zone-search',
              label: 'Фаза поиска — человек сравнивает варианты',
              acceptIds: ['search'],
            },
            {
              id: 'zone-purchase',
              label: 'Фаза покупки — снять последние барьеры',
              acceptIds: ['purchase'],
            },
          ]}
        />
      </motion.div>

      {/* --- ScenarioCard: Коммуникационная стратегия --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Сценарий: коммуникационная стратегия для онлайн-школы</h3>
        <ScenarioCard
          scenario="Вы маркетолог онлайн-школы английского языка. Коммуникационное исследование показало: люди осознают потребность, когда получают предложение о работе с требованием английского; ищут решение, спрашивая коллег и читая отзывы; боятся покупать, потому что «уже 10 раз начинали и бросали». Какой подход к маркетингу выберете?"
          context="Из интервью вы знаете, что главный барьер покупки — страх опять бросить. Главный триггер осознания — конкретная рабочая ситуация. Главный источник доверия в поиске — рекомендации коллег."
          options={[
            {
              text: 'Запустить рекламу: «500 уроков, AI-тьютор, адаптивная программа — скачай бесплатно»',
              outcome: 'Это язык фич. Клиент не узнаёт свою ситуацию и не чувствует, что вы понимаете его проблему. Слово «бесплатно» не снимает страх «опять брошу».',
              score: 1,
            },
            {
              text: 'Для осознания — статьи «Как английский влияет на карьеру»; для поиска — отзывы реальных людей; для покупки — «Если бросите за 30 дней — вернём деньги»',
              outcome: 'Отлично! Вы используете разные каналы и сообщения для каждой фазы. Статьи попадают в контекст осознания (карьера), отзывы работают в фазе поиска (доверие коллегам), а гарантия снимает главный страх покупки (опять брошу).',
              score: 3,
            },
            {
              text: 'Разместить рекламу в AppStore с высоким рейтингом и скриншотами',
              outcome: 'Рейтинг помогает, но только в фазе поиска. Вы не закрываете фазу осознания (люди не ищут в AppStore, пока не осознали проблему) и не снимаете страх покупки.',
              score: 2,
            },
          ]}
        />
      </motion.div>
    </ModuleWrapper>
  );
}
