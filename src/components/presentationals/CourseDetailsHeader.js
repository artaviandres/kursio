import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Rating } from 'semantic-ui-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Text from '../presentationals/Text';
import { FaRegBookmark } from "react-icons/fa";

import '../../styles/icons.scss';
import '../../styles/link.scss';
import '../../styles/course-details-header.scss';

export default function CourseDetailsHeader({ teacher, category, rating }) {

    return (
        <Row className="course-details-header">
            <Col sm={12} md={4} className="profile-info-image sm-text-align-left vertical-align-center">
                <img style={{ float: "left", margin: "0 5px 0 0" }} src={teacher.image} alt="teacher image" />
                <div style={{ float: "left" }}>
                    <Text size="14px" type="thin" margin="0">Teacher:</Text>
                    <a className="dark-url" href="#teacher">
                        <Text size="16px" type="regular" margin="0">{teacher.name}</Text>
                    </a>
                </div>

            </Col>
            <Col sm={12} md={4} className="sm-text-align-left vertical-align-center">
                <FaRegBookmark size="40" className="icon-blue" style={{ float: "left" }} />
                <div style={{ float: 'left' }}>
                    <Text size="14px" type="thin" margin="0">Category:</Text>
                    <a className="dark-url" href={category.url}>
                        <Text size="16px" type="regular" margin="0">{category.name}</Text>
                    </a>
                </div>
            </Col>
            <Col sm={12} md={4} className="lg-text-align-right sm-text-align-left">
                <Rating icon='star' defaultRating={rating.rating} maxRating={5} disabled size='large' />
                <label>{rating.rating}/5</label>
                <Text size="16px" type="thin" margin="0">{rating.reviews} Reviews </Text>
            </Col>
        </Row>
    );
}