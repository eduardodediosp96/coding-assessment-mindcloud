import { FC, useRef } from "react";
import StepComponent from "./Step";
import {
  StepListBackLineStyled,
  StepListStyled,
  StepListWrapperStyled,
} from "./styled/StepListStyled";
import useStepStore from "../store/StepStore";
import useOutsideClick from "../hooks/useOutsideClick";

const StepListComponent: FC = () => {
  const { steps, stepSelected, selectStep } = useStepStore((state) => ({
    steps: state.steps,
    stepSelected: state.stepSelected,
    selectStep: state.selectStep,
  }));
  const listRef = useRef(null);

  useOutsideClick(listRef, () => {
    if (stepSelected !== 0) {
      selectStep(0); // Reset selection when clicking outside
    }
  });

  return (
    <StepListWrapperStyled>
      <h2>Steps: </h2>
      <StepListStyled ref={listRef}>
        <StepListBackLineStyled />
        {steps.map((step) => (
          <StepComponent key={step.id} step={step} />
        ))}
      </StepListStyled>
    </StepListWrapperStyled>
  );
};

export default StepListComponent;
