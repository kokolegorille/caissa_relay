import React, {Component} from 'react';

const defaultState = {
  player: '', whitePlayer: '', blackPlayer: '',
  event: '', site: '', round: '', result: '', year: '',
  order: 'DESC',
};

export default class GameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = this.loadStateFromProps(this.props.initialState);
  }

  loadStateFromProps = (obj) => {
    let initialState = Object.assign({}, defaultState);
    const {filter, order} = obj;
    
    // Reload state from filter if needed
    if(Object.keys(filter).length > 0 && filter.constructor === Object) {
      Object.keys(filter)
        .filter(key => filter[key] && filter[key] != "")
        .forEach(key => {
          initialState[key] = filter[key];
        });
    }
    // Reload order from order
    initialState.order = order || 'ASC';
    return initialState;
  }

  render() {
    const {
      player,
      whitePlayer,
      blackPlayer,
      event,
      site,
      round,
      result,
      year,
      order,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Filter Games</h2>
        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" placeholder="Player" value={player} onChange={e => this.handleChange(e, "player")} className="form-control form-control-sm" />
          </div>
          <div className="col-sm-6">
            <input type="text" placeholder="Event" value={event} onChange={e => this.handleChange(e, "event")} className="form-control form-control-sm" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" placeholder="White Player" value={whitePlayer} onChange={e => this.handleChange(e, "whitePlayer")} className="form-control form-control-sm" />
          </div>
          <div className="col-sm-6">
            <input type="text" placeholder="Site" value={site} onChange={e => this.handleChange(e, "site")} className="form-control form-control-sm" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" placeholder="Black Player" value={blackPlayer} onChange={e => this.handleChange(e, "blackPlayer")} className="form-control form-control-sm" />
          </div>
          <div className="col-sm-6">
            <input type="text" placeholder="Round" value={round} onChange={e => this.handleChange(e, "round")} className="form-control form-control-sm" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <input type="text" placeholder="Result" value={result} onChange={e => this.handleChange(e, "result")} className="form-control form-control-sm" />
          </div>
          <div className="col-sm-6">
            <input type="number" placeholder="Year (equal or above)" value={year} onChange={e => this.handleChange(e, "year")} className="form-control form-control-sm" />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <div className="form-check form-check-inline">
              <input type="radio" value="ASC" checked={order === 'ASC'} onChange={e => this.handleChange(e, "order")} className="form-check-input" />
              <label className="form-check-label">
                Order ASC
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input type="radio" value="DESC" checked={order === 'DESC'} onChange={e => this.handleChange(e, "order")} className="form-check-input" />
              <label className="form-check-label">
                Order DESC
              </label>
            </div>
          </div>
          <div className="col-sm-6">
            {/* nothing here */}
          </div>
        </div>

        <div>
          <input type="submit" value="Submit" className="btn btn-light" />
          <button onClick={this.handleClear} className="btn btn-light" >Clear Filter</button>
        </div>
      </form>
    );
  }

  handleChange = (event, key) => {
    this.setState({ [key]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let newState = Object.assign({}, this.state);
    Object.keys(newState).forEach(
      (key) => (newState[key] == "") && delete newState[key]
    );

    this.props.onHandleSubmit(newState);
  }

  handleClear = () => {
    this.setState(defaultState);
    this.props.onHandleSubmit(null);
  }
}