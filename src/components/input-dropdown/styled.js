import styled from "styled-components";
import { colors } from "./../../styles";

export const SelectBox = styled.select`
  max-width: 200px;
  width: 100%;
  padding: 10px;
  font-weight: 600;
  background: ${colors.white};
  color: ${colors.mediumGreenP1};
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  outline: ${colors.lightGreenM2} solid 2px;
  :hover {
    outline: ${colors.lightGreenP1} solid 2px;
  }
  :focus {
    outline: ${colors.mediumGreenP1} solid 2px;
  }
`;

export const StyledOption = styled.option``;
