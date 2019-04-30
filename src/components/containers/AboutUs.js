import React, { useState } from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Header from '../presentationals/Header';
import STYLES from '../../styles/variables.scss';
import Text from '../presentationals/Text';
import Footer from '../presentationals/Footer';
import '../../styles/user-profile.scss';
import '../../styles/button.scss';
import '../../styles/layout.scss';
import '../../styles/icons.scss';

//img
import UserPicture from '../../assets/img/profilepicture.jpg';
import ReactBg from '../../assets/img/logo-og.png';
import VueBg from '../../assets/img/vue.png';
import CookiesBg from '../../assets/img/cookies.jpg';

export default function AboutUs() {
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

    return (
        <React.Fragment>
            <Header changeLanguage={(val) => changeLanguage(val)} onOpenLogIn={() => openLogIn()} onOpenSignUp={() => openSignUp()} />
            <Grid className="about-container">
                <Row className="section">
                    <Col sm={12} md={6}>
                        <Row between="md" className="row-container section-subtitle">
                            <Text size="32px" type="thin" margin="0" lineHeight="22px" color={STYLES["footer-title-color"]}>Welcome to Master Study!</Text>
                        </Row>
                        <Text size="16px" type="thin" margin="0" lineHeight="22px" color={STYLES["footer-title-color"]}>Online studies are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option. The resulting qualification a graduate receives after successfully completing.</Text>
                        <ul style={{ padding: "0 0 0 18px", color: STYLES["footer-title-color"] }}>
                            <li>Online Courses with full discount systems.</li>
                            <li>Online Certificates which can be used worldwide.</li>
                            <li>An online leadership development program at Masterstudy LMS.</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={6}>
                        <img
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                            srcset="https://masterstudy.scdn4.secure.raxcdn.com/course-hub/wp-content/uploads/sites/10/2018/07/cat_2-1140x700.jpg 2x" class="vc_single_image-img " src="https://masterstudy.scdn4.secure.raxcdn.com/course-hub/wp-content/uploads/sites/10/2018/07/cat_2-570x350.jpg" alt="cat_2" title="cat_2">
                        </img>
                    </Col>
                </Row>
                <Row className="section">
                    <Col sm={12} md={6}>
                        <img
                            style={{
                                maxWidth: "100%",
                                height: "auto",
                            }}
                            srcset="https://masterstudy.scdn4.secure.raxcdn.com/course-hub/wp-content/uploads/sites/10/2018/07/cat_2-1140x700.jpg 2x" class="vc_single_image-img " src="https://masterstudy.scdn4.secure.raxcdn.com/course-hub/wp-content/uploads/sites/10/2018/07/cat_2-570x350.jpg" alt="cat_2" title="cat_2">
                        </img>
                    </Col>
                    <Col sm={12} md={6}>
                        <Row between="md" className="row-container section-subtitle">
                            <Text size="32px" type="thin" margin="0" lineHeight="22px" color={STYLES["footer-title-color"]}>Welcome to Master Study!</Text>
                        </Row>
                        <Text size="16px" type="thin" margin="0" lineHeight="22px" color={STYLES["footer-title-color"]}>Online studies are designed for students whose scheduling commitments would otherwise make it difficult to enroll in a full-time higher education program. Offered for individual courses, diplomas, associate’s degrees and certificate programs, online studies are a valuable option. The resulting qualification a graduate receives after successfully completing.</Text>
                        <ul style={{ padding: "0 0 0 18px", color: STYLES["footer-title-color"] }}>
                            <li>Online Courses with full discount systems.</li>
                            <li>Online Certificates which can be used worldwide.</li>
                            <li>An online leadership development program at Masterstudy LMS.</li>
                        </ul>
                    </Col>
                </Row>
            </Grid>
            <Footer />
        </React.Fragment >
    );
};