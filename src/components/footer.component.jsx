import "./style.css";
const Footer = () => {
  return (
    <footer>
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center pb-5 foot">
          <div className="col-8 col-lg-4 col-xl-3 text-white mt-5">
            <p className="text-center text-md-start foot-topic-1">
              <span>
                <i class="bi bi-geo-alt-fill icon-foot me-2"></i>
              </span>
              ADDRESS
            </p>
            <p className=" text-center text-md-start foot-topic-3">
              N0.39, MAIN STREET, KADURUWELA, POLONNARUWA
            </p>
            <p className=" text-center text-md-start foot-topic-3">
              N0.39, MAIN STREET, JAYANTHIPURA, POLONNARUWA
            </p>
          </div>
          <div className="col-8 col-lg-4 col-xl-3 text-white mt-5">
            <p className="text-center text-md-start foot-topic-1">
              <span>
                <i class="bi bi-telephone-fill icon-foot  me-2"></i>
              </span>
              CALL
            </p>
            <span className="text-center text-md-start foot-topic-3">
              +94 72 370 1138
            </span>
            <br />
            <span className="text-center text-md-start foot-topic-3">
              +94 27 222 7677
            </span>
          </div>
          <div className="col-8 col-lg-4 col-xl-3 text-white mt-5">
            <p className="text-center text-md-start foot-topic-1">
              <span>
                <i class="bi bi-envelope-at-fill icon-foot me-2"></i>
              </span>
              MAIL
            </p>
            <p className="text-center text-md-start foot-topic-3">
              LOVELYGOLDHOUSE@INFO.LK
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-5 col-lg-3 col-xl-3 text-white text-center text-md-start">
            <p className="foot-topic-1">HELP</p>
            <div className="foot-topic-2 foot-second-section">CONTACT US</div>
          </div>
          <div className="col-5 col-lg-3 col-xl-3 text-white  text-center text-md-start">
            <p className="foot-topic-1">JEWELLERY</p>
            <div className=" foot-topic-2 foot-second-section mb-3">NECKLACES</div>
            <div className=" foot-topic-2 foot-second-section mb-3">BANGALES</div>
            <div className=" foot-topic-2 foot-second-section mb-3">RINGS</div>
            <div className=" foot-topic-2 foot-second-section mb-3">PENDANTS</div>
            <div className=" foot-topic-2 foot-second-section mb-3">BRACELETS</div>
            <div className=" foot-topic-2 foot-second-section mb-3">EARRINGS</div>
            <div className=" foot-topic-2 foot-second-section">CHAINS</div>

          </div>
          <div className="col-5 col-lg-3 col-xl-3 text-white text-center text-md-start my-lg-0 my-4">
            <p className="foot-topic-1">BRIDAL DRESSING</p>
            <div className=" foot-topic-2 foot-second-section mb-3">SHOES</div>
            <div className=" foot-topic-2 foot-second-section mb-3">FROCKS</div>
            <div className=" foot-topic-2 foot-second-section mb-3">SAREES</div>
            <div className=" foot-topic-2 foot-second-section mb-3">FLOWER BOUQUETS</div>
            <div className=" foot-topic-2 foot-second-section mb-3">EARRINGS</div>
            <div className=" foot-topic-2 foot-second-section">NECKLACES</div>
          
          </div>
          <div className="col-5 col-lg-3 col-xl-3 text-white text-center text-md-start my-lg-0 my-4">
            <p className="foot-topic-1">FOLLOW US</p>
            <div className="col-3"></div>
            <div className="row social-icon-parent">
              <div className="col-3 social-icons">
                <i class="bi bi-instagram foot-second-section"></i>
              </div>
              <div className="col-3 social-icons">
                <i class="bi bi-facebook foot-second-section"></i>
              </div>
              <div className="col-3 social-icons">
                <i class="bi bi-tiktok foot-second-section"></i>
              </div>
              <div className="col-3 social-icons">
                <i class="bi bi-whatsapp foot-second-section"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <p className="text-white foot-end">
            &copy; 2023 Lovely Gold House (Pvt) Ltd.All Rights Reserved. Web
            Solution by ConnectedDots
          </p>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
