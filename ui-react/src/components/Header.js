import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { logout } from '../actions/login';

import LogoutButton from './LogoutButton';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated
  };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     logout: () => dispatch(logout())
//   };
// }

class Header extends Component {

  // logout() {
  //   this.props.logout();
  // }

  render() {
    const { isAuthenticated } = this.props;

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container"> 
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse">
              <i className="fa fa-bars" />
            </button>
            <Link to="" className="navbar-brand">
              <img src= "/images/logo.png" className="logo" />
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              {!isAuthenticated && <li><Link to="/login">Log In</Link></li>}
              {!isAuthenticated && <li><Link to="/signup">Sign Up</Link></li>}

              {isAuthenticated && <li><Link to="/dashboard">Dashboard</Link></li>}
              {isAuthenticated && <li><Link to="/profile">My Profile</Link></li>}
              <form className="navbar-form navbar-right">
                &nbsp;&nbsp;&nbsp;
                {isAuthenticated &&  <LogoutButton></LogoutButton>}
              </form>
            </ul>
          </div>
        </div> 
      </nav>
    );
  }
}


export default connect(mapStateToProps, null)(Header);
