import React from "react";
import "./discounts.css";
import { Discount} from "@mui/icons-material";
import discounts from "../../discount";
import DiscountOptions from "./DiscountOptions";

const Discounts = () => {
  return (
    <div className="discount">
      <h1 className="title">
        <Discount htmlColor="orange" style={{fontSize:'35px'}} /> 
        <span>Big Discount</span>
      </h1>

      <div className="discount_body">
        {
            discounts.map(data=>(
               <DiscountOptions key={data.id} data={data}/>
            ))
        }
      </div>
    </div>
  );
};

export default Discounts;
