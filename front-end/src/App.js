// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components
import Login from './Components/authComponents/Login.js';
import Signup from './Components/authComponents/Signup.js';
import Trig from './Components/trigComponents/Trig.js';


import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/signup">Sign Up</Link>
      <Link to="/trig">Trig</Link>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/trig" component={Trig} />
    </Router>
  );
};

export default App;
