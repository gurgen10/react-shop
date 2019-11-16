import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import soldReducer from './soldReducer';
import commonReducer from './commonReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    basket: basketReducer,
    sold: soldReducer,
    search:searchReducer,
    common:commonReducer
});

export default rootReducer;
