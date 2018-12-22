import React, {Component} from 'react';

const defaultState = { description: '', code: '', zobristHash: '' };

export default class SubCategoryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = this.loadStateFromProps(this.props.initialState);
  }

  loadStateFromProps = ({description, code, zobristHash}) => {
    let initialState = Object.assign({}, defaultState);
    
    // Reload state from filter if needed
    initialState.description = description;
    initialState.code = code;
    initialState.zobristHash = zobristHash;

    return initialState;
  }

  render() {
    const {
      description,
      code,
      zobristHash,
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <h2>Filter Eco</h2>
        <div className="form-group">
          <input type="text" placeholder="Description" value={description} onChange={e => this.handleChange(e, "description")} className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Code" value={code} onChange={e => this.handleChange(e, "code")} className="form-control form-control-sm" />
        </div>
        <div className="form-group">
          <input type="text" placeholder="ZobristHash" value={zobristHash} onChange={e => this.handleChange(e, "zobristHash")} className="form-control form-control-sm" />
        </div>

        <div>
          <input type="submit" value="Submit" className="btn btn-light" />
          <button type="button" onClick={this.handleClear} className="btn btn-light" >Clear Filter</button>
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