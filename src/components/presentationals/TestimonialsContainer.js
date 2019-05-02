import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Testimonial from './Testimonial';
import TeacherPicture from '../../assets/img/teacherpicture.jpg';

import '../../styles/testimonials-container.scss';

export default function TestimonialsContainer() {
  const dummyTestimonials = [
    {
      picture: TeacherPicture,
      name: 'Andrés Artavia',
      position: 'Software Engineer',
      quote: 'Kursio has helped me develop myself as a professional, learn new things, keep myself up-to-date with the amazing world of the technology.',
      hasStory: false
    },
    {
      picture: TeacherPicture,
      name: 'Andrés Artavia',
      position: 'Student',
      quote: 'Kursio has helped me develop myself as a professional, learn new things, keep myself up-to-date with the amazing world of the technology.',
      hasStory: true
    },
    {
      picture: TeacherPicture,
      name: 'Andrés Artavia',
      position: 'Software Engineer',
      quote: 'Kursio has helped me develop myself as a professional, learn new things, keep myself up-to-date with the amazing world of the technology.',
      hasStory: false
    },
  ];
  return (
    <Carousel
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      className="testimonials-container"
      useKeyboardArrows
      autoPlay={true}
      interval={8000}
      infiniteLoop={true}
    >
      {dummyTestimonials.map((testimonial) => (
        <Testimonial
          name={testimonial.name}
          picture={testimonial.picture}
          position={testimonial.position}
          quote={testimonial.quote}
          hasStory={testimonial.hasStory}
        />
      ))}
    </Carousel>
  )
};