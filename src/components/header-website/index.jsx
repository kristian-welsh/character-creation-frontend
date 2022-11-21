import "./styles.css";

const HeaderWebsite = () => {
  return (
    <div className="header">
      <div className="headerContent">
        <div className="left">
          <div className="logoWrapper">
            <a href="/" passHref>
              <img
                src="./assets/DumpStat-logo.png"
                alt="Company logo"
                width={180}
              />
            </a>
          </div>
          <div className="links">
            <a href="/character-creation" passHref>
              <h4 className="linkText">Creator</h4>
            </a>
            <a href="/character-vault" passHref>
              <h4 className="linkText">Vault</h4>
            </a>
            <a href="/appearance" passHref>
              <h4 className="linkText">Appearance</h4>
            </a>
            <a href="/combat-cards" passHref>
              <h4 className="linkText">Combat cards</h4>
            </a>
            <a href="/about" passHref>
              <h4 className="linkText">About</h4>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="links">
            <a href="/login" passHref>
              <h4 className="linkText">Login</h4>
            </a>
          </div>
          <div className="links">
            <a href="/registration" passHref>
              <h4 className="linkText">Sign Up</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWebsite;
