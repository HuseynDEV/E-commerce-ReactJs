import React, { useState, useEffect } from "react";
import "./deals.css";
import data from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bolt, StarRate, Add } from "@mui/icons-material";
import { add, remove } from "../../redux/Shop";
import { useDispatch, useSelector } from "react-redux";

const Deals = () => {
  const selector = useSelector((state) => state.item.products);
  const dispatch = useDispatch();


  const AddList = (product) => {
    dispatch(add({ ...selector, product }));
    // console.log(selector)
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="deals">
      <h1>
        {" "}
        <Bolt htmlColor="yellow" style={{ fontSize: "40px" }} /> Flash Deals{" "}
      </h1>
      <Slider {...settings}>
        {data.map((product) => (
          <div key={product.id} className="deal">
            <div className="dealWrapper">
              <div className="top">
                <img src={product.image} alt="" />
              </div>
              <div className="about_deal">
                <h3 className="name">Shoe</h3>
                <div className="stars">
                  {[1, 2, 3, 4].map((item) => (
                    <StarRate htmlColor="yellow" />
                  ))}
                </div>
                <h3 className="price">{product.price}</h3>
              </div>
              <div className="add" onClick={() => AddList(product)}>
                <Add style={{ fontSize: "30px" }} />
              </div>
              <div className="sale">{`${product.sale}% Off `}</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Deals;
