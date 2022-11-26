import * as S from "./styled.js";

const InputText = ({ updateValue, value, placeholder }) => {
  function handleChange(e) {
    updateValue(e.target.value);
  }

  return (
    <S.TextBox
      className="textBox"
      type="text"
      name="textbox"
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputText;
