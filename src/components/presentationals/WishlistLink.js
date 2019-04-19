import React, { useState } from 'react';
import Text from '../presentationals/Text';
import { FaHeart } from "react-icons/fa";

import '../../styles/icons.scss';
import '../../styles/link.scss';

export default function CourseDetailsHeader({ isCourseAdded }) {
    const [isAdded, changeCourseState] = useState(isCourseAdded);
    const [loading, setLoading] = useState(false);

    const addToWishlist = (e) => {
        e.preventDefault();
        setLoading(true);
        // add to wishlist logic
        setTimeout(
            function () {
                setLoading(false);
                changeCourseState(!isAdded);
            },
            1000
        );
    }

    return (
        <a className={`heart-wishlisted-wrapper ${isAdded ? "" : "disabled"}`} href="#" style={{ display: "flex", alignItems: "center", margin: "0 30px", color: "initial" }}
            onClick={(e) => { addToWishlist(e) }} >
            <span className={`icon-heart-wishlisted ${loading ? "loading" : ""}`}><FaHeart size="16" style={{ display: loading ? "none" : "inline" }} /></span><Text size="14px" type="regular" margin="0 0 0 8px">{isAdded ? "Wishlisted" : "Add to wishlist"}</Text>
        </a>
    );
}