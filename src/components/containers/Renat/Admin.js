import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Sidebar from '../../presentationals/Sidebar';
import AdminCard from '../../presentationals/Renat/AdminCard';
import Title from '../../presentationals/Title';

//img
import Update from '../../../assets/img/update.svg';
import Newsletter from '../../../assets/img/newsletter.svg';
import './admin.scss';

export default function Admin() {
  return (
    <div className="admin-container">
      <Sidebar />
      <Grid className="admin-wrapper">
        <Row>
          <Col md={12} className="admin-welcome">
            <Title fontSize="50px">Welcome back, Renat!</Title>
          </Col>
        </Row>
        <Row>
          <Col md={6} xs={12} className="admin-column">
            <AdminCard img={Update} title="Manage Questions" linkTo="/teacher/courses/renat/questions" />
          </Col>
          <Col md={6} xs={12} className="admin-column">
            <AdminCard img={Newsletter} title="Manage Coupons" linkTo="/teacher/courses/renat/coupons" />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};