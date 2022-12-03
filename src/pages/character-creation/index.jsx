import * as S from "./styled.js";
import { Link } from "react-router-dom";

import Quote from "./../../components/quote";

const CharacterCreation = () => {
  return (
    <S.Wrapper>
      <Quote text={"Character Creation"} />
      <S.Links>
        <Link to="/character-form">
          <S.LinkText>Create a D&D 5e character</S.LinkText>
        </Link>
        <Link to="/character-vault">
          <S.LinkText>Edit a character</S.LinkText>
        </Link>
      </S.Links>
    </S.Wrapper>
  );
};

export default CharacterCreation;
