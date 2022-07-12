import React from "react";
import "./Main.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {data.map((data) => (
          <div key={data.id} className="List" style={{ display: "flex" }}>
            <div className="listWrapper">
              <div className="left_text">
                <h1 className="title">{data.title}</h1>
                <h3 className="desc">{data.desc}</h3>
                <button>Visit Collection</button>
              </div>
              <div className="right_img">
                <img src={data.cover} alt="" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
