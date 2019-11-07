// import libraries
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Login from './Login';
import Signup from './Signup';

class AuthComponent extends React.Component {
    render() {
        return (
            <Router>
                {this.props.loggedIn
                    ?
                    <div />
                    :
                    <div>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                    </div>
                }
            </Router>
        )
    }
}

// I do not know why I'm accessing "logged in" here
const mapStateToProps = state => {
    return {
        loggedIn: state.authReducer.loggedIn
    }
}

export default connect(
    mapStateToProps,
    null,
)(AuthComponent)