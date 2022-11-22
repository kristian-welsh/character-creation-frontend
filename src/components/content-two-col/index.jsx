import "./styles.css";

const ContentTwocol = ({ data }) => {
  return (
    <div className="ctcWrapper">
      <div className="ctcLeft">
        {data.leftText.map((row) => (
          <div>
            <p className="ctcParagraph">{row}</p>
            <br />
          </div>
        ))}
      </div>
      <div className="ctcRight">
        <img src={data.rightImage} alt={data.rightImage} width={600} />
      </div>
    </div>
  );
};

export default ContentTwocol;
