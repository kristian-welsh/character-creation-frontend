import styled from "styled-components";
import * as T from "./../../styles/typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

export const NameList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  gap: 15px;
`;

export const Text = styled(T.P6)``;
