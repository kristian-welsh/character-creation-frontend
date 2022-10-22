const CHARACTER_ENDPOINT = "http://localhost:5000/endpoint";

class CharacterFormService {
  sendForm(characterDetails) {
    // create body

    fetch(CHARACTER_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(characterDetails),
    })
      .then((resp) => {
        console.log(characterDetails);
        console.log("worked");
        resp
          .json()
          .then((json) => {
            console.log(json);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log("didn't work");
        console.log(err);
      });
  }
}

export default new CharacterFormService();
