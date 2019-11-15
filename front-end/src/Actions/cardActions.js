import { axiosWithAuth } from '../axiosWithAuth.js';

const api_prefix = "http://localhost:5000/api";

export const GET_CARDS_FOR_LECTURE_STATS_START = 'GET_CARDS_FOR_LECTURE_STATS_START';
export const GET_CARDS_FOR_LECTURE_STATS_SUCCESS = 'GET_CARDS_FOR_LECTURE_STATS_SUCCESS';
export const GET_CARDS_FOR_LECTURE_STATS_FAILURE = 'GET_CARDS_FOR_LECTURE_STATS_FAILURE';

export const getUserLectureCards = input => dispatch => {
    const lecture_id = input
    dispatch({ type: GET_CARDS_FOR_LECTURE_STATS_START })
    axiosWithAuth().get(`${api_prefix}/user_cards/lecture/${lecture_id}`)
        .then(res => {
            dispatch({ type: GET_CARDS_FOR_LECTURE_STATS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_CARDS_FOR_LECTURE_STATS_FAILURE, payload: err})
        })
}

// NOTE: this is exactly the same as GET_USER_LECTURE_CARDS
// WHY: the current approach is to retrieve all cards for the lecture,
// then filter by LectureSection within React/Redux
// BUT - this requires two separate lists in the Redux store. One for overall lecture cards, one for quiz
// Keeping as is for now, but there's a potential task to refactor in Trello    

export const GET_CARDS_FOR_LECTURE_QUIZZES_START = 'GET_CARDS_FOR_LECTURE_QUIZZES_START'
export const GET_CARDS_FOR_LECTURE_QUIZZES_SUCCESS = 'GET_CARDS_FOR_LECTURE_QUIZZES_SUCCESS'
export const GET_CARDS_FOR_LECTURE_QUIZZES_FAILURE = 'GET_CARDS_FOR_LECTURE_QUIZZES_FAILURE'

export const getCardsForQuizzes = input => dispatch => {
    const lecture_id = input;
    dispatch({ type: GET_CARDS_FOR_LECTURE_QUIZZES_START });
    axiosWithAuth().get(`${api_prefix}/user_cards/lecture/${lecture_id}`)
        .then(res => {
            dispatch({ type: GET_CARDS_FOR_LECTURE_QUIZZES_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_CARDS_FOR_LECTURE_QUIZZES_FAILURE, payload: err })
        })
}

export const INCREASE_CARD_TIME_START = 'INCREASE_CARD_TIME_START';
export const INCREASE_CARD_TIME_SUCCESS = 'INCREASE_CARD_TIME_SUCCESS';
export const INCREASE_CARD_TIME_FAILURE = 'INCREASE_CARD_TIME_FAILURE';

export const increaseCardTime = input => dispatch => {
    const user_card_id = input;
    dispatch({ type: INCREASE_CARD_TIME_START });
    axiosWithAuth().put(`${api_prefix}/user_cards/${user_card_id}/increaseCardTime`)
        .then(res => {
            dispatch({ type: INCREASE_CARD_TIME_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: INCREASE_CARD_TIME_FAILURE, payload: err })
        })
}

export const DECREASE_CARD_TIME_START = 'DECREASE_CARD_TIME_START';
export const DECREASE_CARD_TIME_SUCCESS = 'DECREASE_CARD_TIME_SUCCESS';
export const DECREASE_CARD_TIME_FAILURE = 'DECREASE_CARD_TIME_FAILURE';

export const decreaseCardTime = input => dispatch => {
    const user_card_id = input;
    dispatch({ type: DECREASE_CARD_TIME_START });
    axiosWithAuth().put(`${api_prefix}/user_cards/${user_card_id}/decreaseCardTime`)
        .then(res => {
            dispatch({ type: DECREASE_CARD_TIME_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: DECREASE_CARD_TIME_FAILURE, payload: err })
        })
}