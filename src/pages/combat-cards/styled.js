import styled from "styled-components";
import * as T from "./../../styles/typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 30px;
  padding-bottom: 30px;
`;

export const Text = styled(T.P5)`
  text-align: left;
  max-width: 800px;
`;

export const Image = styled.img``;
