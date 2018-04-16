import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from '../components/Header';
import { Link } from "react-router-dom";



const mapStateToProps = (state) => {
  return {
    currentUser: state.loginReducer.currentUser,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
}

class Transaction extends Component {

  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: ""
    }
  } 


  render() {
    let { currentUser, isAuthenticated } = this.props;

    if(isAuthenticated === false) {
      return (
        <Redirect to='/login' />
      )
    }

    return (
      <div className="culmn">
        <Header></Header>

        <br/><br/><br/><br/>

        <section id="transaction">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-4">
                <div className="panel panel-default credit-card-box">
                  <div className="panel-heading display-table">
                    <div className="row display-tr">
                      <h3 className="panel-title display-td">.  Payment Details</h3>
                      <div className="display-td">                            
                        <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" />
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <form role="form" id="payment-form" method="POST" action="javascript:void(0);">
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label htmlFor="cardNumber">CARD NUMBER</label>
                            <div className="input-group">
                              <input type="tel" className="form-control" name="cardNumber" placeholder="Valid Card Number" autoComplete="cc-number" required autofocus />
                              <span className="input-group-addon"><i className="fa fa-credit-card" /></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-7 col-md-7">
                          <div className="form-group">
                            <label htmlFor="cardExpiry"><span className="hidden-xs">EXPIRATION</span><span className="visible-xs-inline">EXP</span> DATE</label>
                            <input type="tel" className="form-control" name="cardExpiry" placeholder="MM / YY" autoComplete="cc-exp" required />
                          </div>
                        </div>
                        <div className="col-xs-5 col-md-5 pull-right">
                          <div className="form-group">
                            <label htmlFor="cardCVC">CV CODE</label>
                            <input type="tel" className="form-control" name="cardCVC" placeholder="CVC" autoComplete="cc-csc" required />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <div className="form-group">
                            <label htmlFor="couponCode">COUPON CODE</label>
                            <input type="text" className="form-control" name="couponCode" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <button className="subscribe btn btn-success btn-lg btn-block" type="button">Start Subscription</button>
                        </div>
                      </div>
                      <div className="row" style={{display: 'none'}}>
                        <div className="col-xs-12">
                          <p className="payment-errors" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-8" style={{fontSize: '12pt', lineHeight: '2em'}}>
                <p>
                </p><h1>Features:</h1>
                <ul>
                  <li>As-you-type, input formatting</li>
                  <li>Form field validation (also as you type)</li>
                  <li>Graceful error feedback for declined card, etc</li>
                  <li>AJAX form submission w/ visual feedback</li>
                  <li>Creates a Stripe credit card token</li>
                </ul>
                <p />
                <p>Be sure to replace the dummy API key with a valid Stripe API key.</p>
                <p>Built upon: Bootstrap, jQuery, 
                  <a href="http://jqueryvalidation.org/">jQuery Validation Plugin</a>, 
                  <a href="https://github.com/stripe/jquery.payment">jQuery.payment library</a>,
                  and <a href="https://stripe.com/docs/stripe.js">Stripe.js</a>
                </p>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Transaction);

