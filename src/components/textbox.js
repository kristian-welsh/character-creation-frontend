import {Component} from 'react'

export default class Textbox extends Component {

    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
        this.props.validateValue(e.target.value)
        this.props.updateValue(e.target.value)
    }

    render() {
        return (
            <input id="charName" type="text" name="thename" onChange={this.handleChange} value={this.props.currentValue}></input>
        );
    }   
}