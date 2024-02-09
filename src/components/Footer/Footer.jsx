import React from "react";
import "./Footer.css";
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/instagram.png";
import X from "../../assets/X.png";
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={X} alt="" />
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
      </div>
      {/* <div className="blur blur-f"></div>
      <div className="blur blur-f"></div> */}
    </div>
  );
};

export default Footer;
