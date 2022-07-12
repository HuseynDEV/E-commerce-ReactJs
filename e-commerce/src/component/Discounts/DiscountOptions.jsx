import React from "react";
import image from '../../images/img7.png'
import './discounts.css'

const DiscountOptions = ({ data }) => {
  return (
    <div className="discountOption">
      <div className="img">
        <img src={image} style={{width:'100%'}} alt="" />
      </div>
      <div className="about">
        <div className="title">{data.title}</div>
        <div className="price">{data.price}</div>
      </div>
    </div>
  );
};

export default DiscountOptions;
