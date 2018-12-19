import React, {Component} from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withRouter } from 'found';

class GameItem extends Component {
  render() {
    const {game, currentGameId} = this.props;
    const cssClass = (game.internalId === currentGameId) ? "active" : null;

    return (
      <tr className={cssClass} onClick={this.handleClick}>
        <td>{game.whitePlayer.lastName}, {game.whitePlayer.firstName}</td>
        <td>{game.whiteElo}</td>
        <td>{game.blackPlayer.lastName}, {game.blackPlayer.firstName}</td>
        <td>{game.blackElo}</td>
        <td>{game.event}</td>
        <td>{game.site}</td>
        <td>{game.round}</td>
        <td>{game.result}</td>
        <td>{this.sanitizeDate(game)}</td>
      </tr>
    );
  }

  handleClick = () => {
    const {internalId} = this.props.game;
    // Programatically replace path... instead of using Link!
    this.props.router.replace(`/games/${internalId}`);
  }

  sanitizeDate = game => `${game.year}.${this.sanitize(game.month)}.${this.sanitize(game.day)}`;

  sanitize = value => value ? ("00" + value).slice(-2) : "??";
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
      whiteElo
      blackElo
      event
      site
      round
      result
      year
      month
      day
    }
  `,
});