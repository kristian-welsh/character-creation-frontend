import {Component} from 'react'
import Textbox from '../textbox/textbox.js'
import CharacterFormService from '../../services/char-form-services.js'
import './styles.css';

export default class CharacterForm extends Component {

    constructor(props) {
        super(props);
        this.state = { characterName: '', characterLevel: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCharacterName = this.updateCharacterName.bind(this);
        this.updateCharacterLevel = this.updateCharacterLevel.bind(this);
        this.validateLevel = this.validateLevel.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state.characterName)
        console.log(this.state.characterLevel)
        CharacterFormService.sendForm(this.state.characterName, this.state.characterLevel)
    }

    updateCharacterName(value) {
        this.setState({ characterName: value })
    }

    updateCharacterLevel(value) {
        this.setState({ characterLevel: value })
    }

    updateCharacterStrength(value) {
        this.setState({ characterStrength: value})
    }

    validateLevel(value) {
        let levelNum = Number(value)
        console.log(Number.isInteger(levelNum))
        return Number.isInteger(levelNum)
    }
    validateStrength(value) {
        let strnum = Number(value)
        console.log(Number.isInteger(strnum))
        return Number.isInteger(strnum)
    }

    validateName() {}

    render() {
        return (
            <div className="CharacterForm">
                <p>Please enter some text:</p>
                <form onSubmit={this.handleSubmit} className="form">
                    <label>char name:</label>
                    <Textbox 
                        updateValue={this.updateCharacterName}
                        validateValue={this.validateName}
                        currentValue={this.state.characterName}
                    />
                    <label>char level:</label>
                    <Textbox 
                        updateValue={this.updateCharacterLevel}
                        validateValue={this.validateLevel}
                        currentValue={this.state.characterLevel}
                    />
                    <div className="divide"/>
                    <label>Strength:</label>
                    <Textbox 
                        updateValue={this.updateCharacterStrength}
                        validateValue={this.validateStrength}
                        currentValue={this.state.characterStrength}
                    />
                    <label>Dexterity:</label>
                    <Textbox
                    />
                    <label>Constitution:</label>
                    <Textbox
                    />
                    <label>Intelligence:</label>
                    <Textbox
                    />
                    <label>Wisdom:</label>
                    <Textbox
                    />
                    <label>Charisma:</label>
                    <Textbox
                    />
                    <div className="divide"/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}