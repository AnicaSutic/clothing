import React from 'react'
import './index.scss';
import CustomButton from '../CustomButton';
import {connect} from 'react-redux';
import CartItem from '../CartItem';

function CartDropdown({cartItems}) {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cartItems: state.cart.cartItems
    }
}


export default connect(mapStateToProps,null)(CartDropdown)
