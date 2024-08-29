import React, { useContext, useState } from "react";
import logo from "../Assests/MRU-Logo.webp";
import cart from "../Assests/cart_icon.png";
import admin from "../Assests/admin.png";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../Context/CategoryContext";

const Navbar = () => {
  const [menu, setMenu] = useState("changecategory");
  const { getTotalCartItems } = useContext(CategoryContext);
  return (
    <div className="container-fluid ">
      <nav className="navbar navbar-expand-lg bg-secondary bg-opacity-25">
        <div className="container-fluid ">
          <a
            className="navbar-brand bg-primary"
            href="https://www.mallareddyuniversity.ac.in/"
          >
            <img src={logo} width="200" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto me-5 ms-1 mt-3 ">
              <li
                className={menu === "changecategory" ? "nav-link active" : ""}
                onClick={() => {
                  setMenu("changecategory");
                }}
              >
                <div className="me-2">
                  <Link to="/" className="nav-link">
                    Category
                  </Link>
                  {menu === "changecategory" ? (
                    <hr className="border border-danger border-3 opacity-75 rounded-pill" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li
                className={menu === "tiffins" ? "nav-link active" : ""}
                onClick={() => {
                  setMenu("tiffins");
                }}
              >
                <div className="me-2">
                  <Link to="/tiffins" className="nav-link">
                    Tiffins
                  </Link>
                  {menu === "tiffins" ? (
                    <hr className="border border-danger border-3 opacity-75 rounded-pill" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li
                className={menu === "juices" ? "nav-link active" : ""}
                onClick={() => {
                  setMenu("juices");
                }}
              >
                <div className="me-2">
                  <Link to="/juices" className="nav-link">
                    Juices
                  </Link>
                  {menu === "juices" ? (
                    <hr className="border border-danger border-3 opacity-75 rounded-pill" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li
                className={menu === "starters" ? "nav-link active" : ""}
                onClick={() => {
                  setMenu("starters");
                }}
              >
                <div className="me-2">
                  <Link to="/starters" className="nav-link">
                    Starters
                  </Link>
                  {menu === "starters" ? (
                    <hr className="border border-danger border-3 opacity-75 rounded-pill" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li
                className={menu === "biryani" ? "nav-link active" : ""}
                onClick={() => {
                  setMenu("biryani");
                }}
              >
                <div className="me-2">
                  <Link to="/biryani" className="nav-link">
                    Biryani
                  </Link>
                  {menu === "biryani" ? (
                    <hr className="border border-danger border-3 opacity-75 rounded-pill" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li
                className={menu === "snacks" ? "nav-link active" : ""}
                onClick={() => {
                  setMenu("snacks");
                }}
              >
                <div className="me-2">
                  <Link to="/snacks" className="nav-link">
                    Snacks
                  </Link>
                  {menu === "snacks" ? (
                    <hr className="border border-danger border-3 opacity-75 rounded-pill" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
              <li
                className={menu === "icecreams" ? "nav-link active" : ""}
                onClick={() => {
                  setMenu("icecreams");
                }}
              >
                <div className="me-2">
                  <Link to="/icecreams" className="nav-link">
                    Ice creams
                  </Link>
                  {menu === "icecreams" ? (
                    <hr className="border border-danger border-3 opacity-75 rounded-pill" />
                  ) : (
                    ""
                  )}
                </div>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* for dynamic change when we login and logout */}
              {localStorage.getItem("auth-token") ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("auth-token");
                    window.location.replace("/");
                  }}
                  type="button"
                  className="btn bg-danger text-warning bg-opacity-100 rounded-pill px-5 me-5"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login">
                  <button
                    type="button"
                    className="btn bg-danger text-warning bg-opacity-100 rounded-pill px-5 me-5"
                  >
                    Login
                  </button>
                </Link>
              )}
              <Link to="/cart">
                <button
                  className="btn btn-outline-danger position-relative"
                  type="submit"
                >
                  <img src={cart} height="30" />
                  <span className="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">
                    {getTotalCartItems()}
                  </span>
                </button>
              </Link>
              <Link to="/about">
                <button className="btn " type="submit">
                  <img src={admin} height="16" />
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
