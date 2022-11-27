import styled from "styled-components";
import { colors } from "./../../styles";

// If you change the footer height, change the ContentWrap in template/website to match it

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${colors.brown};
  height: 140px;
  width: 100%;
  border-top: 6px solid ${colors.orangeBrown};
`;
