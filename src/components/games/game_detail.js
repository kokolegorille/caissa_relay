import React, {Component} from 'react';
import {
  createRefetchContainer,
  graphql
} from 'react-relay';

import GameViewer from "./game_viewer";

class GameDetail extends Component {
  render() {
    const {game} = this.props.viewer;
    //  Returns null to render nothing
    if(game == null) { return null }

    return (
      <div>
        <h3>
          {game.whitePlayer.lastName}, {game.whitePlayer.firstName} - &nbsp;
          {game.blackPlayer.lastName}, {game.blackPlayer.firstName}
        </h3>
        <dl className="dl-horizontal">
          <dt>Event</dt>
          <dd>{game.event}</dd>
          <dt>Site</dt>
          <dd>{game.site}</dd>
          <dt>Round</dt>
          <dd>{game.round}</dd>
          <dt>Result</dt>
          <dd>{game.result}</dd>
          <dt>Year</dt>
          <dd>{game.year}</dd>
          <dt>Pgn</dt>
          <dd>{game.pgn}</dd>
        </dl>
        <GameViewer positions={game.positions}/>
      </div>
      
    );
  }

  _refetch() {
    this.props.relay.refetch(
      {id: this.props.viewer.game.id},  // Our refetchQuery needs to know the `id`
      null,  // We can use the refetchVariables as renderVariables
      () => { console.log('Refetch done') },
      {force: true},  // Assuming we've configured a network layer cache, we want to ensure we fetch the latest data.
    );
  }
}

export default createRefetchContainer(
  GameDetail,
  {
    viewer: graphql`
      fragment gameDetail_viewer on Viewer 
      @argumentDefinitions(
        id: {type: "Int!"}
      )
      {
        game(id: $id) {
          id
          internalId
          gameInfo
          pgn
          blackPlayer {
            lastName
            firstName
          }
          whitePlayer {
            lastName
            firstName
          }
          event
          site
          round
          result
          year
          positions {
            move
            moveIndex
            fen
            zobristHash
          }
        }
      }
    `
  },
  graphql`
    # Refetch query to be fetched upon calling refetch.
    # Notice that we re-use our fragment and the shape of this query matches our fragment spec.
    query gameDetailRefetchQuery($id: Int!) {
      viewer {
        ...gameDetail_viewer @arguments(id: $id)
      }
    }
  `
);