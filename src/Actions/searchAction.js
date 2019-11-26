import { CHANGE_TITLE, CHANGE_MAX_PRICE } from '../actionTypes';

/**
 * searchByTitle action creator // arrow functionnery jsdoc - comment canonnerin reacvia chen talis
 * @param {Number} payload - The payload value
 * @returns {Object} action creator
 */
export function searchByTitle(payload) {
  return {
    type: CHANGE_TITLE,
    payload
  };
}

export const searchByPrice = (payload) => {
  return {
    type: CHANGE_MAX_PRICE,
    payload
  };
};
