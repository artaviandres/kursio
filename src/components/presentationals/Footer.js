import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import FooterBlock from './FooterBlock';
import '../../styles/footer.scss';

export default function Footer({ margin }) {
  return (
    <Grid style={{ margin }} className="footer-container">
      <Row className="footer-row">
        <FooterBlock>
          <h2>About Us</h2>
          <p>Kursio is a platform where you can easily learn new things, specialize in an specific matter,
            or teach what you know to others, while getting paid for it.</p>
          <p className="align-vertical">Developed by <a>ProviderStack</a></p>
        </FooterBlock>
        <FooterBlock>
          <h2>Contact</h2>
          <p>USA, Callifornia 20, First Avenue, Callifornia</p>
          <p>Tel.: +1 212 458 300 32</p>
          <p>Fax: +1 212 375 24 14</p>
          <p>info@masterstudy.com</p>
        </FooterBlock>
        <FooterBlock>
          <h2>Sitemap</h2>
          <div>
            <a>Home</a>
            <a>Development</a>
          </div>
          <div>
            <a>Recent Courses</a>
            <a>My Profile</a>
          </div>
          <div>
            <a>Popular Courses</a>
            <a>Graphic Design</a>
          </div>
        </FooterBlock>
      </Row>
    </Grid>
  );
};