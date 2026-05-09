import { Link } from 'react-router-dom';
import { ChecklistCard } from '../components/ChecklistCard';
import { ProgressBlock } from '../components/ProgressBlock';
import { getChecklistRows, getProgressMeta } from '../onboarding/checklist-state';

export function KycPage() {
  const step = 'kyc';
  const meta = getProgressMeta(step);
  const rows = getChecklistRows(step);

  return (
    <>
      <div className="ac-back">
        <Link to="/verify-email">← Voltar</Link>
      </div>

      <h1 className="ac-page-title">Identidade</h1>
      <p className="ac-page-lede">
        Precisamos confirmar quem é você para investir com segurança e cumprir a regulamentação.
      </p>

      <ProgressBlock meta={meta} />
      <ChecklistCard rows={rows} />

      <div className="ac-actions">
        <Link className="ac-btn ac-btn--primary ac-btn--block" to="/balance">
          Iniciar verificação
        </Link>
      </div>

      <p className="ac-link-row">
        <Link to="#">Por que pedimos isso?</Link>
      </p>
    </>
  );
}
