import { combineReducers } from 'redux';
import busketReducer from './busketReducer';
import soldReducer from './soldReducer';
import commonReducer from './commonReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    busket: busketReducer,
    sold: soldReducer,
    search:searchReducer,
    common:commonReducer
});

export default rootReducer;
