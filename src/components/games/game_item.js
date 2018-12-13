import React, {Component} from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class GameItem extends Component {
  render() {
    const {game} = this.props;
    return (
      <tr>
        <td>{game.whitePlayer.lastName}, {game.whitePlayer.firstName}</td>
        <td>{game.blackPlayer.lastName}, {game.blackPlayer.firstName}</td>
        <td>{game.event}</td>
        <td>{game.site}</td>
        <td>{game.round}</td>
        <td>{game.result}</td>
        <td>{game.year}</td>
      </tr>
    );
  }
}

export default createFragmentContainer(GameItem, {
  game: graphql`
    fragment gameItem_game on Game {
      id
      internalId
      gameInfo
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
    }
  `,
});