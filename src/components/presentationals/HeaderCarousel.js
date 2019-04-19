import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import CarouselSlide from './CarouselSlide';

import '../../styles/header-carousel.scss';
import '../../styles/icons.scss';
//img
import UserPicture from '../../assets/img/profilepicture.jpg';
import ReactBg from '../../assets/img/logo-og.png';
import VueBg from '../../assets/img/vue.png';
import CookiesBg from '../../assets/img/cookies.jpg';

export default function HeaderCarousel() {
    return (
        <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            useKeyboardArrows
        >
            <CarouselSlide 
                image={ReactBg}
                teacher={{
                    name: "Joe Blow",
                    image: UserPicture
                }}
                category={{
                    name:"Audio & Music",
                    url:"#Audio & Music"
                }}
                course={{
                    name:"React Basics",
                    url:"#React_Basics"
                }}
                rating={{
                    rating: 4.5,
                    reviews: 100
                }}
                isCourseAdded={false}
            />
            <CarouselSlide 
                image={CookiesBg}
                teacher={{
                    name: "Joe Blow",
                    image: UserPicture
                }}
                course={{
                    name:"VueJS Basics",
                    url:"#VueJS_Basics"
                }}
                category={{
                    name:"Audio & Music",
                    url:"#Audio & Music"
                }}
                rating={{
                    rating: 4,
                    reviews: 100
                }}
                isCourseAdded={true}
            />
            <CarouselSlide 
                image={VueBg}
                teacher={{
                    name: "Joe Blow",
                    image: UserPicture
                }}
                course={{
                    name:"Baking some amazing Cookies!",
                    url:"#React_Basics"
                }}
                category={{
                    name:"Audio & Music",
                    url:"#Audio_&_Music"
                }}
                rating={{
                    rating: 4,
                    reviews: 100
                }}
                isCourseAdded={false}
            />
        </Carousel>
    );
}