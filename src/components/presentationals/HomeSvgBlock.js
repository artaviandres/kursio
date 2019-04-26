import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from './Button';
import Title from './Title';
import '../../styles/home-svg-block.scss';
import STYLES from '../../styles/variables.scss';

export default function HomeSvgBlock({ image, title, text, button }) {
  return(
    <div className="home-svg-block-container">
      <Grid style={{ height: '100%' }}>
        <Row style={{ height: '100%' }}>
          <Col md={6} className="home-svg-block-image">
            <img src={image} />
          </Col>
          <Col md={6} className="home-svg-block-text">
            <Title fontSize="42px" textAlign="right" lineHeight="40px">{title}</Title>
            <p>{text}</p>
            <Button text={button} width="90%" bgColor={STYLES["primary-color"]} color={STYLES["home-svg-blocks-button-color"]} classList="animation-hover" />
          </Col>
        </Row>
      </Grid>
    </div>
  )
};