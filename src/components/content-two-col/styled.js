import Styled from "styled-components";
import * as T from "./../../styles/typography";

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 60px;
  align-items: center;
`;

export const Left = Styled.div`
  float: left;
  width: 50%;
  padding: 10px;
  text-align: left;
`;

export const Right = Styled.div`
  float: right;
  width: 50%;
  padding: 10px;
  text-align: left;
`;

export const LeftImage = Styled.img`
  padding-right: 200px;
`;

export const RightImage = Styled.img`
  padding-left: 200px;
`;

export const Text = Styled(T.P4)``;
