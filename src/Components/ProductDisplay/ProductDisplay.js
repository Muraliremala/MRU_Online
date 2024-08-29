import React, { useContext } from 'react'
import Star_Icon from '../Assests/Star_Icon.png'
import { CategoryContext } from '../../Context/CategoryContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(CategoryContext);
  return (
    <div className="container row">
      <div className="col-md-6">
        <div className="container-fluid row">
          <div className="col-md-3">
            <img src={product.image} height="100" className="m-3 rounded" />
            <img src={product.image} height="100" className="m-3 rounded" />
            <img src={product.image} height="100" className="m-3 rounded" />
            <img src={product.image} height="100" className="m-3 rounded" />
          </div>
          <div className="col-md-9">
            <img src={product.image} height="490" width="400" className="m-3 rounded" />
          </div>
        </div>
      </div>
      <div className="col-md-6 ps-5">
        <h1>{product.name}</h1>
        <div className="d-flex">
          <img src={Star_Icon} height="40" />
          <img src={Star_Icon} height="40" />
          <img src={Star_Icon} height="40" />
          <img src={Star_Icon} height="40" />
          <img src={Star_Icon} height="40" />
          <p className="m-2">(233)</p>
        </div>
        <div className="d-flex p-2">
          <div className="text-decoration-line-through me-4 fs-4">
            ${product.old_price}
          </div>
          <div className="text-danger fs-2">${product.new_price}</div>
        </div>
        <div>{product.des}</div>
        <div className="bg-secondary bg-opacity-50 p-3 m-2 rounded">
          <p className="lead">Select number of items :</p>
          <input type="number" className="form-control" />
        </div>
        <center className='mt-5'>
          <button className="btn btn-outline-danger" onClick={() => {
            addToCart(product.id)
          }}>Add to cart</button>
        </center>
      </div>
    </div>
  );
}

export default ProductDisplay
