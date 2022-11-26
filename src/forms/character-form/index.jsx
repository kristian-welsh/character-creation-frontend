// import { useState } from "react";
// import { validateNumber, validateString } from "./../../helpers/validate";

// import InputText from "./../../components/input-text";
// import Button from "./../../components/button";

// import CharacterFormService from "./../../services/char-form-services.js";
// import Quote from "../../components/quote";

// import "./styles.css";

// const CharacterForm = () => {
//   const [characterDetails, setCharacterDetails] = useState({
//     form: "character-details",
//     characterName: "",
//     characterLevel: "",
//   });

//   const handleSubmit = () => {
//     console.log(characterDetails);
//     CharacterFormService.sendForm(characterDetails);
//   };

//   return (
//     <div className="wrapper">
//       <form className="char-creator-foundations">
//         <Quote text="Welcome to the character creator!" />
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
