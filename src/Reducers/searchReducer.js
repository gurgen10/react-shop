import { CHANGE_TITLE, CHANGE_MAX_PRICE } from '../actionTypes';

const initialSate = {
    title: '',
    maxPrice: 0
};

const searchReducer = (state = initialSate, action) => {
    switch(action.type) {
        case CHANGE_TITLE: return {
            ...state,
            title: action.payload
        }
        case CHANGE_MAX_PRICE: return {
            ...state,
            maxPrice: action.payload
        }
        default: return{
            ...state
        }
    }

}

export default searchReducer;