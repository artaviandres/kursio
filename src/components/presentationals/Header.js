import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoIosSearch, IoIosHeartEmpty, IoIosMenu, IoIosArrowDown } from 'react-icons/io';
import { Trans, useTranslation } from 'react-i18next';
import Breakpoint from 'react-socks';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import '../../styles/header.scss';
import STYLES from '../../styles/variables.scss';

import LogoThin from '../../assets/img/logo-thin-blue.svg';

import { setLogInModal, setSignUpModal } from '../../store/actions/modals';

function Header({ changeLanguage, setLogInModalStatus, setSignUpModalStatus }) {
  const [isSearchOpen, setSearchOpen] = useState(false);
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
    <Grid fluid className="header-container">
      <Row className="header-content">
        <Col md={2} xs={3} className="header-logo">
          <Link to="/">
            <img src={LogoThin} />
          </Link>
        </Col>
        <Breakpoint xlarge up>
          <Col md={8} className="header-links">
            <a>Explore our Courses <IoIosArrowDown size={18} /></a>
            <a>Become a Teacher</a>
            <a>About Kursio</a>
          </Col>
        </Breakpoint>
        <Col md={2} xs={9} className="header-icons">
          <a onClick={() => setSearchOpen(!isSearchOpen)}>
            <IoIosSearch size={24} />
          </a>
          <a>
            <IoIosHeartEmpty size={24} />
          </a>
          <a>
            <IoIosMenu size={24} />
          </a>
        </Col>
        {isSearchOpen ? <div className="header-search">hola</div> : null}
      </Row>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  setLogInModalStatus: (status) => dispatch(setLogInModal(status)),
  setSignUpModalStatus: (status) => dispatch(setSignUpModal(status)),
});

export default connect(null, mapDispatchToProps)(Header);