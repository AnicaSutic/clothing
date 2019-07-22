import { takeLatest, call, put } from "redux-saga/effects";
import * as actionTypes from "../constants/index";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shopActions";

export function* fetchCollectionAsync() {
  yield console.log("I am fired");

  try {
    const collectionRef = firestore.collection("collections"); // get our collection
    const snapshot = yield collectionRef.get(); // get back in promise
    // first arg function or method, secound is param that is sent to function
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    ); //call is the effect that invoke method,we want to yield this in case call takes longer than expected
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  //second par will run after this action
  // create non blocking code, app can run without pause, when this not finish
  yield takeLatest(actionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}
