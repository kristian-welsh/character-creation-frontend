import styled from "styled-components";
import { colors } from "./../../styles";
import * as T from "./../../styles/typography";

export const Wrapper = styled.div`
  text-align: center;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  gap: 15px;
`;

export const LinkText = styled(T.H6)`
  color: ${colors.lightGreenP2};
`;
