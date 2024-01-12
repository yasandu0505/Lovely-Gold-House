import "./style.css";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";
import ImageSlider from "./imageSlider.component";
// import ImgGalleryHome from "./imageGalleryHome.component";

const Home = () => {
  return (
    <div>
      <ImageSlider />
      <div className="container-xl mt-5">
        <div className="text-center mb-5">
          <h1 className="home-title">
            Revealing the Splendor of Our Unique Jewellery Collection
          </h1>
          <h6 className="home-sub-title">
            Exploring the Enduring Charm of Our Jewellery Collections
          </h6>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-lg-6 col-xxl-6">
            <div className="home-item-1" style={{ backgroundImage: "url('gold-1.jpeg')" }}>
              
            </div>
            <div className="home-item-4 mt-lg-4 mt-2">
              <div className="row">
                <div className="col-9">
                  <h1 className="home-item-4-title text-start">RINGS</h1>
                  <p className="text-start">
                    Discover the ideal rings for your distinctive style and
                    elevate your ensemble with our diverse collection of
                    exquisite pieces.
                  </p>
                  <p className="text-start home-item-4-link">
                    <Link to="/jewellery/rings" className="nav-link">
                      {" "}
                      VIEW RINGS
                    </Link>
                  </p>
                </div>
                <div className="col-3">
                  <div
                    className="home-item-4-img-holder"
                    style={{ backgroundImage: "url('ring-2.jpeg')" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="home-item-6 mt-lg-4 mt-2">
              <div
                className="home-item-6-img-holder"
                style={{ backgroundImage: "url('bangle.jpeg')" }}
              ></div>
              <div className="mt-3">
                <h1 className="home-item-6-title text-start">BANGLES</h1>
                <p className="text-start">
                  Explore the perfect bangles to define your unique style and
                  elevate your wrist game with our diverse collection of
                  exquisite pieces.
                </p>
                <p className="home-item-6-link text-start">
                  <Link to="/jewellery/bangles" className="nav-link">
                    VIEW BANGLES
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-6 mt-lg-0 mt-2">
            <div className="home-item-2 ">
              <div className="row">
                <div className="col-9">
                  <h1 className="home-item-2-title text-start ">EARRINGS</h1>
                  <p className="text-start">
                    Discover the perfect earrings to complement your individual
                    style and enhance your elegance with our diverse collection
                    of exquisite pieces.
                  </p>
                  <p className="text-start home-item-2-link">
                    <Link to="/jewellery/earrings" className="nav-link">
                      VIEW EARRINGS
                    </Link>
                  </p>
                </div>
                <div className="col-3">
                  <div
                    className="home-item-2-img-holder"
                    style={{ backgroundImage: "url('earrings.webp')" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="home-item-5 mt-lg-4 mt-2">
              <div className="row">
                <div className="col-3">
                  <div
                    className="home-item-5-img-holder"
                    style={{ backgroundImage: "url('chains.jpeg')" }}
                  ></div>
                </div>
                <div className="col-9">
                  <h1 className="home-item-5-title text-start ms-3">CHAINS</h1>
                  <p className="text-start ms-3">
                    Find the perfect chains to complement your individual style
                    and enhance your allure with our diverse collection of
                    exquisite pieces.
                  </p>
                  <p className="text-start home-item-5-link">
                    <Link to="/jewellery/chains" className="nav-link">
                      VIEW CHAINS
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="home-item-3 mt-lg-4 mt-2">
              <div
                className="home-item-3-img-holder"
                style={{ backgroundImage: "url('necklace.webp')" }}
              ></div>
              <div className="mt-3">
                <h1 className="home-item-3-title text-start">NECKLACES</h1>
                <p className="text-start">
                  Find the perfect necklaces to elevate your look and express
                  your unique style with our diverse collection of exquisite
                  pieces.
                </p>
                <p className="home-item-3-link text-start">
                  <Link to="/jewellery/necklaces" className="nav-link">
                    VIEW NECKLACES
                  </Link>
                </p>
              </div>
            </div>
            <div className="home-item-7 mt-lg-4 mt-2">
              <div className="row">
                <div className="col-9">
                  <h1 className="home-item-7-title text-start">PENDANTS</h1>
                  <p className="text-start">
                    Discover the ideal pendants to accentuate your individual
                    style and enhance your neckline with our diverse collection
                    of exquisite pieces.
                  </p>
                  <p className="text-start home-item-7-link">
                    <Link to="/jewellery/pendants" className="nav-link">
                      VIEW PENDANTS
                    </Link>
                  </p>
                </div>
                <div className="col-3">
                  <div
                    className="home-item-7-img-holder"
                    style={{ backgroundImage: "url('pendant-1.webp')" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl mt-5 mb-5">
        <div className="text-center mb-5">
          <h1 className="home-title">
            Unveiling the Magic of Our Bridal Dress Collection
          </h1>
          <h6 className="home-sub-title">
            Discover Timeless Beauty in Our Bridal Collections
          </h6>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-lg-6 col-xxl-6">
            <div className="home-item-2 ">
              <div className="row">
                <div className="col-9">
                  <h1 className="home-item-2-title text-start">
                    FLOWER BOUQUETS
                  </h1>
                  <p className="text-start">
                    Select the perfect flower bouquet to enhance your bridal
                    aura and elevate your special day with our diverse
                    collection of exquisite arrangements.
                  </p>
                  <p className="text-start home-item-2-link">
                    <Link
                      to="/bridal-dresses/flower-bouquets"
                      className="nav-link"
                    >
                      VIEW FLOWER BOUQUETS
                    </Link>
                  </p>
                </div>
                <div className="col-3">
                  <div
                    className="home-item-2-img-holder"
                    style={{ backgroundImage: "url('bflower.jpeg')" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="home-item-5 mt-lg-4 mt-2">
              <div className="row">
                <div className="col-3">
                  <div
                    className="home-item-5-img-holder"
                    style={{ backgroundImage: "url('shoes.webp')" }}
                  ></div>
                </div>
                <div className="col-9">
                  <h1 className="home-item-5-title text-start ms-3">SHOES</h1>
                  <p className="text-start ms-3">
                    Find the ideal pair of bridal shoes to complement your style
                    and elevate your walk down the aisle with our diverse
                    collection of exquisite designs.
                  </p>
                  <p className="text-start home-item-5-link">
                    <Link to="/bridal-dresses/shoes" className="nav-link">
                      VIEW SHOES
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="home-item-3 mt-lg-4 mt-2">
              <div
                className="home-item-3-img-holder"
                style={{ backgroundImage: "url('bsarees.jpeg')" }}
              ></div>
              <div className="mt-3">
                <h1 className="home-item-3-title text-start">SAREES</h1>
                <p className="text-start">
                  Discover the perfect saree to define your bridal elegance and
                  elevate your presence on your special day with our diverse
                  collection of exquisite drapes.
                </p>
                <p className="home-item-3-link text-start">
                  <Link to="/bridal-dresses/sarees" className="nav-link">
                    VIEW SAREES
                  </Link>
                </p>
              </div>
            </div>
            <div className="home-item-7 mt-lg-4 mt-2">
              <div className="row">
                <div className="col-9">
                  <h1 className="home-item-7-title text-start">NECKLACES</h1>
                  <p className="text-start">
                    Explore the perfect necklaces to adorn your neckline and
                    elevate your bridal ensemble with our diverse collection of
                    exquisite pieces.
                  </p>
                  <p className="text-start home-item-7-link">
                    <Link to="/bridal-dresses/necklaces" className="nav-link">
                      VIEW NECKLACES
                    </Link>
                  </p>
                </div>
                <div className="col-3">
                  <div
                    className="home-item-7-img-holder"
                    style={{ backgroundImage: "url('bneck.jpeg')" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-6 mt-lg-0 mt-2">
            <div className="home-item-1" style={{ backgroundImage: "url('bridal-3.jpeg')" }} >
            
            </div>
            <div className="home-item-4 mt-lg-4 mt-2">
              <div className="row">
                <div className="col-9">
                  <h1 className="home-item-4-title text-start">EARRINGS</h1>
                  <p className="text-start">
                    Find the perfect earrings to complement your bridal look and
                    enhance your radiance with our diverse collection of
                    exquisite pieces.
                  </p>
                  <p className="text-start home-item-4-link">
                    <Link to="/bridal-dresses/earrings" className="nav-link">
                      VIEW EARRINGS
                    </Link>
                  </p>
                </div>
                <div className="col-3">
                  <div
                    className="home-item-4-img-holder"
                    style={{ backgroundImage: "url('earrings-3.avif')" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="home-item-6 mt-lg-4 mt-2">
              <div
                className="home-item-6-img-holder"
                style={{ backgroundImage: "url('bfrocks.webp')" }}
              ></div>
              <div className="mt-3">
                <h1 className="home-item-6-title text-start">FROCKS</h1>
                <p className="text-start">
                  Select the ideal frock to showcase your unique bridal style
                  and elevate your charm on your special day with our diverse
                  collection of exquisite designs.
                </p>
                <p className="home-item-6-link text-start">
                  <Link to="/bridal-dresses/frocks" className="nav-link">
                    VIEW FROCKS
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ImgGalleryHome /> */}
    </div>
  );
};

export default Home;
