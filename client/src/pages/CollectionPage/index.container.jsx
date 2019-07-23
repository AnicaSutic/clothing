import {connect} from 'react-redux';
import {compose} from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shopSelector';
import WithSpinner from '../../components/HOC/withSpinner';
import CollectionPage from '.';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) =>  !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;