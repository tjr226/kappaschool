// import libraries
import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import components
import { register } from '../../Actions';
import Login from './Login';

// styled components

class Signup extends React.Component {
    state = {
        credentials: {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    signup = e => {
        e.preventDefault();
        this.props.register(this.state.credentials)
            .then(() => {
                this.props.history.push('/reading');
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.signup}>
                    <h2>Sign Up</h2>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Sign Up</button>
                </form>

            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     registering: state.registering
// })

export default connect(
    null,
    { register }
)(Signup);