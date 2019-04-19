import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, Rating } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Text from '../presentationals/Text';
import Button from '../presentationals/Button';
import { FaRegBookmark, FaSignal, FaListUl, FaRegClock, FaHeart } from "react-icons/fa";

import '../../styles/header-carousel.scss';
import '../../styles/icons.scss';

export default function CarouselSlide({ image, teacher, category, rating, isCourseAdded }) {
    const [isAdded, changeCourseState] = useState(isCourseAdded);

    return (
        <div className="container">
            <a href="#course-image"><img className="img-slide" src={image} alt="" /></a>
            <div className="slide-information">
                <Row>
                    <Col sm={4} className="profile-info-image text-align-left vertical-align-center" style={{ paddingLeft: 0 }}>
                        <a style={{ float: "left", margin: "0 5px 0 0" }} href="#teacher">
                            <img src={teacher.image} alt="teacher image" />
                        </a>
                        <div style={{ float: "left" }}>
                            <Text size="14px" type="thin" margin="0">Teacher:</Text>
                            <Text size="16px" type="thin" margin="0">{teacher.name}</Text>
                        </div>
                    </Col>
                    <Col sm={4} className="text-align-left vertical-align-center">
                        <FaRegBookmark size="40" className="icon-blue" style={{ float: "left" }} />
                        <div style={{ float: 'left' }}>
                            <Text size="14px" type="thin" margin="0">Category:</Text>
                            <Text size="16px" type="thin" margin="0">{category}</Text>
                        </div>

                    </Col>
                    <Col sm={4} className="text-align-right">
                        <Rating icon='star' defaultRating={rating.rating} maxRating={5} disabled size='large' />
                        <label>{rating.rating}/5</label>
                        <Text size="16px" type="thin" margin="0">{rating.reviews} Reviews </Text>
                    </Col>
                </Row>
                <Row className="text-align-left">
                    <Text size="32px" type="thin" margin="0">React Basics</Text>
                </Row>
                <Row className="course-details">
                    <Col><Text size="16px" type="regular" margin="0"><FaSignal className="icon-blue" />Advanced</Text></Col>
                    <Col><Text size="16px" type="regular" margin="0"><FaListUl className="icon-blue" />6 lectures</Text></Col>
                    <Col><Text size="16px" type="regular" margin="0"><FaRegClock className="icon-blue" />6 Hours</Text></Col>
                </Row>
                <Row>
                    <Button color="#fff" text="Start Course" classList="button-rounded-md animation-hover button-secondary-color "
                        onClick={() => {
                            // start course logic
                            console.log('start course')
                        }} />
                    <a className={`heart-wishlisted-wrapper ${isAdded ? "" : "disabled"}`} href="#" style={{ display: "flex", alignItems: "center", margin: "0 30px" }}
                        onClick={(e) => {
                            e.preventDefault();
                            // add to wishlist logic
                            changeCourseState(!isAdded);
                        }} >
                        <span className="icon-heart-wishlisted"><FaHeart size="16" /></span><Text size="14px" type="regular" margin="0 0 0 8px">{isAdded ? "Wishlisted" : "Add to wishlist"}</Text>
                    </a>
                </Row>
            </div>
        </div>
    );
}