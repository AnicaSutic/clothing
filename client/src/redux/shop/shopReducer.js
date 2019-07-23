import * as actionType from "../constants/index";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

export function shopReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true
      };
    case actionType.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case actionType.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
