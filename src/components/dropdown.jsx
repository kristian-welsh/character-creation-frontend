const Dropdown = (props) => {
    const renderChoice = (choice) => {
        return (<option value={choice.toLowerCase()}> {choice} </option>)
    }
    
    return (
        <select id={props.id}>
            {
            props.choices.map(renderChoice)
            }
        </select>
    )
}

export default Dropdown