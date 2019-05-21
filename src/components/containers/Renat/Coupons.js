import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Checkbox } from 'semantic-ui-react';
import Sidebar from '../../presentationals/Sidebar';
import Title from '../../presentationals/Title';
import Table from '../../presentationals/Table';
import Button from '../../presentationals/Button';

import './coupons.scss';

export default function() {
  const headerCells = ['Used', 'Coupon', 'Name', 'Email'];
  const bodyCells = [
    [
      <Checkbox defaultChecked />,
      'd44fe472-da7e-467c-ba9b-bf756eba788e',
      'Andrés Artavia',
      'artaviandres@gmail.com',
    ],
    [
      <Checkbox defaultChecked />,
      '3ad74dfe-f619-4654-bcd9-39bb290ce728',
      'Jon Snow',
      'jonsnow@winterfell.com',
    ],
  ]
  return (
    <div className="coupons-container">
      <Sidebar />
      <Grid className="coupons-wrapper">
        <Row>
          <Col md={6}>
            <Title fontSize="36px">Coupons</Title>
            <p className="coupons-text">In this page, you'll be able to manage the coupons that you've already created, create new ones, and check which ones have already been used.</p>
          </Col>
          <Col md={6} className="coupons-add">
            <Button classList="coupons-add-button" text='Add New Coupon' />
          </Col>
        </Row>
        <Row>
          <Table headerCells={headerCells} bodyCells={bodyCells} />
        </Row>
      </Grid>
    </div>
  )
};