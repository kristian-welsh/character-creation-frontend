import { useState } from "react";
import * as S from "./styled.js";

import CharacterFormService from "./../../services/char-form-services.js";

import CharacterFoundations from "./../../forms/character-foundations/index.jsx";

const CharacterForm = () => {
  const [characterDetails, setCharacterDetails] = useState({
    form: "character-details",
  });
  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    setStep(step + 1);
    CharacterFormService.sendForm(characterDetails);
  };

  return (
    <S.Wrapper>
      <CharacterFoundations
        characterDetails={characterDetails}
        setCharacterDetails={setCharacterDetails}
        handleSubmit={handleSubmit}
      />
    </S.Wrapper>
  );
};

export default CharacterForm;
