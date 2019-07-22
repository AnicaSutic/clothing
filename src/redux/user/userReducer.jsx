import * as actionType from '../constants/index';

const initialState = {
    currentUser: null,
    error: undefined
}

export default function userReducer(state = initialState,action) {
    switch(action.type) {
        // tha same action
        case actionType.SIGN_IN_SUCCESS :
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        case actionType.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case actionType.SIGN_IN_FAILURE:
        case actionType.SIGN_OUT_FAILURE:
        case actionType.SIGN_UP_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}