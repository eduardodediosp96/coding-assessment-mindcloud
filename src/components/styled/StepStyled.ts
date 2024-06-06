import styled from "@emotion/styled";

interface StepStyledProps {
  isSelected: boolean;
}

export const StepWrapperStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto 1.5rem;
  align-items: center;
  gap: 1rem;
`;

export const StepInfoStyled = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StepStyled = styled.div<StepStyledProps>`
  padding: 1rem;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border: 2px solid ${({ isSelected }) => (isSelected ? "#7A80D7" : "#DEDFDF")};
`;

export const StepContentStyled = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const StepNumberStyled = styled.div`
  font-size: 12px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #b6b8ba;
  background-color: #e1e3e6;
  border-radius: 50%;
  width: 1.2rem;
  height: 1.2rem;
`;

export const StepActionsStyled = styled.div`
  display: flex;
  gap: 0.5rem;
`;
