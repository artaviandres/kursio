import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Checkbox } from 'semantic-ui-react';
import Sidebar from '../../presentationals/Sidebar';
import Title from '../../presentationals/Title';
import Table from '../../presentationals/Table';
import Button from '../../presentationals/Button';
import Modal from '../../presentationals/Modal';
import Input from '../../presentationals/ModalInput';

import './coupons.scss';

export default function Coupons() {
  const [isAddCouponOpen, setIsAddCouponOpen] = useState(false);
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
  ];
  const modalStyles = {
    width: '40%',
    padding: '30px 60px'
  };
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
            <Button classList="coupons-add-button" text="Add New Coupon" onClick={() => setIsAddCouponOpen(true)} />
          </Col>
        </Row>
        <Row>
          <Table headerCells={headerCells} bodyCells={bodyCells} />
        </Row>
      </Grid>
      {isAddCouponOpen && <Modal onClose={() => setIsAddCouponOpen(false)} style={modalStyles} closeTop='25%'>
          <div className="coupons-modal">
            <Title fontSize="24px">Add New Coupon</Title>
            <Input label="User Email" placeholder="artaviandres@gmail.com" type="text" margin="20px 0" required />
            <Input label="User Name" placeholder="Andrés Artavia" type="text" margin="20px 0" required />
            <div className="coupons-modal-submit">
              <Button classList="coupons-modal-button" text="Create Coupon" />
            </div>
          </div>
        </Modal>
      }
    </div>
  )
};