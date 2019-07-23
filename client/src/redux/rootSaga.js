import {all, call} from 'redux-saga/effects';
import { fetchCollectionStart } from './shop/shopSaga';
import { userSagas } from './user/userSaga';
import { cartSagas } from './cart/cartSaga';



export default function* rootSaga() {
    yield all([
        call(fetchCollectionStart),
        call(userSagas),
        call(cartSagas)
    ]);
}