const initialSate = {
  soldItems: []
};

const soldReducer = (state = initialSate, action) => {
  return {
    ...state,
    soldItems: action.payload
  };
};

export default soldReducer;
