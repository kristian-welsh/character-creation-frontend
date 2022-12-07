import { useState } from "react";
import * as S from "./styled";

import Button from "./../../components/button";
import InputDropdown from "./../../components/input-dropdown";
import InputText from "./../../components/input-text";
import Quote from "./../../components/quote";

import {
  ancestryOptions,
  backgroundOptions,
  classOptions,
  maxLevel,
} from "./data";

const CharacterFoundations5e = ({
  characterDetails,
  setCharacterDetails,
  handleSubmit,
}) => {
  const [alertValidation, setAlertValidation] = useState(false);

  const levelOptions = [];
  for (let i = 1; i <= maxLevel; i++) {
    levelOptions.push(i);
  }

  const submitFoundations = () => {
    characterDetails.name ? handleSubmit() : setAlertValidation(true);
  };

  return (
    <S.Wrapper>
      <Quote text={"Character Foundations"} />
      <S.StyledForm>
        <S.Row>
          <S.Field>
            <S.Text>Character Name:</S.Text>
            <InputText
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  name: value,
                })
              }
            />
          </S.Field>
          <S.Field>
            <S.Text>Character Level:</S.Text>
            <InputDropdown
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  level: value,
                })
              }
              value={characterDetails.level}
              options={levelOptions}
            />
          </S.Field>
        </S.Row>
        <S.Row>
          <S.Field>
            <S.Text>Ancestry:</S.Text>
            <InputDropdown
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  ancestry: value,
                })
              }
              value={characterDetails.ancestry}
              options={Object.keys(ancestryOptions)}
            />
          </S.Field>
          <S.Field>
            <S.Text>Class:</S.Text>
            <InputDropdown
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  class: value,
                })
              }
              value={characterDetails.class}
              options={Object.keys(classOptions)}
            />
          </S.Field>
        </S.Row>
        <S.Row>
          <S.Field>
            <S.Text>Sub-ancestry:</S.Text>
            <InputDropdown
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  "sub-ancestry": value,
                })
              }
              value={characterDetails["sub-ancestry"]}
              options={
                characterDetails["ancestry"]
                  ? ancestryOptions[characterDetails["ancestry"]].subancestries
                  : null
              }
            />
          </S.Field>
          <S.Field>
            <S.Text>Sub-class:</S.Text>
            <InputDropdown
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  "sub-class": value,
                })
              }
              value={characterDetails["sub-class"]}
              options={
                characterDetails["class"]
                  ? classOptions[characterDetails["class"]].subclasses
                  : null
              }
            />
          </S.Field>
        </S.Row>
        <S.Row>
          <S.Field>
            <S.Text>Background:</S.Text>
            <InputDropdown
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  background: value,
                })
              }
              value={characterDetails.background}
              options={backgroundOptions}
            />
          </S.Field>
        </S.Row>
      </S.StyledForm>
      {alertValidation ? (
        <S.Error>Please enter a character name.</S.Error>
      ) : null}
      <Button value="To Attributes" handleSubmit={submitFoundations} />
    </S.Wrapper>
  );
};

export default CharacterFoundations5e;
