import { BASKET_COUNT_INCREMENT, BASKET_COUNT_DECREMENT, SHOW_PURCHASE_MODAL } from '../actionTypes';

const initialSate = {
  basketItemCount: 0,
  showPopup: false
};

const commonReducer = (state = initialSate, action) => {
  switch (action.type) {
    case BASKET_COUNT_INCREMENT: return {
      ...state,
      basketItemCount: state.basketItemCount + 1
    };
    case BASKET_COUNT_DECREMENT: return {
      ...state,
      basketItemCount: state.basketItemCount - action.payload
    };
    case SHOW_PURCHASE_MODAL: return {
      ...state,
      showPopup: action.payload
    };
    default: return {
      ...state
    };
  }
};

export default commonReducer;
