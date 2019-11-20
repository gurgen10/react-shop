import { BASKET_COUNT_DECREMENT, BASKET_COUNT_INCREMENT, SHOW_PURCHASE_MODAL } from '../actionTypes';

export function incrementBasketCount() {
  return {
    type: BASKET_COUNT_INCREMENT
  };
}

export function decrementBasketCount(payload) {
  return {
    type: BASKET_COUNT_DECREMENT,
    payload
  };
}

export function showPurchaseModal(payload) {
  return {
    type: SHOW_PURCHASE_MODAL,
    payload
  };
}
