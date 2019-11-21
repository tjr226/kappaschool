import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { cardReducer } from './cardReducer';
import { lectureReducer } from './lectureReducer';

export default combineReducers({
    authReducer,
    cardReducer,
    lectureReducer,
});

