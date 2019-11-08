// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components
import Login from './Components/authComponents/Login';
import Signup from './Components/authComponents/Signup';
import AuthComponent from './Components/authComponents/AuthComponent.js';
import ReadingComponent from './Components/readingComponents/ReadingHome.js';

import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  
  render() {  
      return (
        <Router>
          <Route exact path="/" component={ AuthComponent } />
          <Route exact path="/login" component={ AuthComponent } />
          <Route exact path="/signup" component={ AuthComponent } />
          <PrivateRoute exact path="/reading" component={ReadingComponent} />
        </Router>
      );
  };
};

export default App;
