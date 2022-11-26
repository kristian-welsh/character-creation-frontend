const generateElfName = async () => {
  try {
    const res = await fetch(
      "https://api.fungenerators.com/name/generate?category=elf&limit=1"
    );
    const name = res.contents.names[0];
    console.log(name);
  } catch (err) {
    console.log("Name generate request failed.");
    console.log(err);
  }
};
