import * as S from "./styled.js";
import { useState } from "react";
import { getAllCharacters } from "./../../services/char-form-services";

import Button from "./../../components/button";
import Quote from "./../../components/quote";

const CharacterVault = () => {
  const [allChars, setAllChars] = useState({});
  const [showChars, setShowChars] = useState(false);

  const getCharacterList = async () => {
    const response = await getAllCharacters();
    setAllChars(response);
    setShowChars(true);
  };

  return (
    <S.Wrapper>
      <Quote text={"Character Vault"} />
      <Button value="Fetch all 5e characters" handleSubmit={getCharacterList} />
      {showChars ? (
        <S.NameList>
          {allChars.characterSheets.map((char, i) => (
            <S.Text key={i}>
              {char.character_details.name}, the {char.character_details.class}
            </S.Text>
          ))}
        </S.NameList>
      ) : (
        <></>
      )}
    </S.Wrapper>
  );
};

export default CharacterVault;
