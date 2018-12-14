import React, {Component} from 'react';
import Chessground from "../chessground/chessground";

export default class GameViewer extends Component {
  state = { current_move_index: 0 }

  render() {
    const {current_move_index} = this.state;
    const {positions} = this.props;
    const current_position = positions[current_move_index] || {};
    const halfMoves = positions.length;

    return (
      <div>
        <p>Total half-moves : {halfMoves}</p>
        <p>{current_position.moveIndex}. {current_position.move}</p>
        <Chessground fen={current_position.fen} />
        <button onClick={this.first} className="btn btn-light" disabled={current_move_index === 0} >First</button>
        <button onClick={this.previous} className="btn btn-light" disabled={current_move_index === 0} >Previous</button>
        <button onClick={this.next} className="btn btn-light" disabled={current_move_index === halfMoves - 1} >Next</button>
        <button onClick={this.last} className="btn btn-light" disabled={current_move_index === halfMoves - 1} >Last</button>
      </div>
    );
  }

  first = () => {
    this.setState({current_move_index: 0})
  }

  previous = () => {
    this.setState({
      current_move_index: Math.max(
        0,
        this.state.current_move_index - 1
      )
    });
  }

  next = () => {
    this.setState({
      current_move_index: Math.min(
        this.props.positions.length - 1,
        this.state.current_move_index + 1
      )
    });
  }

  last = () => {
    this.setState({current_move_index: this.props.positions.length - 1})
  }
}