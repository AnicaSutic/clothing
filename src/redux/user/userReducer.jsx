import * as actionType from '../constants/index';

const initialState = {
    currentUser: null
}

export default function userReducer(state = initialState,action) {
    switch(action.type) {
        case actionType.SET_CURRENT_USER :
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            return state;
    }
}