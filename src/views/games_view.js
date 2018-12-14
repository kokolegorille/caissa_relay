import React, {Component} from 'react';
import {graphql, QueryRenderer} from 'react-relay';

import environment from "../environment";
import GameFilter from "../components/games/game_filter";
import GamesList from "../components/games/games_list";

export default class GamesView extends Component {
    state = {
      filter: {},
      order: 'ASC',
    }

    render() {
      return (
        <QueryRenderer
          environment={environment}
          query={graphql`
            query gamesView_Query(
              $filter: GameFilter!
              $order: SortOrder!
            ) {
              viewer {
                ...gamesList_viewer @arguments(filter: $filter, order: $order)
              }
            }
          `}
          variables={{
            filter: this.state.filter,
            order: this.state.order,
          }}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }
            return (
              <div>
                <GameFilter initialState={this.state} onHandleSubmit={this.handleFilterSubmit}/>
                <GamesList viewer={props.viewer} />
              </div>
            );
          }} 
        />
      );
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