export interface Question {
  text: string;
  answers: { label: string, value: string }[];
  selection?: string;
}