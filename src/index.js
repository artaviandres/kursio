import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BreakpointProvider } from 'react-socks';
import App from './components/containers/App';
import TeacherProfile from './components/containers/TeacherProfile';
import UserProfile from './components/containers/UserProfile';
import Certificates from './components/containers/Certificates';
import AboutUs from './components/containers/AboutUs';
import Course from './components/containers/Course';
import NotFound from './components/containers/NotFound';

//teacherHub
import THCourses from './components/containers/TeacherHub/Courses';

import store from './store/store';
import './index.scss';

import "./i18n";

ReactDOM.render(
  <Provider store={store}>
    <BreakpointProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/teacher" exact component={TeacherProfile} />
          <Route path="/profile" exact component={UserProfile} />
          <Route path="/certificates" exact component={Certificates} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/course" exact component={Course} />
          <Route path="/teacher/courses" exact component={THCourses} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </BreakpointProvider>
  </Provider>,
  document.getElementById('root')
);
