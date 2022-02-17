import {Component} from 'react'

export default class Textbox extends Component {

    constructor(props) {
        super(props);
        this.state = { characterName: '' }
    
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
        //this.setState({ characterName: e.target.value})
        this.props.updateValue(e.target.value)
    }

    render() {
        return (
            <input id="charName" type="text" name="thename" onChange={this.handleChange} ></input>
        );
    }   
}