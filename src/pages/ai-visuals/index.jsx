import "./styles.css";

import Button from "./../../components/button";

const AiVisuals = () => {
  const generateName = async () => {
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
  return (
    <div className="wrapper">
      <div className="ai-header">
        <p className="t3">AI Visuals</p>
      </div>
      <div>
        {/*<p className="t4">Press the button for a random name: </p>*/}
        <Button value="Get random name" onClick={generateName} />
      </div>
    </div>
  );
};

export default AiVisuals;
