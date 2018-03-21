import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { login } from '../actions/login'

const mapDispatchToProps = dispatch => {
  return {
    login: (credentials) => dispatch(login(credentials))
  };
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated,
    loginError: state.loginReducer.loginError,
  };
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",    
    }
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state);
  }

  render() {
    let {email, password} = this.state;
    let { loginError, isAuthenticated } = this.props;

    let marginTop = {
      marginTop: '20px'
    }

    let colorgraph = {
      height: '5px',
      borderTop: '0',
      background: '#c4e17f',
      borderRadius: '5px',
      backgroundImage: '-webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)',
      backgroundImage: '-moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)',
      backgroundImage: '-o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)',
      backgroundImage: 'linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4)'
    }

    if(isAuthenticated === true) {
      return (
        <Redirect to='/profile' />
      )
    }

    return (
      <div className="container">
        <div className="row" style={marginTop}>
          <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
            <form role="form" onSubmit={this.handleSubmit.bind(this)}>
              <fieldset>
                <h2>Please Sign In</h2>
                <hr style={colorgraph} />
                <div className="form-group">
                  { loginError && <div id="login-alert" className="alert alert-danger col-sm-12">{loginError}</div> }
                </div>
                <div className="form-group">
                  <input type="email" id="email" className="form-control input-lg" placeholder="Email Address" value={email} onChange={this.handleChange.bind(this)} />
                </div>
                <div className="form-group">
                  <input type="password" id="password" className="form-control input-lg" placeholder="Password" value={password} onChange={this.handleChange.bind(this)} />
                </div>
                <a href className="btn btn-link">Forgot Password?</a>
                <hr style={colorgraph} />
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <button type="submit" className="btn btn-lg btn-success btn-block">Sign In</button>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6">
                    <Link to="/freelancer/signup" className="btn btn-lg btn-primary btn-block">Register</Link>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);