export interface Step {
  id: number;
  icon: string;
  title: string;
  errorMessage?: string;
  quantity?: number;
}

interface StepState {
  steps: Step[];
  stepSelected: number;
}

interface StepActions {
  selectStep: (step: number) => void;
}

export type StepStore = StepState & StepActions;
