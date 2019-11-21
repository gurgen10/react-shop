import { ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } from '../actionTypes';

const initialSate = {
  basket: [],
  totalPrice: 0
};

const basketReducer = (state = initialSate, action) => {
  let items = state.basket;

  switch (action.type) {
    case ADD_TO_BASKET: {
      action.payload.quantity = 1;
      let founded = false;
      console.log('items', items);
      console.log('basket', state.basket);
      console.log('--------------');
      

      items.forEach(item => {
        if (item.id === action.payload.id) {
          console.log(item);

          item.quantity++;
          console.log(item);

          founded = true;
        }
      });

      if (!founded) {
        items.push(action.payload);
      }

      return {
        ...state,
        basket: [...items],
        totalPrice: state.totalPrice + action.payload.price
      };
    }
    case REMOVE_FROM_BASKET: {
      items = items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        basket: items,
        totalPrice: state.totalPrice - (action.payload.price * action.payload.quantity)
      };
    }
    case EMPTY_BASKET: {
      return {
        ...state,
        basket: []
      };
    }
    default: return state;
  }
};

export default basketReducer;
