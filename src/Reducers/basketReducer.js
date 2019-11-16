import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actionTypes';

const initialSate = {
    basket: []
}

const basketReducer = (state = initialSate, action) => {

 
    switch(action.type) {
        case ADD_TO_BASKET: {
            action.payload.quantity = 1;
            console.log("before", action.payload);
            let item = state.basket.map(item => {
                if(item.id === action.payload.id) {
                    action.payload.quantity +=  1;
                    state.basket = state.basket.filter(item => item.id !== action.payload.id);
                    return action.payload;
                } 
                return action.payload;
            });
            item =item || action.payload
            console.log("after", item);
            
          
            return  {
                ...state,
                basket: state.basket.concat(item)
               
            }
        }
        case REMOVE_FROM_BASKET: {
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.payload.id),
            }
        }
        default: return state;
    }
    
}

export default basketReducer;