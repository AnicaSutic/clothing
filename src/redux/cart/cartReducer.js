import * as actionType from "../constants/index";
import { addItemToCart } from "./cart.utils";

const initialState = {
  hidden: true,
  cartItems: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case actionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
}
