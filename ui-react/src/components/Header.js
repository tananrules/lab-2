import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import LogoutButton from './LogoutButton';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated
  };
}

class Header extends Component {

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

              {isAuthenticated && <li><Link to="/feed">Feed</Link></li>}
              {isAuthenticated && <li><Link to="/transaction">Transactions</Link></li>}
              {isAuthenticated && <li><Link to="/profile">My Profile</Link></li>}
              <form className="navbar-form navbar-right">
                {isAuthenticated &&  <LogoutButton></LogoutButton>}
              </form>
              <form class="navbar-form navbar-right">
                {isAuthenticated &&  <Link to="/post-project" className="btn btn-warning">Post a Project</Link>}
              </form>
            </ul>
          </div>
        </div> 
      </nav>
    );
  }
}


export default connect(mapStateToProps, null)(Header);
