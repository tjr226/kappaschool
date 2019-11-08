import { axiosWithAuth } from '../axiosWithAuth.js';

const api_prefix = "http://localhost:5000/api";

export const GET_USER_LECTURE_CARDS_START = 'GET_USER_LECTURE_CARDS_START';
export const GET_USER_LECTURE_CARDS_SUCCESS = 'GET_USER_LECTURE_CARDS_SUCCESS';
export const GET_USER_LECTURE_CARDS_FAILURE = 'GET_USER_LECTURE_CARDS_FAILURE';

export const getUserLectureCards = input => dispatch => {
    const lecture_id = input
    dispatch({ type: GET_USER_LECTURE_CARDS_START })
    axiosWithAuth().get(`${api_prefix}/user_cards/lecture/${lecture_id}`)
        .then(res => {
            dispatch({ type: GET_USER_LECTURE_CARDS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_USER_LECTURE_CARDS_FAILURE, payload: err})
        })
}

// NOTE: this is exactly the same as GET_USER_LECTURE_CARDS
// WHY: the current approach is to retrieve all cards for the lecture,
// then filter by LectureSection within React/Redux
// BUT - this requires two separate lists in the Redux store. One for overall lecture cards, one for quiz
// Keeping as is for now, but there's a potential task to refactor in Trello    

export const GET_CARDS_FOR_QUIZ_START = 'GET_CARDS_FOR_QUIZ_START'
export const GET_CARDS_FOR_QUIZ_SUCCESS = 'GET_CARDS_FOR_QUIZ_SUCCESS'
export const GET_CARDS_FOR_QUIZ_FAILURE = 'GET_CARDS_FOR_QUIZ_FAILURE'

export const getCardsForQuiz = input => dispatch => {
    const lecture_id = input;
    dispatch({ type: GET_CARDS_FOR_QUIZ_START });
    axiosWithAuth().get(`${api_prefix}/user_cards/lecture/${lecture_id}`)
        .then(res => {
            dispatch({ type: GET_CARDS_FOR_QUIZ_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_CARDS_FOR_QUIZ_FAILURE, payload: err })
        })
}


export const HIDE_USER_LECTURE_CARD_START = 'HIDE_USER_LECTURE_CARD_START';
export const HIDE_USER_LECTURE_CARD_SUCCESS = 'HIDE_USER_LECTURE_CARD_SUCCESS';
export const HIDE_USER_LECTURE_CARD_FAILURE = 'HIDE_USER_LECTURE_CARD_FAILURE';

export const hideUserLectureCard = input => dispatch => {
    // LECTURE_ID is needed to return the cards for that lecture, to populate the progress display on the right hand side of the screen
    const user_lecture_card_id = input;
    const lecture_id = 1;
    dispatch({ type: HIDE_USER_LECTURE_CARD_START })
    axiosWithAuth().put(`${api_prefix}/user_cards/${user_lecture_card_id}/lecture/${lecture_id}/hideCard`)
        .then(res => {
            dispatch({ type: HIDE_USER_LECTURE_CARD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: HIDE_USER_LECTURE_CARD_FAILURE, payload: err })
        })
}