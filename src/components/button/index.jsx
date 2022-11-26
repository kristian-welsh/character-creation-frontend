import * as S from "./styled";

const Button = ({ value = "Continue", handleClick, disabled = false }) => {
  return (
    <S.StyledButton
      type="button"
      handleClick={handleClick}
      value={value}
      className="button"
    />
  );
};

export default Button;
