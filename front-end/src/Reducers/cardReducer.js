import {
    GET_CARDS_FOR_LECTURE_STATS_START, GET_CARDS_FOR_LECTURE_STATS_SUCCESS, GET_CARDS_FOR_LECTURE_STATS_FAILURE,
    GET_CARDS_FOR_LECTURE_QUIZZES_START, GET_CARDS_FOR_LECTURE_QUIZZES_SUCCESS, GET_CARDS_FOR_LECTURE_QUIZZES_FAILURE,
    
} from '../Actions/cardActions.js';

const initialCardState = {
    // There are two lists being used
    // first is cardsForStats, all the cards for this user and lecture
    // second is cardsForQuizzes
    // the goal is to continuously update cardsForStats and have it match the database
    // while we use the cardsForQuizzes to create individual quizzes
    // that way we can hide cards in the quiz, without triggering a refresh of the data behind each lecture segment quiz
    cardsForStats: [],
    cardsForQuizzes: [],
    gettingCardsForStats: false,
    gettingCardsForQuizzes: false,
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
        default:
            return state;
    }
}