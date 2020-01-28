import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Menu from "../components/shared/Menu";

class Pricing extends React.Component {
  render() {
    return (
      <BaseLayout>
        <header className='bg-type'>
          <Container>
            <Row>
              <Menu />
            </Row>
            <Row>
              <Col md='6'>
                <div className='home-hero-box'>
                  <p className='page-name'>restaurant</p>
                  <h1>Restaurant POS built with your establishment in mind</h1>
                  <p style={{ marginTop: "0px" }}>
                    We built a simple POS system loaded with critical features
                    to run your business wherever and whenever.
                  </p>
                  <a href='#' className='btn green-btn'>
                    Request demo
                  </a>
                </div>
              </Col>
              <Col md='6'>
                <img
                  src='../static/images/restaurant.jpg'
                  className='type-img'
                />
              </Col>
            </Row>
          </Container>
        </header>
        <section className='content light'>
          <Container>
            <Row>
              <Col md='6'>
                <img src='../static/images/restaurant-cafe-increase-sales.png' />
              </Col>
              <Col md='6'>
                <h2>
                  Unleash your true potential with the ultimate in restaurant
                  automation.
                </h2>
                <p>
                  Sygnio is your one-stop solution for all your restaurant
                  software needs. From fine dining establishments, quick-service
                  and fast-casual restaurants, small business cafes and
                  bakeries, and everything in between - Sygnio provides POS
                  systems for all concepts and environments.
                </p>
                <p>
                  Our dedicated team is proficient at designing POS solutions
                  that streamline operations and help bring in more smiles per
                  table. At Sygnio, we strive to understand each of our
                  customer’s unique business needs and deliver best-fit
                  solutions with agility and lower total cost of ownership.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content grey'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <h2>Menu management</h2>
                <p>
                  Sygnio’s Menu Management feature ensures that taking orders is
                  no longer a time-consuming task. Our expert developers
                  designed the Sygnio Menu Management system, specifically
                  keeping service staff convenience in mind. With a host of
                  smart features that make menu ordering, reporting, and prep -
                  it enables restaurateurs to manage their menu effortlessly.
                </p>
              </Col>
              <Col md='6'>
                <img
                  src='../static/images/restaurant-menu-management.png'
                  style={{ width: "350px" }}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content light'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <img
                  src='../static/images/restaurant-table-management.png'
                  style={{ width: "400px" }}
                />
              </Col>
              <Col md='6'>
                <h2>Table management.</h2>
                <p>
                  The Table Management feature ensures that you take the
                  guesswork out of wait time estimates, status updates, and
                  current course status. This feature gives your waiting staff
                  the complete picture of your restaurant’s layout. As a result
                  of this feature, managers will ensure prompt services to
                  waiting customers. Additionally, servers will manage to track
                  the status of each table, giving complete information about
                  meals served, unoccupied tables, and tables awaiting service.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='cta-dark'>
          <Container>
            <Row>
              <Col sm='12'>
                <h2>Building software for creating great business.</h2>
                <a href='/contact' className='btn green-btn'>
                  Contact us
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content light'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <h2>Staff management</h2>
                <p>
                  A restaurant is only as good as the staff working for it.
                  Sygnio POS can help your staff work smarter and more
                  efficiently. It allows restaurateurs to create a detailed
                  working plan for each member of your staff. Your team can
                  easily access the information that’s assigned to them. So, no
                  matter how crazy things get in the kitchen, Sygnio POS will
                  always keep things under control and ensure your staff stays
                  efficient.
                </p>
              </Col>
              <Col md='6'>
                <img src='../static/images/restaurant-staff-management.png' />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content grey'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <img src='../static/images/restaurant-report.png' />
              </Col>
              <Col md='6'>
                <h2>Report analytics - inform decision.</h2>
                <p>
                  Getting to grips with what's happening can help restaurateurs
                  make snappy real-time decisions. These decisions very often
                  have major consequences on a restaurant's daily activities,
                  which can impact long-term growth. Sygnio’s POS reports can be
                  accessed anytime, anywhere, and from any device. What’s more,
                  the reports can be made available in a number of reporting
                  tools like XLs, data graphs/charts, and more.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content light'>
          <Container>
            <Row>
              <Col sm='12'>
                <h2>Invested in your success</h2>
                <p style={{ marginBottom: "50px" }}>
                  Sygnio has been designed to help restaurateurs optimize
                  operations and progressively grow their business. Regardless
                  of whether you are new to the industry, or have years of
                  experience in the restaurant business, Sygnio’s team is
                  dedicated to helping increase efficiency, while making the
                  most of every resource at your disposal.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <div className='feature-box'>
                  <img src='../static/images/cloud.svg' />
                  <h4>Easy integration</h4>
                  <p>
                    Sygnio guarantees that you seamlessly integrate to the new
                    POS system without facing technical roadblocks. Our
                    technical team is adept in foreseeing issues and fixing them
                    before they become a pain in the future.
                  </p>
                  <a href='#'>Learn more</a>
                </div>
              </Col>
              <Col md='4'>
                <div className='feature-box'>
                  <img src='../static/images/device.svg' />
                  <h4>Menu adjustement</h4>
                  <p>
                    Adjusting your menu to a new POS system can be a scary
                    proposition. Well, not anymore. Sygnio’s intuitive UI and
                    easy navigation means that migrating to your new POS will be
                    a breeze.
                  </p>
                  <a href='#'>Learn more</a>
                </div>
              </Col>
              <Col md='4'>
                <div className='feature-box'>
                  <img src='../static/images/payment.svg' />
                  <h4>Optimal security</h4>
                  <p>
                    We understand that your name is your most valuable asset. We
                    take considerable measures to ensure that you and your
                    clients’ data stays safe from possible breaches.
                  </p>
                  <a href='#'>Learn more</a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='divider'>
          <Container>
            <div className='line'></div>
          </Container>
        </section>
        <section className='content light'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <h2>Sygnio hardware</h2>
                <p>
                  Sygnio gives your restaurant business state-of-the-art
                  hardware package that provides all the flexibility your
                  company needs to ensure efficiency. Whatever your business
                  requirements may be Sygnio has your back to make your
                  restaurant run smoother. You can look forward to speeding up
                  your inventory management and business transactions.
                </p>
                <p>
                  To help you get started, we provide you with a range of
                  tutorials, articles, and guides that make migrating to new
                  systems easy and seamless. Our 24/7 customer support team is
                  there to answer any of your questions in case you find
                  yourself unable to move forward.
                </p>
              </Col>
              <Col md='6'>
                <img src='../static/images/increase-sales.png' />
              </Col>
            </Row>
          </Container>
        </section>
      </BaseLayout>
    );
  }
}

export default Pricing;
