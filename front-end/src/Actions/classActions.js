import { axiosWithAuth } from '../axiosWithAuth.js';

const api_prefix = "http://localhost:5000/api";

export const GET_LECTURES_BY_CLASS_START = 'GET_LECTURES_BY_CLASS_START';
export const GET_LECTURES_BY_CLASS_SUCCESS = 'GET_LECTURES_BY_CLASS_SUCCESS';
export const GET_LECTURES_BY_CLASS_FAILURE = 'GET_LECTURES_BY_CLASS_FAILURE';

export const getLecturesByClass = input => dispatch => {
    const class_id = input;
    dispatch({ type: GET_LECTURES_BY_CLASS_START })
    axiosWithAuth().get(`${api_prefix}/user_cards/class/${class_id}/findLectures`)
        .then(res => {
            dispatch({ type: GET_LECTURES_BY_CLASS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_LECTURES_BY_CLASS_FAILURE, payload: err })
        })
}

export const GET_LECTURE_SECTIONS_BY_LECTURE_START = 'GET_LECTURE_SECTIONS_BY_LECTURE_START';
export const GET_LECTURE_SECTIONS_BY_LECTURE_SUCCESS = 'GET_LECTURE_SECTIONS_BY_LECTURE_SUCCESS';
export const GET_LECTURE_SECTIONS_BY_LECTURE_FAILURE = 'GET_LECTURE_SECTIONS_BY_LECTURE_FAILURE';

export const getLectureSectionsByLecture = input => dispatch => {
    const lecture_id = input;
    dispatch({ type: GET_LECTURE_SECTIONS_BY_LECTURE_START })
    axiosWithAuth().get(`${api_prefix}/user_cards/lecture/${lecture_id}/findLectureSections`)
        .then(res => {
            dispatch({ type: GET_LECTURE_SECTIONS_BY_LECTURE_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: GET_LECTURE_SECTIONS_BY_LECTURE_FAILURE, payload: err })
        })
}
