import React, { useContext } from "react";
import { CategoryContext } from "../../Context/CategoryContext";
import RemoveIcon from "../Assests/Remove_Icon.png";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    removeToCart
   
  } = useContext(CategoryContext);
  return (
    <div className="m-4 ">
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Orders</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody class="table-group-divider">
            {all_product.map((ele) => {
              if (cartItems[ele.id] > 0) {
                return (
                  <tr>
                    <th scope="row">
                      <img src={ele.image} width="120" height="120" />
                    </th>
                    <td className="pt-5">{ele.name}</td>
                    <td className="pt-5">{ele.new_price}</td>
                    <td className="pt-5">
                      <button>{cartItems[ele.id]}</button>
                    </td>
                    <td className="pt-5">
                      {ele.new_price * cartItems[ele.id]}
                    </td>
                    <td className="pt-5">
                      <img
                        width="40"
                        src={RemoveIcon}
                        onClick={() => {
                          removeToCart(ele.id);
                        }}
                      />
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        <div className="container row mt-5">
          <div className="col-md-6">
            <h1 className="display-6 mb-4">Cart Totals</h1>
            <div className="pe-5">
              <div className="d-flex  position-relative">
                <p>Subtotal</p>
                <p className="position-absolute top-0 start-100 ">
                  ${getTotalCartAmount()}
                </p>
              </div>
              <hr />
              <div className="d-flex position-relative">
                <p>Offer</p>
                <p className="position-absolute top-0 start-100">
                  -
                </p>
              </div>
              <hr />
              <div className="d-flex position-relative">
                <p>Total</p>
                <p className="position-absolute top-0 start-100">
                  ${getTotalCartAmount()}
                </p>
              </div>
            </div>
            <button className="btn btn-danger m-3">Proceed to checkout</button>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div>
              <p>Coupon </p>
              <div>
                <input type="text" />
                <button className="bg-dark text-light">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
