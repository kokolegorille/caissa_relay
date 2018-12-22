import React, {Component} from 'react';

import Chessground from "../chessground/chessground";
import Properties from '../common/properties';
import Tabs from '../tabs/tabs';
import ScoreSheet from "./score_sheet";

const defaultState = { currentMoveIndex: 0 }

export default class GameViewer extends Component {
  state = defaultState

  componentWillReceiveProps() {
    // When game id change, the element is reloaded, reset internal state here!
    this.setState(defaultState)
  }

  render() {
    const {
      first, previous, next, last, setMoveIndex,
      isFirst, isLast,
      renderPlayer,
      state: { currentMoveIndex },
      props: { game }
    } = this;

    const {
      whitePlayer,
      blackPlayer,
      result,
      positions
    } = game;
    const currentPosition = positions[currentMoveIndex] || {};

    const properties = JSON.parse(game.gameInfo);
    
    const halfMoves = positions.length;

    const moves = positions
      .map(position => position.move)
      .filter(el => el);

    return (
      <div>
        <h3>
          {renderPlayer(whitePlayer)} - {renderPlayer(blackPlayer)} : {result}
        </h3>
        <div className="flex">
          <div>
            <Chessground fen={currentPosition.fen} />
            <button onClick={first} className="btn btn-light" disabled={isFirst()} >
              <i className='fa fa-backward'></i>
            </button>
            <button onClick={previous} className="btn btn-light" disabled={isFirst()} >
              <i className='fa fa-chevron-left'></i>
            </button>
            <button onClick={next} className="btn btn-light" disabled={isLast(halfMoves)} >
              <i className='fa fa-chevron-right'></i>
            </button>
            <button onClick={last} className="btn btn-light" disabled={isLast(halfMoves)} >
            <i className='fa fa-forward'></i>
            </button>
          </div>
          <div style={{overflow: 'auto', maxWidth: '450px', marginLeft: '2rem'}}>
            <Tabs labels={["Game Info", "Score Sheet", "PGN"]}>
              <Properties properties={properties} />
              <div>
                <ScoreSheet moves={moves} currentMoveIndex={currentMoveIndex} handleClick={setMoveIndex}/>
              </div>
              <div>
                {
                  game.pgn
                    .split("\n")
                    .map(el => [el, <br/>])
                }
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  renderPlayer = player => {
    let result = player.lastName.toUpperCase();
    if(player.firstName) { result += ` ${player.firstName}`}
    return result;
  }

  isFirst = () => this.state.currentMoveIndex === 0;
  isLast = halfMove => this.state.currentMoveIndex === halfMove - 1;

  setMoveIndex = index => this.setState({currentMoveIndex: index});

  first = () => this.setState({currentMoveIndex: 0});

  previous = () => {
    this.setState({
      currentMoveIndex: Math.max(
        0,
        this.state.currentMoveIndex - 1
      )
    });
  }

  next = () => {
    const {
      props: { game: { positions }},
      state: { currentMoveIndex }
    } = this;

    this.setState({
      currentMoveIndex: Math.min(
        positions.length - 1,
        currentMoveIndex + 1
      )
    });
  }

  last = () => {
    const {positions} = this.props.game;
    this.setState({currentMoveIndex: positions.length - 1})
  }
}