import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE,
    REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILURE,
} from '../Actions/index.js';

const initialAuthState = {
    loggingIn: false,
    loggedIn: false,
    registering: false,
    token: '',
    error: null,
};

export const authReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: '',
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                token: action.payload,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggingIn: false,
                // loggedIn: false,
                error: action.payload,
                token: ''
            }
        case REGISTER_START:
            return {
                ...state,
                registering: true,
                error: '',
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                loggedIn: true,
                token: action.payload,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                registering: false,
                loggedIn: false,
                error: action.payload,
                token: '',
            }
        
            default:
                return state;
    }
}