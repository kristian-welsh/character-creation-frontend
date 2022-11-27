import * as S from "./styled.js";

import ContentTwocol from "./../../components/content-two-col";
import Quote from "./../../components/quote";

import { topContent } from "./data.js";

const About = () => {
  return (
    <S.Wrapper>
      <Quote text={"About"} />
      <ContentTwocol data={topContent.data} />
    </S.Wrapper>
  );
};

export default About;
