// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Login from './Components/authComponents/Login';
import Signup from './Components/authComponents/Signup';
import ReadingHome from './Components/readingComponents/ReadingHome.js';

import PrivateRoute from './PrivateRoute';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={ Login } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={ Signup } />
        {localStorage.getItem('token')
          ?
          <div />
          :
          <div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        }
        <PrivateRoute exact path="/reading" component={ReadingHome} />
      </Router>
    );
  };
};

const mapStateToProps = state => {
  return {
    loggedIn: state.authReducer.loggedIn
  }
}

export default connect(
  mapStateToProps,
  null,
)(App)