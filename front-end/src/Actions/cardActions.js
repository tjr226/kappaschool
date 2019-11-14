import { axiosWithAuth } from '../axiosWithAuth.js';

const api_prefix = "http://localhost:5000/api";

export const GET_CURRENT_PREV_CARDS_LECTURE_SECTION_START = 'GET_CURRENT_PREV_CARDS_LECTURE_SECTION_START';
export const GET_CURRENT_PREV_CARDS_LECTURE_SECTION_SUCCESS = 'GET_CURRENT_PREV_CARDS_LECTURE_SECTION_SUCCESS';
export const GET_CURRENT_PREV_CARDS_LECTURE_SECTION_FAILURE = 'GET_CURRENT_PREV_CARDS_LECTURE_SECTION_FAILURE';

export const getCurrentPrevCardsLectureSection = input => dispatch => {
    const lecture_section_id = input;
    dispatch({ type: GET_CURRENT_PREV_CARDS_LECTURE_SECTION_START })
    axiosWithAuth().get(`${api_prefix}/user_cards/currentAndPreviousCardsForLectureSegment/${lecture_section_id}`)
        .then(res => {
            dispatch({ type: GET_CURRENT_PREV_CARDS_LECTURE_SECTION_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_CURRENT_PREV_CARDS_LECTURE_SECTION_FAILURE, payload: err })
        })
}

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
