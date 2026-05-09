export type ActivationStep = 'hub' | 'verify' | 'kyc' | 'balance' | 'invest';

export type ChecklistRowStatus = 'done' | 'current' | 'pending';

export interface ChecklistRow {
  id: string;
  label: string;
  status: ChecklistRowStatus;
}

export interface ProgressMeta {
  label: string;
  percent: number;
}
