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
      state: {
        currentMoveIndex
      },
      props: {
        game
      }
    } = this;

    const {positions} = game;
    const currentPosition = positions[currentMoveIndex] || {};

    const properties = JSON.parse(game.gameInfo);
    
    const halfMoves = positions.length;

    const moves = positions
      .map(position => position.move)
      .filter(el => el);

    return (
      <div className="flex">
        <div>
          <Chessground fen={currentPosition.fen} />
          <button onClick={this.first} className="btn btn-light" disabled={currentMoveIndex === 0} >
            <i className='fa fa-backward'></i>
          </button>
          <button onClick={this.previous} className="btn btn-light" disabled={currentMoveIndex === 0} >
            <i className='fa fa-chevron-left'></i>
          </button>
          <button onClick={this.next} className="btn btn-light" disabled={currentMoveIndex === halfMoves - 1} >
            <i className='fa fa-chevron-right'></i>
          </button>
          <button onClick={this.last} className="btn btn-light" disabled={currentMoveIndex === halfMoves - 1} >
          <i className='fa fa-forward'></i>
          </button>
        </div>
        <div style={{overflow: 'auto', maxWidth: '450px', marginLeft: '2rem'}}>
          <Tabs labels={["Game Info", "Score Sheet"]}>
            <Properties properties={properties} />
            <div>
              <ScoreSheet moves={moves} currentMoveIndex={currentMoveIndex} handleClick={this.setMoveIndex}/>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }

  setMoveIndex = (index) => {
    this.setState({currentMoveIndex: index});
  }

  first = () => {
    this.setState({currentMoveIndex: 0});
  }

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