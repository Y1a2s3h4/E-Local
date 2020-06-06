import React from "react";
import Navbar from "../Navabar/Navbar";
import { Link } from "react-router-dom";
import Share from "../../img/share.svg";
import Whishlist from "../../img/wishlist.svg";
import Bitmap from "../../img/Bitmap.png";
import Bitmap1 from "../../img/Bitmap-1.png";
import Bitmap2 from "../../img/Bitmap-2@2x.png";
import Bitmap3 from "../../img/Bitmap-4.png";
import Bitmap4 from "../../img/Bitmap-3.png";
import Bitmap5 from "../../img/Bitmap-5.png";
import Bitmap6 from "../../img/Bitmap-6.png";
import Store from "../../img/store-1.png";
import Seller from "../../img/Seller.svg";
import Instant from "../../img/instant book.svg";
import Cart from "../../img/cart.svg";
import Pickup from "../../img/pickup.svg";
import Calendar from "../../img/Calendar delivery.svg";
import Shipping from "../../img/group-26@3x.png";
import BestPrice from "../../img/group-27@3xxx.png";
import PickupService from "../../img/group-21@3x.png";
import ProductRequest from "../../img/group-28@3x.png";
import CardImg1 from "../../img/51xngnPYqFL._SL1000_@2x.png";
import CardImg2 from "../../img/612byLIR+gL._SX679_@2x.png";
import CardImg3 from "../../img/61P6u9SWzRL._SX569_ (1)@2x.png";
import Mobile from "../../img/icon.svg";
import Monitor from "../../img/monitor.svg";
import Laptop from "../../img/laptop.svg";
import Armchair from "../../img/armchair.svg";
import Microwave from "../../img/microwave.svg";
import Whatsapp from "../../img/whatsapp.svg";
import Cities from "../../img/3.png";
import Pune from "../../img/Pune.svg";
import Facebook from "../../img/facebook.svg";
import Twitter from "../../img/twitter.svg";
import Instagram from "../../img/Instagram.svg";
import Youtube from "../../img/youtube.svg";
import Linkedin from "../../img/linkedin.svg";
import Tumblr from "../../img/tumblr.svg";
import Business from "../../img/google-my-business.svg";
import Western from "../../img/Western-union.svg";
import Master from "../../img/Group 19.svg";
import Paypal from "../../img/Paypal.svg";
import Visa from "../../img/Group 12475.svg";
import Feedback from "../../img/Feedback.svg";
export default function ProductDetails() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container" style={{ maxWidth: "1600px" }}>
        <div className="mt-custom">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white">
              <li class="breadcrumb-item">Home</li>
              <li class="breadcrumb-item active" aria-current="page">
                Mobiles
              </li>
            </ol>
          </nav>
          <div className="row mx-md-n5">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 d-flex">
                  <div className="ml-auto">
                    <img src={Share} alt="share" />
                    <img src={Whishlist} className="ml-5" alt="wishlist" />
                  </div>
                </div>
                <div className="col-md-2 mt-6-custom">
                  <div className="img-wrapper mb-4">
                    <img
                      src={Bitmap1}
                      className="img-fluid"
                      alt="OnePlus 7 Pro"
                    />
                  </div>
                  <div className="img-wrapper mb-4">
                    <img
                      src={Bitmap2}
                      className="img-fluid"
                      alt="OnePlus 7 Pro"
                    />
                  </div>
                  <div className="img-wrapper mb-4 bg-white">
                    <img
                      src={Bitmap3}
                      className="img-fluid"
                      alt="OnePlus 7 Pro"
                    />
                  </div>
                  <div className="img-wrapper mb-4">
                    <img
                      src={Bitmap4}
                      className="img-fluid"
                      alt="OnePlus 7 Pro"
                    />
                  </div>
                  <div className="img-wrapper mb-4">
                    <h4 className="text-center">5 + more</h4>
                  </div>
                </div>
                <div className="col-md-10">
                  <img src={Bitmap} alt="" />
                </div>
                <br />
                <div className="col-md-12 mt-4_5 d-flex justify-content-between align-items-center">
                  <div className="seller">
                    <div className="img-store">
                      <img src={Store} alt="" />
                    </div>
                    <div className="seller-content">
                      <p className="mb-0">Seller</p>
                      <h6 className="mb-0">Rajdeep Telecom</h6>
                    </div>
                  </div>
                  <div className="d-flex">
                    <Link to="/sellers" className="view-content">
                      View more sellers (7)
                    </Link>
                    <div className="view-icon">
                      <img src={Seller} className="seller-icon" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5>OnePlus 7 Pro (Almond, 8GB RAM, 128 GB)</h5> <br />
              <div className="key-features">
                <ul>
                  <li>8 GB RAM | 128 GB ROM</li>
                  <li>16.64cm (6.55 inch) Display</li>
                  <li>48MP + 12MP +16MP | 16MP Front Camera</li>
                  <li>3800 mAh Battery</li>
                  <li>Qualcomm&reg; Snapdragon&trade; 855 Plus Processor</li>
                </ul>
              </div>
              <div className="product__color--quantity">
                <div className="d-flex">
                  <div className="mt-3">Color</div>
                  <div className="box1">
                    <img src={Bitmap5} alt="" />
                  </div>
                  <div className="box2 ml-0">
                    <img src={Bitmap6} alt="" />
                  </div>
                  <div className="mt-3 ml-4">Quantity</div>
                  <select class="selectpicker">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>{" "}
              <br />
              <div className="price">
                <div className="d-flex">
                  <h1>&#8377;7,490</h1>
                  <h3 className="strike-price">₹10,490</h3>
                  <h3 className="discount">30% off</h3>
                </div>
                <div className="taxes">
                  <p>Inclusive of all taxes</p>
                </div>
              </div>
              <br />
              <div className="delivery">
                <div className="d-flex">
                  <div className="d-24">Delivery in 24 hrs</div>
                  <div className="emi">EMI options Available</div>
                  <div className="pay-later">Pay later</div>
                </div>
              </div>{" "}
              <br /> <br />
              <div className="buy">
                <div className="d-flex">
                  <a href="#" className="buy-now">
                    <img
                      src={Instant}
                      className="instant-img"
                      alt="instant book"
                    />
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
                </div>
                <br />
                <div className="calendar my-3">
                  <a href="#">
                    <img src={Calendar} className="mr-2" alt="" />
                    Calendar delivery
                  </a>
                </div>
              </div>
              <br />
              <div className="shipping">
                <div className="d-flex justify-content-around">
                  <div className="free-ship">
                    <div className="service-img">
                      <img src={Shipping} alt="" />
                    </div>
                    <div className="ship-content">
                      <p>Shipping fee</p>
                      <h6>Free</h6>
                    </div>
                  </div>
                  <div className="best-price">
                    <div className="service-img">
                      <img src={BestPrice} alt="" />
                    </div>
                    <div className="ship-content">
                      <p>Best Price</p>
                      <h6>Always</h6>
                    </div>
                  </div>
                  <div className="pickup-service">
                    <div className="service-img">
                      <img src={PickupService} alt="" />
                    </div>
                    <div className="ship-content">
                      <p>Pickup Service</p>
                      <h6>One Hour</h6>
                    </div>
                  </div>
                  <div className="product-request">
                    <div className="service-img">
                      <img src={ProductRequest} alt="" />
                    </div>
                    <div className="ship-content">
                      <p>Request your product</p>
                      <h6>get Anything</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab mt-6">
            <ul class="nav nav-tabs border" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Specifications
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Description
                </a>
              </li>
            </ul>
            <div class="tab-content border" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <table class="table table-borderless">
                  <tbody>
                    <tr>
                      <td>OS</td>
                      <td>
                        <h6>Android Oreo 8.1</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>Ram</td>
                      <td>
                        <h6>8 GB</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>Item Weight</td>
                      <td>
                        <h6>163 g</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>product Dimensions</td>
                      <td>
                        <h6>16.5 x 0.8 x 7.7 cm</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>Batteries</td>
                      <td>
                        <h6>
                          1 Lithium Polymer batteries required. (included)
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>Wireless Communication</td>
                      <td>
                        <h6>Bluetooth, WiFi, Hotspot</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">See more</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p className="mt-4 mb-4">
                  Wider your view: The vibrant display features a striking
                  6.1-inch corning gorilla glass screen. It enables you to view
                  more and get immersive experience. Fun never stop: A
                  long-lasting battery keeps you enjoying every moment with your
                  phone, playing game, listening to music or watching movies.
                  Fingerprint unlock: Unlock in a moment, wake up the phone with
                  just a touch in any occasion.
                </p>
                <h6 className="mb-3">Mighty Performance</h6>
                <p className="mt-4 mb-4">
                  Powered by the Qualcomm Snapdragon 712 AIE processor and 4 GB
                  of RAM, this phone can handle any task seamlessly. The
                  advanced 10-nm design, a clock speed of up to 2.3 GHz and
                  Adreno 616 Graphic Processing Unit (GPU) let you game and
                  multitask easily. It comes with 64 GB of internal memory so
                  that you can store loads of pictures, videos and other files.
                </p>
                <h6 className="mb-3">
                  Powerful Battery with 18 W Fast Charging
                </h6>
                <p>
                  Housing a 5000-mAh battery, this phone has enough juice to let
                  you complete multiple tasks in one sitting. And, it is just
                  8.85 mm thick. The 18 W Fast Charger powers up your phone in
                  no time. Also, it supports the OTG reverse charging function,
                  making charging hassle-free.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="total-reviews">
            <h3>24 Reviews</h3>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star grey"></i>
          </div>
          <br />
          <br />
          <div className="feedback mb-3">
            <div className="d-flex">
              <div className="letter">R</div>
              <p>
                The product just received today. The item sold by Supercomnet
                says 10 day replacement. But after delivery the return option is
                withdrawn from details of order and says if any problem arises
                contact local Apple service centre. It is a clear fraud for the
                customers who buy such a high priced handset. Customer be
                careful about that. My set is running fine but it is not my
                question.Why an online store like Flipkart close the option of
                return without informing the customer?
              </p>
            </div>
            <p className="cutomer_name">
              Rohit Rehna{" "}
              <span class="badge badge-secondary d-green">
                5<i class="fas fa-star white"></i>
              </span>
              <span className="text-muted">a week ago</span>
            </p>
          </div>
          <hr />
          <a href="#">See more</a>
          <br /> <br /> <br /> <br />
          <div className="similar-products">
            <h3>Similar Products</h3>
            <div
              id="carouselExampleControls"
              class="carousel slide mt-3"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="d-flex">
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg1} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg2} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg3} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg1} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="d-flex">
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg2} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg3} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg1} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                    <div class="card c-shadow" style={{ maxWidth: "25rem" }}>
                      <center>
                        <img src={CardImg1} class="card-img-top" alt="..." />
                      </center>
                      <div class="card-body">
                        <h6 class="card-title">
                          OnePlus 7 Pro (Almond, 8GB RAM, Fluid AMOLED Display,
                          256GB Storage, 4000mAH Battery)
                        </h6>
                        <b class="card-text">&#8377;23500</b>
                        <div className="d-flex justify-content-between mt-5">
                          <p className="text-muted">
                            Seller<h6 className="text-dark">Rajdeep Telecom</h6>
                          </p>
                          <i class="fas fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <i class="fas fa-arrow-left carousel-control-prev-icon"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <i class="carousel-control-next-icon fas fa-arrow-right"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="not-found mt-6">
            <center>
              <p className="blue">Couldn't found what you are looking for ?</p>
              <div className="mb-6">
                <img className="mr-6" src={Mobile} alt="" />
                <img className="mr-6" src={Monitor} alt="" />
                <img className="mr-6" src={Laptop} alt="" />
                <img className="mr-6" src={Armchair} alt="" />
                <img className="mr-6" src={Microwave} alt="" />
              </div>
            </center>
            <center>
              <a href="#" className="request">
                Request Product
              </a>
            </center>
          </div>
          <br /> <br /> <br />
        </div>
      </div>
      <section className="questions">
        <div>
          <center>
            <p className="any-ques">Any questions in mind ?</p>
            <p>Click here for quick support</p>
            <a href="#">
              <img src={Whatsapp} alt="" />
            </a>
          </center>
        </div>
        <br /> <br /> <br /> <br />
        <footer className="container" style={{ maxWidth: "1600px" }}>
          <div className="row">
            <div className="col-md-3">
              <div className="city">
                <img src={Cities} className="cities-img" alt="" />
                <p className="cities">Cities we are in</p>
                <div className="img-pune">
                  <img src={Pune} alt="" />
                </div>
                <p className="pune">Pune</p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex justify-content-between">
                <div className="left">
                  <h6>Follow Us</h6>
                  <p>
                    We are driven by the excitement of building technologies,
                    inventing products, and providing services that change our
                    local shopping experience.
                  </p>
                  <div className="d-flex">
                    <img className="mr-4" src={Facebook} alt="" />
                    <img className="mr-4" src={Twitter} alt="" />
                    <img className="mr-4" src={Instagram} alt="" />
                    <img className="mr-4" src={Youtube} alt="" />
                    <img className="mr-4" src={Linkedin} alt="" />
                    <img className="mr-4" src={Tumblr} alt="" />
                    <img className="mr-4" src={Business} alt="" />
                  </div>
                </div>
                <div className="right">
                  <h6>Contact Us</h6>
                  <p>Location: Pune, Maharashtra</p>
                  <p>Phone: +91 7004831994</p>
                  <p>Email: digitalservices@elocals.in</p>
                </div>
              </div>
              <hr />
              <div className="row mt-5">
                <div className="col-md-4">
                  <h6>Useful Links</h6>
                  <a href="#">
                    <p>About us</p>
                  </a>
                  <a href="#">
                    <p>Contact us</p>
                  </a>
                  <a href="#">
                    <p>Sitemap</p>
                  </a>
                </div>
                <div className="col-md-4">
                  <h6>Service</h6>
                  <a href="#">
                    <p>Payment</p>
                  </a>
                  <a href="#">
                    <p>Shipping</p>
                  </a>
                  <a href="#">
                    <p>Cancellation</p>
                  </a>
                </div>
                <div className="col-md-4">
                  <h6>Information</h6>
                  <a href="#">
                    <p>FAQ</p>
                  </a>
                  <a href="#">
                    <p>Privacy Policy</p>
                  </a>
                  <a href="#">
                    <p>terms & Condition</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <div className="text-center">
          <p>© Locals Digital Services Pvt. Ltd. | ALL RIGHTS RESERVED</p>
          <img src={Western} alt="" className="mr-4" />
          <img src={Master} alt="" className="mr-4" />
          <img src={Paypal} alt="" className="mr-4" />
          <img src={Visa} alt="" className="mr-4" />
        </div>
      </section>
      <a href="#">
        <img src={Feedback} className="user-feedback" alt="" />
      </a>
    </React.Fragment>
  );
}
