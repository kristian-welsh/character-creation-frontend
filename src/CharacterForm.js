import {Component} from 'react'
import Textbox from './components/textbox.js'

export default class CharacterForm extends Component {

    constructor(props) {
        super(props);
        this.state = { characterName: '' }

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateCharacterName = this.updateCharacterName.bind(this);

    }

    callAPI(charName) {
        console.log(charName)
        fetch("http://localhost:5000/endpoint", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: charName })
        }).then(resp => {
            console.log("worked");
            resp.json().then(json => {
                console.log(json);
            }).catch(err => {
                console.log(err);
            });
        }).catch(err => {
            console.log("didn't work");
            console.log(err);
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.callAPI(this.state.characterName)
    }

    updateCharacterName(value) {
        this.setState({ characterName: value })
    }

    render() {
        return (
            <div className="CharacterForm">
                <p>Please enter some text:</p>
                <form onSubmit={this.handleSubmit} className="form">
                    <label>char name:</label>
                    <Textbox updateValue={this.updateCharacterName} />
                    <input type="submit" value="Do A Thing"></input>
                </form>
            </div>
        )
    }
}