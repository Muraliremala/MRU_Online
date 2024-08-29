import React from "react";
import LinkedIn from "../Components/Assests/LinkedIn_Icon.png";
import GitHub from "../Components/Assests/Github_Icon.png";

const About = () => {
  return (
    <div className="container">
      <div className="container m-5">
        <h4>Developed By : </h4>
        <div className="row mt-5">
        <div className="col-md-4 p-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">R. Muralidhar Reddy</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  MRUH (B.Tech CSE 3rd Year)
                </h6>
                <p className="card-text">
                  Python | Java | ML | DSA | MERN | HTML
                </p>
                <a
                  href="https://www.linkedin.com/in/muralidhar-reddy-remala-086304248/"
                  className="card-link"
                >
                  <img src={LinkedIn} width="60" />
                </a>
                <a className="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">M. Midhun Naga Sai</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  MRUH (B.Tech CSE 3rd Year)
                </h6>
                <p className="card-text">
                  Java | Android | MERN | MEAN | DSA | Jetpack Compose
                </p>
                <a
                  href="https://www.linkedin.com/in/midhunnagasai/"
                  className="card-link"
                >
                  <img src={LinkedIn} width="60" />
                </a>
                <a href="https://github.com/Midhun2823" className="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          
          
          <div className="col-md-4 p-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">S. Madhav</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  MRUH (B.Tech CSE 3rd Year)
                </h6>
                <p className="card-text">
                  Java | Android | Python | HTML | CSS{" "}
                </p>
                <a className="card-link">
                  <img src={LinkedIn} width="60" />
                </a>
                <a className="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">N. Ajay</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  MRUH (B.Tech CSE 3rd Year)
                </h6>
                <p className="card-text">
                  Java | PowerBI | Python | HTML | CSS | Android
                </p>
                <a className="card-link">
                  <img src={LinkedIn} width="60" />
                </a>
                <a className="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">S. Murali Krishna</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  MRUH (B.Tech CSE 3rd Year)
                </h6>
                <p className="card-text">
                  Java | Android | HTML | CSS | Python
                </p>
                <a
                  href="https://www.linkedin.com/in/murali-krishna-928629255/"
                  className="card-link"
                >
                  <img src={LinkedIn} width="60" />
                </a>
                <a className="card-link">
                  <img src={GitHub} width="100" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container m-5">
          <h4>Under Guidance Of :</h4>
          <div className="row mt-5">
            <div className="col-md-4 p-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Adgaonker Shashank Sir</h5>

                  <a
                    href="https://www.linkedin.com/in/androidshashank/"
                    className="card-link"
                  >
                    <img src={LinkedIn} width="40" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3"></div>
            <div className="col-md-4 p-3"></div>
            <div className="col-md-12 p-3"></div>

            <div className="col-md-4 p-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Dr. M. Santhosh Kumar</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    MRUH (Professor)
                  </h6>

                  {/* <a href="" class="card-link">
                    <img src={LinkedIn} width="60" />
                  </a>
                  <a href="" class="card-link">
                    <img src={GitHub} width="100" />
                  </a> */}
                </div>
              </div>
            </div>

            <div className="col-md-4 p-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Mr. M. Gouthamm</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    MRUH (Assistant Professor)
                  </h6>

                  {/* <a href="" className="card-link">
                    <img src={LinkedIn} width="60" />
                  </a>
                  <a href="" class="card-link">
                    <img src={GitHub} width="100" />
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 p-3">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Dr. Raviteja Kocherla</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    MRUH (Professor)
                  </h6>

                  {/* <a href="" className="card-link">
                    <img src={LinkedIn} width="60" />
                  </a>
                  <a href="" class="card-link">
                    <img src={GitHub} width="100" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
