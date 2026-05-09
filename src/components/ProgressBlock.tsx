import type { ProgressMeta } from '../onboarding/types';

type Props = {
  meta: ProgressMeta;
};

export function ProgressBlock({ meta }: Props) {
  return (
    <div className="ac-progress">
      <div className="ac-progress__row">
        <span>Progresso da ativação</span>
        <strong>{meta.label}</strong>
      </div>
      <div className="ac-progress__track" role="progressbar" aria-valuenow={meta.percent} aria-valuemin={0} aria-valuemax={100}>
        <div className="ac-progress__fill" style={{ width: `${meta.percent}%` }} />
      </div>
    </div>
  );
}
