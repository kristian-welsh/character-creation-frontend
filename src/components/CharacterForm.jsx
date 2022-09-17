import {Component, useState} from 'react'
import Textbox from './textbox.js'
import CharacterFormService from '../services/char-form-services.js'

CharacterForm = (props) => {

    const [characterName, setCharacterName] = useState(0);
    const [characterLevel, setCharacterLevel] = useState(1);

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

    const render = () => {
        return (
            <div className="CharacterForm">
                <p>Please enter some text:</p>
                <form onSubmit={this.handleSubmit} className="form">
                    <Textbox placeholder = {"Character Name"}
                        updateValue={setCharacterName}
                        validateValue={this.validateName}
                        currentValue={characterName}
                    />
                    <Textbox placeholder = {"Character Level"}
                        updateValue={setCharacterLevel}
                        validateValue={this.validateLevel}
                        currentValue={characterLevel}
                    />
                    <input type="submit" value="Do A Thing"></input>
                </form>
            </div>
        )
    }
}