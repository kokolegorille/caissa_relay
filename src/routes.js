import {
  makeRouteConfig,
  Route,
} from 'found';
import React from 'react';
import { graphql } from 'react-relay';

import App from './app';
import HomeView from './views/home_view';
import GamesView from './views/games_view';
import GameView from './views/game_view';
import SubCategoriesView from './views/sub_categories_view';
import SubCategoryView from './views/sub_category_view';
import NoMatchView from './views/no_match_view';

// https://github.com/4Catalyzer/found
const renderer = ({Component, props}) => (
  Component && props ?
    <Component {...props} /> :
    <div><small>Loading...</small></div>
)

const GameViewQuery = graphql`
  query routes_gameView_Query(
    $id: Int!
  ) {
    viewer {
      ...gameView_viewer @arguments(id: $id)
    }
  }
`;

const SubCategoryViewQuery = graphql`
  query routes_subCategoryView_Query(
    $id: Int!
  ) {
    viewer {
      ...subCategoryView_viewer @arguments(id: $id)
    }
  }
`;

export default makeRouteConfig(
  <Route
    path="/"
    Component={App} >
    <Route Component={HomeView} />
    <Route
      path="/games"
      Component={GamesView} >
      <Route
        path="/:id"
        query={GameViewQuery}
        prepareVariables={params => ({id: parseInt(params.id)})}
        Component={GameView}
        renderer={renderer} 
      />
    </Route>
    <Route
      path="/eco"
      Component={SubCategoriesView} >
      <Route
        path="/:id"
        query={SubCategoryViewQuery}
        prepareVariables={params => ({id: parseInt(params.id)})}
        Component={SubCategoryView}
        renderer={renderer} 
      />
    </Route>
    <Route
      path="/*"
      Component={NoMatchView} 
    />
  </Route>
);