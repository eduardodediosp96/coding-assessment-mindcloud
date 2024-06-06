import styled from "@emotion/styled";

export const StepErrorTooltipWrapperStyled = styled.div`
  position: relative;
`;

export const StepErrorTooltipStyled = styled.div`
  color: #721c24;
  background-color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Enhanced shadow effect
  white-space: nowrap;
  z-index: 1000;
  min-height: 40px;
  top: 130%;
  left: -120%;

  @media (max-width: 768px) {
    right: 15px;
    left: auto;
  }
`;
