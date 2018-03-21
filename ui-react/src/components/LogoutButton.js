import React, { Component } from "react";
import PropTypes from "prop-types";
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
  // componentWillMount() {
  //   this.props.logout();
  // }

  logout() {
    debugger
    this.props.logout();
  }

  render() {
    if(this.props.isAuthenticated === false) {
      return (
        <Redirect to='/login' />
      )
    }    

    return (
      <button className="btn btn-danger" onClick={this.logout.bind(this)}>Log out</button>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);