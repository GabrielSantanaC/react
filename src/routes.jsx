/* eslint-disable import/no-duplicates */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todo" component={Todo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
