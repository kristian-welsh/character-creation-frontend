import { useState } from "react";
import { validateNumber, validateString } from "./../../helpers/validate";

import InputText from "./../../components/input-text";
import Button from "./../../components/button";

import CharacterFormService from "./../../services/char-form-services.js";

import "./styles.css";

const CharacterForm = () => {
  const [characterDetails, setCharacterDetails] = useState({
    form: "character-details",
    characterName: "",
    characterLevel: "",
  });

  const handleSubmit = () => {
    console.log(characterDetails);
    CharacterFormService.sendForm(characterDetails);
  };

  return (
    <div className="wrapper">
      <p>Please enter some text:</p>
      <form className="form">
        <label>char name:</label>
        <InputText
          updateValue={(value) =>
            setCharacterDetails({
              ...characterDetails,
              characterName: value,
            })
          }
          validateValue={validateString}
          value={characterDetails["characterName"]}
        />
        <label>char level:</label>
        <InputText
          updateValue={(value) =>
            setCharacterDetails({
              ...characterDetails,
              characterLevel: value,
            })
          }
          validateValue={validateNumber}
          value={characterDetails["characterLevel"]}
        />
        <div className="divide" />
        <label>Strength:</label>
        <InputText />
        <label>Dexterity:</label>
        <InputText />
        <label>Constitution:</label>
        <InputText />
        <label>Intelligence:</label>
        <InputText />
        <label>Wisdom:</label>
        <InputText />
        <label>Charisma:</label>
        <InputText />
        <div className="divide" />
        <Button value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CharacterForm;
