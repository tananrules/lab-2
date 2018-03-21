import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from '../components/Header';


const mapStateToProps = (state) => {
  return {
    currentUser: state.loginReducer.currentUser,
    isAuthenticated: state.loginReducer.isAuthenticated,
  };
}

class Profile extends Component {

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

        <section id="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-offset-2 col-md-8">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h3 className="panel-title">My Profile</h3>
                  </div>
                  <div class="panel-body">
                    <div className="row">
                      <div className="col-md-4">
                        <br/>
                      </div>
                      <div className="col-md-8">
                        { currentUser && <p><strong>Email: </strong>{currentUser.email}</p> }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(Profile);

