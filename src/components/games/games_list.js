import React, {Component} from 'react';
import {
  createPaginationContainer,
  graphql
} from 'react-relay';
import GameItem from './game_item';

class GamesList extends Component {
  render() {
    const {edges} = this.props.viewer.games;
    return (
      <div>
        <div style={{overflow: 'auto', height: '600px'}}>
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <th>White</th>
                <th>Black</th>
                <th>Event</th>
                <th>Result</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
            {edges.map(
              edge => <GameItem game={edge.node} key={edge.node.id} onHandleClick={this.props.onHandleClick} />
            )}
            </tbody>
          </table>
          <button onClick={() => this._loadMore()} className="btn btn-light" >
            Load More
          </button>
        </div>
      </div>
    );
  }
  
  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(
      10,  // Fetch the next 10 feed items
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
        count: {type: "Int", defaultValue: 10}
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