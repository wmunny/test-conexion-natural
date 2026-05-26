export type DimensionType = 'vista' | 'olfato' | 'oido' | 'tacto' | 'gusto' | 'diseno';

export interface Question {
  id: number;
  dimension: DimensionType;
  dimensionLabel: string;
  questionText: string;
  contextText: string;
}

export interface DimensionInfo {
  id: DimensionType;
  label: string;
  iconName: string;
  description: string;
  tip: string;
}

export type QuizAnswers = Record<number, number>; // questionId -> score (0 | 1 | 2)

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
}
