import React, {Component} from 'react';
import {
  createPaginationContainer,
  graphql
} from 'react-relay';
import GameItem from './game_item';

class GamesList extends Component {
  render() {
    const {edges} = this.props.viewer.games;
    const {currentGameId} = this.props;

    return (
      <div>
        <div style={{overflow: 'auto', maxHeight: '800px'}}>
          <table className="table table-sm table-hover">
            <thead>
              <tr>
              <th>Elo</th>
                <th>White</th>
                <th>Elo</th>
                <th>Black</th>
                <th>Event</th>
                <th>Site</th>
                <th>Round</th>
                <th>Result</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
            {edges.map(
              edge => <GameItem game={edge.node} key={edge.node.id} currentGameId={currentGameId} />
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
    if (!viewer.games) return null;
    
    const {pageInfo} = viewer.games;
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
  GamesList,
  {
    viewer: graphql`
      fragment gamesList_viewer on Viewer
      @argumentDefinitions(
        count: {type: "Int", defaultValue: 30}
        cursor: {type: "String"}
        filter: {type: "GameFilter", defaultValue: {}}
        order: {type: "SortOrder", defaultValue: ASC}
      ) {
        games(
          first: $count
          after: $cursor
          filter: $filter
          order: $order
        ) @connection(key: "gamesList_games") {
          edges {
            node {
              id,
              ...gameItem_game
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
      return props.viewer && props.viewer.games;
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
        filter: fragmentVariables.filter || {},
        order: fragmentVariables.order || 'ASC'
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling loadMore.
      # Notice the re-use of fragment, and the shape of this query matches fragment spec.
      query gamesListPaginationQuery(
        $count: Int!
        $cursor: String
        $filter: GameFilter!
        $order: SortOrder!
      ) {
        viewer {
          ...gamesList_viewer @arguments(count: $count, cursor: $cursor, filter: $filter, order: $order)
        }
      }
    `
  }
);