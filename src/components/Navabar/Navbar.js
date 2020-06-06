import React from "react";
import eLocals from "../../img/E-Commerce-Logo-1.png";
import Pin from "../../img/pin.svg";
import shoppingBag from "../../img/shopping_bag.svg";
import Profile from "../../img/profile.jpg";
export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
      <div
        className="container"
        style={{ maxWidth: "1700px", maxHeight: "90px" }}
      >
        <a className="navbar-brand" href="#">
          <img src={eLocals} alt="logo" width={120} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link font-medium" href="#">
                <img src={Pin} className="mr-2" alt="" />
                Banglore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={shoppingBag} alt="" width={45} />
              </a>
            </li>
            <li className="nav-item dropdown h-25 mb-custom">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src={Profile}
                  alt="profile"
                  width={50}
                  style={{ clipPath: "circle(40% at 50% 50%)" }}
                />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
