import { create } from "zustand";
import { steps } from "../common/stepsData";
import { StepStore } from "./StepStore.d";

const useStepStore = create<StepStore>((set) => ({
  steps: steps,
  stepSelected: 0,
  selectStep: (step: number) => {
    set({ stepSelected: step });
  },
}));

export default useStepStore;
