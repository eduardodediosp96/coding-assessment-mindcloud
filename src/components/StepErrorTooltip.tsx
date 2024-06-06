import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  StepErrorTooltipWrapperStyled,
  StepErrorTooltipStyled,
} from "./styled/StepErrorTooltipStyled";

export const StepErrorTooltip = ({ message }: { message: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StepErrorTooltipWrapperStyled>
      <FontAwesomeIcon
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        icon={["fas", "exclamation-circle"]}
        color={"orange"}
      />
      {isOpen && <StepErrorTooltipStyled>{message}</StepErrorTooltipStyled>}
    </StepErrorTooltipWrapperStyled>
  );
};
