import styled from "styled-components";
import { colors } from "./../../styles";

export const StyledButton = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.mediumGreen};
  color: ${colors.white};
  border: 1px outset ${colors.white};
  border-radius: 8px;
  height: 48px;
  width: fit-content;
  max-width: 400px;
  padding: 13px 20px;
  cursor: pointer;
  :hover {
    background-color: ${colors.mediumGreenM1};
  }
  :active {
    background-color: ${colors.mediumGreenM2};
  }
  :disabled {
    background-color: ${colors.grey};
  }
`;
