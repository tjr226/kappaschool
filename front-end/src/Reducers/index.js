import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { cardReducer } from './cardReducer';
import { classReducer } from './classReducer';

export default combineReducers({
    authReducer,
    cardReducer,
    classReducer,
});

