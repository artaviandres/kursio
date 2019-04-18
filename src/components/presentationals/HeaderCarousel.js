import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, Rating } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Text from '../presentationals/Text';
import { FaRegBookmark, FaSignal, FaListUl, FaRegClock } from "react-icons/fa";

import '../../styles/header-carousel.scss';
import '../../styles/icons.scss';
//img
import ReactBg from '../../assets/img/logo-og.png';
import VueBg from '../../assets/img/vue.png';
import CookiesBg from '../../assets/img/cookies.jpg';

export default function HeaderCarousel() {
    return (
        <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            // dynamicHeight
            useKeyboardArrows
        >
            <div className="container">
                <a url="#url"><img style={{ backgroundImage: `url(${ReactBg})` }} alt="" /></a>
                <div className="slide-information">
                    <Row>
                        <Col className="text-align-left" sm={4}>

                            <Text size="14px" type="thin" margin="0">Teacher</Text>
                            <Text size="16px" type="thin" margin="0">Joe Blow</Text>
                        </Col>
                        <Col className="text-align-left" sm={4}>
                            <FaRegBookmark size="40" className="icon-blue" style={{float:"left"}} />
                            <div style={{float:'left'}}>
                                <Text size="14px" type="thin" margin="0">Category</Text>
                                <Text size="16px" type="thin" margin="0">Audio & Music</Text>
                            </div>

                        </Col>
                        <Col className="text-align-right" sm={4}>
                            <Rating icon='star' defaultRating={4} maxRating={5} disabled size='large' />
                            <label>{4}/5</label>
                            <Text size="16px" type="thin" margin="0 0 20px 0">{100} Reviews </Text>
                        </Col>
                    </Row>
                    <Row className="text-align-left"><Text size="28px" type="thin" margin="0 0 20px 0">React Basics</Text></Row>

                    <Row className="course-details">
                        <Col><Text size="16px" type="thin" margin="0 0 20px 0">
                            <FaSignal className="icon-blue" />Advanced
                        </Text></Col>
                        <Col><Text size="16px" type="thin" margin="0 0 20px 0"><FaListUl className="icon-blue" />6 lectures</Text></Col>
                        <Col><Text size="16px" type="thin" margin="0 0 20px 0"><FaRegClock className="icon-blue" />6 Hours</Text></Col>
                    </Row>

                </div>
            </div>
            <div className="container">
                <img style={{ backgroundImage: `url(${VueBg})` }} alt="" />
                <div>
                    <Text size="24px" type="thin" margin="0 0 20px 0">Course Title</Text>
                    <Row>
                        <Col sm={4}><Text size="16px" type="thin" margin="0 0 20px 0">
                            <FaSignal className="icon-blue" />Advanced
                        </Text></Col>
                        <Col sm={4}><Text size="16px" type="thin" margin="0 0 20px 0"><FaListUl className="icon-blue" />6 lectures</Text></Col>
                        <Col sm={4}><Text size="16px" type="thin" margin="0 0 20px 0"><FaRegClock className="icon-blue" />6 Hours</Text></Col>
                    </Row>
                </div>
            </div>
            <div className="container">
                <img style={{ backgroundImage: `url(${CookiesBg})` }} alt="" />
                <div>
                    <Text size="24px" type="thin" margin="0 0 20px 0">Course Title</Text>
                    <Row>
                        <Col sm={4}><Text size="16px" type="thin" margin="0 0 20px 0">
                            <FaSignal className="icon-blue" />Advanced
                        </Text></Col>
                        <Col sm={4}><Text size="16px" type="thin" margin="0 0 20px 0"><FaListUl className="icon-blue" />6 lectures</Text></Col>
                        <Col sm={4}><Text size="16px" type="thin" margin="0 0 20px 0"><FaRegClock className="icon-blue" />6 Hours</Text></Col>
                    </Row>
                </div>
            </div>
        </Carousel>
    );
}