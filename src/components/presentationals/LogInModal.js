import React, { useState } from 'react';
import Input from './ModalInput';
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';
import { ToastContainer, toast } from 'react-toastify';
import { FaFacebookF, FaTwitter, FaGoogle, FaVk } from "react-icons/fa";
import Button from './Button';
import SocialMediaIcon from './SocialMediaIcon';
import '../../styles/log-in-modal.scss';

import { setCaptchaValidation } from '../../store/actions/modals';
import { getUserLogin } from '../../store/actions/user';
import STYLES from '../../styles/variables.scss';
import 'react-toastify/dist/ReactToastify.css';

function LogInModal({ setCaptchaValidationStatus, getUserLoginFunc, captchaValidation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeCaptcha = (response) => {
    if (response) {
      setCaptchaValidationStatus(true);
    }
  }
  const submitLogin = (e) => {
    e.preventDefault();
    if (captchaValidation) {
      getUserLoginFunc(username, password);
    } else {
      toast.error('Please check the Re-Captcha before continuing.', {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  }
  return (
    <form className="log-in-modal-container" onSubmit={submitLogin}>
      <Input label="Username" placeholder="artaviandres" type="text" onChange={(e) => setUsername(e.target.value)} required />
      <Input label="Password" placeholder="Your password" type="password" onChange={(e) => setPassword(e.target.value)} required />
      <Row>
        <Col md={12} className="log-in-modal-recaptcha">
          <ReCAPTCHA
            sitekey="6Ld2m58UAAAAAFwb8Ipar60pHO-6rTycUC-Pu5zi"
            onChange={(response) => changeCaptcha(response)}
          />
        </Col>
      </Row>
      <Row className="remember-and-button">
        <Col md={6} xs={12} className="remember-and-button-col">
          <Checkbox label="Remember Me" />
        </Col>
        <Col md={6} xs={12} className="remember-and-button-col">
          <Button text="Log In" bgColor={STYLES["footer-link-color"]} color={STYLES["white"]} />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="log-in-modal-divider">
          OR
        </Col>
      </Row>
      <Row>
        <Col md={12} className="log-in-modal-social">
          <SocialMediaIcon icon={<FaFacebookF size={18} />} margin="0 5px" link="https://www.facebook.com/artaviandres" width="20px" height="20px" />
          <SocialMediaIcon icon={<FaGoogle size={16} />} margin="0 5px" link="https://www.facebook.com/artaviandres" width="20px" height="20px" />
          <SocialMediaIcon icon={<FaVk size={20} />} margin="0 5px" link="https://www.facebook.com/artaviandres" width="20px" height="20px" />
          <SocialMediaIcon icon={<FaTwitter size={18} />} margin="0 0 0 5px" link="https://www.facebook.com/artaviandres" width="20px" height="20px" />
        </Col>
      </Row>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable={false}
        pauseOnHover
      />
    </form>
  )
};

const mapStateToProps = (state) => ({
  captchaValidation: state.modalsReducer.captchaValidation ? state.modalsReducer.captchaValidation : false,
});

const mapDispatchToProps = dispatch => ({
  setCaptchaValidationStatus: (status) => dispatch(setCaptchaValidation(status)),
  getUserLoginFunc: (username, password) => dispatch(getUserLogin(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInModal);