import React, {Component} from 'react';
import {
  createRefetchContainer,
  graphql
} from 'react-relay';
import { Link } from 'found';

import GameViewer from "../components/games/game_viewer";
import Properties from '../components/common/properties';

class GameView extends Component {
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
        <Link to="/games">Close Game</Link>
        <Properties properties={JSON.parse(game.gameInfo)} />
        <GameViewer positions={game.positions}/>

        <h3>Pgn</h3>
        <p>{game.pgn}</p>
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
  GameView,
  {
    viewer: graphql`
      fragment gameView_viewer on Viewer 
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
    query gameViewRefetchQuery($id: Int!) {
      viewer {
        ...gameView_viewer @arguments(id: $id)
      }
    }
  `
);