import React from "react";
import "./Header.css";

const HeaderList = ({ Icon, title }) => {
  return (
    <li className="list_item">
      {Icon && <Icon />}
      <p> {title}</p>
    </li>
  );
};

export default HeaderList;
