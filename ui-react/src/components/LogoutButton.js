import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from '../actions/login';


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.loginReducer.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
}

class LogoutButton extends Component {

  logout() {
    this.props.logout();
  }

  render() {  
    return (
      <button className="btn btn-danger" onClick={this.logout.bind(this)}>Log out</button>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);