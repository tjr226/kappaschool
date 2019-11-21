import { axiosWithAuth } from '../axiosWithAuth.js';

const api_prefix = "http://localhost:5000/api";

export const GET_SECTIONS_BY_LECTURE_START = 'GET_SECTIONS_BY_LECTURE_START';
export const GET_SECTIONS_BY_LECTURE_SUCCESS = 'GET_SECTIONS_BY_LECTURE_SUCCESS';
export const GET_SECTIONS_BY_LECTURE_FAILURE = 'GET_SECTIONS_BY_LECTURE_FAILURE';

export const getSectionsByLecture = input => dispatch => {
    const lecture_id = input;
    dispatch({ type: GET_SECTIONS_BY_LECTURE_START })
    axiosWithAuth().get(`${api_prefix}/user_reading_cards/lecture/${lecture_id}/sections`)
        .then(res => {
            dispatch({ type: GET_SECTIONS_BY_LECTURE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_SECTIONS_BY_LECTURE_FAILURE, payload: err })
        })   
}