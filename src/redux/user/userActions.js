import * as actionType from '../constants/index';


// export function setCurrentUser(user) {
//     return {
//         type: actionType.SET_CURRENT_USER,
//         payload:user
//     }
// } 

// make actions for sign in

export const googleSignInStart = () => ({
    type: actionType.GOOGLE_SIGN_IN_START
});

export const signInSuccess = (user) => ({
    type: actionType.SIGN_IN_SUCCESS,
    payload: user
})

export const signInFailure = (error) => ({
    type: actionType.SIGN_IN_FAILURE,
    payload: error
})

export const emailSignInStart = (emailAndPassword) => ({
    type: actionType.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: actionType.CHECK_USER_SESSION
})

export const signOutStart = () => ({
    type: actionType.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: actionType.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: actionType.SIGN_OUT_FAILURE,
    payload:error
})


export const signUpStart = (userCredentials) => ({
    type: actionType.SIGN_UP_START,
    payload: userCredentials
})

export const signUpSuccess = ({user, additionalData}) => ({
    type: actionType.SIGN_UP_SUCCESS,
    payload: {user,additionalData}
})

export const signUpFailure = (error) => ({
    type: actionType.SIGN_UP_FAILURE,
    payload: error
})