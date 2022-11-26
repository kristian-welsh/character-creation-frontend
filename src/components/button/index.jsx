import * as S from "./styled";

const Button = ({ value = "Continue", onClick = null, disabled = false }) => {
  return (
    <S.StyledButton
      type="button"
      onClick={onClick}
      value={value}
      className="button"
    />
  );
};

export default Button;
