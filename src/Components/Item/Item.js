import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div
      className="card position-relative"
      style={{ width: "18rem", height: "30rem" }}
    >
      <Link to={`/product/${props.id}`}>
        <img src={props.image} className="card-img-top" height="250" />
      </Link>
      <div className="card-body">
        <p className="card-title">{props.name}</p>
        {props.des}
      </div>
      <div className="card-body d-flex b-0 ">
        <h4 className="card-link fw-medium text-danger position-absolute start-0 end-50 ps-5">
          {props.new_price}
        </h4>
        <p className="card-link text-decoration-line-through position-absolute bottom-0 end-50">
          {props.old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
