import { useState } from "react";
import { validateNumber, validateString } from "./../../helpers/validate";

import Textbox from "./../../components/textbox";
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
        <Textbox
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
        <Textbox
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
        <Textbox />
        <label>Dexterity:</label>
        <Textbox />
        <label>Constitution:</label>
        <Textbox />
        <label>Intelligence:</label>
        <Textbox />
        <label>Wisdom:</label>
        <Textbox />
        <label>Charisma:</label>
        <Textbox />
        <div className="divide" />
        <Button value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CharacterForm;
