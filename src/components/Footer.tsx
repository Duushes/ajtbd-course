'use client';

export default function Footer() {
  const sources = [
    { label: 'AJTBD', author: 'Иван Замесин', url: 'https://zamesin.ru' },
    { label: 'JTBD', author: 'Clayton Christensen', note: 'Competing Against Luck' },
    { label: 'Demand-Side Sales', author: 'Bob Moesta', note: 'Demand-Side Sales 101' },
    { label: 'ABCDX', author: 'Илья Красинский', note: 'акселератор ФРИИ' },
    {
      label: 'RAT',
      author: 'Rik Higham',
      url: 'https://hackernoon.com/the-mvp-is-dead-long-live-the-rat-233d5d16ab02',
    },
    { label: 'Testing Business Ideas', author: 'D. Bland, A. Osterwalder' },
    { label: 'Continuous Discovery Habits', author: 'Teresa Torres' },
    { label: 'INSPIRED', author: 'Marty Cagan (SVPG)' },
    { label: 'Four Forces', author: 'Bob Moesta, Chris Spiek', note: 'Re-Wired Group' },
  ];

  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
          Некоммерческий образовательный проект. Не аффилирован с Иваном Замесиным.
          Все методологии и товарные знаки принадлежат правообладателям.
        </p>

        {/* Sources */}
        <details className="mt-4 group">
          <summary className="text-[11px] text-muted-foreground/60 cursor-pointer hover:text-muted-foreground transition-colors select-none">
            Источники и методологии ↓
          </summary>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {sources.map((s, i) => (
              <span key={i} className="text-[11px] text-muted-foreground/60 leading-relaxed">
                {s.url ? (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent/70 hover:text-accent hover:underline underline-offset-2"
                  >
                    {s.label}
                  </a>
                ) : (
                  <span className="text-foreground/50">{s.label}</span>
                )}
                {' — '}
                {s.author}
                {s.note && <span className="opacity-70">{`, ${s.note}`}</span>}
              </span>
            ))}
          </div>
        </details>
      </div>
    </footer>
  );
}
