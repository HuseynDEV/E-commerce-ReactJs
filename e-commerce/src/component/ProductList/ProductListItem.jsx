import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../redux/Shop";
import { Close, Add, Remove } from "@mui/icons-material";
import { addPrice } from "../../redux/Price";

const ProductListItem = ({ name, price, img, item }) => {
  let dispatch = useDispatch();

  let selPrice = useSelector((state) => state.price.allPrice);

  const [piece, setPiece] = useState(1);

  let selector = useSelector((state) => state.item.products);

  const Remove2 = (item) => {
    let eded = selector.filter((dene) => dene.product.id != item.product.id);
    dispatch(remove(eded));
  };
  const overal = price * piece;

  useEffect(() => {
    dispatch(addPrice(overal));
  }, [overal]);
  console.log(selPrice);

  return (
    <>
      <div className="left_side">
        <div className="product_img">
          <img src={img} alt="" />
        </div>
        <div className="about_product">
          <h3 className="name">{name}</h3>
          <div className="left_foot">
            <div className="units">{`${price} * ${piece}`}</div>
            <div className="price">{overal}</div>
          </div>
        </div>
      </div>
      <div className="right_side">
        <div className="closebtn" onClick={() => Remove2(item)}>
          <Close />
        </div>
        <div className="right_foot">
          <div
            className="add"
            onClick={() => {
              setPiece(piece + 1);
            }}
          >
            <Add />
          </div>
          <div className="remove">
            <Remove
              onClick={() => {
                piece >= 1 ? setPiece(piece - 1) : null;
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListItem;
