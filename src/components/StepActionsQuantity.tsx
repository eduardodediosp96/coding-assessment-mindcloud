import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { StepActionsQuantityStyled } from "./styled/StepActionsQuantityStyled";

export const StepActionsQuantity = ({ quantity }: { quantity: number }) => {
  return (
    <StepActionsQuantityStyled>
      <FontAwesomeIcon icon={["fas", "bars" as IconName]} />
      {quantity}
    </StepActionsQuantityStyled>
  );
};
