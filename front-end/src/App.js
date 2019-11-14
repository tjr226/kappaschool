// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Login from './Components/authComponents/Login';
import Signup from './Components/authComponents/Signup';
import PrivateRoute from './PrivateRoute';
import ReadingClassPane from './Components/mnemonicReading/ReadingClassPane.js';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {localStorage.getItem('token')
          ?
          null
          :
          <div>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
        }
        <PrivateRoute exact path="/reading" component={ReadingClassPane} />
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