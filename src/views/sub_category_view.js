import React, {Component} from 'react';
import {
  createRefetchContainer,
  graphql
} from 'react-relay';
import { Link } from 'found';

import EcoViewer from "../components/eco/eco_viewer";

class SubCategoryView extends Component {
  render() {
    const {subCategory} = this.props.viewer;
    //  Returns null to render nothing
    if(subCategory == null) { return null }
    
    return (
      <div>
        <Link to="/eco">
          <i className="fa fa-times"></i>
          Close Eco
        </Link>
        <EcoViewer subCategory={subCategory} />
      </div>
    );
  }

  _refetch() {
    this.props.relay.refetch(
      {id: this.props.viewer.subCategory.id},  // Our refetchQuery needs to know the `id`
      null,  // We can use the refetchVariables as renderVariables
      () => { console.log('Refetch done') },
      {force: true},  // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
    );
  }
}

export default createRefetchContainer(
  SubCategoryView,
  {
    viewer: graphql`
      fragment subCategoryView_viewer on Viewer 
      @argumentDefinitions(
        id: {type: "Int!"}
      )
      {
        subCategory(id: $id) {
          id
          internalId
          category {
            volume
            code
          }
          description
          code
          zobristHash
        }
      }
    `
  },
  graphql`
    # Refetch query to be fetched upon calling refetch.
    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
    query subCategoryViewRefetchQuery($id: Int!) {
      viewer {
        ...subCategoryView_viewer @arguments(id: $id)
      }
    }
  `
);