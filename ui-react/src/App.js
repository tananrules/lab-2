import React, { Component } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';

//Components
// import Calculator from './app/routes/Calculator/Calculator';
// import from './app/routes/Freelancer/Freelancer';
import Profile from './routes/profile';
import Login from './components/login';
import Signup from './components/signup';


import WelcomePage from './routes/WelcomePage';
// import PostProject from './app/routes/Freelancer/post-project';
// import Dashboard from './app/routes/Freelancer/Dashboard';
// import SingleJob from './app/routes/Freelancer/SingleJob';

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

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <AuthenticatedRoute exact path="/profile" component={Profile}/>
      </div>
    );
  }
}
