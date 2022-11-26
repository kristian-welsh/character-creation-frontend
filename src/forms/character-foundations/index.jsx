import * as S from "./styled";

import InputText from "./../../components/input-text";
import Button from "./../../components/button";
import Quote from "./../../components/quote";

const CharacterFoundations = ({
  characterDetails,
  setCharacterDetails,
  handleSubmit,
}) => {
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
                  characterName: value,
                })
              }
            />
          </S.Field>
          <S.Field>
            <S.Text>Character Level:</S.Text>
            <InputText
              updateValue={(value) =>
                setCharacterDetails({
                  ...characterDetails,
                  characterLevel: value,
                })
              }
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
