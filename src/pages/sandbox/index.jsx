import * as S from "./styled.js";

import Quote from "./../../components/quote/index.jsx";
import InputText from "../../components/input-text/index.jsx";
import InputDropdown from "../../components/input-dropdown/index.jsx";

const Sandbox = () => {
  return (
    <S.Wrapper>
      <Quote text={"Secret Testing Page"} />
      <InputText />
      <InputDropdown />
    </S.Wrapper>
  );
};

export default Sandbox;
