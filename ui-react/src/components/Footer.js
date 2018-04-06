import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer id="contact" className="footer bg-black p-top-80">
        <div className="container">
          <div className="row">
            <div className="widget_area">
              <div className="col-md-3">
                <div className="widget_item widget_about">
                  <h5 className="text-white">English US International</h5>
                  <div className="widget_ab_item m-top-30">
                    <div className="item_icon"><i className="fa fa-location-arrow" /></div>
                    <div className="widget_ab_item_text">
                      <h5 className="text-white">Help and Support</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget_item sm-m-top-50">
                  <h5 className="text-white">Freelancer</h5>
                  <ul className="m-top-20">
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Categories</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Projects</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Contests</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Freelancers</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Enterprise</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Showcase</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget_item sm-m-top-50">
                  <h5 className="text-white">About</h5>
                  <ul className="m-top-20">
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />About Us</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />How it works</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Security</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Investor</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Sitemap</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Quotes</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div className="widget_item sm-m-top-50">
                  <h5 className="text-white">Terms</h5>
                  <ul className="m-top-20">
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Privacy Policy</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Terms and Conditions</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Copyright Policy</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Code of Conduct</a></li>
                    <li className="m-top-20"><a><i className="fa fa-angle-right" />Fees and Charges</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
    );
  }
}

