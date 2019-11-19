import { BASKET_COUNT_DECREMENT, BASKET_COUNT_INCREMENT } from "../actionTypes";

export function incrementBasketCount () {
    return {
        type: BASKET_COUNT_INCREMENT,
    }

}

export function decrementBasketCount (payload) {
    return {
        type: BASKET_COUNT_DECREMENT,
        payload
    }
}