import {all,call,takeLatest,put} from 'redux-saga/effects';
import { clearCart } from './cartActions';
import * as actionType from "../constants/index";


export function* clearCartSignOut() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(actionType.SIGN_OUT_SUCCESS,clearCartSignOut);
}
export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}