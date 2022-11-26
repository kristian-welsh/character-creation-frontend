import * as S from "./styled";
import images from "./../../styles/images";

const ContentTwocol = ({ data }) => {
  return (
    <S.Wrapper>
      <S.Left>
        {data.leftText
          ? data.leftText.map((row, i) => (
              <div key={i}>
                <S.Text>{row}</S.Text>
                <br />
              </div>
            ))
          : null}
        {data.leftImage ? (
          <S.LeftImage
            src={images[data.leftImage]}
            alt={images[data.leftImage]}
            width={600}
          />
        ) : null}
      </S.Left>
      <S.Right>
        {data.rightText
          ? data.rightText.map((row, i) => (
              <div key={i}>
                <S.Text>{row}</S.Text>
                <br />
              </div>
            ))
          : null}
        {data.rightImage ? (
          <S.RightImage
            src={images[data.rightImage]}
            alt={images[data.rightImage]}
            height={500}
          />
        ) : null}
      </S.Right>
    </S.Wrapper>
  );
};

export default ContentTwocol;
