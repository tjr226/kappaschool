import Axios from 'axios';

const api_prefix = "http://localhost:5000/api";

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START });
    return Axios.post(`${api_prefix}/auth/register`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: REGISTER_SUCCESS, payload: res.data.token });
        })
        .catch(err => {
            dispatch({ type: REGISTER_FAILURE, payload: err });
        })
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {

    dispatch({ type: LOGIN_START });
    // this gets sent to the Chrome console because ACTIONS are part of the front-end
    console.log("creds in authActions", creds)
    return Axios.post(`${api_prefix}/auth/login`, creds)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
        })
        .catch(err => {
            dispatch({ type: LOGIN_FAILURE });
        })
}