import React from 'react';
import { IoIosTrendingUp, IoMdGlobe } from 'react-icons/io';
import { FiShoppingCart, FiUnlock, FiAward, FiCode, FiVideo, FiFileText, FiCheckCircle } from 'react-icons/fi';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../presentationals/Header';
import '../../styles/course.scss';

//img
import TeacherPicture from '../../assets/img/teacherpicture.jpg';
import ReactBg from '../../assets/img/logo-og.png';
import Title from '../presentationals/Title';
import Button from '../presentationals/Button';

export default function Course() {
  const includes = [
    {
      icon: <FiVideo size={20} />,
      text: '13 hours of on-demand video',
    },
    {
      icon: <FiFileText size={20} />,
      text: '13 articles',
    },
    {
      icon: <FiUnlock size={20} />,
      text: 'Full lifetime access',
    },
    {
      icon: <FiCode size={20} />,
      text: '8 coding exercises',
    },
    {
      icon: <FiAward size={20} />,
      text: 'Certificate of Completion',
    },
  ];
  const whatYoullLearn = [
    'HTML and HTML 5 for Basic Website Structure',
    'JavaScript for interacting with user while they are on your website',
    'Bootstrap for Mobile Optimized/Responsive Web Design',
    'Databases',
    'Login and Logout functionalities using PHP SESSIONS',
    'WordPress for building low budget websites in minutes',
    'There will be some more Projects and Assignments in the course (for eg: Even Odd Checker, A simple web based calculator, Your Own HTML editor, etc...)',
    'CSS for styling a Website',
    'jQuery for adding animations to a Wesbite',
    'PHP for interacting with user (like form handling, file upload, etc)',
    'PHP and MySQL for storing users information on a web server',
    'FINAL PROJECT: A dynamic website with login system for admin and authors only.',
    'eCommerce integration to WordPress site',
  ];
  const numberOfItems = whatYoullLearn.length;
  const firstColumnNumber = Math.round(numberOfItems / 2);
  return (
    <div className="course-container">
      <Header />
      <div className="course-header">
        <div className="course-header-inner">
          <h1>Intro to React: Learning how it works from scratch.</h1>
          <h4>Become a master in the most used javascript library for creating powerful, dynamic, and beautiful interfaces, from scratch.</h4>
          <div className="course-teacher-and-info">
            <div className="course-teacher">
              <img src={TeacherPicture} />
              <div className="course-teacher-name">
                <h6>Instructor</h6>
                <p>Andrés Artavia</p>
              </div>
            </div>
            <div className="course-students-enrolled">
              <IoIosTrendingUp size={32} />
              <p>156456 students enrolled</p>
            </div>
            <div className="course-languages">
              <IoMdGlobe size={32} />
              <p>English, CC: Russian, English</p>
            </div> 
          </div>
        </div>
      </div>
      <Grid fluid className="course-body">
        <Row>
          <Col md={8}>
            <div className="course-learn">
              <Title fontSize="24px" margin="0 0 20px 0">What you'll learn</Title>
              <Row>
                <Col md={6}>
                  {whatYoullLearn.map((item, index) => index < firstColumnNumber ? <p key={index} className="course-learn-item">{<FiCheckCircle size={24} />}{item}</p> : null)}
                </Col>
                <Col md={6}>
                  {whatYoullLearn.map((item, index) => index > firstColumnNumber ? <p key={index} className="course-learn-item">{<FiCheckCircle size={24} />}{item}</p> : null)}
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4} className="course-sidebar">
            <img src={ReactBg} className="course-sidebar-img" />
            <div className="course-sidebar-price">
              <Title fontSize="48px" margin="0">$25</Title>
              <div className="course-sidebar-old-price-container">
                <p className="course-sidebar-old-price">$200</p>
                <p className="course-sidebar-discount">(98% Off)</p>
              </div>
              <Button classList="course-sidebar-purchase-button" text='Purchase Course' />
              <Button classList="course-sidebar-add-to-cart" text='Add to Cart' icon={<FiShoppingCart size={20} />} />
            </div>
            <div className="course-sidebar-includes">
              <h5>Course includes</h5>
              {includes.map((item) => <p key={item.text}>{item.icon}{item.text}</p>)}
            </div>
            {/* <hr />
             */}
          </Col>
        </Row>
      </Grid>
    </div>
  )
};