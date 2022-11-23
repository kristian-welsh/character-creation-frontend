import { Link } from "react-router-dom";
import images from "./../../styles/images";
import "./styles.css";

const HeaderWebsite = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="left">
          <div className="logoWrapper">
            <Link to="/">
              <img
                src={images.DumpStatLogo}
                alt={images.DumpStatLogo}
                width={240}
              />
            </Link>
          </div>
          <div className="links">
            <Link to="/character-creation">
              <h5 className="linkText">Creator</h5>
            </Link>
            <Link to="/character-vault">
              <h5 className="linkText">Vault</h5>
            </Link>
            <Link to="/appearance">
              <h5 className="linkText">Appearance</h5>
            </Link>
            <Link to="/combat-cards">
              <h5 className="linkText">Combat cards</h5>
            </Link>
            <Link to="/about">
              <h5 className="linkText">About</h5>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <Link to="/login">
              <h5 className="linkText">Login</h5>
            </Link>
          </div>
          <div className="links">
            <Link to="/sign-up">
              <h5 className="linkText">Sign Up</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWebsite;
