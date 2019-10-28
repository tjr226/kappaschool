// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components
import Login from './Components/authComponents/Login.js';
import Signup from './Components/authComponents/Signup.js';
import Trig from './Components/trigComponents/Trig.js';
import Lecture from './Components/lectureComponents/Lecture.js';

import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      <Link to="/lecture">Lecture Placeholder</Link>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <PrivateRoute exact path="/lecture" component={Lecture} />
    </Router>
  );
};

export default App;
