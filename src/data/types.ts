export interface QuestionOption {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface DistractorExplanation {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
  explanation: string;
}

export interface ReviewItem {
  id: number;
  questionNumber: number;
  part: string;
  partShort: 'Part 5' | 'Part 6' | 'Part 7';
  passageTitle?: string;
  passageType?: string;
  passageText?: string;
  questionText: string;
  options: QuestionOption[];
  studentAnswer: 'A' | 'B' | 'C' | 'D';
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  sheetCorrectionMark: string;
  ruleApplied: string;
  whyStudentWrong?: string;
  whyCorrectRight?: string;
  grammarOrReadingRule?: {
    title: string;
    description: string;
    keyTakeaway: string;
  };
  otherOptions?: DistractorExplanation[];
}

export interface StudentAccount {
  id: string;
  name: string;
  username: string;
  password: string; // Hardcoded password, can be changed directly in data
  mistakes: ReviewItem[];
}
