import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actionTypes';

const initialSate = {
    basket: []
}

const basketReducer = (state = initialSate, action) => {
    let items = state.basket;
    
    switch(action.type) {
        
        case ADD_TO_BASKET: {
            action.payload.quantity = 1;
            let founded = false;
            
            let items = state.basket.map(item => {
                
                if(item.id === action.payload.id) {
                   item.quantity +=   1;
                    founded = true;    
                } 

                return item;
            });
            
            if (!founded)  {
                items.push(action.payload)  
            }
            
            return  {
                ...state,
                basket: items
               
            }
        }
        case REMOVE_FROM_BASKET: {
            console.log(action.payload.id);
            let index = items.filter(item =>  item.id === action.payload.id )
            items.splice(index, 1);
            return {
                ...state,
                basket: items,
            }
        }
        default: return state;
    } 
}

export default basketReducer;