import {
    GET_USER_CARDS_START, GET_USER_CARDS_SUCCESS, GET_USER_CARDS_FAILURE,
        GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_START,
        GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_SUCCESS,
        GET_CURRENT_AND_PREVIOUS_CARDS_FOR_LECTURE_SEGMENT_FAILURE,
    GET_USER_LECTURE_CARDS_START, GET_USER_LECTURE_CARDS_SUCCESS, GET_USER_LECTURE_CARDS_FAILURE,
    HIDE_USER_LECTURE_CARD_START, HIDE_USER_LECTURE_CARD_SUCCESS, HIDE_USER_LECTURE_CARD_FAILURE,
    

} from '../Actions/cardActions.js';

const initialCardState = {
    cardList: [],
    userCards: [],
    userLectureCards: [],
    gettingUserLectureCards: false,
    gettingCards: false,
    hidingUserLectureCard: false,
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
        case GET_USER_LECTURE_CARDS_START:
            return {
                ...state,
                gettingUserLectureCards: true,
                error: ''
            }
        case GET_USER_LECTURE_CARDS_SUCCESS:
            return {
                ...state,
                gettingUserLectureCards: false,
                userLectureCards: action.payload
            }
        case GET_USER_LECTURE_CARDS_FAILURE:
            return {
                ...state,
                gettingUserLectureCards: false,
                error: action.payload
            }
        // NOTE: HideUserLectureCards will almost certainly need to be changed
        // It hides the cards in the database, but does not update the data on the page
        case HIDE_USER_LECTURE_CARD_START:
            return {
                ...state,
                hidingUserLectureCard: true,
                error: ''
            }
        case HIDE_USER_LECTURE_CARD_SUCCESS:
            return {
                ...state,
                hidingUserLectureCard: false,
            }
        case HIDE_USER_LECTURE_CARD_FAILURE:
            return {
                ...state,
                hidingUserLectureCard: false,
                error: action.payload
            }
        default:
            return state;
    }
}