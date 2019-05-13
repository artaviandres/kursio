import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { IoIosSearch, IoIosHeartEmpty, IoIosMenu, IoIosArrowDown, IoMdPerson } from 'react-icons/io';
import { Trans, useTranslation } from 'react-i18next';
import Breakpoint from 'react-socks';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import '../../styles/header.scss';
import STYLES from '../../styles/variables.scss';

import LogoThin from '../../assets/img/logo-thin-blue.svg';

import { setLogInModal } from '../../store/actions/modals';
import { logOutUser } from '../../store/actions/auth';

function Header({ changeLanguage, setLogInModalStatus, userData, logOutStatus }) {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const { t } = useTranslation();
  
  const searchTextChanged = (e) => {
    e.preventDefault();
    //make request to api
    setSearchText(e.target.value);
  }

  const escFunction = (event) => {
    if(event.keyCode === 27) {
      closeSearch();
    }
  }
  
  const closeSearch = () => {
    setSearchOpen(!isSearchOpen);
    setSearchText(setSearchText(''));
  };

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
          <a onClick={()=>{setLogInModalStatus(true)}}>
            <IoMdPerson size={24} />
          </a>
          <a onClick={()=>{logOutStatus(true)}}>
          <span>{userData ? userData.name :  ''}</span>
          </a>
        </Col>
        {isSearchOpen ? <SearchBar onClose={() => closeSearch()} onChange={(e) => searchTextChanged(e)} searchText={searchText} /> : null}
      </Row>
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  userData: state.authReducer.userData ? state.authReducer.userData : null,
});

const mapDispatchToProps = dispatch => ({
  setLogInModalStatus: (status) => dispatch(setLogInModal(status)),
  logOutStatus: () => dispatch(logOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);