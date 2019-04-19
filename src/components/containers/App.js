import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaRegLightbulb } from "react-icons/fa";
import Category from '../presentationals/Category';
import Header from '../presentationals/Header';
import HeaderCarousel from '../presentationals/HeaderCarousel';
import LogInModal from '../presentationals/LogInModal';
import SignUpModal from '../presentationals/SignUpModal';
import CourseCard from '../presentationals/CourseCard';
import Text from '../presentationals/Text';

import '../../styles/app.scss';

//img
import ReactBg from '../../assets/img/logo-og.png';
import VueBg from '../../assets/img/vue.png';
import CookiesBg from '../../assets/img/cookies.jpg';

export default function App() {
  const { i18n, t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState('');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const openLogIn = () => {
    setModalOpen(true);
    setSelectedModal('login')
  };

  const openSignUp = () => {
    setModalOpen(true);
    setSelectedModal('signup')
  };

  const categories = [
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_3d_print'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_architectural'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_art_and_design'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_audio_and_music'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_communication'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_conceptual_art'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_development'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_health_and_fitness'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_material_design'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_photography'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_shapes'
    },
    {
      icon: <FaRegLightbulb size={22} />,
      text_key: 'category_theatre'
    },
  ]

  return (
    <React.Fragment>
      <Header changeLanguage={(val) => changeLanguage(val)} onOpenLogIn={() => openLogIn()} onOpenSignUp={() => openSignUp()} />
      <div className="header-carousel">
      <HeaderCarousel />
      </div>
      <Grid fluid className="app-container">
        <Row >
          {categories.map(category => <Category key={category.text_key} icon={category.icon} text={t(category.text_key)} />)}
        </Row>
        <Row between="md" className="row-container section-title">
          <Col xs={12}>
            <Text size="35px" type="thin" margin="0">Recent Courses</Text>
          </Col>
        </Row>
        <Row className="row-container">
          <CourseCard
            title="React Basics"
            category="Development"
            rating="4.5"
            numberOfRatings="18"
            price="$55"
            image={ReactBg}
            description="Learn how to use one of the most powerful Front-end tools such as React from scratch, with all its twists."
          />
          <CourseCard
            title="VueJS Basics"
            category="Development"
            rating="3"
            numberOfRatings="93"
            price="$95"
            image={VueBg}
            description="Being VueJS one of the most used Javascript Libraries for creating powerful and dynamic Views, it's becoming a must for Front-end developers all around the world."
          />
          <CourseCard
            title="Baking some amazing Cookies!"
            category="Cooking"
            rating="5"
            numberOfRatings="93"
            price="$25"
            image={CookiesBg}
            description="As a software engineer. i love to bake some cookies as well, and they're usually delicious!!"
          />
          <CourseCard
            title="VueJS Basics"
            category="Development"
            rating="3"
            numberOfRatings="93"
            price="$95"
            image={VueBg}
            description="Being VueJS one of the most used Javascript Libraries for creating powerful and dynamic Views, it's becoming a must for Front-end developers all around the world."
          />
          <CourseCard
            title="Baking some amazing Cookies!"
            category="Cooking"
            rating="5"
            numberOfRatings="93"
            price="$25"
            image={CookiesBg}
            description="As a software engineer. i love to bake some cookies as well, and they're usually delicious!!"
          />
          <CourseCard
            title="VueJS Basics"
            category="Development"
            rating="3"
            numberOfRatings="93"
            price="$95"
            image={VueBg}
            description="Being VueJS one of the most used Javascript Libraries for creating powerful and dynamic Views, it's becoming a must for Front-end developers all around the world."
          />
          <CourseCard
            title="Baking some amazing Cookies!"
            category="Cooking"
            rating="5"
            numberOfRatings="93"
            price="$25"
            image={CookiesBg}
            description="As a software engineer. i love to bake some cookies as well, and they're usually delicious!!"
          />
          <CourseCard
            title="VueJS Basics"
            category="Development"
            rating="3"
            numberOfRatings="93"
            price="$95"
            image={VueBg}
            description="Being VueJS one of the most used Javascript Libraries for creating powerful and dynamic Views, it's becoming a must for Front-end developers all around the world."
          />
        </Row>
        <Row>
          <Col md={12} className="subscribe-container">
            <Grid className="subscribe-content">
              <Row style={{ height: '100%' }}>
                <Col md={6} xs={12} className="subscribe-panel">
                  <h3>Subscribe to our newsletter</h3>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                </Col>
                <Col md={6} xs={12} className="subscribe-panel">
                  <h1>
                    Your E-mail address
                  </h1>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
      {isModalOpen && selectedModal === 'login' ? <LogInModal /> : null}
      {isModalOpen && selectedModal === 'signup' ? <SignUpModal /> : null}
    </React.Fragment>
  );
}
