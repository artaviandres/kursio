import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './components/containers/App';
import TeacherProfile from './components/containers/TeacherProfile';
import './index.scss';

import "./i18n";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/teacher" exact component={TeacherProfile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
