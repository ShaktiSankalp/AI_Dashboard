
export type Severity = 'High' | 'Medium' | 'Low';

export interface Incident {
  id: number;
  title: string;
  description: string;         // (was summary/details)
  severity: Severity;
  reported_at: string;         // ISO string as in your data
}