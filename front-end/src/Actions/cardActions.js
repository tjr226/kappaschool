import Axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth.js';

export const GET_USER_CARDS_START = 'GET_USER_CARDS_START';
export const GET_USER_CARDS_SUCCESS = 'GET_USER_CARDS_SUCCESS';
export const GET_USER_CARDS_FAILURE = 'GET_USER_CARDS_FAILURE';

export const getUserCards = creds => dispatch => {
    dispatch({ type: GET_USER_CARDS_START });
    axiosWithAuth().get('http://localhost:5000/api/user_cards')
        .then(res => {
            dispatch({ type: GET_USER_CARDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_USER_CARDS_FAILURE, payload: err })
        })
}