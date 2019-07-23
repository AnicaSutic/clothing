import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './index.scss';
import {connect} from 'react-redux';
import { toggleCart } from '../../redux/cart/cartActions';
import {selectCartItemsCount} from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect';


function CartIcon({toggleCart,itemCount}) {
    return (
        <div className='cart-icon' onClick={toggleCart}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
// call selector to not render of not necesarry
const mapStateToProps = createStructuredSelector({
    itemCount:selectCartItemsCount
})

function mapDispatchToProps(dispatch) {
    return {
        toggleCart : () => {
            dispatch(toggleCart())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)
