import * as actionType from '../constants/index';

const initialState = {
    hidden: true
}

export default function cartReducer(state = initialState,action) {
    switch(action.type) {
        case actionType.TOGGLE_CART_HIDDEN :
            return {
                ...state,
                hidden: !state.hidden
            }
        default: 
            return state;
    }
}