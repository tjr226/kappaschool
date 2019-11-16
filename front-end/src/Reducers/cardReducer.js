import {
    GET_CARDS_FOR_LECTURE_STATS_START, GET_CARDS_FOR_LECTURE_STATS_SUCCESS, GET_CARDS_FOR_LECTURE_STATS_FAILURE,
    GET_CARDS_FOR_LECTURE_QUIZZES_START, GET_CARDS_FOR_LECTURE_QUIZZES_SUCCESS, GET_CARDS_FOR_LECTURE_QUIZZES_FAILURE,
    INCREASE_USER_READING_CARD_TIME_START, INCREASE_USER_READING_CARD_TIME_SUCCESS, INCREASE_USER_READING_CARD_TIME_FAILURE,
    DECREASE_USER_READING_CARD_TIME_START, DECREASE_USER_READING_CARD_TIME_SUCCESS, DECREASE_USER_READING_CARD_TIME_FAILURE,
    
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
    increasingUserReadingCardTime: false,
    decreasingUserReadingCardTime: false,
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
        case INCREASE_USER_READING_CARD_TIME_START:
            return {
                ...state,
                increasingUserReadingCardTime: true,
                error: null
            }
        case INCREASE_USER_READING_CARD_TIME_SUCCESS:
            return {
                ...state,
                increasingUserReadingCardTime: false,
                cardsForStats: action.payload
            }
        case INCREASE_USER_READING_CARD_TIME_FAILURE:
            return {
                ...state,
                increasingUserReadingCardTime: false,
                error: action.payload
            }
        case DECREASE_USER_READING_CARD_TIME_START:
            return {
                ...state,
                decreasingUserReadingCardTime: true,
                error: null
            }
        case DECREASE_USER_READING_CARD_TIME_SUCCESS:
            return {
                ...state,
                decreasingUserReadingCardTime: false,
                cardsForStats: action.payload
            }
        case DECREASE_USER_READING_CARD_TIME_FAILURE:
            return {
                ...state,
                decreasingUserReadingCardTime: false,
                error: action.payload
            }
        default:
            return state;
    }
}