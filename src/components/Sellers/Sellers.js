import React from "react";
import { Link } from "react-router-dom";
import eLocals from "../../img/E-Commerce-Logo-1.png";
import Pin from "../../img/pin.svg";
import Larr from "../../img/angle-left.svg";
import SelectedImg from "../../img/Bitmap-4@2x.png";
import Instant from "../../img/instant book.svg";
import Cart from "../../img/cart.svg";
import Pickup from "../../img/pickup.svg";
import Calendar from "../../img/Calendar delivery.svg";
import Store from "../../img/store-1@2x.png";
export default function Sellers() {
  return (
    <React.Fragment>
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
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Become Seller
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Login
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link " href="#">
                  <a href="#" className="sign-up">
                    Sign up
                  </a>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br />
      <div className="container" style={{ maxWidth: "1700px" }}>
        <div className="d-flex mt-6">
          <div className="return-product">
            <Link to="/" className="return">
              <img src={Larr} className="Larr" alt="" />
              Return to product
            </Link>
          </div>
          <div className="selected-product ml-auto">
            <div className="select__img--product">
              <img src={SelectedImg} alt="" />
            </div>
            <div className="selected-content">
              <h6>OnePlus 7 Pro (Almond, 8GB RAM, 128 GB)</h6>
            </div>
          </div>
        </div>
        <br /> <br />
        <div className="d-flex justify-content-between">
          <h6>Seller Information</h6>
          <h6>Price & Offers</h6>
        </div>
        <hr />
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex">
            <div class="custom-control custom-radio ml-5">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1">
                <img src={Store} className="" alt="" />
              </label>
            </div>
            <div className="other__seller--content">
              <h6>Rajdeep Telecom</h6>
              <p>Lal Mahal</p>
              <p className="orange">0.1km</p>
            </div>
          </div>
          <div className="price">
            <div className="d-flex">
              <h1 className="elocalPrice">&#8377;7,490</h1>
              <h3 className="strike-price realPrice">₹10,490</h3>
              <h3 className="discount off">30% off</h3>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex">
            <div class="custom-control custom-radio ml-5">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1">
                <img src={Store} className="" alt="" />
              </label>
            </div>
            <div className="other__seller--content">
              <h6>Rajdeep Telecom</h6>
              <p>Lal Mahal</p>
              <p className="orange">0.1km</p>
            </div>
          </div>
          <div className="price">
            <div className="d-flex">
              <h1 className="elocalPrice">&#8377;7,490</h1>
              <h3 className="strike-price realPrice">₹10,490</h3>
              <h3 className="discount off">30% off</h3>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex">
            <div class="custom-control custom-radio ml-5">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1">
                <img src={Store} className="" alt="" />
              </label>
            </div>
            <div className="other__seller--content">
              <h6>Rajdeep Telecom</h6>
              <p>Lal Mahal</p>
              <p className="orange">0.1km</p>
            </div>
          </div>
          <div className="price">
            <div className="d-flex">
              <h1 className="elocalPrice">&#8377;7,490</h1>
              <h3 className="strike-price realPrice">₹10,490</h3>
              <h3 className="discount off">30% off</h3>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex">
            <div class="custom-control custom-radio ml-5">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1">
                <img src={Store} className="" alt="" />
              </label>
            </div>
            <div className="other__seller--content">
              <h6>Rajdeep Telecom</h6>
              <p>Lal Mahal</p>
              <p className="orange">0.1km</p>
            </div>
          </div>
          <div className="price">
            <div className="d-flex">
              <h1 className="elocalPrice">&#8377;7,490</h1>
              <h3 className="strike-price realPrice">₹10,490</h3>
              <h3 className="discount off">30% off</h3>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex">
            <div class="custom-control custom-radio ml-5">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1">
                <img src={Store} className="" alt="" />
              </label>
            </div>
            <div className="other__seller--content">
              <h6>Rajdeep Telecom</h6>
              <p>Lal Mahal</p>
              <p className="orange">0.1km</p>
            </div>
          </div>
          <div className="price">
            <div className="d-flex">
              <h1 className="elocalPrice">&#8377;7,490</h1>
              <h3 className="strike-price realPrice">₹10,490</h3>
              <h3 className="discount off">30% off</h3>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex">
            <div class="custom-control custom-radio ml-5">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1">
                <img src={Store} className="" alt="" />
              </label>
            </div>
            <div className="other__seller--content">
              <h6>Rajdeep Telecom</h6>
              <p>Lal Mahal</p>
              <p className="orange">0.1km</p>
            </div>
          </div>
          <div className="price">
            <div className="d-flex">
              <h1 className="elocalPrice">&#8377;7,490</h1>
              <h3 className="strike-price realPrice">₹10,490</h3>
              <h3 className="discount off">30% off</h3>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between my-5">
          <div className="d-flex">
            <div class="custom-control custom-radio ml-5">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="customRadio1">
                <img src={Store} className="" alt="" />
              </label>
            </div>
            <div className="other__seller--content">
              <h6>Rajdeep Telecom</h6>
              <p>Lal Mahal</p>
              <p className="orange">0.1km</p>
            </div>
          </div>
          <div className="price">
            <div className="d-flex">
              <h1 className="elocalPrice">&#8377;7,490</h1>
              <h3 className="strike-price realPrice">₹10,490</h3>
              <h3 className="discount off">30% off</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-fixed bg-white">
        <div className="d-flex justify-content-end pr-5 pt-2">
          <a href="#" className="buy-now">
            <img src={Instant} className="instant-img" alt="instant book" />
            Buy Now
          </a>
          <a href="#" className="add__to--cart">
            <img src={Cart} className="addCart-img" alt="" />
            Add to Cart
          </a>
          <a href="#" className="pickup__from--store">
            <img src={Pickup} className="pickup" alt="" />
            Pickup from store
          </a>
          <a href="#" className="my-3">
            <img src={Calendar} className="mr-2" alt="" />
            Calendar delivery
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
