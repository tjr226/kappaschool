import {
    GET_LECTURES_BY_CLASS_START, GET_LECTURES_BY_CLASS_SUCCESS, GET_LECTURES_BY_CLASS_FAILURE,
} from '../Actions/classActions.js';

const initialClassState = {
    lectures: [],
    gettingLectures: false,
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
    default:
        return state;
    }
}