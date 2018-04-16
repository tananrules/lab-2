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
              <div className="col-md-12 col-md-4">
                <div className="panel panel-default credit-card-box">
                  <div className="panel-heading display-table">
                    <div className="row display-tr">
                      <h3 className="panel-title display-td">.  Payment Details - Add Money</h3>
                      <div className="display-td">                            
                        <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png" />
                      </div>
                    </div>
                  </div>
                  <div className="panel-body">
                    <form role="form" id="payment-form" method="POST" action="javascript:void(0);">
                      <div className="row">
                        <div className="col-md-12">
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
                        <div className="col-md-7 col-md-7">
                          <div className="form-group">
                            <label htmlFor="cardExpiry"><span className="hidden-md">EXPIRATION</span><span className="visible-md-inline">EXP</span> DATE</label>
                            <input type="tel" className="form-control" name="cardExpiry" placeholder="MM / YY" autoComplete="cc-exp" required />
                          </div>
                        </div>
                        <div className="col-md-5 col-md-5 pull-right">
                          <div className="form-group">
                            <label htmlFor="cardCVC">CV CODE</label>
                            <input type="tel" className="form-control" name="cardCVC" placeholder="CVC" autoComplete="cc-csc" required />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="couponCode">COUPON CODE</label>
                            <input type="text" className="form-control" name="couponCode" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button className="subscribe btn btn-success btn-lg btn-block" type="button">Start Subscription</button>
                        </div>
                      </div>
                      <div className="row" style={{display: 'none'}}>
                        <div className="col-md-12">
                          <p className="payment-errors" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-md-8" style={{fontSize: '12pt', lineHeight: '2em'}}>
                <form className="form-horizontal" action method="post">
                  <fieldset>
                    <legend className="text-center">Withdraw Money</legend>
                    <div className="form-group">
                      <label className="col-md-3 control-label">Account Number</label>
                      <div className="col-md-9">
                        <input id="name" name="name" type="text" placeholder="Acc No" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label">Amount in dollars</label>
                      <div className="col-md-9">
                        <input id="email" name="email" type="number" placeholder="$$" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-3 control-label" htmlFor="message">Bank, Branch</label>
                      <div className="col-md-9">
                        <textarea className="form-control"  placeholder="Bank and Branch" rows={5} defaultValue={""} />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12 text-right">
                        <button type="submit" className="btn btn-primary btn-lg">Withdraw</button>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
              <br/><br/><br/><br/>
              
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="panel panel-danger">
                  <div>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Transaction ID</th>
                          <th>Amount </th>
                          <th>Bank</th>
                        </tr>
                      </thead>
                        <tbody><tr>
                          <td>1</td>
                          <td>200$</td>
                          <td>Chase Bank</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>400$</td>
                          <td>US Bank</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>5$</td>
                          <td>CHase</td>
                        </tr>
                      </tbody></table>
                  </div>

                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="panel panel-danger">
                  <img src="https://i.stack.imgur.com/KnWcd.png" alt=""/>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Transaction);

