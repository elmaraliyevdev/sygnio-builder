import React from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className='footer'>
        <Container>
          <Row>
            <Col md='3'>
              <p className='footer-title'>about sygnio</p>
              <div className='footer-nav'>
                <a href='/about'>
                  <span>About us</span>
                </a>
                <a href='/features'>
                  <span>Features</span>
                </a>
                <a href='/pricing'>
                  <span>Pricing</span>
                </a>
                <a href='/contact'>
                  <span>Contact us</span>
                </a>
              </div>
            </Col>
            <Col md='3'>
              <p className='footer-title'>social</p>
              <div className='footer-nav'>
                <a href='#'>
                  <span>Facebook</span>
                </a>
                <a href='#'>
                  <span>Twitter</span>
                </a>
                <a href='#'>
                  <span>Instagram</span>
                </a>
                <a href='#'>
                  <span>Linkedin</span>
                </a>
              </div>
            </Col>
            <Col md='3'>
              <p className='footer-title'>resources</p>
              <div className='footer-nav'>
                <a href='#'>
                  <span>Documentation</span>
                </a>
                <a href='#'>
                  <span>Support</span>
                </a>
                <a href='#'>
                  <span>Pricing</span>
                </a>
                <a href='/blog'>
                  <span>Blog</span>
                </a>
              </div>
            </Col>
            <Col md='3'>
              <p className='footer-title'>contact sygnio</p>
              <div className='footer-nav'>
                <a href='#'>
                  <span>info@sygnio.com</span>
                </a>
                <a href='#'>
                  <span>+994514560200</span>
                </a>
                <a href='#'>
                  <span>90028, 8383 Wilshire blvd Beverly Hills CA, #801</span>
                </a>
              </div>
            </Col>
          </Row>
          <Row className='mt-50'>
            <Col sm='12'>
              <div className='line'></div>
            </Col>
          </Row>
          <Row>
            <Col md='5'>
              <p className='footer-alt'>
                Sygnio Inc. 90028, 8383 Wilshire blvd Beverly Hills CA, #801.
                Organization number: 556887-9984 Copyright © 2019 Sygnio Inc.
                Headquarters: Los Angeles, CA, USA. All rights reserved.
              </p>
            </Col>
            <Col md='7'></Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
