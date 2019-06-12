import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {
  IoIosSearch,
  IoIosHeartEmpty,
  IoIosMenu,
  IoIosArrowDown,
  IoMdPerson,
  IoIosCart,
  IoIosNotificationsOutline,
  IoIosLogOut,
  IoIosRibbon,
  IoIosStarOutline,
  IoMdBook
} from 'react-icons/io';
import { FiShoppingCart, FiEdit, FiLogOut, FiAward, FiHeart, FiBell, FiBookOpen } from 'react-icons/fi';
import { Trans, useTranslation } from 'react-i18next';
import Breakpoint from 'react-socks';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import Button from './Button';
import '../../styles/header.scss';
import STYLES from '../../styles/variables.scss';

import LogoThin from '../../assets/img/logo-thin-blue.svg';
import PlaceholderImage from '../../assets/img/placeholder-user.png';

import { setLogInModal } from '../../store/actions/modals';
import { logOutUser } from '../../store/actions/auth';

function Header({ changeLanguage, setLogInModalStatus, userData, logOutStatus }) {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [isProfileOptionsOpen, setProfileOptionsOpen] = useState(false);
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
  
  const renderIsTeacher = (userData) => {
    let isTeacher = false;
    let teacherContent;
    userData.roles.map((rol) => rol.roleType === 'TEACHER' ? isTeacher = true : null)
    if (isTeacher) {
      teacherContent = <a>Teacher Hub</a>
    }
    return teacherContent;
  }

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
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <Link to="/">
            <img src={LogoThin} />
          </Link>
        </div>
        <div className="header-links">
          <a>
            About Us
          </a>
          <a>
            Contact
          </a>
          <a>
            FAQs
          </a>
        </div>
        <div className={isSearchFocused ? 'header-search focused' : 'header-search'}>
          <input placeholder="Search" onFocus={() => setSearchFocused(true)} onBlur={() => setSearchFocused(false)} />
          <a>
            <IoIosSearch size={18} />
          </a>
        </div>
        {userData
          ? <div className="header-auth">
            {renderIsTeacher(userData)}
            <a>
              <FiShoppingCart size={24} />
            </a>
            <div className="header-auth-dropdown">
              <a className="header-auth-image" onClick={() => setProfileOptionsOpen(!isProfileOptionsOpen)}>
                <img src={userData && userData.image ? userData.image : PlaceholderImage} />
              </a>
              <div className={isProfileOptionsOpen ? "header-auth-options" : "header-auth-options hidden"}>
                <a>
                  <FiEdit size={22} />
                  Profile
                </a>
                <a>
                  <FiBookOpen size={22} />
                  My Courses
                </a>
                <a>
                  <FiBell size={22} />
                  Notifications
                </a>
                <a>
                  <FiHeart size={22} />
                  Wishlisted
                </a>
                <a>
                  <FiAward size={22} />
                  Certificates
                </a>
                <a
                  onClick={() => {
                    setProfileOptionsOpen(false);
                    logOutStatus(true);
                  }}
                >
                  <FiLogOut size={22} />
                  Log Out
                </a>
              </div>
            </div>
          </div>
          : <div className="header-non-auth">
            <a onClick={() => setLogInModalStatus(true)}>
              Sign In
            </a>
            <Button classList="header-auth-register" text='Register' />
          </div>
        }
      </div>
    </div>
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