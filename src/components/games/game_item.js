import React, {Component} from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withRouter } from 'found';

class GameItem extends Component {
  render() {
    const {game} = this.props;
    return (
      <tr onClick={this.handleClick}>
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

  handleClick = () => {
    const {internalId} = this.props.game;
    // Programatically replace path... instead of using Link!
    this.props.router.replace(`/games/${internalId}`);
  }
}

export default createFragmentContainer(withRouter(GameItem), {
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