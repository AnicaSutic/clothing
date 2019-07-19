import * as actionType from "../constants/index";


const initialState = {
    collections : null
}

export function shopReducer(state = initialState, action) {
    switch(action.type) {
        case actionType.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections:action.payload
            }
        default:
            return state;
    }
}