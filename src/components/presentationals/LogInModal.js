import React, { useState } from "react";
import Input from "./ModalInput";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";
import { Checkbox } from "semantic-ui-react";
import { Row, Col } from "react-flexbox-grid";
import { ToastContainer, toast } from "react-toastify";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import VK, { Auth } from "react-vk";
import { FaFacebookF, FaTwitter, FaGoogle, FaVk } from "react-icons/fa";
import Button from "./Button";
import SocialMediaIcon from "./SocialMediaIcon";
import "../../styles/log-in-modal.scss";

import { setCaptchaValidation } from "../../store/actions/modals";
import { getUserLogin } from "../../store/actions/auth";
import STYLES from "../../styles/variables.scss";
import "react-toastify/dist/ReactToastify.css";

function LogInModal({
  setCaptchaValidationStatus,
  getUserLoginFunc,
  captchaValidation
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeCaptcha = response => {
    if (response) {
      setCaptchaValidationStatus(true);
    }
  };
  const submitLogin = e => {
    e.preventDefault();
    if (captchaValidation) {
      getUserLoginFunc(username, password);
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
    getUserLoginFunc(user, social);
  };
  let fbLogin = React.createRef();
  let fbLoginClick = () => {
    Array.from(fbLogin.current.childNodes[0].childNodes)
      .find(el => el.nodeName === "BUTTON")
      .click();
  };
  return (
    <form
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "30px 0 0",
        display: "flex"
      }}
      className="log-in-modal-container"
      onSubmit={submitLogin}
    >
      <Col
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          overflow: "hidden",
          padding: "0 50px 30px",
          height: "100%",
          overflowY: "scroll"
        }}
      >
        <Input
          label="Username"
          placeholder="artaviandres"
          type="text"
          onChange={e => setUsername(e.target.value)}
          required
        />
        <Input
          label="Password"
          placeholder="Your password"
          type="password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Row>
          <Col md={12} className="log-in-modal-recaptcha">
            <ReCAPTCHA
              sitekey="6Ld2m58UAAAAAFwb8Ipar60pHO-6rTycUC-Pu5zi"
              onChange={response => changeCaptcha(response)}
            />
          </Col>
        </Row>
        <Row className="remember-and-button">
          <Col md={6} xs={12} className="remember-and-button-col">
            <Checkbox label="Remember Me" />
          </Col>
          <Col md={6} xs={12} className="remember-and-button-col">
            <Button
              text="Log In"
              bgColor={STYLES["footer-link-color"]}
              color={STYLES["white"]}
            />
          </Col>
        </Row>
      </Col>
      <Row
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "30px",
          height: "120px"
        }}
        className="social-media-buttons"
      >
        <Col md={12} className="log-in-modal-divider">
          OR
        </Col>
        <Col
          md={12}
          style={{ margin: "0 0 30px 0" }}
          className="log-in-modal-social"
        >
          <FaFacebookF size={20} onClick={fbLoginClick} />
          <FaGoogle size={20} />
          <FaVk
            size={24}
            onClick={e => {
              e.preventDefault();
              window.VK.Auth.login(result => {
                submitSignUpSocial(result.user, "vk");
              }, 6998558);
            }}
          />
          <FaTwitter size={22} />
        </Col>
        <div ref={fbLogin}>
          <FacebookLogin
            appId="2144045388984108"
            autoLoad={false}
            textButton=""
            cssClass="social-media-icon-container"
            fields="name,email,picture"
            onClick={() => {}}
            style={{ width: "100%" }}
            icon={<FaFacebookF size={18} />}
            callback={response => {
              let userToSend = response;
              userToSend.picture.data.is_silhouette = userToSend.picture.data
                .is_silhouette
                ? 1
                : 0;
              submitSignUpSocial(userToSend, "facebook");
            }}
          />
        </div>
        <GoogleLogin
          clientId="404835748085-ig3igh2nje22uoqil5anasiefnkassls.apps.googleusercontent.com"
          buttonText=""
          cssClass="social-media-icon-container"
          onSuccess={response => {
            submitSignUpSocial(response, "google");
          }}
          onFailure={response => {
            toast.error(response.details);
          }}
          cookiePolicy={"single_host_origin"}
        />
        <VK apiId={6998558} />
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
  setCaptchaValidationStatus: status => dispatch(setCaptchaValidation(status)),
  getUserLoginFunc: (username, password) =>
    dispatch(getUserLogin(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInModal);
