import { useState } from "react";
import { validateNumber, validateString } from "./../../helpers/validate";

import Textbox from "./../textbox";
import CharacterFormService from "../../services/char-form-services.js";

import "./styles.css";

const CharacterForm = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterLevel, setCharacterLevel] = useState(1);

  const handleSubmit = () => {
    CharacterFormService.sendForm(characterName, characterLevel);
  };

  function updateCharacterName(value) {
    setCharacterName(value);
  }

  function updateCharacterLevel(value) {
    setCharacterLevel(value);
  }

  return (
    <div className="wrapper">
      <p>Please enter some text:</p>
      <form onSubmit={handleSubmit()} className="form">
        <label>char name:</label>
        <Textbox
          updateValue={updateCharacterName}
          validateValue={validateString}
          value={characterName}
        />
        <label>char level:</label>
        <Textbox
          updateValue={updateCharacterLevel}
          validateValue={validateNumber}
          value={characterLevel}
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
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default CharacterForm;
