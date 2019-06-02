import React, { useState } from "react";
import Input from "./ModalInput";
import ReCAPTCHA from "react-google-recaptcha";
import { connect } from "react-redux";
import { Checkbox, Divider } from "semantic-ui-react";
import { Row, Col } from "react-flexbox-grid";
import { ToastContainer, toast } from "react-toastify";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import VK, { Auth } from "react-vk";
import { FaFacebookF, FaTwitter, FaGoogle, FaVk } from "react-icons/fa";
import Button from "./Button";
import SocialMediaIcon from "./SocialMediaIcon";
import "../../styles/log-in-modal.scss";
import "../../styles/sign-up-modal.scss";

import { setCaptchaValidation } from "../../store/actions/modals";
import { getUserSignUp } from "../../store/actions/auth";
import STYLES from "../../styles/variables.scss";
import "react-toastify/dist/ReactToastify.css";
import { relative } from "path";

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
  let fbLogin = React.createRef();
  let fbLoginClick = () => {
    Array.from(fbLogin.current.childNodes[0].childNodes)
      .find(el => el.nodeName === "BUTTON")
      .click();
    console.log(fbLogin.current.childNodes[0].childNodes);
  };
  return (
    <form
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "30px 0 0",
        display: "flex"
      }}
      className="sign-up-modal-container"
      onSubmit={submitSignUp}
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
          <Col
            xs={12}
            className="remember-and-button-col"
            style={{
              margin: "20px auto 0"
            }}
          >
            <Button
              text="Sign Up"
              bgColor={STYLES["footer-link-color"]}
              color={STYLES["white"]}
              classList="full-width-button"
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
          className="sign-up-modal-social"
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
  getUserSignupFunc: (user, social) => dispatch(getUserSignUp(user, social))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpModal);
