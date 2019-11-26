import { ADD_TO_BASKET, REMOVE_FROM_BASKET, EMPTY_BASKET } from '../actionTypes';

/**
 * Add to Basket action creator
 * @param {Object} payload - The payload value
 * @returns {Object} action creator
 */
export function addToBasket(payload) {
  return {
    type: ADD_TO_BASKET,
    payload
  };
}

/**
 * Remove from basket action creator
 * @param {Object} payload - The payload value
 * @returns {Object} action creator
 */
export function removeFromBasket(payload) {
  return {
    type: REMOVE_FROM_BASKET,
    payload
  };
}

/**
 * Empty Basket action creator
 * @returns {Object} action creator
 */
export function emptyBasket() {
  return {
    type: EMPTY_BASKET
  };
}
