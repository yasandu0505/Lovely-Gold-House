import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isNavLinkActive = (path) => {
    return location.pathname.startsWith(path);
  };
  return (
    <div className="navbar navbar-expand-md navbar-light mb-4 Nav">
      <div className="container-xxl">
        <Link to="/" className="navbar-brand">
          <span className="nav-title">Lovely Gold House</span>
        </Link>
        <span
          className="navbar-toggler toggle-button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-chevron-down"></i>
        </span>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li
              className={`${isNavLinkActive("/our-story") ? "nav-active" : ""}`}
            >
              <Link
                to="/our-story"
                className={`nav-link nav-links mt-3 ${
                  isNavLinkActive("/our-story") ? "nav-linkk" : ""
                }`}
              >
                Our Story
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className={`nav-link nav-links mt-3 ms-2 ${
                  isNavLinkActive("/jewellery") ? "nav-linkk" : ""
                }`}
                
              >
                Jewellery
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/jewellery/necklaces"
                    className="dropdown-item dropdown-item-border"
                  >
                    NECKLACES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jewellery/bangles"
                    className="dropdown-item dropdown-item-border"
                  >
                    BANGLES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jewellery/rings"
                    className="dropdown-item dropdown-item-border"
                  >
                    RINGS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jewellery/pendants"
                    className="dropdown-item dropdown-item-border"
                  >
                    PENDANTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jewellery/bracelets"
                    className="dropdown-item dropdown-item-border"
                  >
                    BRACELETS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jewellery/earrings"
                    className="dropdown-item dropdown-item-border"
                  >
                    EARRINGS
                  </Link>
                </li>
                <li>
                  <Link to="/jewellery/chains" className="dropdown-item">
                    CHAINS
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="#"
                className={`nav-link nav-links mt-3 ms-2 ${
                  isNavLinkActive("/bridal-dresses") ? "nav-linkk" : ""
                }`}
              >
                Bridal Dresses
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/bridal-dresses/shoes"
                    className="dropdown-item dropdown-item-border"
                  >
                    SHOES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bridal-dresses/frocks"
                    className="dropdown-item dropdown-item-border"
                  >
                    FROCKS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bridal-dresses/sarees"
                    className="dropdown-item dropdown-item-border"
                  >
                    SAREES
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bridal-dresses/flower-bouquets"
                    className="dropdown-item dropdown-item-border"
                  >
                    FLOWER BOUQUETS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bridal-dresses/earrings"
                    className="dropdown-item dropdown-item-border"
                  >
                    EARRINGS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bridal-dresses/necklaces"
                    className="dropdown-item "
                  >
                    NECKLACES
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className={`nav-link nav-links mt-3 ms-2 ${
                  isNavLinkActive("/contact-us") ? "nav-linkk" : ""
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
