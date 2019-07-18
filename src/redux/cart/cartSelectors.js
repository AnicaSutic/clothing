import {createSelector} from 'reselect';

// select selector from state
const selectCart = state => state.cart;

// create selector
// pass it
// get return value - cartItems
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity,cartItem) => accumulatedQuantity + cartItem.quantity,0)
)