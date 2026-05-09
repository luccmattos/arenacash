import { Link } from 'react-router-dom';
import { ChecklistCard } from '../components/ChecklistCard';
import { ProgressBlock } from '../components/ProgressBlock';
import { getChecklistRows, getProgressMeta } from '../onboarding/checklist-state';

export function VerifyEmailPage() {
  const step = 'verify';
  const meta = getProgressMeta(step);
  const rows = getChecklistRows(step);

  return (
    <>
      <div className="ac-back">
        <Link to="/">← Voltar ao resumo</Link>
      </div>

      <h1 className="ac-page-title">Verificar e-mail</h1>
      <p className="ac-page-lede">
        Enviamos um link para o endereço cadastrado. Toque no link para confirmar que é você.
      </p>

      <ProgressBlock meta={meta} />
      <ChecklistCard rows={rows} />

      <div className="ac-info">
        Não encontrou? Confira spam e promoções. Você pode reenviar o e-mail em poucos segundos.
      </div>

      <div className="ac-actions">
        <button type="button" className="ac-btn ac-btn--secondary ac-btn--block">
          Reenviar e-mail
        </button>
        <Link className="ac-btn ac-btn--primary ac-btn--block" to="/kyc">
          Já confirmei — continuar
        </Link>
      </div>

      <p className="ac-link-row">
        <Link to="/">Falar com suporte</Link>
      </p>
    </>
  );
}
