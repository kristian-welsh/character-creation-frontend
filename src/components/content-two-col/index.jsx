import "./styles.css";
import images from "./../../styles/images";

const ContentTwocol = ({ data }) => {
  return (
    <div className="ctcWrapper">
      <div className="ctcLeft">
        {data.leftText
          ? data.leftText.map((row) => (
              <div>
                <p className="t4">{row}</p>
                <br />
              </div>
            ))
          : null}
        {data.leftImage ? (
          <img
            src={images[data.leftImage]}
            alt={images[data.leftImage]}
            width={600}
          />
        ) : null}
      </div>
      <div className="ctcRight">
        {data.rightText
          ? data.rightText.map((row) => (
              <div>
                <p className="t4">{row}</p>
                <br />
              </div>
            ))
          : null}
        {data.rightImage ? (
          <img
            src={images[data.rightImage]}
            alt={images[data.rightImage]}
            width={600}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ContentTwocol;
