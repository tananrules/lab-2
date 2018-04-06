import React, { Component } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class WelcomePage extends Component {


	render() {
    return (
      <div className="culmn">
        <Header></Header>

        <section id="home" className="home bg-black fix">
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="main_home text-center">
                <div className="col-md-12">
                  <div className="hello_slid">
                    <div className="slid_item">
                      <div className="home_text ">
                        <h2 className="text-white">Welcome to <strong>Freelancer</strong></h2>
                        <h1 className="text-white">Hire expert freelancers for any job, online</h1>
                        <h3 className="text-white">Millions of small businesses use Freelancer to turn their ideas into reality.</h3>
                      </div>
                      <div className="home_btns m-top-40">
                        <a href className="btn btn-success btn-lg m-top-20">I want to Hire</a>
                        <a href className="btn btn-info btn-lg m-top-20">I want to Work</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="business" className="business bg-grey roomy-70">
          <div className="container">
            <div className="row">
              <div className="main_business">
                <div className="col-md-5">
                  <div className="business_slid">
                    <div className="slid_shap bg-grey" />
                    <div className="business_items text-center">
                      <div className="business_item">
                        <div className="business_img">
                          <img src="/images/about-img.jpg" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="business_item sm-m-top-50">
                    <h2 className="text-uppercase">Need work done?</h2>
                    <br/> 
                    <ul>
                      <li><i className="fa fa-arrow-circle-right" />You’ll receive free bids from our talented freelancers within seconds.</li>
                      <br/>
                      <li><i className="fa fa-arrow-circle-right" />Keep up-to-date and on-the-go with our time tracker, and mobile app.</li>
                      <br/>
                      <li><i className="fa fa-arrow-circle-right" />You only have to pay for work when it has been completed and you’re 100% satisfied.</li>
                      <br/>
                      <li><i className="fa fa-arrow-circle-right" />Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</li>
                    </ul>
                    <br/>
                    <p className="m-top-20">It's easy. Simply post a job you need completed and receive competitive bids from freelancers within minutes.<br/>
                    <br/>Whatever your needs, there will be a freelancer to get it done: from web design, mobile app development, virtual assistants, product manufacturing, and graphic design (and a whole lot more).<br/>
                    <br/>With secure payments and thousands of reviewed professional to choose from, Freelancer.com is the simplest and safest way to get work done online.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="product">
          <div className="container">
            <div className="main_product roomy-80">
              <div className="head_title text-center fix">
                <h2 className="text-uppercase">Crowd favorites.</h2>
                <h4>Here are some of our most popular projects:</h4>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <img src="/images/work-img1.jpg" alt />
                </div>
                <div className="col-md-3">
                  <img src="/images/work-img2.jpg" alt />
                </div>
                <div className="col-md-3">
                  <img src="/images/work-img3.jpg" alt />
                </div>
                <div className="col-md-3">
                  <img src="/images/work-img4.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>
        

      </div>
    );
  }
}