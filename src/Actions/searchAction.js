import { CHANGE_TITLE, CHANGE_MAX_PRICE } from '../actionTypes';

export const searchByTitle = (payload) => {
  return {
    type: CHANGE_TITLE,
    payload
  };
};

export const searchByPrice = (payload) => {
  return {
    type: CHANGE_MAX_PRICE,
    payload
  };
};
