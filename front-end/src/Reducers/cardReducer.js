import {
    GET_USER_LECTURE_CARDS_START, GET_USER_LECTURE_CARDS_SUCCESS, GET_USER_LECTURE_CARDS_FAILURE,
    HIDE_USER_LECTURE_CARD_START, HIDE_USER_LECTURE_CARD_SUCCESS, HIDE_USER_LECTURE_CARD_FAILURE,
    GET_CARDS_FOR_QUIZ_START, GET_CARDS_FOR_QUIZ_SUCCESS, GET_CARDS_FOR_QUIZ_FAILURE,
    

} from '../Actions/cardActions.js';

const initialCardState = {
    // There are two lists being used
    // first is userLectureCards, all the cards for this user and lecture
    // second is cardsForQuiz
    // the goal is to continuously update userLectureCards and have it match the database
    // while we use the cardsForQuiz to create individual quizzes
    // that way we can hide cards in the quiz, without triggering a refresh of the data behind each lecture segment quiz
    userLectureCards: [],
    cardsForQuiz: [],
    gettingUserLectureCards: false,
    gettingCardsForQuiz: false,
    hidingUserLectureCard: false,
    error: null,
};

export const cardReducer = (state = initialCardState, action) => {
    switch (action.type) {
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
                userLectureCards: action.payload
            }
        case HIDE_USER_LECTURE_CARD_FAILURE:
            return {
                ...state,
                hidingUserLectureCard: false,
                error: action.payload
            }
        case GET_CARDS_FOR_QUIZ_START:
            return {
                ...state,
                gettingCardsForQuiz: true,
                error: ''
            }
        case GET_CARDS_FOR_QUIZ_SUCCESS:
            return {
                ...state,
                gettingCardsForQuiz: false,
                cardsForQuiz: action.payload
            }
        case GET_CARDS_FOR_QUIZ_FAILURE:
            return {
                ...state,
                gettingCardsForQuiz: false,
                error: action.payload,
            }
        default:
            return state;
    }
}