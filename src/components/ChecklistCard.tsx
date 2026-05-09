import type { ChecklistRow } from '../onboarding/types';

type Props = {
  title?: string;
  rows: ChecklistRow[];
};

function RowGlyph({ status }: { status: ChecklistRow['status'] }) {
  if (status === 'done') {
    return <span className="ac-checklist__glyph">✓</span>;
  }
  if (status === 'current') {
    return <span className="ac-checklist__glyph">→</span>;
  }
  return <span className="ac-checklist__glyph">○</span>;
}

export function ChecklistCard({ title = 'Seus próximos passos', rows }: Props) {
  return (
    <div className="ac-checklist-wrap">
      <h2 className="ac-checklist-wrap__title">{title}</h2>
      <ul className="ac-checklist">
        {rows.map((row) => (
          <li
            key={row.id}
            className={`ac-checklist__item ac-checklist__item--${row.status}`}
          >
            <RowGlyph status={row.status} />
            <div>
              {row.label}
              {row.status === 'current' ? (
                <span className="ac-checklist__badge">Atual</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
