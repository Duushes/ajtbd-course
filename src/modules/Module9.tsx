'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import DragDrop from '@/components/DragDrop';
import InputExercise from '@/components/InputExercise';
import { motion } from 'framer-motion';

export default function Module9() {
  return (
    <ModuleWrapper
      moduleIndex={9}
      title="Практикум: проведение интервью"
      subtitle="Скрипт интервью, анализ данных и типичные ошибки"
      readingList={[
        {
          title: 'Ваня Замесин — Логика и скрипты JTBD-исследований',
          url: 'https://zamesin.ru/books/product-howto/jtbd-research/',
        },
        {
          title: 'Ваня Замесин — Как находить респондентов',
          url: 'https://zamesin.ru/books/product-howto/how-to-find-respondents/',
        },
        {
          title: 'Ваня Замесин — Риски использования ChatGPT для AJTBD-исследований',
          url: 'https://zamesin.ru/producthowto/book/please-do-not-use-chagpt-for-ajtbd-research/',
        },
        {
          title: 'Ваня Замесин — JTBD-исследование для B2B',
          url: 'https://zamesin.ru/books/product-howto/jtbd-b2b-study/',
        },
        {
          title: 'Гайд AJTBD-интервью для B2C (Notion)',
          url: 'https://ivanzamesin.notion.site/v3-3-AJTBD-B2C-950101210c704d91bc5d1cf45da5ca8b',
        },
        {
          title: 'Гайд AJTBD-интервью для B2B (Notion)',
          url: 'https://www.notion.so/ivanzamesin/v3-3-JTBD-B2B-a109bc94fb964a6dbe5ba0c943f25050',
        },
      ]}
    >
      {/* --- Введение --- */}
      <motion.div variants={fadeInItem} className="prose prose-invert max-w-none mb-10">
        <h2 className="text-xl font-semibold mb-4">Скрипт JTBD-интервью по Замесину</h2>
        <p className="text-muted-foreground leading-relaxed">
          Интервью &mdash; это фундамент AJTBD. Без качественных интервью вся аналитика будет
          построена на домыслах. Скрипт состоит из 5 блоков, каждый из которых раскрывает
          определённый аспект работы и текущего решения.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Выборка: <strong className="text-foreground">B2C — минимум 12, оптимально 16</strong> респондентов;{' '}
          <strong className="text-foreground">B2B — 8-10</strong> респондентов. Длительность: 45-60 минут.
        </p>
      </motion.div>

      {/* --- SVG Diagram: 7-step vertical timeline --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 520 840" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
            {/* Vertical connecting line */}
            <line x1="80" y1="40" x2="80" y2="780" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />

            {/* Step 1 */}
            <circle cx="80" cy="40" r="20" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="2" />
            <text x="80" y="45" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">1</text>
            <rect x="120" y="14" width="380" height="52" rx="10" stroke="#7c3aed" strokeWidth="1" fill="#7c3aed" fillOpacity="0.04" />
            <text x="136" y="36" fontSize="12" fontWeight="600" className="text-foreground" fill="currentColor">Раппорт и контекст</text>
            <text x="136" y="54" fontSize="9" className="text-muted-foreground" fill="currentColor">&laquo;Расскажите, чем занимаетесь? Когда в последний раз [делали работу]?&raquo;</text>

            {/* Step 2 */}
            <circle cx="80" cy="150" r="20" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="2" />
            <text x="80" y="155" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">2</text>
            <rect x="120" y="124" width="380" height="52" rx="10" stroke="#7c3aed" strokeWidth="1" fill="#7c3aed" fillOpacity="0.04" />
            <text x="136" y="146" fontSize="12" fontWeight="600" className="text-foreground" fill="currentColor">Текущее решение</text>
            <text x="136" y="164" fontSize="9" className="text-muted-foreground" fill="currentColor">&laquo;Что использовали? Как именно? Что было неудобно? Что бесило?&raquo;</text>

            {/* Step 3 */}
            <circle cx="80" cy="260" r="20" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="2" />
            <text x="80" y="265" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">3</text>
            <rect x="120" y="234" width="380" height="52" rx="10" stroke="#7c3aed" strokeWidth="1" fill="#7c3aed" fillOpacity="0.04" />
            <text x="136" y="256" fontSize="12" fontWeight="600" className="text-foreground" fill="currentColor">Эмоции и частота</text>
            <text x="136" y="274" fontSize="9" className="text-muted-foreground" fill="currentColor">&laquo;Как вы себя чувствовали? (1-5) Как часто сталкиваетесь? (1-5)&raquo;</text>

            {/* Step 4 */}
            <circle cx="80" cy="370" r="20" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="2" />
            <text x="80" y="375" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">4</text>
            <rect x="120" y="344" width="380" height="52" rx="10" stroke="#7c3aed" strokeWidth="1" fill="#7c3aed" fillOpacity="0.04" />
            <text x="136" y="366" fontSize="12" fontWeight="600" className="text-foreground" fill="currentColor">Альтернативы и переключение</text>
            <text x="136" y="384" fontSize="9" className="text-muted-foreground" fill="currentColor">&laquo;Что ещё пробовали? Почему переключились/не переключились?&raquo;</text>

            {/* Step 5 */}
            <circle cx="80" cy="480" r="20" fill="#7c3aed" fillOpacity="0.15" stroke="#7c3aed" strokeWidth="2" />
            <text x="80" y="485" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">5</text>
            <rect x="120" y="454" width="380" height="52" rx="10" stroke="#7c3aed" strokeWidth="1" fill="#7c3aed" fillOpacity="0.04" />
            <text x="136" y="476" fontSize="12" fontWeight="600" className="text-foreground" fill="currentColor">Глубинная мотивация (5 почему)</text>
            <text x="136" y="494" fontSize="9" className="text-muted-foreground" fill="currentColor">&laquo;Почему это важно? А почему это? А зачем вам это?&raquo; — до Big Job</text>

            {/* Analysis */}
            <circle cx="80" cy="590" r="20" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="2" />
            <text x="80" y="595" textAnchor="middle" fontSize="12" fontWeight="700" fill="#22c55e">&#10003;</text>
            <rect x="120" y="564" width="380" height="52" rx="10" stroke="#22c55e" strokeWidth="1" fill="#22c55e" fillOpacity="0.04" />
            <text x="136" y="586" fontSize="12" fontWeight="600" className="text-foreground" fill="currentColor">Анализ: группировка по сегментам</text>
            <text x="136" y="604" fontSize="9" className="text-muted-foreground" fill="currentColor">Группируйте по парам &laquo;работа + решение&raquo;, считайте Problem Score</text>

            {/* Result */}
            <circle cx="80" cy="700" r="20" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="2" />
            <text x="80" y="705" textAnchor="middle" fontSize="12" fontWeight="700" fill="#22c55e">&#9733;</text>
            <rect x="120" y="674" width="380" height="52" rx="10" stroke="#22c55e" strokeWidth="1" fill="#22c55e" fillOpacity="0.04" />
            <text x="136" y="696" fontSize="12" fontWeight="600" className="text-foreground" fill="currentColor">Problem Score = Ср. эмоция × Ср. частота</text>
            <text x="136" y="714" fontSize="9" className="text-muted-foreground" fill="currentColor">Приоритизируйте сегменты: высокий скор = большая возможность</text>

            {/* Bottom arrow/result */}
            <polygon points="72,780 80,800 88,780" fill="#7c3aed" />
            <text x="80" y="815" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed">Карта сегментов с приоритетами</text>
          </svg>
        </div>
      </motion.div>

      {/* --- AJTBD-интервью подробнее --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">AJTBD-интервью: ключевые принципы</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Интервью &mdash; это фундамент всего алгоритма. Без качественных интервью остальные шаги
          будут построены на домыслах. Вот главные правила:
        </p>

        <div className="p-5 rounded-xl bg-card border border-border/50 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-success">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h4 className="text-sm font-semibold text-success">Правильно: прошлое поведение</h4>
          </div>
          <div className="space-y-2">
            {[
              '«Расскажите о последнем разе, когда вы...»',
              '«Что произошло, что заставило вас начать искать решение?»',
              '«Какие варианты вы рассматривали?»',
              '«Что в итоге повлияло на ваш выбор?»',
              '«Что вы чувствовали, когда впервые попробовали?»',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded bg-success/5">
                <span className="text-success text-xs mt-0.5">&#10003;</span>
                <p className="text-sm text-muted-foreground">{q}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 rounded-xl bg-card border border-border/50">
          <div className="flex items-center gap-2 mb-4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-error">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M7 7L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M13 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h4 className="text-sm font-semibold text-error">Неправильно: гипотетическое будущее</h4>
          </div>
          <div className="space-y-2">
            {[
              '«Вы бы использовали продукт, который...?»',
              '«Сколько бы вы заплатили за...?»',
              '«Какие функции вам были бы нужны?»',
              '«Как часто бы вы пользовались таким приложением?»',
              '«Порекомендовали бы вы это друзьям?»',
            ].map((q, i) => (
              <div key={i} className="flex items-start gap-2 p-2 rounded bg-error/5">
                <span className="text-error text-xs mt-0.5">&#10007;</span>
                <p className="text-sm text-muted-foreground">{q}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* --- Switching Story --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">История переключения (Switching Story)</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          В каждом интервью вы ищете <strong className="text-foreground">историю переключения</strong> &mdash;
          полный путь от первой мысли до использования нового решения. Это шесть этапов, через которые
          проходит каждый клиент.
        </p>

        {/* SVG: Switching Story horizontal flow */}
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 720 210" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-3xl">
            {/* Step boxes */}
            {[
              { x: 10, label1: 'Первая', label2: 'мысль', sublabel: '«Что-то не так»' },
              { x: 130, label1: 'Пассивный', label2: 'поиск', sublabel: '«Замечаю варианты»' },
              { x: 250, label1: 'Активный', label2: 'поиск', sublabel: '«Сравниваю»' },
              { x: 370, label1: 'Решение', label2: '', sublabel: '«Выбираю»' },
              { x: 490, label1: 'Покупка', label2: '', sublabel: '«Плачу и начинаю»' },
              { x: 610, label1: 'Первый', label2: 'опыт', sublabel: '«Подтверждаю выбор»' },
            ].map((step, i) => (
              <g key={i}>
                <rect x={step.x} y="40" width="100" height="90" rx="10" stroke="#7c3aed" strokeWidth="1.5" fill="#7c3aed" fillOpacity={0.04 + i * 0.025} />
                <text x={step.x + 50} y="70" textAnchor="middle" fontSize="10" fontWeight="600" className="text-foreground" fill="currentColor">{step.label1}</text>
                {step.label2 && (
                  <text x={step.x + 50} y="84" textAnchor="middle" fontSize="10" fontWeight="600" className="text-foreground" fill="currentColor">{step.label2}</text>
                )}
                <text x={step.x + 50} y={step.label2 ? 104 : 98} textAnchor="middle" fontSize="9" fill="#7c3aed" opacity="0.8">{step.sublabel}</text>
                {i < 5 && (
                  <>
                    <line x1={step.x + 100} y1="85" x2={step.x + 130} y2="85" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" />
                    <polygon points={`${step.x + 127},81 ${step.x + 133},85 ${step.x + 127},89`} fill="#7c3aed" />
                  </>
                )}
              </g>
            ))}

            {/* Phase labels */}
            <text x="180" y="165" textAnchor="middle" fontSize="10" fill="#7c3aed" fontWeight="500" opacity="0.8">Фаза осознания</text>
            <line x1="60" y1="145" x2="300" y2="145" stroke="#7c3aed" strokeWidth="0.8" opacity="0.3" />

            <text x="540" y="165" textAnchor="middle" fontSize="10" fill="#7c3aed" fontWeight="500" opacity="0.8">Фаза действия</text>
            <line x1="420" y1="145" x2="660" y2="145" stroke="#7c3aed" strokeWidth="0.8" opacity="0.3" />

            {/* Bottom label */}
            <text x="360" y="192" textAnchor="middle" fontSize="10" fontWeight="600" fill="#7c3aed">Ваша задача: раскопать каждый этап в интервью</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Типичные ошибки --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Типичные ошибки при применении AJTBD</h2>
        <div className="grid gap-3">
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-error">
                  <rect x="2" y="2" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.3" fill="none" />
                  <path d="M6 6L12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M12 6L6 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              ),
              title: 'Фокус на фичах вместо работ',
              desc: 'Команда проводит интервью, но продолжает думать категориями фич: «Нужен ли тёмный режим?» вместо «Какую работу решает пользователь в тёмном помещении?»',
              fix: 'Всегда задавайте вопрос: «Какую работу это решает?» перед добавлением любой фичи.',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-error">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" fill="none" />
                  <path d="M9 5V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M9 12V12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              ),
              title: 'Игнорирование эмоциональных работ',
              desc: 'Фокус только на функциональных работах: «переслать деньги», «заказать такси». Но решение о найме часто определяется эмоциональной работой: «чувствовать себя уверенно», «не выглядеть глупо».',
              fix: 'В интервью спрашивайте: «Что вы чувствовали?», «Чего вы боялись?», «Что было бы, если бы кто-то увидел?»',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-error">
                  <path d="M3 9H15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M3 5H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <path d="M3 13H7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              ),
              title: 'Слишком мало интервью',
              desc: 'Провели 3-4 интервью и начали строить продукт. Для B2C нужно минимум 12 (оптимально 16) респондентов, для B2B — 8-10, чтобы увидеть повторяющиеся паттерны.',
              fix: 'Правило по Замесину: B2C — 16 респондентов, B2B — 8-10. Проводите интервью, пока не начнёте слышать одни и те же истории.',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-error">
                  <path d="M9 2L16 16H2L9 2Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
                  <path d="M9 7V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  <circle cx="9" cy="12.5" r="0.7" fill="currentColor" />
                </svg>
              ),
              title: 'Вопросы о будущем вместо прошлого',
              desc: '«Вы бы использовали...?» — худший вопрос в JTBD-интервью. Люди не могут предсказать своё поведение. Они говорят «да», но не покупают.',
              fix: 'Только прошлое поведение: «Расскажите о последнем разе, когда...», «Как вы решали эту проблему раньше?»',
            },
          ].map((item, i) => (
            <div key={i} className="p-5 rounded-xl bg-card border border-border/50">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  <div className="mt-2 p-2.5 rounded-lg bg-success/5 border border-success/10">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-success">Как исправить:</strong> {item.fix}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* --- Problem Score --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
            <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.3" fill="none" />
            <path d="M6 14V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 14V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 14V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h3 className="text-base font-semibold">Problem Score: формула приоритизации</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          После интервью вы группируете респондентов по парам &laquo;работа + текущее решение&raquo;
          и для каждой проблемы считаете Problem Score:
        </p>
        <div className="p-4 rounded-lg bg-accent/5 border border-accent/20 text-center mb-4">
          <p className="text-base font-mono font-semibold text-accent">
            Problem Score = Ср. эмоция (1-5) &times; Ср. частота (1-5)
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-muted/30">
            <p className="text-xs font-medium text-accent mb-1">Score &gt; 20</p>
            <p className="text-xs text-muted-foreground">Критическая проблема: максимальный потенциал</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30">
            <p className="text-xs font-medium text-muted-foreground mb-1">Score 10&ndash;20</p>
            <p className="text-xs text-muted-foreground">Значимая проблема: стоит решать</p>
          </div>
          <div className="p-3 rounded-lg bg-muted/30">
            <p className="text-xs font-medium text-muted-foreground/60 mb-1">Score &lt; 10</p>
            <p className="text-xs text-muted-foreground">Незначительная: низкий приоритет</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          <strong className="text-foreground">Как собрать данные:</strong> в каждом интервью просите
          респондента оценить эмоцию (насколько это раздражает, 1-5) и частоту (как часто
          сталкивается, 1-5). Затем усредните по всем респондентам в сегменте.
        </p>
      </motion.div>

      {/* --- Количество интервью --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-muted/50 border border-border/50">
        <h3 className="text-base font-semibold mb-3">Сколько интервью нужно?</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">16</div>
            <p className="text-xs text-muted-foreground mt-1">респондентов B2C</p>
            <p className="text-xs text-muted-foreground">(минимум 12)</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">8&ndash;10</div>
            <p className="text-xs text-muted-foreground mt-1">респондентов B2B</p>
            <p className="text-xs text-muted-foreground">(роль/компания)</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">45&ndash;60</div>
            <p className="text-xs text-muted-foreground mt-1">минут на интервью</p>
            <p className="text-xs text-muted-foreground">чтобы раскопать историю</p>
          </div>
        </div>
      </motion.div>

      {/* --- Quiz --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-lg font-semibold mb-2">Проверьте понимание</h3>
        <Quiz
          question="Какой из этих вопросов наиболее подходит для AJTBD-интервью?"
          options={[
            {
              text: '«Какие функции вам нужны в идеальном приложении?»',
              explanation: 'Это вопрос о гипотетическом будущем и фичах. Люди не могут достоверно ответить на такие вопросы.',
            },
            {
              text: '«Расскажите, что произошло, когда вы в последний раз решили сменить банк?»',
              correct: true,
              explanation: 'Верно! Этот вопрос направлен на реальное прошлое поведение и раскрывает историю переключения — именно то, что нужно для AJTBD-интервью.',
            },
            {
              text: '«Вы бы заплатили 500 рублей в месяц за такой сервис?»',
              explanation: 'Вопрос о готовности платить в будущем ненадёжен. Люди говорят «да», но не покупают. Лучше спросить, сколько они платят сейчас.',
            },
            {
              text: '«Какой ваш любимый продукт в этой категории?»',
              explanation: 'Мнение о любимом продукте не раскрывает работу. Важнее спросить: «Что вы делали в последний раз, когда столкнулись с [проблемой]?»',
            },
          ]}
        />
      </motion.div>

      {/* --- DragDrop: порядок интервью --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Упражнение: этапы переключения</h3>
        <DragDrop
          instruction="Расставьте этапы истории переключения (Switching Story) в правильном порядке."
          items={[
            { id: 'active', text: 'Активный поиск' },
            { id: 'first-thought', text: 'Первая мысль' },
            { id: 'first-use', text: 'Первый опыт использования' },
            { id: 'purchase', text: 'Покупка' },
            { id: 'passive', text: 'Пассивный поиск' },
            { id: 'decision', text: 'Принятие решения' },
          ]}
          zones={[
            { id: 'zone-1', label: 'Шаг 1', acceptIds: ['first-thought'] },
            { id: 'zone-2', label: 'Шаг 2', acceptIds: ['passive'] },
            { id: 'zone-3', label: 'Шаг 3', acceptIds: ['active'] },
            { id: 'zone-4', label: 'Шаг 4', acceptIds: ['decision'] },
            { id: 'zone-5', label: 'Шаг 5', acceptIds: ['purchase'] },
            { id: 'zone-6', label: 'Шаг 6', acceptIds: ['first-use'] },
          ]}
        />
      </motion.div>

      {/* --- InputExercise: вопросы интервью --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Практика: составьте вопросы для интервью</h3>
        <InputExercise
          prompt="Напишите 3 вопроса, которые вы бы задали в AJTBD-интервью для продукта, над которым вы работаете (или которым пользуетесь). Помните: только про прошлое поведение, не про гипотетическое будущее."
          placeholder="1. Расскажите о последнем разе, когда...&#10;2. Что произошло перед тем, как вы решили...&#10;3. Какие варианты вы рассматривали, когда..."
          hint="Хорошие вопросы начинаются с: «Расскажите о...», «Вспомните момент, когда...», «Что произошло...», «Как вы решали...». Избегайте: «Хотели бы вы...», «Было бы вам удобно...»."
          exampleAnswer="Продукт: приложение для планирования бюджета. 1. Расскажите, что произошло в тот момент, когда вы впервые подумали: «Мне нужно начать следить за деньгами»? 2. Как вы пытались контролировать расходы до того, как нашли текущее решение? Что не устраивало? 3. Когда вы выбирали между несколькими приложениями — что в итоге повлияло на решение? Был ли момент, когда вы чуть не отказались?"
        />
      </motion.div>
    </ModuleWrapper>
  );
}
