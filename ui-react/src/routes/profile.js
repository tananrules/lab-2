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
                        <img src="https://lh3.googleusercontent.com/-Ub_GPStiYpc/VmAq33b7hEI/AAAAAAAACgk/1U7RdaxOcUoGCrCys36s-8n905nQ_ckEgCEwYBhgL/w280-h280-p/11138078_946991815352117_3538420091869498460_n.jpg" className="img-thumbnail" />
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
                <div class="panel panel-warning">
                  <div class="panel-heading">
                    <h3 class="panel-title">My Bids</h3>
                  </div>
                  <div class="panel-body">
                    <div className="row">
                      <div className="col-md-12">
                        <ul>
                          <li>
                            <h5><Link to="/feed">Customizing Elvanto CRM - POC Quote</Link> <span className="label label-success pull-right">OPEN</span></h5>
                            <p>My Bid - 80$</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="panel panel-success">
                  <div class="panel-heading">
                    <h3 class="panel-title">My Projects</h3>
                  </div>
                  <div class="panel-body">
                    <div className="row">
                      <div className="col-md-12">
                        <ul>
                          <li>
                            <h5><Link to="/feed">Drupal 7 Development</Link> <span className="label label-success pull-right">OPEN</span></h5>
                          </li>
                          <li>
                            <h5><Link to="/feed">Ember JS Developer with Internationalization experience</Link><span className="label label-success pull-right">OPEN</span></h5>
                          </li>
                          <li>
                            <h5><Link to="/feed">NightShift Software Developer Needed</Link><span className="label label-success pull-right">OPEN</span></h5>
                          </li>
                        </ul>
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

