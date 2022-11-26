import * as S from "./styled.js";

import ContentTwocol from "../../components/content-two-col";

import { topContent } from "./data";

const Home = () => {
  return (
    <S.Wrapper>
      <ContentTwocol data={topContent.data} />
    </S.Wrapper>
  );
};

export default Home;
