import SHOP_DATA from './shop.data';

const initialState = {
    collections : SHOP_DATA
}

export function shopReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}