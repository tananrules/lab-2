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
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title">My Profile</h3>
                  </div>
                  <div class="panel-body">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="..." className="img-thumbnail" />
                        <br/>
                        <div className="form-group">
                          <label >Change Profile Picture</label>
                          <input type="file" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        { currentUser && <h2>{currentUser.first_name} {currentUser.last_name}</h2> }
                        { currentUser && <p><strong>Email: </strong>{currentUser.email}</p> }
                        <p><strong>Contact: </strong>
                          <input type="text" className="form-control" />
                        </p>
                        <p><strong>About Me: </strong>
                          <textarea className="form-control" rows="3" value={this.state.value} onChange={this.handleChange} />
                        </p>
                        <p><strong>Address: </strong>
                          <textarea className="form-control" rows="3" value={this.state.value} onChange={this.handleChange} />
                        </p>
                        <p><strong>Skills: </strong>
                          <span className="label label-success">html5</span> 
                          <span className="label label-success">css3</span>
                          <span className="label label-success">jquery</span>
                          <span className="label label-success">bootstrap3</span>
                        </p>
                        <button className="btn btn-warning pull-right">Save</button>
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

