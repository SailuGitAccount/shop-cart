import { actionTypes } from "./ActionTypes";

const initialState = {
  userName: "Guest",
  productCount: 0,
};
export const userReducer = (state, action) => {
  if (!state) {
    state = initialState;
  }
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {
        ...state,
        userName: action.payLoad,
      };
    case actionTypes.INCREMENT_COUNT:
      return {
        ...state,
        productCount: state.productCount + 1,
      };
    case actionTypes.DECREMENT_COUNT:
      return {
        ...state,
        productCount:
          state.productCount >= 0 ? state.productCount - 1 : state.productCount,
      };
    case actionTypes.UPDATE_PRODUCT_COUNT:
      return {
        ...state,
        productCount: action.payLoad,
      };

    /*case "CARTLOADING":
      return {
        ...state,
        isLoading: action.payLoad,
      };*/
    default:
      return state;
  }
};
