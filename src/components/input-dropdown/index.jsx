import * as S from "./styled.js";

const InputDropdown = ({ updateValue, value, options }) => {
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
          ? options.map((option, i) => (
              <S.StyledOption value={option} key={i}>
                {option}
              </S.StyledOption>
            ))
          : null}
      </S.SelectBox>
    </>
  );
};

export default InputDropdown;
