import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Menu from "../components/shared/Menu";

class About extends React.Component {
  render() {
    return (
      <BaseLayout>
        <header className="bg-about">
          <Container>
            <Row>
              <Menu />
            </Row>
            <Row>
              <Col md="8">
                <div className="home-hero-box">
                  <p className="page-name">about us</p>
                  <h1 className="home-hero--heading rotate-wrapper">
                    We Are The Helping Hands To Your Business Growth
                  </h1>
                  <p>
                    We built a simple POS system loaded with critical features
                    to run your business wherever and whenever.
                  </p>
                </div>
              </Col>
              <Col md="4"></Col>
            </Row>
            <Row>
              <Col sm="12">
                <img src="../static/images/comp.jpg" />
              </Col>
            </Row>
            <Row>
              <Col md="9">
                <h2>
                  We believe in empowering businesses to reach new heights.
                </h2>
                <p>
                  Sygnio is a latest state-of-art POS provider with its
                  comprehensive system that includes a full spectrum of business
                  functions in one software. We help businesses to optimize
                  management effortlessly with the help of our powerful POS
                  system.
                </p>
                <p>
                  The secret behind our success is a skilled team, all working
                  for one mission: delivering a simple, yet effective POS system
                  to take your business to the next level - and we passionately
                  work for it because we love to see businesses grow with our
                  POS software.
                </p>
              </Col>
              <Col md="3"></Col>
            </Row>
          </Container>
        </header>
        <section className="content light">
          <Container>
            <Row>
              <Col md="6">
                <img src="../static/images/manage-staff.png" />
              </Col>
              <Col md="6">
                <h2>Why us</h2>
                <p>
                  Sygnio POS software gathered all the features you need to run
                  your business in one system. From payment processing to
                  reporting, from inventory management to staff scheduling- we
                  put loads of essential elements in a simple solution that you
                  can monitor and analyze in the palm of your hand. We have
                  built every feature of our POS system keeping our clients’
                  unique needs mind.
                </p>
                <p>
                  Hence, we not only give managers more control to keep track of
                  day-to-day operations but also have a better vision of
                  long-term actions. By providing premium performance and
                  all-round support, our solutions reduce operational costs,
                  increase efficiency, and boost profits. All in all, by
                  building a robust and centralized POS Software, we serve to
                  make your business stronger.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="cta-light">
          <Container>
            <Row>
              <Col sm="12" className="text-center">
                <h2>Have a question?</h2>
                <p>
                  We love helping brands to make the best decisions for their
                  development! Our expert support team will be happy to answer
                  all your questions and dispel concerns.
                </p>
                <a href="#" className="btn green-btn">
                  Contact us
                </a>
              </Col>
            </Row>
          </Container>
        </section>
      </BaseLayout>
    );
  }
}

export default About;
