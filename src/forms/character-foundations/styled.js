import styled from "styled-components";
import { colors } from "./../../styles";
import * as T from "./../../styles/typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  gap: 30px;
`;

export const Field = styled.div`
  display: flex;
  align-items: center;
  min-width: 400px;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled(T.P7)`
  min-width: 200px;
  margin-right: -20px;
`;

export const Error = styled(T.P6)`
  color: ${colors.redP1};
  margin-bottom: 10px;
`;
