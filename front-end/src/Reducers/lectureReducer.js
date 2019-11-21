import {
    GET_SECTIONS_BY_LECTURE_START, GET_SECTIONS_BY_LECTURE_SUCCESS, GET_SECTIONS_BY_LECTURE_FAILURE,

} from '../Actions/lectureActions.js';

const initialLectureState = {
    lectureSections: [],
    gettingLectureSections: false,
    error: null,
};

export const lectureReducer = (state = initialLectureState, action) => {
    switch (action.type) {
        case GET_SECTIONS_BY_LECTURE_START:
            return {
                ...state,
                gettingLectureSections: true,
                error: null,
            }
        case GET_SECTIONS_BY_LECTURE_SUCCESS:
            return {
                ...state,
                gettingLectureSections: false,
                lectureSections: action.payload
            }
        case GET_SECTIONS_BY_LECTURE_FAILURE:
            return {
                ...state,
                gettingLectureSections: false,
                error: action.payload
            }
        default:
            return state;
    }
}