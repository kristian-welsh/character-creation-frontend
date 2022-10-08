const Textbox = (props) => {
    const handleChange = (e) => {
        props.validateValue(e.target.value)
        props.updateValue(e.target.value)
    }

    return (
        <input id={props.id} type="text" name="thename" onChange={handleChange} value={props.currentValue}></input>
    );
}
export default Textbox