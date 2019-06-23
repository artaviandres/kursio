import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Trans, useTranslation } from "react-i18next";
import { Grid, Row, Col } from "react-flexbox-grid";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Header from "../presentationals/Header";
import ProfileInfoSidebar from "../presentationals/ProfileInfoSidebar";
import Text from "../presentationals/Text";
import SocialMediaIcon from "../presentationals/SocialMediaIcon";
import CourseCard from "../presentationals/CourseCard";
import ProfileTabs from "../presentationals/ProfileTabs";
import Footer from "../presentationals/Footer";
import "../../styles/my-profile.scss";
import "../../styles/button.scss";
import "../../styles/layout.scss";
import "../../styles/icons.scss";

//img
import UserPicture from "../../assets/img/profilepicture.jpg";
import ReactBg from "../../assets/img/logo-og.png";
import VueBg from "../../assets/img/vue.png";
import CookiesBg from "../../assets/img/cookies.jpg";

function MyProfile({ userData }) {
  if (!userData) {
    return <Redirect to="/" />;
  }
  console.log(userData);
  const { name, lastName } = userData;
  const { i18n, t } = useTranslation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const openLogIn = () => {
    setModalOpen(true);
    setSelectedModal("login");
  };

  const openSignUp = () => {
    setModalOpen(true);
    setSelectedModal("signup");
  };

  return (
    <React.Fragment>
      <Header
        changeLanguage={val => changeLanguage(val)}
        onOpenLogIn={() => openLogIn()}
        onOpenSignUp={() => openSignUp()}
      />
      <Grid fluid className="profile-container">
        <Row className="top-margin">
          <ProfileInfoSidebar
            rating={{
              rating: 4,
              reviews: 100
            }}
            profile={{
              name: `${name || ""} ${lastName || ""}`,
              ocupation: "Software Engineer",
              isTeacherProfile: false,
              UserPicture: UserPicture
            }}
          />
          <Col md={9} xs={12}>
            <Grid fluid>
              <Row between="md" className="row-container">
                <Col md={6} xs={4}>
                  <Text size="50px" type="thin" margin="0">
                    {`${name || ""} ${lastName || ""}`}
                  </Text>
                </Col>
                <Col md={4} xs={6} className="social-media">
                  <SocialMediaIcon
                    icon={<FaFacebookF size={17} />}
                    backgroundColor="#3b5998"
                    margin="0 5px"
                    link="https://www.facebook.com/artaviandres"
                  />
                  <SocialMediaIcon
                    icon={<FaInstagram size={17} />}
                    backgroundColor="#DD2A7B"
                    margin="0 5px"
                    link="https://www.instagram.com/artaviandres/"
                  />
                  <SocialMediaIcon
                    icon={<FaLinkedinIn size={17} />}
                    backgroundColor="#0077b5"
                    margin="0 5px"
                    link="https://www.linkedin.com/in/artaviandres/"
                  />
                </Col>
              </Row>
              <Row>
                <Text size="24px" type="thin" margin="0">
                  Bio
                </Text>
              </Row>
              <Row className="row-container">
                <p className="bio-text">
                  John studied Software Development at UC Berkeley and has more
                  than 15 years of experience in software quality assurance.
                  He's been building software and tooling, managing software
                  engineer team many years. When he's not reading about the
                  latest trends in computing he spends his time with his wife,
                  snowboarding, or running.. John studied Software Development
                  at UC Berkeley and has more than 15 years of experience in
                  software quality assurance. He's been building software and
                  tooling, managing software engineer team many years. When he's
                  not reading about the latest trends in computing he spends his
                  time with his wife, snowboarding, or running.. John studied
                  Software Development at UC Berkeley and has more than 15 years
                  of experience in software quality assurance. He's been
                  building software and tooling, managing software engineer team
                  many years. When he's not reading about the latest trends in
                  computing he spends his time with his wife, snowboarding, or
                  running.
                </p>
              </Row>
              <Row>
                <Text size="24px" type="thin" margin="0 0 20px 0">
                  Courses
                </Text>
              </Row>
              <Row className="row-container row-courses divission-border cards-wrapper">
                <CourseCard
                  title="React Basics"
                  category="Development"
                  rating="4.5"
                  numberOfRatings="18"
                  price="$55"
                  image={ReactBg}
                  description="Learn how to use one of the most powerful Front-end tools such as React from scratch, with all its twists."
                  type="userProfile"
                  views="800"
                />
                <CourseCard
                  title="VueJS Basics"
                  category="Development"
                  rating="3"
                  numberOfRatings="93"
                  price="$95"
                  image={VueBg}
                  description="Being VueJS one of the most used Javascript Libraries for creating powerful and dynamic Views, it's becoming a must for Front-end developers all around the world."
                  type="userProfile"
                  views="800"
                />
                <CourseCard
                  title="Baking some amazing Cookies!"
                  category="Cooking"
                  rating="5"
                  numberOfRatings="93"
                  price="$25"
                  image={CookiesBg}
                  description="As a software engineer. i love to bake some cookies as well, and they're usually delicious!!"
                  type="userProfile"
                  views="800"
                />
              </Row>
            </Grid>
            <Grid fluid style={{ paddingBottom: "50px" }}>
              <ProfileTabs />
            </Grid>
          </Col>
        </Row>
      </Grid>
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  userData: state.authReducer.userData ? state.authReducer.userData : null
});

export default connect(
  mapStateToProps,
  null
)(MyProfile);
