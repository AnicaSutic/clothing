import {takeLatest, put, all, call} from 'redux-saga/effects';
import * as actionType from '../constants/index';
import { googleProvider, auth, createUserProfileDoc, getCurrentUser } from '../../firebase/firebase.utils';
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpFailure, signUpSuccess,  } from './userActions';


export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDoc,userAuth, additionalData);
        const snapshot = yield userRef.get();
        yield put(signInSuccess({id:snapshot.id, ...snapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error.message))
    }

}
export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* signInWithEmail({payload: {email,password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error.message))
    }
}

export function* isUserAuth() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth)
    } catch (error) {
        yield put(signInFailure)
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield (put(signOutSuccess()))
    } catch (error) {
        yield (put(signOutFailure(error.message)))
    }
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
          );   
        yield put(signUpSuccess({user, additionalData: {displayName}}))
    } catch (error) {
        yield put(signUpFailure(error.message))
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    yield getSnapshotFromUserAuth(user,additionalData)
}

export function* onGoogleSignInStart() {
    yield takeLatest(actionType.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* onEmailSignInStart() {
    yield takeLatest(actionType.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* onCheckUserSession() {
    yield takeLatest(actionType.CHECK_USER_SESSION, isUserAuth)
}

export function* onSignOutStart() {
    yield takeLatest(actionType.SIGN_OUT_START,signOut);
}

export function* onSignUpStart() {
    yield takeLatest(actionType.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(actionType.SIGN_UP_SUCCESS,signInAfterSignUp)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuth),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}