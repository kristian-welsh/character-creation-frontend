import "./styles.css";

import Button from "./../../components/button";

const AiVisuals = () => {
  const generateName = () => {
    console.log("name");
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
