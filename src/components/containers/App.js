import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaRegLightbulb } from "react-icons/fa";
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import Category from '../presentationals/Category';
import Header from '../presentationals/Header';
import HeaderCarousel from '../presentationals/HeaderCarousel';
import LogInModal from '../presentationals/LogInModal';
import SignUpModal from '../presentationals/SignUpModal';
import Modal from '../presentationals/Modal';
import CourseCard from '../presentationals/CourseCard';
import Text from '../presentationals/Text';
import Testimonial from '../presentationals/Testimonial';
import HomeSvgBlock from '../presentationals/HomeSvgBlock';
import Footer from '../presentationals/Footer';
import Title from '../presentationals/Title';
import SubscribeNewsletter from '../presentationals/SubscribeNewsletter';

import '../../styles/app.scss';

//img
import UserPicture from '../../assets/img/profilepicture.jpg';
import ReactBg from '../../assets/img/logo-og.png';
import VueBg from '../../assets/img/vue.png';
import CookiesBg from '../../assets/img/cookies.jpg';
import Professor from '../../assets/img/professor.svg';
import PeopleFun from '../../assets/img/people_fun.svg';

function App({ logInModalStatus, signUpModalStatus }) {
  const { i18n, t } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const modalPanes = [
    { menuItem: 'Log In', render: () => <LogInModal /> },
    { menuItem: 'Sign Up', render: () => <SignUpModal /> },
  ]

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
  ];
  
  const dummyTestimonials = [
    {
      picture: UserPicture,
      name: 'Andrés Artavia',
      position: 'Software Engineer',
      quote: 'Kursio has helped me develop myself as a professional, learn new things, keep myself up-to-date with the amazing world of the technology.',
      hasStory: false
    },
    {
      picture: UserPicture,
      name: 'Andrés Artavia',
      position: 'Student',
      quote: 'Kursio has helped me develop myself as a professional, learn new things, keep myself up-to-date with the amazing world of the technology.',
      hasStory: true
    },
    {
      picture: UserPicture,
      name: 'Andrés Artavia',
      position: 'Software Engineer',
      quote: 'Kursio has helped me develop myself as a professional, learn new things, keep myself up-to-date with the amazing world of the technology.',
      hasStory: false
    },
  ];

  return (
    <React.Fragment>
      <Header changeLanguage={(val) => changeLanguage(val)} />
      <div className="header-carousel">
      <HeaderCarousel />
      </div>
      <Grid fluid className="app-container">
        <Row >
          {categories.map(category => <Category key={category.text_key} icon={category.icon} text={t(category.text_key)} />)}
        </Row>
        <Row between="md" className="row-container section-title">
          <Col xs={12}>
            <Title fontSize="42px">Recent Courses</Title>
          </Col>
        </Row>
        <Row className="row-container cards-wrapper">
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
      </Grid>
      <Row>
        <SubscribeNewsletter />
      </Row>
      <Grid fluid className="app-container">
        <Row between="md" className="row-container section-title">
          <Col xs={12}>
            <Title fontSize="42px">Our Customers</Title>
          </Col>
        </Row>
        <Row className="testimonials-container">
          {dummyTestimonials.map((testimonial) => (
            <Testimonial
              name={testimonial.name}
              picture={testimonial.picture}
              position={testimonial.position}
              quote={testimonial.quote}
              hasStory={testimonial.hasStory}
            />
          ))}
        </Row>
        <Row className="svgs-container">
          <Col md={6} xs={12} className="svg-container">
            <HomeSvgBlock
              image={Professor}
              title="Teach what you love."
              text="Being a professor at Kursio, you can generate income from your home."
              button="Become a Professor"
            />
          </Col>
          <Col md={6} xs={12} className="svg-container">
            <HomeSvgBlock
              image={PeopleFun}
              title="Get your company involved."
              text="Here at Kursio, we believe in teamwork and sharing. So, we offer special Enterprise Prices."
              button="Enterprise Prices"
            />
          </Col>
        </Row>
      </Grid>
      <Footer />
      {logInModalStatus || signUpModalStatus ?
        <Modal width="40%" height="70%">
          <Tab menu={{ secondary: true, pointing: true }} panes={modalPanes} className="modal-tab" />
        </Modal>
      : null}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  logInModalStatus: state.modalsReducer.logInModal ? state.modalsReducer.logInModal : false,
  signUpModalStatus: state.modalsReducer.signUpModal ? state.modalsReducer.signUpModal : false,
});

export default connect(mapStateToProps, null)(App);
