class CharacterFormService {

    sendForm(charName, charLevel){
        fetch("http://backend:5000/endpoint", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: charName, level: charLevel })
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
}

export default new CharacterFormService()