import { PURCHASE } from '../actionTypes';

/**
 * Buy Item action creator
 * @param {Object} payload - The payload value
 * @returns {Object} action creator
 */
export function buyItems(payload) {
  return {
    type: PURCHASE,
    payload
  };
}
