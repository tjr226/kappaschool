import {
    GET_LECTURES_BY_CLASS_START, GET_LECTURES_BY_CLASS_SUCCESS, GET_LECTURES_BY_CLASS_FAILURE,
    GET_LECTURE_SECTIONS_BY_LECTURE_START, GET_LECTURE_SECTIONS_BY_LECTURE_SUCCESS, GET_LECTURE_SECTIONS_BY_LECTURE_FAILURE,
} from '../Actions/classActions.js';

const initialClassState = {
    lectures: [],
    gettingLectures: false,
    lecture_sections: [],
    gettingLectureSections: false,
    error: null,
};

export const classReducer = (state = initialClassState, action) => {
    switch (action.type) {
        case GET_LECTURES_BY_CLASS_START:
            return {
                ...state,
                gettingLectures: true,
                error: null,
            }
        case GET_LECTURES_BY_CLASS_SUCCESS:
            return {
                ...state,
                gettingLectures: false,
                lectures: action.payload
            }
        case GET_LECTURES_BY_CLASS_FAILURE:
            return {
                ...state,
                gettingLectures: false,
                error: action.payload
            }
        case GET_LECTURE_SECTIONS_BY_LECTURE_START:
            return {
                ...state,
                gettingLectureSections: true,
                error: null
            }
        case GET_LECTURE_SECTIONS_BY_LECTURE_SUCCESS:
            return {
                ...state,
                gettingLectureSections: false,
                lecture_sections: action.payload
            }
        case GET_LECTURE_SECTIONS_BY_LECTURE_FAILURE:
            return {
                ...state,
                gettingLectureSections: false,
                error: action.payload
            }
    default:
        return state;
    }
}