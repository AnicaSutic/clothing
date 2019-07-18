import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import CartItem from "../CartItem";
import {selectCartItems} from '../../redux/cart/cartSelectors';

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

// make sure that cart dropdown do not render whenewer state that is not related to this component change
function mapStateToProps(state) {
  return {
    cartItems: selectCartItems(state)
  };
}

export default connect(
  mapStateToProps,
  null
)(CartDropdown);
