import {
    GET_USER_CARDS_START, GET_USER_CARDS_SUCCESS, GET_USER_CARDS_FAILURE,
        GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_START,
        GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_SUCCESS,
        GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_FAILURE,
    

} from '../Actions/cardActions.js';

const initialCardState = {
    cardList: [],
    userCards: [],
    gettingCards: false,
    error: null,
};

export const cardReducer = (state = initialCardState, action) => {
    switch (action.type) {
        case GET_USER_CARDS_START:
            return {
                ...state,
                gettingCards: true,
                error: ''
            }
        case GET_USER_CARDS_SUCCESS:
            return {
                ...state,
                gettingCards: false,
                cardList: action.payload,
                error: ''
            }
        case GET_USER_CARDS_FAILURE:
            return {
                ...state,
                gettingCards: false,
                userCards: [],
                error: action.payload
            }
        case GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_START:
            return {
                ...state,
                gettingCards: true,
                cardList: [],
                error: ''
            }
        case GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_SUCCESS:
            return {
                ...state,
                gettingCards: false,
                cardList: action.payload
            }
        case GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_FAILURE:
            return {
                ...state,
                gettingCards: false,
                error: action.payload
            }
        default:
            return state;
    }
}