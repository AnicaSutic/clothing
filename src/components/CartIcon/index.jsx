import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './index.scss';
import {connect} from 'react-redux';
import { toggleCart } from '../../redux/cart/cartActions';

function CartIcon({toggleCart}) {
    return (
        <div class='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        toggleCart : () => {
            dispatch(toggleCart())
        }
    }
}

export default connect(null,mapDispatchToProps)(CartIcon)
