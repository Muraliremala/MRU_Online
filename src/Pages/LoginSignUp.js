import React, { useState } from "react";
export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;


const LoginSignUp = () => {
  // for creating login here we should create state variable
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Called", formData);
    let reponseData;
    await fetch(`${BACKEND_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (reponseData = data));

    if (reponseData.success) {
      // if this is true it means that the username and password are correct
      // Add the authentication token in local storage
      localStorage.setItem("auth-token", reponseData.token);

      //send user to ome page
      window.location.replace("/");
    } else {
      alert(reponseData.errors);
    }
  };

  const signup = async () => {
    console.log("SignUp Function Called", formData);
    let reponseData;
    await fetch(`${BACKEND_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (reponseData = data));

    if (reponseData.success) {
      // if this is true it means that the username and password are correct
      // Add the authentication token in local storage
      localStorage.setItem("auth-token", reponseData.token);

      //send user to ome page
      window.location.replace("/");
    } else {
      alert(reponseData.errors);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 text-center bg-secondary my-4 py-4 bg-opacity-25">
          <h1 className="m-3">{state}</h1>
          <br></br>
          <div className="container px-5">
            {/* Used because dynamically change on the existance of name input when sign up and login page */}
            {state === "Sign Up" ? (
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
                <input
                  name="username"
                  value={formData.username}
                  onChange={changeHandler}
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            ) : (
              <></>
            )}
            <div className="input-group mb-3">
              <input
                name="email"
                value={formData.email}
                onChange={changeHandler}
                type="email"
                className="form-control"
                placeholder="College Mail Id"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                @mallareddyuniversity.ac.in
              </span>
            </div>
            <div className="input-group mb-3">
              <input
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          {state === "Sign Up" ? (
            <div className="m-4">
              <span> Already have an account? </span>
              <span
                onClick={() => {
                  setState("Login");
                }}
                className=" fw-bold text-danger"
              >
                Login Here
              </span>
            </div>
          ) : (
            <div className="m-4">
              <span>Create an account? </span>
              <span
                onClick={() => {
                  setState("Sign Up");
                }}
                className=" fw-bold text-danger"
              >
                Click Here
              </span>
            </div>
          )}

          <div className="d-flex ms-5 ">
            <input type="checkbox" className="p-5" />
            <span className="m-2">Agree Terms a conditions</span>
          </div>
          <br></br>
          <button
            onClick={() => {
              state === "Login" ? login() : signup();
            }}
            className="btn btn-outline-success px-5"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
