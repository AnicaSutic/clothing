import * as actionType from "../constants/index";

export function toggleCart() {
  return {
    type: actionType.TOGGLE_CART_HIDDEN
  };
}

export function addItem(item) {
  return {
    type: actionType.ADD_ITEM,
    payload: item
  };
}
