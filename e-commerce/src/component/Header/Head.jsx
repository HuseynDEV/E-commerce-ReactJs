import React from "react";
import { Phone, MailOutline } from "@mui/icons-material";
import "./Header.css"

const Head = () => {
  return (
    <div className="head">
      <div className="headWrapper">
        <div className="left">
          <div className="contact">
            <div className="phone">
              <Phone className="contact_icon" />
              <h4 className="contact_phone">+123455678</h4>
            </div>
            <div className="email">
              <MailOutline className="contact_icon"/>
              <h4 className="email_addres">example@mail.ru</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <p className="Faq">Theme FAQ's</p>
          <p className="help">Need Helps</p>
          <div className="languages">
            <div className="eng">
              <input type="radio" name="box" />
              <span>EN</span>
            </div>
            <div className="USD">
            <input type="radio" name="box" />
            <span>USD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
