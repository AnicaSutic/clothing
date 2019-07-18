import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './index.scss';
import CollectionPreview from '../CollectionPreview';
import { selectShopCollectionForPreview } from '../../redux/shop/shopSelector';

function CollectionOverview({collections}) {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollProps}) => (
                     <CollectionPreview key={id} {...otherCollProps}/>
                ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollectionForPreview
})

export default connect(mapStateToProps,null) (CollectionOverview);