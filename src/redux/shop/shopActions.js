import * as actionType from "../constants/index";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";


export function fetchCollectionsStart() {
    return {
      type: actionType.FETCH_COLLECTION_START
    };
  }

  export function fetchCollectionsSuccess(collectionsMap) {
    return {
      type: actionType.FETCH_COLLECTION_SUCCESS,
      payload: collectionsMap
    };
  }

  export function fetchCollectionsFailure(errorMessage) {
    return {
      type: actionType.FETCH_COLLECTION_FAILURE,
      payload:errorMessage
    };
  }
  
  export function fetchCollectionsStartAsync() {
    return dispatch => {
        const collectionRef = firestore.collection("collections"); // get our collection
        dispatch(fetchCollectionsStart()); // dispatch that fetch is started
        
        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap))
          this.setState({ loading: false });
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
  }
