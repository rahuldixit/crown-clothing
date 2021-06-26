import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component { 
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const {match} = this.props; 
  return (<div className='shop-page'>
    <Route exact path={`${match.path}`} render={props => (
      <CollectionsOverviewContainer {...props} />
    )} />
    <Route path={`${match.path}/:collectionId`} render={props => (
      <CollectionPageContainer {...props} />
    )} />
  </div>);
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);