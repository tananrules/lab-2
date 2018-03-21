import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from '../actions/login'

const mapDispatchToProps = dispatch => {
  return {
    signup: (credentials) => dispatch(signup(credentials))
  };
}

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    }
  }

  // componentWillMount() {
  //   const token = localStorage.getItem('token');
  //   const { history } = this.props;
  //   if(token) {
  //     history.push('/freelancer/profile')
  //   }
  // }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    let {first_name, last_name, email, password} = this.state;

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

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
            <form role="form" onSubmit={this.handleSubmit.bind(this)}>
              <h2>Please Sign Up <small>It's free and always will be.</small></h2>
              <hr style={colorgraph} />
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <input type="text" id="first_name" className="form-control input-lg" placeholder="First Name" value={first_name} required />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <div className="form-group">
                    <input type="text" id="last_name" className="form-control input-lg" placeholder="Last Name" value={last_name} required />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input type="email" id="email" className="form-control input-lg" placeholder="Email Address" value={email} required />
              </div>
              <div className="form-group">
                <input type="password" id="password" className="form-control input-lg" placeholder="Password" value={password} required />
              </div>
              <hr style={colorgraph} />
              <div className="row">
                <div className="col-xs-12 col-md-6"><button type="submit" className="btn btn-primary btn-block btn-lg">Register</button></div>
                <div className="col-xs-12 col-md-6"><Link to="/freelancer/login" className="btn btn-lg btn-success btn-block">Sign In</Link></div>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

export default connect(null, mapDispatchToProps)(Signup);
