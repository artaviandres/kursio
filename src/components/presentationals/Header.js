import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { Trans, useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import Button from './Button';
import '../../styles/header.scss';

import { setLogInModal, setSignUpModal } from '../../store/actions/modals';
import { STYLES } from '../../const';

function Header({ changeLanguage, setLogInModalStatus, setSignUpModalStatus }) {
  const { t } = useTranslation();
  const languageOptions = [
    {
      value: 'en',
      text: 'English'
    },
    {
      value: 'ru',
      text: 'русский'
    }
  ];

  return (
    <Col md={12} className="header-container">
      <Grid fluid>
        <Row center="md">
          <Col md={11}>
            <Grid fluid className="no-padding">
              <Row start="md" className="top-header">
                <Col md={4}>
                  <Dropdown options={languageOptions} changeLanguage={(val) => changeLanguage(val)} />
                </Col>
              </Row>
              <Row start="md" className="bottom-header">
                <Col md={3}>

                </Col>
                <Col md={6}>
                  <SearchBar />
                </Col>
                <Col md={3} className="bottom-header-right">
                  <div className="personal-info-container">
                    <a onClick={() => setLogInModalStatus(true)}>
                      <FaRegUser color={STYLES["$white"]} />
                      <span><Trans i18nKey="log_in_text" /></span>
                    </a>
                    <Button text={t('sign_up_text')} bgColor={STYLES["$footer-link-color"]} color={STYLES["$white"]} onClick={() => setSignUpModalStatus(true)} />
                    <div className="personal-info-bookmark">
                      <FaRegBookmark color={STYLES["$footer-link-color"]} size={28} />
                    </div>
                  </div>
                </Col>
              </Row>
            </Grid>
          </Col>
        </Row>
      </Grid>
    </Col>
  )
}

const mapDispatchToProps = dispatch => ({
  setLogInModalStatus: (status) => dispatch(setLogInModal(status)),
  setSignUpModalStatus: (status) => dispatch(setSignUpModal(status)),
});

export default connect(null, mapDispatchToProps)(Header);