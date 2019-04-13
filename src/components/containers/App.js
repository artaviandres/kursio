import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaRegLightbulb } from "react-icons/fa";
import Category from '../presentationals/Category';
import Header from '../presentationals/Header';
import LogInModal from '../presentationals/LogInModal';
import SignUpModal from '../presentationals/SignUpModal';

import '../../styles/app.scss';

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
      <Grid fluid className="app-container">
        <Row>
          <Header changeLanguage={(val) => changeLanguage(val)} onOpenLogIn={() => openLogIn()} onOpenSignUp={() => openSignUp()}  />
        </Row>
        <Row className="top-margin">
          {categories.map(category => <Category key={category.text_key} icon={category.icon} text={t(category.text_key)} />)}
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
