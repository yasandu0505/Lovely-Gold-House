const Contact = () => {
  return (
    <div>
      <div className="container-xl mt-5">
        <div className="text-center mb-5">
          <h1 className="contact-title">Contact Us</h1>
          <h6 className="contact-sub-title">
            Stay Connected - Lovely Gold House & Lovely Kandian Kula Kumari
          </h6>
        </div>

        <div className="row">
          <div className="col-12 col-lg-4 col-xl-4">
            <div className="contact-1">
              <h4 className="contact-box-title">Call Us</h4>
              <div className="content-contact-card">
                <div>
                  <i class="bi bi-telephone icon-col"></i>
                  <span className="telno ms-3">+94 72 370 1138 - Athula</span>
                </div>
                <div className="mt-3">
                  <i class="bi bi-telephone icon-col "></i>
                  <span className="telno ms-3">+94 72 370 1138 - Lovely Kandian Kula Kumari</span>
                </div>
                <div className="mt-3">
                  <i class="bi bi-telephone icon-col"></i>
                  <span className="telno ms-3">+94 72 370 1138 - Sriyani</span>
                </div>
                
                <div className="mt-3">
                  <i class="bi bi-telephone icon-col"></i>
                  <span className="telno ms-3 ">+94 72 370 1138 - Lovely Gold House</span>
                </div>
               
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 mt-4 mt-lg-0">
            <div className="contact-2">
              <h4 className="contact-box-title ">Meet Us</h4>
              <div className="content-contact-card">
                <div>
                  <i class="bi bi-geo-alt icon-col"></i>
                  <span className="address ms-3">
                    N0.39, MAIN STREET, KADURUWELA, POLONNARUWA
                  </span>
                </div>
                <div className="mt-3">
                  <i class="bi bi-geo-alt icon-col"></i>
                  <span className="address ms-3">
                    N0.39, MAIN STREET, KADURUWELA, POLONNARUWA
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-xl-4 mt-4 mt-lg-0">
            <div className="contact-3">
              <h4 className="contact-box-title">Reach Us</h4>
              <div className="content-contact-card">
                <div>
                  <i class="bi bi-instagram icon-col"></i>
                  <span className="telno ms-3">LovelyGold_House</span>
                </div>
                <div className="mt-3">
                <i class="bi bi-facebook icon-col"></i>
                  <span className="telno ms-3">Lovely Gold House</span>
                </div>
                <div className="mt-3">
                <i class="bi bi-tiktok icon-col"></i>
                  <span className="telno ms-3 ">lovely_kandian_kumari</span>
                </div>
                <div className="mt-3">
                <i class="bi bi-whatsapp icon-col"></i>
                  <span className="telno ms-3">+94 72 370 1138</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center set-section  mb-4 mt-4">
          <div className="gh-kaduruwela-map">
            <iframe
              title="Location Map"
              // className="hehe d-lg-none d-block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.630629620336!2d81.028463174807!3d7.933590392090354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb45a1bbb953c7%3A0x120bc76e2830db3f!2sLovely%20Gold%20House!5e0!3m2!1sen!2slk!4v1703964686616!5m2!1sen!2slk"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
