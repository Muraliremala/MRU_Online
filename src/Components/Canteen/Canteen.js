import React from 'react'
import MRU_Canteen from '../Assests/MRU_Canteen.png'
import MRU_Stationary from '../Assests/MRU_Stationary.png'
import './Canteen.css'
import { Link } from "react-router-dom";


const Canteen = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <img
            src={MRU_Canteen}
            className="img-fluid p-5 rounded-pill"
            width="800"
          />
        </div>
        <div className="col-md-4 mt-5">
          <div className="mt-5">
            <center>
              <button className="btn btn-outline-primary m-5 text-warning">
                <Link
                  to="/tiffins"
                  className="nav-link"
                >
                  Canteen
                </Link>
              </button>
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Tea House</li>
                  <li className="list-group-item">Celebrations</li>
                  <li className="list-group-item">Ambiance</li>
                  <li className="list-group-item">Offers</li>
                </ul>
              </div>
            </center>
          </div>
        </div>
        <div className="col-md-8">
          <img
            src={MRU_Stationary}
            className="img-fluid p-5 rounded-pill mx-auto d-block"
            width="600"
          />
        </div>
        <div className="col-md-4 mt-5">
          <div className="mt-5">
            <center>
              <button className="btn bg-primary m-5 text-warning " disabled>
                Stationary
              </button>
              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Upcoming......</li>
                  <li className="list-group-item">Upcoming......</li>
                  <li className="list-group-item">Upcoming......</li>
                  <li className="list-group-item">Upcoming......</li>
                </ul>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canteen
