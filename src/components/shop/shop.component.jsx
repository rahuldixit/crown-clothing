import React from 'react';
import {Switch, Route} from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections.overview.component';
import CollectionPage from '../../pages/collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>  
      <Route exact path={`${match.path}`} component={CollectionsOverview} />      
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />      
    </div>
  );
  
  export default ShopPage;