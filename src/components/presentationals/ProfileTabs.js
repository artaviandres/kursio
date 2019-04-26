import React from 'react';
import { Tab } from 'semantic-ui-react';

import { Row } from 'react-flexbox-grid';
import CourseCard from '../presentationals/CourseCard';
import Text from '../presentationals/Text';
import QuizItem from '../presentationals/QuizItem';
import OrderItem from '../presentationals/OrderItem';


import '../../styles/layout.scss';
import '../../styles/tab.scss';
import '../../styles/icons.scss';
import '../../styles/course-card.scss';

//img
import ReactBg from '../../assets/img/logo-og.png';
import VueBg from '../../assets/img/vue.png';
import CookiesBg from '../../assets/img/cookies.jpg';

const panes = [
  {
    menuItem: 'My Courses', render: () => <Tab.Pane>
      <Row className="row-container row-courses cards-wrapper">
        <CourseCard
          title="React Basics"
          category="Development"
          rating="4.5"
          numberOfRatings="18"
          price="$55"
          image={ReactBg}
          description="Learn how to use one of the most powerful Front-end tools such as React from scratch, with all its twists."
          type="userProfileProgress"
          progress="75"
        />
        <CourseCard
          title="VueJS Basics"
          category="Development"
          rating="3"
          numberOfRatings="93"
          price="$95"
          image={VueBg}
          description="Being VueJS one of the most used Javascript Libraries for creating powerful and dynamic Views, it's becoming a must for Front-end developers all around the world."
          type="userProfileProgress"
          progress="85"
        />
        <CourseCard
          title="VueJS Basics"
          category="Development"
          rating="3"
          numberOfRatings="93"
          price="$95"
          image={VueBg}
          description="Being VueJS one of the most used Javascript Libraries for creating powerful and dynamic Views, it's becoming a must for Front-end developers all around the world."
          type="userProfileProgress"
          progress="65"
        />
        <CourseCard
          title="Baking some amazing Cookies!"
          category="Cooking"
          rating="5"
          numberOfRatings="93"
          price="$25"
          image={CookiesBg}
          description="As a software engineer. i love to bake some cookies as well, and they're usually delicious!!"
          type="userProfileProgress"
          progress="70"
        />
      </Row>
    </Tab.Pane>
  },
  {
    menuItem: 'My Quizzes', render: () => <Tab.Pane>
      <Text size="22px" type="thin" margin="0 0 20px 0">My Quizzes</Text>
      <div>
        <div className="stm-lms-user-quiz__head heading_font">
          <div className="stm-lms-user-quiz__head_title">Course</div>
          <div className="stm-lms-user-quiz__head_quiz">Quiz</div>
          <div className="stm-lms-user-quiz__head_status">Status</div>
        </div>
        <QuizItem
        courseUrl="https://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/"
        quizUrl="ttps://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/1073-755"
        quizStatus="passed"
        quizPercentage="80"
        />
        <QuizItem
        courseUrl="https://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/"
        quizUrl="ttps://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/1073-755"
        quizStatus="failed"
        quizPercentage="60"
        />
        <QuizItem
        courseUrl="https://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/"
        quizUrl="ttps://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/1073-755"
        quizStatus="passed"
        quizPercentage="80"
        />
        <QuizItem
        courseUrl="https://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/"
        quizUrl="ttps://masterstudy.stylemixthemes.com/course-hub/courses/how-to-be-a-dj-make-electronic-music/1073-755"
        quizStatus="passed"
        quizPercentage="80"
        />
      </div>
    </Tab.Pane>
  },
  { menuItem: 'My Orders', render: () => <Tab.Pane>
    <Text size="22px" type="thin" margin="0 0 20px 0">My Orders</Text>
    <OrderItem
    id="313915556450825cb9429a9838a"
    date="April 19, 2019 3:38 am"
    status="Pending"
    image="https://masterstudy.stylemixthemes.com/course-hub/wp-content/uploads/sites/10/2018/08/james-connolly-540573-unsplash-min-300x225.jpg"
    categories="Exercise, Skiing"
    course={{
      title:"Skiing basic Instruction and Videos",
      url:"https://masterstudy.stylemixthemes.com/course-hub/courses/skiing-basic-instruction-and-videos/",
      price:"46"
    }}
    />
    <OrderItem
    id="313915556450825cb9429a9234a"
    date="April 24, 2019 3:24 am"
    status="Pending"
    image="https://masterstudy.stylemixthemes.com/course-hub/wp-content/uploads/sites/10/2018/08/james-connolly-540573-unsplash-min-300x225.jpg"
    categories="Exercise, Skiing"
    course={{
      title:"Skiing basic Instruction and Videos",
      url:"https://masterstudy.stylemixthemes.com/course-hub/courses/skiing-basic-instruction-and-videos/",
      price:"46"
    }}
    />
  </Tab.Pane> },
]

const ProfileTabs = () => <Tab className="general-tabs profile-tabs" grid={{ paneWidth: 12, tabWidth: 12 }} panes={panes} />

export default ProfileTabs