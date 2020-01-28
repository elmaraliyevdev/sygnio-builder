import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Menu from "../components/shared/Menu";

class Features extends React.Component {
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
                  <h1>Advanced retail POS that gets you ahead</h1>
                  <p style={{ marginTop: "0px" }}>
                    Sygnio retail POS lets you efficiently manage, sell, and
                    grow your retail business. Our POS system for retailers
                    brings together retail sales, storefront, and back-office on
                    one platform. Get our retail POS and make complex tasks
                    simple.
                  </p>
                  <a href='#' className='btn green-btn'>
                    Request demo
                  </a>
                </div>
              </Col>
              <Col md='6'>
                <img src='../static/images/retail-1.jpg' className='type-img' />
              </Col>
            </Row>
          </Container>
        </header>
        <section className='content light'>
          <Container>
            <Row>
              <Col md='6'>
                <img src='../static/images/retail-electronics-crm.png' />
              </Col>
              <Col md='6'>
                <h2>
                  Stock and sell quickly with
                  <br /> our retail POS
                </h2>
                <p>
                  The POS software lets you perform tasks in seconds with
                  straightforward control. View stock levels and add items from
                  the retail POS. When you are low on stock, send purchase
                  orders from the Dashboard control within seconds. Print
                  barcode tags for fast checkout. Access your retail POS from
                  any device, anytime you want.
                </p>
                <p>
                  Choose Sygnio retail POS and deliver customer requests on
                  time. With a single system, you will have control over every
                  business location. Grow your business with quick product
                  transfers, store comparison function, centralized purchasing,
                  and stock tracking.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content grey'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <h2>Why us</h2>
                <p>
                  Sygnio retail POS helps you transfer your stock, increase your
                  profit, and get 24/7 customer support. Control the whole store
                  from our retail POS system. Provide quick exchanges and
                  returns. Build client profiles to create a strong relationship
                  with your customers. Managing your inventory will no longer be
                  a time taking process. From our retail POS, you can create and
                  add items quickly and view your stock levels.
                </p>
                <p>
                  In case of low stock, purchase your orders with the help of
                  the Dashboard. Get detailed reports that help you take
                  real-time decisions to grow your business, and make more
                  precise decisions. View the cost of goods sold across multiple
                  stores and find out the value of your inventory. Streamline
                  your store and compare labor costs with sales.
                </p>
              </Col>
              <Col md='6'>
                <img src='../static/images/retail-stores-analytics.png' />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='cta-image'>
          <div className='dark-overlay'></div>
          <div className='gradient-overlay'></div>
          <Container>
            <Row>
              <Col sm='12'>
                <h1>
                  All-in-one POS hardware
                  <br /> for your business
                </h1>
                <p style={{ marginTop: "24px" }}>
                  Sygnio retail POS lets you efficiently manage, sell, and grow
                  your retail business. Our POS system for retailers brings
                  together retail sales, storefront, and back-office on one
                  platform. Get our retail POS and make complex tasks simple.
                </p>
                <a href='#' className='btn green-btn'>
                  Request demo
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content light'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <img src='../static/images/retail-payment=processing-solutions.png' />
              </Col>
              <Col md='6'>
                <h2>Payment processing solution.</h2>
                <p>
                  Sygnio retail POS allows your business to accept all primary
                  payment methods, including cards, phone-pay, and checks. Our
                  secure, reliable, and fast payment processing cut-down on wait
                  times. The option to choose multiple payment methods results
                  in low processing rates to help you and your customers save
                  money. Sygnio offers you a POS system that will fit perfectly
                  to your specific business needs.
                </p>
                <p>
                  Authorize debit cards, credit cards, and check instantly and
                  allow more transactions. Efficiently monitor your activity and
                  gain full control of your business at all times. With our
                  reliable POS system, get the highest level of security during
                  each transaction. Reduce the risk of any credit card fraud and
                  protect customer data. Plus, with fast and secure payment
                  processing, reduce customer wait times, and increase
                  convenience.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content grey'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <h2>CRM</h2>
                <p>
                  Increase customer satisfaction, improve the performance of
                  your company, and reduce costs with a dynamic customer
                  relationship management feature. Our retail POS software helps
                  you analyze relationships with individual customers and
                  increases brand loyalty. Sygnio collects specific data so that
                  you can customize your service to different customer groups.
                  Adjust your business strategies based on CRM data and apply
                  them to suit your customers better.
                </p>
              </Col>
              <Col md='6'>
                <img src='../static/images/retail-crm.png' />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content green'>
          <Container>
            <Row>
              <Col sm='12'>
                <h2>Staff management</h2>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <p>
                  Maximize the productivity and work satisfaction of your staff
                  with Sygnio retail POS. Add staff rosters, approve work hours,
                  and view budget and cost requirements. Save time by reducing
                  manual jobs. Access all budgeting, time registration, and
                  planning information of your business. Simplify distribution
                  planning and staffing. Check worked hours and notify managers
                  in case of occurred errors or problems. Sygnio lets you
                  quickly analyze staff performance and overhead costs.
                </p>
              </Col>
              <Col md='6'>
                <p>
                  Get all required information from a central database and
                  compare periods, locations, and more. Examine the work of your
                  employees by their shift, job, role, and compare this analysis
                  to sales data. Provide maximum flexibility to your workers
                  while controlling the staffing budget. Sygnio retail POS
                  provides a staff portal where workers can log-in and monitor
                  working hours, upcoming shifts, view messages, and ask for
                  shift changes.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content light'>
          <Container>
            <Row className='fd'>
              <Col md='6'>
                <img src='../static/images/retail-live-report.png' />
              </Col>
              <Col md='6'>
                <h2>Live reporting and analysis.</h2>
                <p>
                  Sygnio retail POS offers you all the control and information
                  you need. Real-time sales and financial reports of each
                  location of your business are essential in understanding your
                  requirements, marketing, and shortfalls. Create, edit, and
                  manage your inventory stock, staff performance, customer
                  relationship from the central point. You will have data you
                  need to run a successful business.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content light' style={{ paddingTop: "0px" }}>
          <Container>
            <Row>
              <Col md='6'>
                <h2>Inventory management</h2>
                <p>
                  Controlling inventory is perhaps the biggest challenge for
                  business owners. Sygnio retail POS offers you multi-store
                  inventory management so that you can purchase, transfer, and
                  receive stock from one place. You can manage all your stores
                  and e-commerce business from a single POS system. Sygnio will
                  provide you the flexibility to add new stores as you grow.
                </p>
              </Col>
              <Col md='6'>
                <img src='../static/images/retail-inventory.png' />
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
            <Row>
              <Col md='6'>
                <div className='big-box grey'>
                  <img src='../static/images/support.svg' />
                  <h2>Support</h2>
                  <p>
                    You can provide a great customer experience only when your
                    systems and staff are running optimally. Sygnio understands
                    the importance of operationally working like a well-oiled
                    machine. This is primarily why Sygnio is committed to
                    assisting clients every step of the way. Whether it concerns
                    technical support related to software or hardware issues, or
                    its some other problem hindering efficiency - we’ve got your
                    back. Once we help you get your POS solution up and running,
                    our job of assisting you 24/7, just got started.{" "}
                  </p>
                  <a href='#' className='btn green-btn'>
                    Meet the team
                  </a>
                </div>
              </Col>
              <Col md='6'>
                <div className='big-box grey'>
                  <img src='../static/images/sygnio-hardware.svg' />
                  <h2>Sygnio hardware</h2>
                  <p>
                    Sygnio understands that your POS hardware needs to work YOUR
                    way, and not the other way round. Our hardware can be
                    tailored to any existing POS set-up to boost transaction
                    speeds and inventory management efficiency further. Our
                    hardware offerings come with state-of-the-art designs and
                    cutting-edge technology. What’s more, you can customize your
                    POS hardware with crucial add-ons like credit card readers,
                    printers, cash drawers, and so much more. Whatever your POS
                    hardware needs, Sygnio has you covered.
                  </p>
                  <a href='#' className='btn dark-btn'>
                    Explore the platform
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='cta-dark'>
          <Container>
            <Row>
              <div className='col-sm-12 text-center'>
                <h2>Building software for creating great business.</h2>
                <a href='#' className='btn green-btn'>
                  Contact us
                </a>
              </div>
            </Row>
          </Container>
        </section>
      </BaseLayout>
    );
  }
}

export default Features;
