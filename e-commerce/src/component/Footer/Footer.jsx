import React from "react";
import FooterOptions from "./FooterOptions";
import "./footer.css";
import logo from "../../images/img1.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="apps">
        <img src={logo} alt="" />
        <div className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <br /> Veniam aut ea, magnam distinctio non soluta.
        </div>
      </div>

      <div className="aboutUs">
        <ul>
          <li>
            {" "}
            <h1>About Us</h1>
          </li>
          <li>Careers</li>
          <li>Our Stores</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="Contact">
        <ul>
          <li>
            {" "}
            <h1>Contact Us</h1>
          </li>
          <li> Baku, Nizami street</li>
          <li>
            Email: <span>huseyn.alizade.03@mail.ru</span>{" "}
          </li>
          <li>
            Phone: <span>+1 2345435</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
