import {Component} from 'react'
export default class InputStuff extends Component {

    foo(e) {
        e.preventDefault()

        fetch("http://localhost:5000/endpoint", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: "george" })
        }).then(resp => {
            console.log("worked");
            resp.json().then(json => {
                console.log(json);
            });
        }).catch(err => {
            console.log("didn't work");
            console.log(err);
        });
    }

    render() {
        return (
            <div className="InputStuff">
                <p>Please enter some text:</p>
                <form onSubmit={this.foo} className="form">
                    <label>char name:</label>
                    <input id="charName" type="text" name="thename"></input>
                    <input type="submit" value="Do A Thing"></input>
                </form>
            </div>
        )
    }

}