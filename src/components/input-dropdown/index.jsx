import * as S from "./styled.js";

const InputDropdown = ({ updateValue, value, placeholder, options }) => {
  function handleChange(e) {
    updateValue(e.target.value);
  }

  return (
    <>
      <S.SelectBox
        className="textBox"
        type="text"
        name="textbox"
        onChange={handleChange}
        value={value}
      >
        {options
          ? options.map((option) => (
              <S.StyledOption value={option}>{option}</S.StyledOption>
            ))
          : null}
      </S.SelectBox>
    </>
  );
};

export default InputDropdown;
