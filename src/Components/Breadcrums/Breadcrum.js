import React from "react";
import LeftArrow from "../Assests/leftarrow.png";

const Breadcrum = (props) => {
  const { product } = props;
  return (
    <div className="m-3">
      Home <img src={LeftArrow} width="16" /> {product.category}{" "}
      <img src={LeftArrow} width="16" /> {product.sub_category}{" "}
      <img src={LeftArrow} width="16" /> {product.name}
    </div>
  );
};

export default Breadcrum;
