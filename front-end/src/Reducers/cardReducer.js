import {
    GET_USER_CARDS_START, GET_USER_CARDS_SUCCESS, GET_USER_CARDS_FAILURE,

} from '../Actions/cardActions.js';

const initialCardState = {
    cardList: [],
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
                cardList: [],
                error: action.payload
            }
        default:
            return state;
    }
}