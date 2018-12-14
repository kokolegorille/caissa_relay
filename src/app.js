import React, {Component} from 'react';
import {graphql, QueryRenderer} from 'react-relay';

import "./css/app.scss";
import environment from './environment';
import Navbar from "./components/navbar";
import GameFilter from "./components/games/game_filter";
import GamesList from "./components/games/games_list";
import GameDetail from "./components/games/game_detail";

export default class App extends Component {
  state = {
    filter: {},
    order: 'ASC',
    id: 1
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <QueryRenderer
            environment={environment}
            query={graphql`
              query app_Query(
                $filter: GameFilter!
                $order: SortOrder!
                $id: Int!
              ) {
                viewer {
                  ...gamesList_viewer @arguments(filter: $filter, order: $order)
                  ...gameDetail_viewer @arguments(id: $id)
                }
              }
            `}
            variables={{
              filter: this.state.filter,
              order: this.state.order,
              id: this.state.id
            }}
            render={({error, props}) => {
              if (error) {
                return <div>Error!</div>;
              }
              if (!props) {
                return <div>Loading...</div>;
              }
              return (
                <div className="row">
                  <div className="col-sm-12 col-md-8">
                    <GameFilter initialState={this.state} onHandleSubmit={this.handleFilterSubmit}/>
                    <GamesList viewer={props.viewer} onHandleClick={this.handleGameClick} />
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <GameDetail viewer={props.viewer} />
                  </div>
                </div>
              );
            }} 
          />
        </div>
      </div>
    );
  }

  handleGameClick = (id) => {
    this.setState({id});
  }
  
  handleFilterSubmit = (filterState) => {
    if (filterState === null) {
      // Reset state to default
      this.setState({filter: {}});
      this.setState({order: 'ASC'});
      return;
    }

    const allowed = [
      'player', 'whitePlayer', 'blackPlayer',
      'event', 'site', 'round', 'result', 'year'
    ];

    // It is important to clean up attributes before submitting to graphql!
    let filtered = Object.keys(filterState)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = filterState[key];
        return obj;
      }, {});

    // It is important to convert year attribute 
    // from string to integer before submitting to graphql!
    if ("year" in filtered) { filtered.year = parseInt(filtered.year) }

    this.setState({filter: filtered});
    this.setState({order: filterState.order});
  }
}