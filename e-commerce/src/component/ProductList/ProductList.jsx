import React from "react";
import "./productList.css";
import ProductListItem from "./ProductListItem";
import { useSelector } from "react-redux";

const ProductList = () => {
  let selector = useSelector((state) => state.item.products);

  return (
    <div className="productList">
      {selector.map((item) => (
        <div className="product">
          <ProductListItem
            key={item.id}
            name={item.product.name}
            price={item.product.price}
            img={item.product.cover}
            item={item}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
