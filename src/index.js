import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import { render } from 'react-dom';

import "./css/app.scss";
import environment from "./environment";
import routes from "./routes";

import { BrowserProtocol, queryMiddleware } from 'farce';
import {
  createFarceRouter,
  createRender,
} from 'found';
import { Resolver } from 'found-relay';

const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: routes,
  render: createRender({}),
});

const app = document.getElementById('app');
render(
  <Router resolver={new Resolver(environment)} />,
  app,
);