import React from "react";

const Footer = () => {
  return (
    <footer className="new_footer_area bg_color">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <h3 className="f-title f_600 t_color f_size_18">
                  Get in Touch
                </h3>
                <p>
                  Don’t miss any updates of our new templates and extensions.!
                </p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  noValidate={true}
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two" type="submit">
                    Subscribe
                  </button>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  ></p>
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  ></p>
                </form>
              </div>
            </div>
            {/* Add other col components similarly */}
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © cakecounter Inc.. 2019 All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made with <i className="icon_heart"></i> in{" "}
                <a href="http://cakecounter.com" target="_blank">
                  CakeCounter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
