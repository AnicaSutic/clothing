import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchCollectionsStartAsync
} from "../../redux/shop/shopActions";
import { createStructuredSelector } from "reselect";
import {  selectIsCollectionLoaded } from "../../redux/shop/shopSelector";
import { CollectionsOverviewContainer } from "../../components/CollectionsOverview/index.container";
import CollectionPageContainer from "../CollectionPage/index.container";

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
        //   render={props => (
        //     <CollectionsOverviewWithSpinner
        //       isLoading={isCollectionFetching}
        //       {...props}
        //     />
        //   )}
        component = {CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
        //   render={props => (
        //     <CollectionPageWithSpinner
        //       isLoading={!isCollectionLoaded}
        //       {...props}
        //     />
        //   )}
        component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectIsCollectionLoaded
});

function mapDispatchToProps(dispatch) {
  return {
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);
