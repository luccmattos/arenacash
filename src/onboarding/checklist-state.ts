import type { ActivationStep, ChecklistRow, ProgressMeta } from './types';

/**
 * Maps prototype route focus to checklist + progress (ASCII-validated hub uses 2/4 @ 50%).
 */
export function getProgressMeta(step: ActivationStep): ProgressMeta {
  switch (step) {
    case 'hub':
    case 'verify':
      return { label: '2 de 4', percent: 50 };
    case 'kyc':
      return { label: '3 de 4', percent: 75 };
    case 'balance':
      return { label: '4 de 4', percent: 88 };
    case 'invest':
      return { label: '4 de 4', percent: 100 };
    default:
      return { label: '2 de 4', percent: 50 };
  }
}

export function getChecklistRows(step: ActivationStep): ChecklistRow[] {
  const rows: Omit<ChecklistRow, 'status'>[] = [
    { id: 'account', label: 'Conta criada' },
    { id: 'verify', label: 'Verificar e-mail' },
    { id: 'kyc', label: 'Identidade (KYC)' },
    { id: 'balance', label: 'Adicionar saldo' },
    { id: 'invest', label: 'Primeira aplicação' },
  ];

  const focusIndex =
    step === 'hub' || step === 'verify'
      ? 1
      : step === 'kyc'
        ? 2
        : step === 'balance'
          ? 3
          : 4;

  return rows.map((row, index) => {
    if (index === 0) {
      return { ...row, status: 'done' };
    }
    if (index < focusIndex) {
      return { ...row, status: 'done' };
    }
    if (index === focusIndex) {
      return { ...row, status: 'current' };
    }
    return { ...row, status: 'pending' };
  });
}
