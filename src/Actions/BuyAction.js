import { PURCHASE } from '../actionTypes';

export function buyItems(payload) {
  return {
    type: PURCHASE,
    payload
  };
}
