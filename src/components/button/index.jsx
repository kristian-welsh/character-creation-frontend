import * as S from "./styled";

const Button = ({ value = "Continue", disabled = false, handleSubmit }) => {
  return <S.StyledButton type="button" value={value} onClick={handleSubmit} />;
};

export default Button;
