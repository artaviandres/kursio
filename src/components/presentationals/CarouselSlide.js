import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, Rating } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Text from '../presentationals/Text';
import Button from '../presentationals/Button';
import CourseDetailsHeader from '../presentationals/CourseDetailsHeader';
import WishlistLink from '../presentationals/WishlistLink';

import { FaSignal, FaListUl, FaRegClock } from "react-icons/fa";

import '../../styles/header-carousel.scss';
import '../../styles/icons.scss';
import '../../styles/link.scss';
import STYLES from '../../styles/variables.scss';

export default function CarouselSlide({ image, teacher, category, rating, isCourseAdded, course }) {

    return (
        <div className="container">
            <a className="img-slide" href="#course-image"><img src={image} alt="" /></a>
            <div className="slide-information">
                <CourseDetailsHeader teacher={teacher} category={category} rating={rating}/>
                <Row className="text-align-left">
                    <a className="green-url-hover" href={course.url}>
                        <Text size="32px" type="thin" margin="0">{course.name}</Text>
                    </a>
                </Row>
                <Row className="course-details">
                    <Col><Text size="16px" type="regular" margin="0"><FaSignal className="icon-blue" />Advanced</Text></Col>
                    <Col><Text size="16px" type="regular" margin="0"><FaListUl className="icon-blue" />6 lectures</Text></Col>
                    <Col><Text size="16px" type="regular" margin="0"><FaRegClock className="icon-blue" />6 Hours</Text></Col>
                </Row>
                <Row className="slide-button-section" style={{marginBottom:0}}>
                    <Button color={STYLES["white"]} text="Start Course" classList="button-rounded-md animation-hover button-primary-color xs-full-width-button"
                        onClick={() => {
                            // start course logic
                            console.log('start course')
                        }} />
                    <WishlistLink classList="xs-full-width" isCourseAdded={isCourseAdded}/>
                </Row>
            </div>
        </div>
    );
}