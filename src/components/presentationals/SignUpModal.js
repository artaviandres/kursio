import React, { useState } from "react";
import Input from "./ModalInput";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";
import { Checkbox } from "semantic-ui-react";
import { Row, Col } from "react-flexbox-grid";
import { ToastContainer, toast } from "react-toastify";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { FaFacebookF, FaTwitter, FaGoogle, FaVk } from "react-icons/fa";
import Button from "./Button";
import SocialMediaIcon from "./SocialMediaIcon";
import "../../styles/log-in-modal.scss";
import "../../styles/sign-up-modal.scss";

import { setCaptchaValidation } from "../../store/actions/modals";
import { getUserSignUp } from "../../store/actions/auth";
import STYLES from "../../styles/variables.scss";
import "react-toastify/dist/ReactToastify.css";

function SignUpModal({
  setCaptchaValidationStatus,
  getUserSignupFunc,
  captchaValidation
}) {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const changeCaptcha = response => {
    if (response) {
      setCaptchaValidationStatus(true);
    }
  };
  const submitSignUp = e => {
    e.preventDefault();
    if (captchaValidation) {
      getUserSignupFunc({ userName, password, email, name, lastName }, null);
    } else {
      toast.error("Please check the Re-Captcha before continuing.", {
        position: "bottom-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false
      });
    }
  };
  const submitSignUpSocial = (user, social) => {
    getUserSignupFunc(user, social);
  };
  return (
    <form
      style={{
        position: "relative",
        overflow: "hidden",
        overflowY: "scroll",
        padding: "30px 50px"
      }}
      className="log-in-modal-container"
      onSubmit={submitSignUp}
    >
      <Input
        label="Name"
        placeholder="Andres"
        type="text"
        onChange={e => setName(e.target.value)}
        required
      />
      <Input
        label="Last Name"
        placeholder="Artavia"
        type="text"
        onChange={e => setLastName(e.target.value)}
        required
      />
      <Input
        label="Email"
        placeholder="aartavia@example.com"
        type="email"
        onChange={e => setEmail(e.target.value)}
        required
      />
      <Input
        label="Username"
        placeholder="artaviandres"
        type="text"
        onChange={e => setUsername(e.target.value)}
        required
      />
      <Input
        label="Password"
        placeholder="Set password"
        type="password"
        onChange={e => setPassword(e.target.value)}
        required
      />
      <Row className="remember-and-button">
        <Col md={12} className="log-in-modal-recaptcha">
          <ReCAPTCHA
            sitekey="6Ld2m58UAAAAAFwb8Ipar60pHO-6rTycUC-Pu5zi"
            onChange={response => changeCaptcha(response)}
          />
        </Col>
        <Col xs={12} className="remember-and-button-col"
          style={{
            margin: "20px auto 0"
          }}>
          <Button text="Sign Up" bgColor={STYLES["footer-link-color"]} color={STYLES["white"]} classList="full-width-button" />
        </Col>
      </Row>
      <Row>
        <Col md={12}
          style={{ margin: "30px 0" }}
          className="log-in-modal-divider">
          OR
        </Col>
      </Row>
      <Row className="social-media-buttons">
        <FacebookLogin
          appId="2144045388984108"
          autoLoad={false}
          fields="name,email,picture"
          onClick={() => {
            console.log("clicked");
          }}
          style={{ width: "100%" }}
          callback={response => {
            let userToSend = response;
            userToSend.picture.data.is_silhouette = userToSend.picture.data
              .is_silhouette
              ? 1
              : 0;
            submitSignUpSocial(userToSend, "facebook");
          }}
        />
        <GoogleLogin
          clientId="404835748085-ig3igh2nje22uoqil5anasiefnkassls.apps.googleusercontent.com"
          buttonText="Sign Up with Google"
          onSuccess={response => {
            submitSignUpSocial(response, "google");
          }}
          onFailure={response => {
            console.log(response.details);
          }}
          cookiePolicy={"single_host_origin"}
        />
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
  );
}

const mapStateToProps = state => ({
  captchaValidation: state.modalsReducer.captchaValidation
    ? state.modalsReducer.captchaValidation
    : false
});

const mapDispatchToProps = dispatch => ({
  setCaptchaValidationStatus: (status) => dispatch(setCaptchaValidation(status)),
  getUserSignupFunc: (user, social) => dispatch(getUserSignUp(user, social)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal);
