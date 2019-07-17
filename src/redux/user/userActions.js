import * as actionType from '../constants/index';


export function setCurrentUser(user) {
    return {
        type: actionType.SET_CURRENT_USER,
        payload:user
    }
} 