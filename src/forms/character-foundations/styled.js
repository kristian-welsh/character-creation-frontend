import styled from "styled-components";
import * as T from "../../styles/typography";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Field = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled(T.P6)`
  min-width: 200px;
`;
