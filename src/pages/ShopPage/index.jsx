import React, { Component } from "react";
import CollectionsOverview from "../../components/CollectionsOverview";
import { Route } from "react-router-dom";
import CollectionPage from "../CollectionPage";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shopActions";
import WithSpinner from "../../components/HOC/withSpinner";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections"); // get our collection

    //whenever the collection changes
    // collectionRef.onSnapshot(async snapshot => {
    //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //     updateCollections(collectionsMap);
    //     this.setState({loading:false});
    // })

    // fetch data from firebase
    // fetch('https://firestore.googleapis.com/v1/projects/clothing-db-2a12a/databases/(default)/documents/collections')
    // .then(response => response.json())
    // .then(collections => console.log(collections))
    
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateCollections: collections => {
      dispatch(updateCollections(collections));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
