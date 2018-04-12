import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";

//Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

//Components
import Profile from './routes/profile';
import Login from './components/login';
import Signup from './components/signup';

// Routes
import WelcomePage from './routes/WelcomePage';
import PostProject from './routes/post-project';
import Feed from './routes/feed';

import { hideSnackbar } from './actions/jobs';

const mapStateToProps = (state) => {
  return {
    displaySnackbar: state.defaultReducer.displaySnackbar,
    snackbarMessage: state.defaultReducer.snackbarMessage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    hideSnackbar: (boolean) => dispatch(hideSnackbar(boolean))
  };
}

const checkIfAuthenticated = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  if(!token && !user) {
    return false;
  }
  return true;
}

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props =>
      checkIfAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ 
            pathname: "/login"
          }}
        />
      )
    }
  />
);

class App extends Component {
  debugger
  handleRequestClose = () => {
    this.props.hideSnackbar(false);
  };

  render() {
    let { displaySnackbar, snackbarMessage } = this.props;

    return (
      <MuiThemeProvider>
        <div className="app">
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <AuthenticatedRoute exact path="/profile" component={Profile} />
          <AuthenticatedRoute exact path="/post-project" component={PostProject} />
          <AuthenticatedRoute exact path="/feed" component={Feed} />

          <Snackbar
            open={displaySnackbar}
            message={snackbarMessage}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
