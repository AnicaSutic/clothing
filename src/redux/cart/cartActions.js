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

export function removeItem(item) {
  return {
    type: actionType.REMOVE_ITEM,
    payload: item
  };
}

export function clearItemFromCart(item) {
  return {
    type: actionType.CLEAR_ITEM_FROM_CART,
    payload: item
  };
}

export function clearCart() {
  return {
    type:actionType.CLEAR_CART
  }
}
