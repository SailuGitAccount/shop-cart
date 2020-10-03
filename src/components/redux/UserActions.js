import { actionTypes } from "./ActionTypes";
export const setUpdatedUserName = (userName) => {
  return {
    type: actionTypes.UPDATE_USERNAME,
    payLoad: userName,
  };
};
export const countIncrement = (count) => {
  return {
    type: actionTypes.INCREMENT_COUNT,
    //payLoad: count,
  };
};
export const countDecrement = (count) => {
  return {
    type: actionTypes.DECREMENT_COUNT,
    //payLoad: count,
  };
};
export const updateProductCount = (count) => {
  return {
    type: actionTypes.UPDATE_PRODUCT_COUNT,
    payLoad: count,
  };
};
