'use client';

import ModuleWrapper, { fadeInItem } from '@/components/ModuleWrapper';
import Quiz from '@/components/Quiz';
import ScenarioCard from '@/components/ScenarioCard';
import InputExercise from '@/components/InputExercise';
import DragDrop from '@/components/DragDrop';
import { motion } from 'framer-motion';

export default function Module3() {
  return (
    <ModuleWrapper
      moduleIndex={3}
      title="Ценность продукта"
      subtitle="Как создать продукт, который люди действительно ценят"
      readingList={[
        {
          title: 'Ваня Замесин — Невероятная сила привычки',
          url: 'https://zamesin.ru/producthowto/book/incredibly-strong-habit/',
        },
        {
          title: 'Ваня Замесин — Решенческие интервью',
          url: 'https://zamesin.ru/books/product-howto/solution-interview/',
        },
        {
          title: 'Гайд AJTBD-интервью для B2B (Notion)',
          url: 'https://www.notion.so/ivanzamesin/v3-3-JTBD-B2B-a109bc94fb964a6dbe5ba0c943f25050',
        },
      ]}
    >
      {/* --- Введение --- */}
      <motion.div variants={fadeInItem} className="prose prose-invert max-w-none mb-10">
        <h2 className="text-xl font-semibold mb-4">Ценность = энергоэффективное выполнение работы</h2>
        <p className="text-muted-foreground leading-relaxed">
          В AJTBD <strong className="text-foreground">ценность продукта</strong> определяется просто:
          насколько <strong className="text-foreground">энергоэффективнее</strong> человек выполняет работу
          с вашим продуктом по сравнению с текущим решением. Энергия &mdash; это время, деньги,
          когнитивная нагрузка, эмоциональные усилия и физические затраты.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-3">
          Продукт с одной фичей, который экономит больше энергии, ценнее продукта с сотней функций.
          Главный вопрос: &laquo;Насколько мы снижаем затраты энергии на выполнение работы?&raquo;.
          В AJTBD выделяют <strong className="text-foreground">50+ механик создания ценности</strong> &mdash;
          конкретных способов сделать выполнение работы эффективнее.
        </p>
      </motion.div>

      {/* --- Механики создания ценности --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Ключевые механики создания ценности</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          AJTBD описывает 50+ механик создания ценности. Вот самые мощные из них:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-1 text-error">Убить работу</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Сделать работу ненужной. Пример: автопилот убивает работу &laquo;вести машину&raquo;.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-1 text-success">Исправить проблему</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Убрать конкретную проблему текущего решения. Пример: Uber убрал проблему &laquo;ловить такси на улице&raquo;.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-1 text-accent">Одно решение на несколько работ</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Один продукт выполняет сразу несколько работ. Пример: смартфон = телефон + камера + навигатор + банк.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-1 text-warning">Сократить задержки</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Убрать ожидание между шагами работы. Пример: мгновенные переводы вместо ожидания 1-3 дня.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-1 text-accent">Автоматизировать шаги</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Делать часть работы без участия человека. Пример: автооплата счетов, автозаполнение форм.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border/50">
            <h4 className="text-sm font-semibold mb-1 text-success">Снизить барьеры входа</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Уменьшить стоимость начала использования. Пример: freemium-модель, регистрация через Google.
            </p>
          </div>
        </div>
      </motion.div>

      {/* --- Четыре силы --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Четыре силы переключения</h2>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Когда человек рассматривает новое решение, на него действуют четыре силы.
          Две толкают к переключению, две удерживают от него. Продукт побеждает, когда
          <strong className="text-foreground"> Толчок + Притяжение &gt; Инерция + Тревога</strong>.
        </p>

        {/* SVG: Four Forces Diagram */}
        <div className="flex justify-center my-8">
          <svg viewBox="0 0 640 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
            {/* Center divider */}
            <line x1="320" y1="30" x2="320" y2="340" stroke="currentColor" strokeWidth="1" className="text-border" strokeDasharray="6 4" />
            <text x="320" y="20" textAnchor="middle" className="text-muted-foreground" fontSize="10" fill="currentColor">Барьер переключения</text>

            {/* Left label: Forces FOR switching */}
            <text x="160" y="48" textAnchor="middle" className="text-success" fontSize="12" fontWeight="600" fill="currentColor">Силы ЗА переключение</text>

            {/* Right label: Forces AGAINST switching */}
            <text x="480" y="48" textAnchor="middle" className="text-error" fontSize="12" fontWeight="600" fill="currentColor">Силы ПРОТИВ переключения</text>

            {/* --- Push (top-left) --- */}
            <rect x="30" y="70" width="250" height="110" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-error/50" fill="none" />
            <rect x="30" y="70" width="250" height="110" rx="12" className="text-error/5" fill="currentColor" />
            {/* Push arrow icon */}
            <circle cx="68" cy="102" r="16" className="text-error/10" fill="currentColor" />
            <path d="M60 102H76M76 102L71 97M76 102L71 107" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-error" />
            <text x="92" y="98" className="text-foreground" fontSize="13" fontWeight="600" fill="currentColor">Толчок (Push)</text>
            <text x="92" y="114" className="text-muted-foreground" fontSize="10" fill="currentColor">Боль от текущей ситуации</text>
            <text x="50" y="142" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;Текущее решение меня не устраивает,</text>
            <text x="50" y="156" className="text-muted-foreground" fontSize="10" fill="currentColor">я трачу слишком много времени&raquo;</text>

            {/* Arrow pointing right */}
            <path d="M280 125L310 125" stroke="currentColor" strokeWidth="2" className="text-success" strokeLinecap="round" />
            <polygon points="308,120 318,125 308,130" className="text-success" fill="currentColor" />

            {/* --- Pull (bottom-left) --- */}
            <rect x="30" y="200" width="250" height="110" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-success/50" fill="none" />
            <rect x="30" y="200" width="250" height="110" rx="12" className="text-success/5" fill="currentColor" />
            {/* Magnet icon */}
            <circle cx="68" cy="232" r="16" className="text-success/10" fill="currentColor" />
            <path d="M60 226V238C60 242.4 63.6 246 68 246C72.4 246 76 242.4 76 238V226" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-success" fill="none" />
            <line x1="60" y1="226" x2="60" y2="222" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-success" />
            <line x1="76" y1="226" x2="76" y2="222" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-success" />
            <text x="92" y="228" className="text-foreground" fontSize="13" fontWeight="600" fill="currentColor">Притяжение (Pull)</text>
            <text x="92" y="244" className="text-muted-foreground" fontSize="10" fill="currentColor">Привлекательность нового</text>
            <text x="50" y="272" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;Новое решение обещает сделать</text>
            <text x="50" y="286" className="text-muted-foreground" fontSize="10" fill="currentColor">мою жизнь значительно лучше&raquo;</text>

            {/* Arrow pointing right */}
            <path d="M280 255L310 255" stroke="currentColor" strokeWidth="2" className="text-success" strokeLinecap="round" />
            <polygon points="308,250 318,255 308,260" className="text-success" fill="currentColor" />

            {/* --- Inertia (top-right) --- */}
            <rect x="360" y="70" width="250" height="110" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-warning/50" fill="none" />
            <rect x="360" y="70" width="250" height="110" rx="12" className="text-warning/5" fill="currentColor" />
            {/* Anchor icon */}
            <circle cx="398" cy="102" r="16" className="text-warning/10" fill="currentColor" />
            <circle cx="398" cy="95" r="3" stroke="currentColor" strokeWidth="1.5" className="text-warning" fill="none" />
            <line x1="398" y1="98" x2="398" y2="112" stroke="currentColor" strokeWidth="1.5" className="text-warning" strokeLinecap="round" />
            <path d="M390 108L398 112L406 108" stroke="currentColor" strokeWidth="1.5" className="text-warning" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <text x="422" y="98" className="text-foreground" fontSize="13" fontWeight="600" fill="currentColor">Инерция (Inertia)</text>
            <text x="422" y="114" className="text-muted-foreground" fontSize="10" fill="currentColor">Привычка к текущему</text>
            <text x="380" y="142" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;Я уже привык, переучиваться</text>
            <text x="380" y="156" className="text-muted-foreground" fontSize="10" fill="currentColor">сложно и долго&raquo;</text>

            {/* Arrow pointing left */}
            <path d="M360 125L330 125" stroke="currentColor" strokeWidth="2" className="text-error" strokeLinecap="round" />
            <polygon points="332,120 322,125 332,130" className="text-error" fill="currentColor" />

            {/* --- Anxiety (bottom-right) --- */}
            <rect x="360" y="200" width="250" height="110" rx="12" stroke="currentColor" strokeWidth="1.5" className="text-error/50" fill="none" />
            <rect x="360" y="200" width="250" height="110" rx="12" className="text-error/5" fill="currentColor" />
            {/* Warning icon */}
            <circle cx="398" cy="232" r="16" className="text-error/10" fill="currentColor" />
            <path d="M398 224L388 242H408L398 224Z" stroke="currentColor" strokeWidth="1.5" className="text-error" fill="none" strokeLinejoin="round" />
            <line x1="398" y1="231" x2="398" y2="236" stroke="currentColor" strokeWidth="1.5" className="text-error" strokeLinecap="round" />
            <circle cx="398" cy="239" r="0.8" className="text-error" fill="currentColor" />
            <text x="422" y="228" className="text-foreground" fontSize="13" fontWeight="600" fill="currentColor">Тревога (Anxiety)</text>
            <text x="422" y="244" className="text-muted-foreground" fontSize="10" fill="currentColor">Страх перед новым</text>
            <text x="380" y="272" className="text-muted-foreground" fontSize="10" fill="currentColor">&laquo;А вдруг новое решение окажется</text>
            <text x="380" y="286" className="text-muted-foreground" fontSize="10" fill="currentColor">ещё хуже? Потеряю деньги и время&raquo;</text>

            {/* Arrow pointing left */}
            <path d="M360 255L330 255" stroke="currentColor" strokeWidth="2" className="text-error" strokeLinecap="round" />
            <polygon points="332,250 322,255 332,260" className="text-error" fill="currentColor" />

            {/* Bottom formula */}
            <rect x="140" y="335" width="360" height="35" rx="8" className="text-accent/10" fill="currentColor" />
            <rect x="140" y="335" width="360" height="35" rx="8" stroke="currentColor" strokeWidth="1" className="text-accent/30" fill="none" />
            <text x="320" y="357" textAnchor="middle" className="text-accent" fontSize="12" fontWeight="600" fill="currentColor">Толчок + Притяжение &gt; Инерция + Тревога = Переключение</text>
          </svg>
        </div>
      </motion.div>

      {/* --- Подробнее о каждой силе --- */}
      <motion.div variants={fadeInItem} className="mb-10">
        <h2 className="text-xl font-semibold mb-6">Как влиять на четыре силы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-error/10 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-error">
                  <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold">Усилить Толчок</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Помогите клиенту осознать масштаб проблемы. Покажите, сколько он теряет времени, денег или
              энергии с текущим решением. Не создавайте боль &mdash; сделайте существующую боль видимой.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-success/10 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-success">
                  <path d="M6 2V10M6 2L3 5M6 2L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold">Увеличить Притяжение</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Покажите конкретный результат, которого клиент достигнет. Не абстрактные обещания,
              а реальные истории успеха, демо, пробный период. Сделайте Точку Б осязаемой.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-warning/10 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-warning">
                  <rect x="2" y="4" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M4 4V3C4 1.9 4.9 1 6 1C7.1 1 8 1.9 8 3V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold">Снизить Инерцию</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Сделайте переход максимально лёгким. Импорт данных, миграция, онбординг за 2 минуты,
              совместимость с привычным workflow. Чем меньше усилий &mdash; тем легче переключиться.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-accent/10 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent">
                  <path d="M6 1L7.5 4.5H11L8.25 6.75L9.5 11L6 8.25L2.5 11L3.75 6.75L1 4.5H4.5L6 1Z" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </div>
              <h4 className="text-sm font-semibold">Снизить Тревогу</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Гарантии возврата, бесплатный пробный период, социальное доказательство (отзывы, кейсы),
              прозрачность процесса. Уберите риск &mdash; и тревога снизится.
            </p>
          </div>
        </div>
      </motion.div>

      {/* --- Пример: Netflix и четыре силы --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <h3 className="text-base font-semibold mb-4">Кейс: Как Netflix победил видеопрокат</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Netflix не просто заменил Blockbuster &mdash; он целенаправленно работал с каждой из четырёх сил переключения.
          Разберём, как пользователи переключались с видеопроката на стриминг.
        </p>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-error flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Толчок:</strong> Штрафы за просрочку возврата дисков ($6 млрд/год по индустрии!),
              пустые полки в магазине, поездка до проката в плохую погоду. Люди тратили 30+ минут на выбор и дорогу.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-success flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Притяжение:</strong> Каталог из тысяч фильмов, рекомендации на основе вкусов,
              смотри на любом устройстве, без рекламы. &laquo;Одна подписка &mdash; неограниченный контент&raquo;.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-warning flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Инерция:</strong> &laquo;Я привык ходить в видеопрокат по пятницам, это ритуал&raquo;,
              &laquo;Мне нравится физически держать диск и выбирать обложки&raquo;.
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-error/60 flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Тревога:</strong> &laquo;А вдруг интернет медленный и будет тормозить?&raquo;,
              &laquo;Не будет нужного фильма&raquo;, &laquo;Непривычный интерфейс&raquo;.
            </span>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-xs text-accent">
            <strong>Стратегия Netflix:</strong> Бесплатный первый месяц (снижает тревогу), никаких штрафов за просрочку (усиливает толчок от конкурента),
            персональные рекомендации (усиливают притяжение), постепенный переход от DVD-по-почте к стримингу (снижает инерцию).
            Результат: Blockbuster обанкротился в 2010 году.
          </p>
        </div>
      </motion.div>

      {/* --- Пример: как доставка еды работает с силами --- */}
      <motion.div variants={fadeInItem} className="mb-10 p-6 rounded-xl bg-card border border-border/50">
        <h3 className="text-base font-semibold mb-4">Пример: Как доставка еды работает с силами</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-error flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Толчок:</strong> Готовить после работы &mdash; утомительно, в холодильнике пусто, а в ближайшем кафе очередь
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-success flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Притяжение:</strong> Горячая еда из любимого ресторана через 30 минут, без очередей и поездок
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-warning flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Инерция:</strong> &laquo;Я привык готовить сам&raquo;, &laquo;Доставка &mdash; это расточительство&raquo;
            </span>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-error/60 flex-shrink-0 mt-1.5" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">Тревога:</strong> &laquo;Доедет ли еда горячей?&raquo;, &laquo;А вдруг привезут не то?&raquo;, &laquo;Сколько будет стоить?&raquo;
            </span>
          </div>
        </div>
        <div className="mt-4 p-3 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-xs text-accent">
            Сервис побеждает, показывая трекинг курьера (снижает тревогу), предлагая промокод на первый заказ
            (снижает тревогу + усиливает притяжение), и напоминая &laquo;Не хочется готовить?&raquo; в 18:00 (усиливает толчок).
          </p>
        </div>
      </motion.div>

      {/* --- ScenarioCard --- */}
      <motion.div variants={fadeInItem} className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Сценарий: Продуктовое решение</h3>
        <ScenarioCard
          scenario="Вы — продакт-менеджер в сервисе доставки еды. Пользователи оформляют первый заказ, но не возвращаются. Что вы исследуете в первую очередь?"
          context="Метрики показывают: конверсия в первый заказ хорошая (12%), но retention после первого заказа — всего 15%. NPS первого заказа — 7.2/10."
          options={[
            {
              text: 'Добавить больше ресторанов и расширить меню',
              outcome: 'Расширение ассортимента может помочь, но не объясняет, почему текущие пользователи не возвращаются. Вы лечите симптом, не разобравшись в причине. В терминах JTBD: вы не знаете, какую работу выполнял первый заказ и почему продукт не был «нанят» повторно.',
              score: 3,
            },
            {
              text: 'Провести JTBD-интервью с «одноразовыми» пользователями, чтобы понять, какую работу они нанимали сервис выполнить и почему он не справился',
              outcome: 'Отличный выбор! JTBD-интервью поможет понять контекст первого заказа (возможно, это был триггер «нечего есть»), ожидания (Точка Б) и что пошло не так. Может выясниться, что Push был ситуативный, а постоянной работы сервис не решает. Или что Anxiety после первого опыта выросла.',
              score: 10,
            },
            {
              text: 'Предложить скидку 30% на второй заказ',
              outcome: 'Скидка снижает барьер, но временно. Это работа с Притяжением через цену, а не с корневой причиной. Если работа не выполняется, скидка лишь задерживает отток. Нужно сначала понять «работу», а потом оптимизировать силы.',
              score: 4,
            },
            {
              text: 'Проанализировать воронку: скорость доставки, качество упаковки, точность заказа',
              outcome: 'Операционные метрики важны, но NPS 7.2 говорит, что базовый опыт приемлемый. Проблема, скорее всего, не в исполнении, а в том, что продукт не встроился в регулярную «работу» пользователя. Нужно понять контекст и работу глубже.',
              score: 6,
            },
          ]}
        />
      </motion.div>

      {/* --- Quiz о силах --- */}
      <motion.div variants={fadeInItem}>
        <h3 className="text-lg font-semibold mb-2">Проверьте понимание</h3>
        <Quiz
          question="Пользователь говорит: «Я бы попробовал ваш сервис, но боюсь потерять все данные из текущего инструмента». Какая сила действует?"
          options={[
            {
              text: 'Толчок (Push)',
              explanation: 'Толчок — это боль от текущей ситуации, которая толкает к переменам. Здесь человек, наоборот, удерживается от перехода.',
            },
            {
              text: 'Притяжение (Pull)',
              explanation: 'Притяжение — это привлекательность нового решения. Здесь речь о страхе, а не о привлекательности.',
            },
            {
              text: 'Инерция (Inertia)',
              explanation: 'Инерция — это привычка к текущему решению. Здесь конкретный страх потери данных, а не просто привычка.',
            },
            {
              text: 'Тревога (Anxiety)',
              correct: true,
              explanation: 'Верно! Тревога — это страх перед новым решением. Страх потерять данные — классический пример anxiety, который можно снизить гарантией миграции или экспорта.',
            },
          ]}
        />
      </motion.div>

      {/* --- InputExercise --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Практика: Анализ четырёх сил</h3>
        <InputExercise
          prompt="Вспомните последний раз, когда вы переключились с одного продукта/сервиса на другой (или решили НЕ переключаться). Опишите все четыре силы, которые на вас действовали."
          placeholder="Переключение: с ... на ... Толчок: ... Притяжение: ... Инерция: ... Тревога: ..."
          hint="Вспомните конкретную ситуацию. Даже если вы НЕ переключились — это тоже ценный пример (значит, инерция + тревога оказались сильнее)."
          exampleAnswer="Я думал о переходе с Google Docs на Notion. Толчок: документы разбросаны, нет структуры, трудно находить нужное. Притяжение: у Notion красивые шаблоны, базы данных, всё в одном месте. Инерция: вся команда уже в Google Docs, все привыкли. Тревога: а вдруг Notion окажется сложным, команда не захочет переучиваться, потеряем файлы. Итог: не переключился — инерция команды перевесила."
        />
      </motion.div>

      {/* --- DragDrop: четыре силы --- */}
      <motion.div variants={fadeInItem} className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Упражнение: определите силу</h3>
        <DragDrop
          instruction="Соотнесите каждое высказывание клиента с силой переключения, которая за ним стоит."
          items={[
            { id: 'push', text: '«Текущий CRM жутко тормозит, я теряю сделки»' },
            { id: 'pull', text: '«У нового сервиса есть AI-ассистент — мечта!»' },
            { id: 'inertia', text: '«Вся команда уже привыкла к старому инструменту»' },
            { id: 'anxiety', text: '«А вдруг при миграции потеряем данные клиентов?»' },
          ]}
          zones={[
            {
              id: 'zone-push',
              label: 'Толчок (Push) — боль от текущего решения',
              acceptIds: ['push'],
            },
            {
              id: 'zone-pull',
              label: 'Притяжение (Pull) — привлекательность нового',
              acceptIds: ['pull'],
            },
            {
              id: 'zone-inertia',
              label: 'Инерция (Inertia) — привычка к текущему',
              acceptIds: ['inertia'],
            },
            {
              id: 'zone-anxiety',
              label: 'Тревога (Anxiety) — страх перед новым',
              acceptIds: ['anxiety'],
            },
          ]}
        />
      </motion.div>

      {/* --- Итоговый блок --- */}
      <motion.div variants={fadeInItem} className="mt-10 p-6 rounded-xl bg-accent/5 border border-accent/20">
        <h3 className="text-base font-semibold mb-3">Ключевой вывод модуля</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ценность = более энергоэффективное выполнение работы. AJTBD даёт 50+ конкретных механик
          создания ценности: убить работу, исправить проблему, автоматизировать шаги, сократить задержки
          и другие. Чтобы продукт был &laquo;нанят&raquo;, силы за переключение (толчок + притяжение) должны
          превышать силы против (инерция + тревога). Задача продакт-менеджера &mdash; выбрать механику
          ценности и целенаправленно работать с каждой из четырёх сил.
        </p>
      </motion.div>
    </ModuleWrapper>
  );
}
