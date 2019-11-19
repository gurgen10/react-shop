import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../actionTypes';

export function addToBasket(payload) {
  return {
    type: ADD_TO_BASKET,
    payload
  };
}

export function removeFromBasket(payload) {
  return {
    type: REMOVE_FROM_BASKET,
    payload
  };
}
