
function InputStuff() {
    return (
        <div className="InputStuff">
            <p>Please enter some text:</p>
            <form action="/endpoint" method="post" className="form">
                <label>char name:</label>
                <input id="charName" type="text" name="lolll"></input>
                <input type="submit" value="Do A Thing"></input>
            </form>
        </div>
    )
}

export default InputStuff;