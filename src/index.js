import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/containers/App';
import TeacherProfile from './components/containers/TeacherProfile';
import UserProfile from './components/containers/UserProfile';
import Certificates from './components/containers/Certificates';
import store from './store/store';
import './index.scss';

import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/teacher" exact component={TeacherProfile} />
        <Route path="/profile" exact component={UserProfile} />
        <Route path="/certificates" exact component={Certificates} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
