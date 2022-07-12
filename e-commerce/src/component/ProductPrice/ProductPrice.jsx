import React, { useEffect, useState } from "react";
import "./productPrice.css";
import { useSelector } from "react-redux";

const ProductPrice = () => {
  let [total, setTotal] = useState(0);
  let [price, setPrice] = useState([]);

  const overalPrice = useSelector((state) => state.price.allPrice);

  const item = useSelector((state) => state.item.products);

  const data = useSelector((state) => state.item.products);

  useEffect(() => {
    setPrice(overalPrice.slice(`-${item.length-1}`));
    price.map(item=>setTotal(total+item))
    console.log(price)
  }, [overalPrice]);

  return (
    <div className="productPrice">
      <div className="title">Cart Summary</div>
      <div className="total">
        <h3>Total Price:</h3>
        <div className="total_price">{total}</div>
      </div>
    </div>
  );
};

export default ProductPrice;
