import { Link } from 'react-router-dom';
import { ChecklistCard } from '../components/ChecklistCard';
import { ProgressBlock } from '../components/ProgressBlock';
import { getChecklistRows, getProgressMeta } from '../onboarding/checklist-state';

export function HomePage() {
  const step = 'hub';
  const meta = getProgressMeta(step);
  const rows = getChecklistRows(step);

  return (
    <>
      <h1 className="ac-page-title">Ative sua conta em poucos passos</h1>
      <p className="ac-page-lede">
        Falta pouco para você investir com a gente. Complete os itens abaixo — leva poucos minutos.
      </p>

      <ProgressBlock meta={meta} />
      <ChecklistCard rows={rows} />

      <div className="ac-info ac-info--accent">
        Abra o link que enviamos para seu e-mail para liberar a verificação de identidade e o primeiro aporte.
      </div>

      <div className="ac-actions">
        <Link className="ac-btn ac-btn--primary ac-btn--block" to="/verify-email">
          Continuar verificação
        </Link>
      </div>

      <p className="ac-link-row">
        Precisa de ajuda?{' '}
        <a href="#">Central de ajuda</a>
      </p>
    </>
  );
}
