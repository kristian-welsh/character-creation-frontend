import * as S from "./styled";

import HeaderWebsite from "./../../components/header-website";
import FooterWebsite from "./../../components/footer-website";

const Website = ({ children }) => {
  return (
    <S.Wrapper>
      <HeaderWebsite />
      <S.ContentWrap>{children}</S.ContentWrap>
      <FooterWebsite />
    </S.Wrapper>
  );
};

export default Website;
