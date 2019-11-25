import { ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } from '../actionTypes';

const initialSate = {
  basket: [],
  totalPrice: 0
};

const basketReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_TO_BASKET: {
      let newBasket = state.basket;

      const foundItem = state.basket.filter(item => item.id === action.payload.id)[0];
      if (foundItem) {
        newBasket = state.basket.filter(item => item.id !== action.payload.id);
        foundItem.quantity++;
        newBasket.push(foundItem);
      } else {
        newBasket.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        basket: newBasket,
        totalPrice: state.totalPrice + action.payload.price
      };
    }
    case REMOVE_FROM_BASKET: {
      return {
        ...state,
        basket: state.basket.filter(item => item.id !== action.payload.id),
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
