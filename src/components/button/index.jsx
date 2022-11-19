import "./styles.css";

const Button = ({ value = "Continue", onClick = null, disabled = false }) => {
  return (
    <input type="button" onClick={onClick} value={value} className="button" />
  );
};

export default Button;
