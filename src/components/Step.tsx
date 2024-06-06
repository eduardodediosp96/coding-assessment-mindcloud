import { FC } from "react";
import { type Step } from "../store/StepStore.d";
import {
  StepStyled,
  StepNumberStyled,
  StepInfoStyled,
  StepWrapperStyled,
  StepActionsStyled,
  StepContentStyled,
} from "./styled/StepStyled";
import useStepStore from "../store/StepStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { StepErrorTooltip } from "./StepErrorTooltip";
import { StepActionsQuantity } from "./StepActionsQuantity";

interface StepComponentProps {
  step: Step;
}

const StepComponent: FC<StepComponentProps> = ({ step }) => {
  const { stepSelected, selectStep } = useStepStore((state) => ({
    stepSelected: state.stepSelected,
    selectStep: state.selectStep,
  }));

  const isThisCurrentStepSelected = stepSelected === step.id;
  const iconColor = () => {
    return isThisCurrentStepSelected ? "#7A80D7" : "#DEDFDF";
  };

  return (
    <StepWrapperStyled>
      <StepStyled
        isSelected={isThisCurrentStepSelected}
        onClick={() => selectStep(step.id)}
      >
        <StepContentStyled>
          <FontAwesomeIcon
            icon={["fas", step.icon as IconName]}
            color={iconColor()}
          />
          <StepInfoStyled>
            <StepNumberStyled>{step.id}</StepNumberStyled>
            {step.title}
          </StepInfoStyled>
        </StepContentStyled>
        <StepActionsStyled>
          {step.quantity && <StepActionsQuantity quantity={step.quantity} />}
        </StepActionsStyled>
      </StepStyled>
      {step.errorMessage && <StepErrorTooltip message={step.errorMessage} />}
    </StepWrapperStyled>
  );
};

export default StepComponent;
