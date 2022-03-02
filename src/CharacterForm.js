import {Component} from 'react'
import Textbox from './components/textbox.js'
import CharacterFormService from './services/char-form-services.js'

export default class CharacterForm extends Component {

    constructor(props) {
        super(props);
        this.state = { characterName: '', characterLevel: ''}

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCharacterName = this.updateCharacterName.bind(this);
        this.updateCharacterLevel = this.updateCharacterLevel.bind(this);
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

    validateLevel(value) {
        let levelNum = Number(value)
        console.log(Number.isInteger(levelNum))
        return Number.isInteger(levelNum)
    }

    render() {
        return (
            <div className="CharacterForm">
                <p>Please enter some text:</p>
                <form onSubmit={this.handleSubmit} className="form">
                    <label>char name:</label>
                    <Textbox updateValue={this.updateCharacterName} />
                    <label>char level:</label>
                    <Textbox 
                    updateValue={this.updateCharacterLevel}
                    validateValue={this.validateLevel}
                    currentValue={this.state.characterLevel}/>
                    <input type="submit" value="Do A Thing"></input>
                </form>
            </div>
        )
    }
}