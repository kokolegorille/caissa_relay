import React, {Component} from 'react';
import {
  createPaginationContainer,
  graphql
} from 'react-relay';
import SubCategoryItem from './sub_category_item';

class SubCategoriesList extends Component {
  render() {
    const {edges} = this.props.viewer.subCategories;
    const {currentSubCategoryId} = this.props;

    return (
      <div>
      <div style={{overflow: 'auto', maxHeight: '800px'}}>
        <table className="table table-sm table-hover">
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>Pgn</th>
              <th>Zobrist Hash</th>
            </tr>
          </thead>
          <tbody>
          {edges.map(
            edge => <SubCategoryItem subCategory={edge.node} key={edge.node.id} currentSubCategoryId={currentSubCategoryId} />
          )}
          </tbody>
        </table>
        {this._renderLoadMore()}
      </div>
    </div>
    );
  }

  _renderLoadMore() {
    const {viewer} = this.props;
    if (!viewer.subCategories) return null;
    
    const {pageInfo} = viewer.subCategories;
    if (!pageInfo.hasNextPage) return null;

    return (
      <button onClick={() => this._loadMore()} className="btn btn-light" >
        Load More
      </button>
    );
  }

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(
      30,  // Fetch the next items
      error => {
        console.log(`error in load more... ${error}`);
      },
    );
  }
}

export default createPaginationContainer(
  SubCategoriesList,
  {
    viewer: graphql`
      fragment subCategoriesList_viewer on Viewer
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 30}
        cursor: {type: "String"}
        description: {type: "String"}
        code: {type: "String"}
        zobristHash: {type: "String"}
      ) {
        subCategories(
          first: $count
          after: $cursor
          description: $description
          code: $code
          zobristHash: $zobristHash
        ) @connection(key: "subCategoriesList_subCategories") {
          edges {
            node {
              id,
              ...subCategoryItem_subCategory
            }
          },
          pageInfo {
            hasPreviousPage
            hasNextPage
            startCursor
            endCursor
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.viewer && props.viewer.subCategories;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
      return {
        count,
        cursor,
        // in most cases, for variables other than connection filters like
        // `first`, `after`, etc. you may want to use the previous values.
        // orderBy: fragmentVariables.orderBy,
        
        // Pass matching variable on reload!
        description: fragmentVariables.description,
        code: fragmentVariables.code,
        zobristHash: fragmentVariables.zobristHash,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling loadMore.
      # Notice the re-use of fragment, and the shape of this query matches fragment spec.
      query subCategoriesListPaginationQuery(
        $count: Int!
        $cursor: String
        $description: String
        $code: String
        $zobristHash: String
      ) {
        viewer {
          ...subCategoriesList_viewer @arguments(count: $count, cursor: $cursor, description: $description, code: $code, zobristHash: $zobristHash)
        }
      }
    `
  }
);