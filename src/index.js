import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { BreakpointProvider } from 'react-socks';
import App from './components/containers/App';
import UserProfile from './components/containers/UserProfile';
import MyProfile from './components/containers/MyProfile';
import Certificates from './components/containers/Certificates';
import AboutUs from './components/containers/AboutUs';
import Course from './components/containers/Course';
import NotFound from './components/containers/NotFound';

//Renat Kashapov - Dedicated Client
import Quiz from './components/containers/Renat/Quiz';
import Results from './components/containers/Renat/Results';
import RenatAdmin from './components/containers/Renat/Admin';
import RenatCoupons from './components/containers/Renat/Coupons';
import RenatQuestions from './components/containers/Renat/Questions';

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
          <Route path="/user" component={UserProfile} />
          <Route path="/profile" exact component={MyProfile} />
          <Route path="/certificates" exact component={Certificates} />
          <Route path="/about" exact component={AboutUs} />
          <Route path="/course" exact component={Course} />
          <Route path="/teacher/courses" exact component={THCourses} />

          {/* Renat Kashapov - Dedicated Client */}
          <Route path="/course/renat/quiz" exact component={Quiz} />
          <Route path="/course/renat/quiz/results" exact component={Results} />
          <Route path="/teacher/courses/renat" exact component={RenatAdmin} />
          <Route path="/teacher/courses/renat/coupons" exact component={RenatCoupons} />
          <Route path="/teacher/courses/renat/questions" exact component={RenatQuestions} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </BreakpointProvider>
  </Provider>,
  document.getElementById('root')
);
