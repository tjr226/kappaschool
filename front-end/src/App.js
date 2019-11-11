// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Login from './Components/authComponents/Login';
import Signup from './Components/authComponents/Signup';
import ReadingHome from './Components/readingComponents/ReadingHome.js';
import ReadingPractice from './Components/readingComponents/ReadingPractice.js';
import PrivateRoute from './PrivateRoute';

class App extends React.Component {

  render() {
    return (
      <Router>
      {/* <Switch> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
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
        <PrivateRoute exact path="/readingPractice" component={ReadingPractice} />
      {/* </Switch> */}
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