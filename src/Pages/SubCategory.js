import React, { useContext } from "react";
import { CategoryContext } from "../Context/CategoryContext";
import Item from "../Components/Item/Item";

const SubCategory = (props) => {
  const { all_product } = useContext(CategoryContext);
  return (
    <div className="container">
      <img src={props.banner} width="100%" height="300"/>
      <marquee className="my-3" behavior="scroll" direction="left">
        {all_product.map((ele) => {
          if (props.category === ele.sub_category) {
            return (
                <img src={ele.image} width="120" height="120" className="rounded-pill me-5"/>
            );
          } else {
            return null;
          }
        })}
      </marquee>
      {/* <div>
        <p>
          <span> Showing 1-6</span> out of 36 products
        </p>
        <div>
          sort by <img src="" />
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          {all_product.map((ele, i) => {
            if (props.category === ele.sub_category) {
              return (
                <div className="col-md-4 mb-4">
                  <Item
                    key={i}
                    id={ele.id}
                    name={ele.name}
                    image={ele.image}
                    new_price={ele.new_price}
                    old_price={ele.old_price}
                    des={ele.des}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
