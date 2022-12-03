import { useState } from "react";
import * as S from "./styled.js";

import CharacterFormService from "./../../services/char-form-services.js";

import CharacterFoundations from "./../../forms/character-foundations";

const CharacterForm = () => {
  const [characterDetails, setCharacterDetails] = useState({
    form: "character-details",
    level: "1",
    ancestry: "Human",
    class: "Fighter",
    "sub-ancestry": "Standard",
    "sub-class": "Champion",
    background: "Soldier",
  });
  const [step, setStep] = useState(0);

  const handleSubmit = () => {
    console.log(characterDetails);
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
