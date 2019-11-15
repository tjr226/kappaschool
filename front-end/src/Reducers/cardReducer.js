import {
    GET_CARDS_FOR_LECTURE_STATS_START, GET_CARDS_FOR_LECTURE_STATS_SUCCESS, GET_CARDS_FOR_LECTURE_STATS_FAILURE,
    GET_CARDS_FOR_LECTURE_QUIZZES_START, GET_CARDS_FOR_LECTURE_QUIZZES_SUCCESS, GET_CARDS_FOR_LECTURE_QUIZZES_FAILURE,
    INCREASE_CARD_TIME_START, INCREASE_CARD_TIME_SUCCESS, INCREASE_CARD_TIME_FAILURE,
    DECREASE_CARD_TIME_START, DECREASE_CARD_TIME_SUCCESS, DECREASE_CARD_TIME_FAILURE,
    
} from '../Actions/cardActions.js';

const initialCardState = {

    // There are two lists being used
    // cardsForStats and cardsForQuizzes are obtained from the same endpoint
    // cardsForStats is called often to populate stats on the sidebar
    // cardsForQuizzes is only called when starting a quiz, so there is data in the Redux Store that doesn't change when going through the quiz

    cardsForStats: [],
    cardsForQuizzes: [],
    gettingCardsForStats: false,
    gettingCardsForQuizzes: false,
    increasingCardTime: false,
    decreasingCardTime: false,
    error: null,
    
};

export const cardReducer = (state = initialCardState, action) => {
    switch (action.type) {
        case GET_CARDS_FOR_LECTURE_STATS_START:
            return {
                ...state,
                gettingCardsForStats: true,
                error: ''
            }
        case GET_CARDS_FOR_LECTURE_STATS_SUCCESS:
            return {
                ...state,
                gettingCardsForStats: false,
                cardsForStats: action.payload
            }
        case GET_CARDS_FOR_LECTURE_STATS_FAILURE:
            return {
                ...state,
                gettingCardsForStats: false,
                error: action.payload
            }
        case GET_CARDS_FOR_LECTURE_QUIZZES_START:
            return {
                ...state,
                gettingCardsForQuizzes: true,
                error: ''
            }
        case GET_CARDS_FOR_LECTURE_QUIZZES_SUCCESS:
            return {
                ...state,
                gettingCardsForQuizzes: false,
                cardsForQuizzes: action.payload
            }
        case GET_CARDS_FOR_LECTURE_QUIZZES_FAILURE:
            return {
                ...state,
                gettingCardsForQuizzes: false,
                error: action.payload,
            }
        case INCREASE_CARD_TIME_START:
            return {
                ...state,
                increasingCardTime: true,
                error: null
            }
        case INCREASE_CARD_TIME_SUCCESS:
            return {
                ...state,
                increasingCardTime: false,
                cardsForStats: action.payload
            }
        case INCREASE_CARD_TIME_FAILURE:
            return {
                ...state,
                increasingCardTime: false,
                error: action.payload
            }
        case DECREASE_CARD_TIME_START:
            return {
                ...state,
                decreasingCardTime: true,
                error: null
            }
        case DECREASE_CARD_TIME_SUCCESS:
            return {
                ...state,
                decreasingCardTime: false,
                cardsForStats: action.payload
            }
        case DECREASE_CARD_TIME_FAILURE:
            return {
                ...state,
                decreasingCardTime: false,
                error: action.payload
            }
        default:
            return state;
    }
}