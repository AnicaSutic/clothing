import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { toggleCart } from "../../redux/cart/cartActions";

// if i use history i need withRouter for component that is not in Route
// connect add dispatch function to our component so we can use it instead writing mapDispatchToProps
function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty!</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

// make sure that cart dropdown do not render whenewer state that is not related to this component change
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(CartDropdown)
);
