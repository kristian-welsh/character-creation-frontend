import * as S from "./styled.js";
import { Link } from "react-router-dom";

import Quote from "./../../components/quote/index.jsx";

const CharacterCreation = () => {
  return (
    <S.Wrapper>
      <Quote text={"Character Creation"} />
      <Link to="/character-form">
        <S.LinkText>Create a new character</S.LinkText>
      </Link>
    </S.Wrapper>
  );
};

export default CharacterCreation;
