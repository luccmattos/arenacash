import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChecklistCard } from '../components/ChecklistCard';
import { ProgressBlock } from '../components/ProgressBlock';
import { getChecklistRows, getProgressMeta } from '../onboarding/checklist-state';

export function InvestPage() {
  const [submitted, setSubmitted] = useState(false);
  const step = 'invest';
  const meta = getProgressMeta(step);
  const rows = getChecklistRows(step);

  return (
    <>
      <div className="ac-back">
        <Link to="/balance">← Voltar</Link>
      </div>

      <h1 className="ac-page-title">Primeira aplicação</h1>
      <p className="ac-page-lede">
        Escolha onde começar. Você pode mudar depois — o importante é dar o primeiro passo.
      </p>

      <ProgressBlock meta={meta} />
      <ChecklistCard rows={rows} />

      {submitted ? (
        <div className="ac-success">
          <strong>Pedido registrado.</strong> Acompanhe o status na área investimentos. Parabéns pela primeira
          aplicação — time ArenaCash.
        </div>
      ) : null}

      <div className="ac-field-label">Valor mínimo</div>
      <div className="ac-amount">R$ 50,00</div>

      <label className="ac-field-label" htmlFor="product">
        Produto sugerido
      </label>
      <select id="product" className="ac-select" defaultValue="cdb">
        <option value="cdb">CDB liquidity · CDI + 0,5% a.a.</option>
        <option value="tesouro">Tesouro Selic</option>
      </select>

      <div className="ac-actions">
        {!submitted ? (
          <button type="button" className="ac-btn ac-btn--primary ac-btn--block" onClick={() => setSubmitted(true)}>
            Aplicar agora
          </button>
        ) : (
          <Link className="ac-btn ac-btn--secondary ac-btn--block" to="/">
            Voltar ao início
          </Link>
        )}
      </div>
    </>
  );
}
