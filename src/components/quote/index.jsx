import * as S from "./styled.js";

const Quote = ({ text }) => {
  return (
    <S.Wrapper>
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};

export default Quote;
