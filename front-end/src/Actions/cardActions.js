import Axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth.js';

export const GET_USER_CARDS_START = 'GET_USER_CARDS_START';
export const GET_USER_CARDS_SUCCESS = 'GET_USER_CARDS_SUCCESS';
export const GET_USER_CARDS_FAILURE = 'GET_USER_CARDS_FAILURE';

export const getUserCards = input => dispatch => {
    dispatch({ type: GET_USER_CARDS_START });
    axiosWithAuth().get('http://localhost:5000/api/user_cards')
        .then(res => {
            dispatch({ type: GET_USER_CARDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_USER_CARDS_FAILURE, payload: err })
        })
}

export const GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_START = 'GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_START';
export const GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_SUCCESS = 'GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_SUCCESS';
export const GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_FAILURE = 'GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_FAILURE';

export const getCurrentAndPreviousCardsForLectureSegment = input => dispatch => {
    dispatch({ type: GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_START});
    // NEED TO ADD JSON REQUEST BODY SOMEHOW
    console.log("input is", input)
    console.log(typeof input)
    // const lecture_segment_id_object = { "lecture_segment_id": input}
    // console.log(lecture_segment_id_object)
    axiosWithAuth().get(`http://localhost:5000/api/user_cards/currentAndPreviousCardsForLectureSegment/${input}`)
        .then(res => {
            dispatch({ type: GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_FAILURE, payload: err })
        })
}

export const GET_USER_LECTURE_CARDS_START = 'GET_USER_LECTURE_CARDS_START';
export const GET_USER_LECTURE_CARDS_SUCCESS = 'GET_USER_LECTURE_CARDS_SUCCESS';
export const GET_USER_LECTURE_CARDS_FAILURE = 'GET_USER_LECTURE_CARDS_FAILURE';

export const getUserLectureCards = input => dispatch => {
    const lecture_id = input
    dispatch({ type: GET_USER_LECTURE_CARDS_START })
    axiosWithAuth().get(`http://localhost:5000/api/user_cards/lecture/${lecture_id}`)
        .then(res => {
            dispatch({ type: GET_USER_LECTURE_CARDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_USER_LECTURE_CARDS_FAILURE, payload: err})
        })
}

export const HIDE_USER_LECTURE_CARD_START = 'HIDE_USER_LECTURE_CARD_START';
export const HIDE_USER_LECTURE_CARD_SUCCESS = 'HIDE_USER_LECTURE_CARD_SUCCESS';
export const HIDE_USER_LECTURE_CARD_FAILURE = 'HIDE_USER_LECTURE_CARD_FAILURE';

export const hideUserLectureCard = input => dispatch => {
    const user_lecture_card_id = input
    dispatch({ type: HIDE_USER_LECTURE_CARD_START })
    axiosWithAuth().put(`http://localhost:5000/api/user_cards/${user_lecture_card_id}/hideCard`)
        .then(res => {
            dispatch({ type: HIDE_USER_LECTURE_CARD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: HIDE_USER_LECTURE_CARD_FAILURE, payload: err })
        })
}