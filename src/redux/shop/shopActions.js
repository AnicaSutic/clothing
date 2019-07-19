import * as actionType from "../constants/index";

export function updateCollections(collectionsMap) {
    return {
      type: actionType.UPDATE_COLLECTIONS,
      payload: collectionsMap
    };
  }