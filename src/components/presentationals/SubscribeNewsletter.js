import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Title from './Title';
import InputWithAction from './InputWithAction';
import '../../styles/subscribe-newsletter.scss';
import STYLES from '../../styles/variables.scss';

export default function SubscribeNewsletter() {
  return (
    <Col md={12} className="subscribe-container">
      <Grid className="subscribe-content">
        <Row style={{ height: '100%' }}>
          <Col md={6} xs={12} className="subscribe-panel">
            <Title fontSize="34px" color={STYLES['subscribe-to-newsletter-color']}>Subscribe to Newsletter</Title>
            <p>
              Do you want to get information about popular courses, discounts, subjects that you're subscribed to?
            </p>
            <p className="white-bold">
              We got you.
            </p>
          </Col>
          <Col md={6} xs={12} className="subscribe-panel">
            <h1>
              Your E-mail address
            </h1>
            <InputWithAction placeholder="Enter Email Address" action="Subscribe" height="40px" />
          </Col>
        </Row>
      </Grid>
    </Col>
  )
}