import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Rating } from 'semantic-ui-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Header from '../presentationals/Header';
import ProfilePicture from '../presentationals/ProfilePicture';
import Text from '../presentationals/Text';
import SocialMediaIcon from '../presentationals/SocialMediaIcon';
import CourseCard from '../presentationals/CourseCard';
import '../../styles/teacher-profile.scss';

//img
import UserPicture from '../../assets/img/profilepicture.jpg';
import ReactBg from '../../assets/img/logo-og.png';
import VueBg from '../../assets/img/vue.png';
import CookiesBg from '../../assets/img/cookies.jpg';

export default function TeacherProfile() {
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

  return (
    <Grid fluid className="teacher-container">
      <Row>
        <Header changeLanguage={(val) => changeLanguage(val)} onOpenLogIn={() => openLogIn()} onOpenSignUp={() => openSignUp()}  />
      </Row>
      <Row className="top-margin">
        <Col md={3} xs={12} className="teacher-personal-info">
          <ProfilePicture img={UserPicture} size="big" />
          <Text size="24px" type="bold" margin="30px 0 10px 0">Andrés Artavia</Text>
          <Text size="16px" type="light" margin="0 0 15px 0 ">Software Engineer</Text>
          <div className="teacher-rating">
            <Rating icon='star' defaultRating={4} maxRating={5} disabled size='large' />
            <Text size="14px" type="bold" margin="0 0 0 10px">4 / 5</Text>
          </div>
          <Text size="13px" type="light" margin="5px 0 0 0" color="#ccc">22 Reviews</Text>
        </Col>
        <Col md={9} xs={12}>
          <Grid fluid>
            <Row between="md" className="row-container">
              <Col md={6} xs={4}>
                <Text size="50px" type="thin" margin="0">Andrés Artavia</Text>
              </Col>
              <Col md={4} xs={6} className="social-media">
                <SocialMediaIcon icon={<FaFacebookF size={17} />} backgroundColor="#3b5998" margin="0 5px" link="https://www.facebook.com/artaviandres" />
                <SocialMediaIcon icon={<FaInstagram size={17} />} backgroundColor="#DD2A7B" margin="0 5px" link="https://www.instagram.com/artaviandres/" />
                <SocialMediaIcon icon={<FaLinkedinIn size={17} />} backgroundColor="#0077b5" margin="0 5px" link="https://www.linkedin.com/in/artaviandres/" />
              </Col>
            </Row>
            <Row>
              <Text size="24px" type="thin" margin="0">About Me</Text>
            </Row>
            <Row className="row-container">
              <p className="bio-text">
                John studied Software Development at UC Berkeley and has more than 15 years of experience in software quality assurance. He's been building software and tooling, managing software engineer team many years. When he's not reading about the latest trends in computing he spends his time with his wife, snowboarding, or running.. John studied Software Development at UC Berkeley and has more than 15 years of experience in software quality assurance. He's been building software and tooling, managing software engineer team many years. When he's not reading about the latest trends in computing he spends his time with his wife, snowboarding, or running.. John studied Software Development at UC Berkeley and has more than 15 years of experience in software quality assurance. He's been building software and tooling, managing software engineer team many years. When he's not reading about the latest trends in computing he spends his time with his wife, snowboarding, or running.
              </p>
            </Row>
            <Row>
              <Text size="24px" type="thin" margin="0 0 20px 0">Teacher Courses</Text>
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
            </Row>
          </Grid>
        </Col>
      </Row>
    </Grid>
  );
};