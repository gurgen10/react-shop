import { combineReducers } from 'redux';
import busketReducer from './busketReducer';

const rootReducer = combineReducers({
    busket: busketReducer
});

export default rootReducer;
