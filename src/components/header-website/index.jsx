import { Link } from "react-router-dom";
import images from "./../../styles/images";
import * as S from "./styled.js";

const HeaderWebsite = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Left>
          <S.LogoWrapper>
            <Link to="/">
              <img
                src={images.DumpStatLogo}
                alt={images.DumpStatLogo}
                width={240}
              />
            </Link>
          </S.LogoWrapper>
          <S.Links>
            <Link to="/character-creation">
              <S.LinkText>Creator</S.LinkText>
            </Link>
            <Link to="/character-vault">
              <S.LinkText>Vault</S.LinkText>
            </Link>
            <Link to="/ai-visuals">
              <S.LinkText>AI Visuals</S.LinkText>
            </Link>
            <Link to="/combat-cards">
              <S.LinkText>Combat Cards</S.LinkText>
            </Link>
            <Link to="/about">
              <S.LinkText>About</S.LinkText>
            </Link>
          </S.Links>
        </S.Left>
        <S.Right>
          <S.Links>
            <Link to="/login">
              <S.LinkText>Login</S.LinkText>
            </Link>
          </S.Links>
          <S.Links>
            <Link to="/sign-up">
              <S.LinkText>Sign Up</S.LinkText>
            </Link>
          </S.Links>
        </S.Right>
      </S.Content>
    </S.Wrapper>
  );
};

export default HeaderWebsite;
