import "./styles.css";

import HeaderWebsite from "./../../components/header-website";
import FooterWebsite from "./../../components/footer-website";

const Website = ({ children }) => {
  return (
    <div className="wrapper">
      <HeaderWebsite />
      {children}
      <FooterWebsite />
    </div>
  );
};

export default Website;
