import React from 'react'
import './index.scss';
import CustomButton from '../CustomButton';

export default function CartDropdown() {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
