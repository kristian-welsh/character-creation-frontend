import {useState} from 'react'
import Textbox from './textbox'
import Dropdown from './dropdown'
import CharacterFormService from '../services/char-form-services'

const CharacterForm = (props) => {

	const classList = ["Artificier", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Monk", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];

    const [characterName, setCharacterName] = useState();
    const [characterLevel, setCharacterLevel] = useState();

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(characterName)
        console.log(characterLevel)
        CharacterFormService.sendForm(characterName, characterLevel)
    }

    const validateLevel = (value) => {
        let levelNum = Number(value)
        console.log(Number.isInteger(levelNum))
        return Number.isInteger(levelNum)
    }

    const validateName = () => {}

	return (
		<div className="CharacterForm">
			<p>Please enter some text:</p>
			<form onSubmit={handleSubmit} className="form">
				<Textbox id = {"CharacterName"}
					updateValue={setCharacterName}
					validateValue={validateName}
					currentValue={characterName}
				/>
				<Textbox id = {"CharacterLevel"}
					updateValue={setCharacterLevel}
					validateValue={validateLevel}
					currentValue={characterLevel}
				/>
				<Dropdown
					id="CharacterClass"
					defaultValue="Choose class"
					choices={classList}
				/>
				<input type="submit" value="Do A Thing"></input>
			</form>
		</div>
	)
}

export default CharacterForm
