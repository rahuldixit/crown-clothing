import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from './../collection-item/collection-item.component';

const CollectionPreview = ({id, ...otherCollectionProps}) => {
    return ( 
    <div className='collection-preview'>
        <h1 className='title'>{otherCollectionProps.title.toUpperCase()}</h1>
        <div className='preview'>
        {   otherCollectionProps.items
            .filter((item, idx)=> idx < 4)
            .map(({id, ...otherItemProps})=> (  
                <CollectionItem key={id} {...otherItemProps}/>
            ))
        }
        </div>
    </div>
    );
}
export default CollectionPreview;