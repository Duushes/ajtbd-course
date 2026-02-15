'use client';

export default function Footer() {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-4">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          Данный образовательный проект создан исключительно в некоммерческих целях.
          Материалы курса основаны на публично доступных источниках о методологии Jobs To Be Done
          и авторских интерпретациях Advanced JTBD.
          Сайт не аффилирован, не спонсируется и не связан официально с Иваном Замесиным.
          Все упоминаемые методологии и товарные знаки принадлежат их правообладателям.
        </p>
        <div className="text-xs text-muted-foreground leading-relaxed max-w-2xl space-y-2">
          <p className="font-medium text-foreground/70">Источники методологий, использованных в курсе:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>ABCDX-сегментация</strong> — Илья Красинский, акселератор ФРИИ.{' '}
              <a href="https://zamesin.ru/books/product-howto/abcdx-segmentation/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">
                Ваня Замесин — ABCDX-сегментация
              </a>
            </li>
            <li>
              <strong>RAT (Riskiest Assumption Test)</strong> — Rik Higham,{' '}
              <a href="https://hackernoon.com/the-mvp-is-dead-long-live-the-rat-233d5d16ab02" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">
                The MVP is dead. Long live the RAT.
              </a>
              ; David Bland, Alexander Osterwalder — <em>Testing Business Ideas</em>; Teresa Torres — <em>Continuous Discovery Habits</em>; Marty Cagan (SVPG) — <em>INSPIRED</em>
            </li>
            <li>
              <strong>AJTBD</strong> — Иван Замесин.{' '}
              <a href="https://zamesin.ru" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-2">
                zamesin.ru
              </a>
              ; Clayton Christensen — <em>Competing Against Luck</em>; Bob Moesta — <em>Demand-Side Sales</em>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
