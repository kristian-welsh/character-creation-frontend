import * as S from "./styled";

import Button from "./../../components/button";
import InputDropdown from "./../../components/input-dropdown";
import InputText from "./../../components/input-text";
import Quote from "./../../components/quote";

const CharacterFoundations = ({
  characterDetails,
  setCharacterDetails,
  handleSubmit,
}) => {
  const levelOptions = [];
  for (let i = 1; i <= 20; i++) {
    levelOptions.push(i);
  }

  const ancestryOptions = ["Dwarf", "Elf", "Human"];

  const classOptions = [
    "Barbarian",
    "Bard",
    "Cleric",
    "Druid",
    "Fighter",
    "Monk",
    "Paladin",
    "Ranger",
    "Rogue",
    "Sorceror",
    "Warlock",
    "Wizard",
  ];

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
                  Ancestry: value,
                })
              }
              options={ancestryOptions}
            />
          </S.Field>
          <S.Field>
            <S.Text>Class:</S.Text>
            <InputDropdown
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  Ancestry: value,
                })
              }
              options={classOptions}
            />
          </S.Field>
        </S.Row>
        <Button value="To Attributes" handleSubmit={handleSubmit} />
      </S.StyledForm>
    </S.Wrapper>
  );
};

export default CharacterFoundations;

//         <div className="c-c-section1">
//           <label>
//             <p className="t4">Character Name:</p>
//           </label>
//           <InputText
//             updateValue={(value) =>
//               setCharacterDetails({
//                 ...characterDetails,
//                 characterName: value,
//               })
//             }
//             validateValue={validateString}
//             value={characterDetails["characterName"]}
//           />
//           <label>
//             <p className="t4">Character Level:</p>
//           </label>
//           <InputText
//             updateValue={(value) =>
//               setCharacterDetails({
//                 ...characterDetails,
//                 characterLevel: value,
//               })
//             }
//             validateValue={validateNumber}
//             value={characterDetails["characterLevel"]}
//           />
//         </div>
//         <Button value="Submit" onClick={handleSubmit} />
//       </form>
//     </div>
//   );
// };

// export default CharacterForm;
