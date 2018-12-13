import React, {Component} from 'react';

import {graphql, QueryRenderer} from 'react-relay';
import environment from './environment';

import GamesListViewer from "./components/games/games_list";

export default class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query app_Query(
            $filter: GameFilter!
            $order: SortOrder!
          ) {
            viewer {
              ...gamesList_viewer @arguments(filter: $filter, order: $order)
            }
          }
        `}
        variables={{
          filter: {},
          order: 'ASC'
        }}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <GamesListViewer viewer={props.viewer} />;
        }} 
      />
    );
  }
}