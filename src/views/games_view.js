import React, {Component} from 'react';
import {graphql, QueryRenderer} from 'react-relay';

import environment from "../environment";
import GameFilter from "../components/games/game_filter";
import GamesList from "../components/games/games_list";

export default class GamesView extends Component {
    state = {
      filter: {},
      order: 'DESC',
    }

    render() {
      const {id} = this.props.params;

      // Set class for A and B components, it depends on presence of id in params
      // (Is a game selected, or not)
      let classA, classB;
      if(id) {
        classA = "col-sm-12 col-md-3"
        classB = "col-sm-12 col-md-9"
      } else {
        classA = "col-sm-12 col-md-12"
        classB = ""
      }

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
              <div className="row">
                <div className={classA}>
                  <GameFilter initialState={this.state} onHandleSubmit={this.handleFilterSubmit}/>
                  <GamesList viewer={props.viewer} currentGameId={parseInt(id)} />
                </div>
                <div id="gamePanel" className={classB}>{this.props.children}</div>
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
        this.setState({order: 'DESC'});
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