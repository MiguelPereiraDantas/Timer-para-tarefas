import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 3.5rem;
  }
`;

export const StartCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-content: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  background: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme["gray-100"]};

  transition: all 0.3s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
  }
`;

export const StopCountDownButton = styled(StartCountDownButton)`
  background: ${(props) => props.theme["red-500"]};

  &:not(:disabled):hover {
    background: ${(props) => props.theme["red-700"]};
  }
`;

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-bottom: 2px solid ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`;