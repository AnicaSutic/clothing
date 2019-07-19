import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shopSelector';
import WithSpinner from '../HOC/withSpinner';
import CollectionsOverview from '.';
import {compose} from 'redux';

// name prop like is called in with spinner
const mapStateToProps = createStructuredSelector({
    isLoading : selectCollectionFetching
})

// isLoading send to withSpinner hoc
export const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);
