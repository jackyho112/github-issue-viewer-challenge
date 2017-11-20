import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IssueViewer from './containers/IssueViewer';
import './App.css';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Switch>
    <Route exact path="/" component={props => <IssueViewer {...props} />} />
    <Route component={FourOhFour} />
  </Switch>
);

export default App;
