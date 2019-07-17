import React from 'react'
import './index.scss';
import CollectionItem from '../CollectionItem';

export default function CollectionPreview({title, items}) {
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item,idx) => idx < 4).map((item) => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </div>
        </div>
    )
}
