import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Lessons from './Lessons.js';
import LessonsList from './LessonsList.js';
import PageNotFound from './PageNotFound.js';
import AdminAddLesson from './AdminAddLesson.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Lessons}/>
      <Route exact path="/lessons" component={LessonsList}/>
      <Route exact path="/lessons/:id" component={Lessons}/>
      <Route exact path="/adminAddLesson" component={AdminAddLesson}/>
      <Route component={PageNotFound}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
