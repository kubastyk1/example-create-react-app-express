import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import PageNotFound from './PageNotFound.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/lessons/:id" component={App}/>
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
