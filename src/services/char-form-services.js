const CHARACTER_ENDPOINT = "http://localhost:5000/endpoint";

class CharacterFormService {
  sendForm(characterDetails) {
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
        console.log("Successfully connected to the server.");
        resp.json().then(console.log(resp));
      })
      .catch((err) => {
        console.log("Failed to connect to the server");
        console.log(err);
      });
  }
}

export default new CharacterFormService();
