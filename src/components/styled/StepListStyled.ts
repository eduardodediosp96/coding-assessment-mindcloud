import styled from "@emotion/styled";

export const StepListWrapperStyled = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StepListStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  gap: 1.5rem;
`;

export const StepListBackLineStyled = styled.div`
    position: absolute;
    left: 2.5rem;
    z-index: -1;
    width: 4px;
    background-color: #d2d4d6;
    height: calc(100% - 3rem);
    top: 1.5rem; 
  }
`;
