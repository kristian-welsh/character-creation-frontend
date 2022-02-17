import {Component} from 'react'
export default class InputStuff extends Component {

    constructor(props) {
        super(props);
        this.state = { characterName: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ characterName: e.target.value})
    }

    callAPI(charName) {
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

    render() {
        return (
            <div className="InputStuff">
                <p>Please enter some text:</p>
                <form onSubmit={this.handleSubmit} className="form">
                    <label>char name:</label>
                    <input id="charName" type="text" name="thename" onChange={this.handleChange}></input>
                    <input type="submit" value="Do A Thing"></input>
                </form>
            </div>
        )
    }
}