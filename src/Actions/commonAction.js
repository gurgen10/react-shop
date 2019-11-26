import { BASKET_COUNT_DECREMENT, BASKET_COUNT_INCREMENT, SHOW_PURCHASE_MODAL, SHOW_LOADING } from '../actionTypes';

/**
 * IncrementBasketCount action creator
 * @param {Number} payload - The payload value
 * @returns {Object} action creator
 */
export function incrementBasketCount() {
  return {
    type: BASKET_COUNT_INCREMENT
  };
}

/**
 * DecrementBasketCount action creator
 * @param {Number} payload - The payload value
 * @returns {Object} action creator
 */
export function decrementBasketCount(payload) {
  return {
    type: BASKET_COUNT_DECREMENT,
    payload
  };
}

/**
 * showPurchaseModal action creator
 * @param {Boolean} payload - The payload value
 * @returns {Object} action creator
 */
export function showPurchaseModal(payload) {
  return {
    type: SHOW_PURCHASE_MODAL,
    payload
  };
}

/**
 * showLoading action creator
 * @param {Boolean} payload - The payload value
 * @returns {Object} action creator
 */
export function showLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload
  };
}
