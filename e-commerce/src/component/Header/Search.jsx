import React from "react";
import "./Header.css";
import logo from "../../images/amazon.png";
import {
  YoutubeSearchedFor,
  Person,
  ShoppingBasket,
} from "@mui/icons-material";
import {useSelector} from 'react-redux'
import {Link} from "react-router-dom"

const Search = () => {

  const item=useSelector(state=>state.item.products)

  return (
    <div className="search">
      <Link to='/' className="link">
      <div className="left">
        <img src={logo} alt="" />
      </div>
      </Link>
      <div className="center_search">
        <div className="search">
          <YoutubeSearchedFor />
          <input type="text" placeholder="Search.." />
        </div>
        <p>All Category</p>
      </div>
      <div className="right">
        <div className="profile">
          <Person />
        </div>
        <Link to='/products' className="link">
        <div className="product">
          <ShoppingBasket />
          <span className="product_number">{item.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Search;
