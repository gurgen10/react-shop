import { ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } from '../actionTypes';

const initialSate = {
  basket: [],
  totalPrice: 0
};

const basketReducer = (state = initialSate, action) => {
  let items = state.basket;
  console.log('Reducer state.basket', state.basket);

  switch (action.type) {
    case ADD_TO_BASKET: {
      action.payload.quantity = 1;

      let founded = false;

      items = state.basket.map(item => {
        if (item.id === action.payload.id) {
          item.quantity++;
          founded = true;
        }

        return item;
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
