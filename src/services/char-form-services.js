const CHARACTER_ENDPOINT = "http://localhost:5000/endpoint";

export const submitCharacterForm = async (characterDetails) => {
  const response = await fetch(CHARACTER_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(characterDetails),
  });
  const data = await response.json();
  console.log(data);
};

export const getAllCharacters = async () => {
  const response = await fetch(CHARACTER_ENDPOINT, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
