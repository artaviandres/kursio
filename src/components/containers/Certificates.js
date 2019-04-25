import React from 'react';
import { Trans, useTranslation } from "react-i18next";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Header from '../presentationals/Header';
import Text from '../presentationals/Text';
import Footer from '../presentationals/Footer';
import ProfileInfoSidebar from '../presentationals/ProfileInfoSidebar';
import CertificatesItem from '../presentationals/CertificatesItem';
import '../../styles/certificates.scss';

//img
import Certificate from '../../assets/img/certificate.pdf';
import UserPicture from '../../assets/img/profilepicture.jpg';
import { STYLES } from '../../const';

export default function TeacherProfile() {
  const { i18n, t } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const certificatesDummy = [
    { course: 'React Basics 101', certificatePdf: Certificate },
    { course: 'React Basics 101', certificatePdf: Certificate },
    { course: 'React Basics 101', certificatePdf: Certificate },
    { course: 'React Basics 101', certificatePdf: Certificate },
    { course: 'React Basics 101', certificatePdf: Certificate },
    { course: 'React Basics 101', certificatePdf: Certificate },
  ]

  return (
    <React.Fragment>
      <Header changeLanguage={(val) => changeLanguage(val)} />
      <Grid fluid className="certificates-container">
        <Row className="top-margin">
          <ProfileInfoSidebar
            rating={{
              rating: 4,
              reviews: 100
            }}
            profile={{
              name:"Andrés Artavia",
              ocupation:"Software Engineer",
              isTeacherProfile:false,
              UserPicture : UserPicture
            }} 
          />
          <Col md={9} xs={12} className="certificates-container-row">
            <Grid fluid>
              <Row className="row-container">
                <Col md={12} className="row-container-title">
                  <Text size="32px" type="thin" margin="0" color={STYLES["$footer-title-color"]}>My Certificates</Text>
                </Col>
              </Row>
              {certificatesDummy.map((certificate) => <CertificatesItem course={certificate.course} certificate={certificate.certificatePdf} />)}
            </Grid>
          </Col>
        </Row>
      </Grid>
      <Footer margin="30px 0 0 0" />
    </React.Fragment>
  );
};