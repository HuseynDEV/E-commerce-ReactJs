import React, { useRef } from "react";
import { Category, KeyboardArrowDown, Menu, Close } from "@mui/icons-material";
import HeaderList from "./ListOptions";
import { Link } from "react-router-dom";

const Navbar = () => {
  const deger = useRef();

  const islem = () => {
    deger.current.classList.remove("remove");
    deger.current.classList.add("active");
    console.log(deger.current.classList);
  };

  const islem2 = () => {
    deger.current.classList.remove("active");
    deger.current.classList.add("remove");
    console.log(deger.current.classList);
  };

  return (
    <div className="navbar">
      <div className="navbar_left">
        <Category />
        <div className="category">
          <h3>
            Category{" "}
            <span>
              <KeyboardArrowDown />
            </span>{" "}
          </h3>
        </div>
      </div>
      <div className="navbar_right">
        <div className="menu" onClick={() => islem()}>
          <Menu />
        </div>
        <ul className="list" ref={deger}>
          <div className="close" onClick={() => islem2()}>
            <Close />
          </div>
          <Link to="/" className="link">
            <HeaderList title="Home" />
          </Link>
          <HeaderList title="Pages" />
          <HeaderList title="UserAccount" />
          <HeaderList title="Vender Account" />
          <Link to="/register" className="link">
            <HeaderList title="Register" />
          </Link>
          <HeaderList title="Contact" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
