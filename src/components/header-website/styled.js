import styled from "styled-components";
import * as T from "./../../styles/typography";
import { colors } from "./../../styles";

export const Wrapper = styled.div`
  background-color: ${colors.brown};
  height: 120px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: auto;
  padding: 0 2em;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const LogoWrapper = styled.div`
  height: auto;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  gap: 30px;
`;

export const LinkText = styled(T.H6)`
  color: ${colors.beige};
`;
