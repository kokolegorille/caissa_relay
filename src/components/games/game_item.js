import React, {Component} from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { withRouter } from 'found';

class GameItem extends Component {
  render() {
    const {game, currentGameId} = this.props;
    let cssClass = "gameItem";
    if (game.internalId === currentGameId) { cssClass += " active" };
    return (
      <tr 
        title={game.pgn}
        className={cssClass} 
        onClick={this.handleClick} >
        <td>{game.whiteElo}</td>
        <td>{this.renderPlayer(game.whitePlayer)}</td>
        <td>{game.blackElo}</td>
        <td>{this.renderPlayer(game.blackPlayer)}</td>
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

  renderPlayer = player => {
    let result = player.lastName;
    if(player.firstName) { result += ` ${player.firstName}`}
    return result;
  }
}

export default createFragmentContainer(withRouter(GameItem), {
  game: graphql`
    fragment gameItem_game on Game {
      id
      internalId
      pgn
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