import React from "react";
import ProductList from "../component/ProductList/ProductList";
import ProductPrice from "../component/ProductPrice/ProductPrice";

const Products = () => {
  return (
    <div style={{ display: "flex", padding:'0 40px' }} className="products">
      <ProductList />
      <ProductPrice/>
    </div>
  );
};

export default Products;
