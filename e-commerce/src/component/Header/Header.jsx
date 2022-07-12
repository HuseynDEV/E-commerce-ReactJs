import React from "react";
import Head from "./Head";
import Navbar from "./Navbar";
import Search from "./Search";

const Header = () => {
  return (
    <div className="header">
      <Head />
      <Search />
      <Navbar/>
    </div>
  );
};

export default Header;
