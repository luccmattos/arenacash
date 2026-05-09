import { Link } from 'react-router-dom';
import { ChecklistCard } from '../components/ChecklistCard';
import { ProgressBlock } from '../components/ProgressBlock';
import { getChecklistRows, getProgressMeta } from '../onboarding/checklist-state';

export function BalancePage() {
  const step = 'balance';
  const meta = getProgressMeta(step);
  const rows = getChecklistRows(step);

  return (
    <>
      <div className="ac-back">
        <Link to="/kyc">← Voltar</Link>
      </div>

      <h1 className="ac-page-title">Saldo</h1>
      <p className="ac-page-lede">
        Para sua primeira aplicação você precisa de saldo disponível na conta ArenaCash.
      </p>

      <ProgressBlock meta={meta} />
      <ChecklistCard rows={rows} />

      <div className="ac-empty" role="img" aria-label="Sem saldo na conta">
        Sem saldo · depósito pendente
      </div>

      <div className="ac-actions">
        <Link className="ac-btn ac-btn--primary ac-btn--block" to="/invest">
          Adicionar saldo
        </Link>
        <button type="button" className="ac-btn ac-btn--secondary ac-btn--block">
          Ver métodos de depósito
        </button>
      </div>
    </>
  );
}
