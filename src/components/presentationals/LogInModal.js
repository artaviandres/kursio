import React from 'react';
import Input from './ModalInput';
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from 'react-redux';
import { Checkbox } from 'semantic-ui-react';
import { Row, Col } from 'react-flexbox-grid';
import { FaFacebookF, FaTwitter, FaGoogle, FaVk } from "react-icons/fa";
import Button from './Button';
import SocialMediaIcon from './SocialMediaIcon';
import '../../styles/log-in-modal.scss';

import { setCaptchaValidation } from '../../store/actions/modals';
import STYLES from '../../styles/variables.scss';

function LogInModal({ setCaptchaValidationStatus }) {
  const changeCaptcha = (response) => {
    if (response) {
      setCaptchaValidationStatus(true);
    }
  }
  return (
    <div className="log-in-modal-container">
      <Input label="Username" placeholder="artaviandres" type="text" />
      <Input label="Password" placeholder="Your password" type="password" />
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
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  setCaptchaValidationStatus: (status) => dispatch(setCaptchaValidation(status)),
});

export default connect(null, mapDispatchToProps)(LogInModal);