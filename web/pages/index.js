import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Menu from "../components/shared/Menu";
import Slider from "../components/shared/Slider";

class Index extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "../static/js/main.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <BaseLayout>
        <header className='bg-home'>
          <Container>
            <Row>
              <Menu />
            </Row>
            <Row>
              <Col md='6'>
                <div className='home-hero-box'>
                  <h1 className='home-hero--heading mt-150 rotate-wrapper'>
                    The best website builder system for
                    <br />
                    <span className='text-item'>restaurant.</span>
                    <span className='text-item'>retail.</span>
                    <span className='text-item'>other services.</span>
                  </h1>
                  <p>
                    Stay two steps ahead of the competition with Sygnio’s POS
                    Software.
                  </p>
                  <div className='btn-box'>
                    <a href='/' className='btn green-btn'>
                      Start my free trial
                    </a>
                    <a href='/features' className='btn light-btn'>
                      See how it works
                    </a>
                  </div>
                </div>
              </Col>
              <Col md='6'>
                <img
                  src='../static/images/product-img.webp'
                  className='hero-img'
                />
              </Col>
            </Row>
          </Container>
        </header>
        <section className='content light'>
          <Container>
            <Row className='vert-center'>
              <Col md='6'>
                <img src='../static/images/one.jpg' />
              </Col>
              <Col md='6'>
                <h2>Fuel Growth with More Lead-Gen Campaigns</h2>
                <p>
                  Sygnio builder, as an all-in-one POS solution, helps business
                  owners gain control over processing payments, generating
                  reports, managing staff, and organizing inventory. In addition
                  to the many features, the software has been designed as an
                  easy to set up and use POS solution. The user-friendly
                  interface ensures that your business will be ready to trade
                  within minutes.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className='content grey'
          style={{ padding: "100px 0px 200px 0px" }}
        >
          <Container>
            <Row className='vert-center'>
              <Col md='6'>
                <h2>Increase sales</h2>
                <p>
                  Sygnio smart features is a one of a kind add-on that helps
                  retailers and restaurants increase efficiency and boost sales.
                  The inventory management function helps to avoid stock-out
                  situations by making procurements easy and on-time. The
                  Analysis feature helps managers identify best-selling items
                  and focus more on those items that will generate more revenue.
                </p>
              </Col>
              <Col md='6'>
                <img src='../static/images/screen.png' />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content dark'>
          <Container>
            <Row>
              <Col md='3'>
                <h2 className='light-text'>
                  Find a smart solution that fits your business.
                </h2>
              </Col>
              <Col md='9'>
                <Slider />
              </Col>
            </Row>
          </Container>
        </section>
        <section className='content light'>
          <Container>
            <Row className='vert-center'>
              <Col md='6'>
                <img src='../static/images/two.jpg' />
              </Col>
              <Col md='6'>
                <h2>Provide better services</h2>
                <p>
                  Last impressions are often the most important. Your POS
                  software plays a key role in ensuring that the last impression
                  your customer has on your business is a great one. An
                  efficient POS solution will mean that customers spend as
                  little time checking-out while being billed accurately. Sygnio
                  helps retailers and restaurants get more done in less time.
                  Simply transact using Sygnio, and handle your inventory for
                  one shop or multiple locations from a single interface.
                </p>
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
              <Col sm='12'>
                <h2>Features and benefits</h2>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <div className='feature-box'>
                  <img src='../static/images/cloud.svg' />
                  <h4>Cloud based</h4>
                  <p>
                    Sygnio POS Software is a fully cloud-based service. Simply
                    log-in and start your day. Your sales, product, and reports
                    are always available, safe, and up to date.
                  </p>
                  <a href='/'>Learn more</a>
                </div>
              </Col>
              <Col md='4'>
                <div className='feature-box'>
                  <img src='../static/images/device.svg' />
                  <h4>Works on any device</h4>
                  <p>
                    The software works on any device, whether its iPad, Mac, or
                    PC. All you need is a browser to get started. This makes
                    migrating to existing devices easy and cost-effective.
                  </p>
                  <a href='/'>Learn more</a>
                </div>
              </Col>
              <Col md='4'>
                <div className='feature-box'>
                  <img src='../static/images/payment.svg' />
                  <h4>Accepts any payments</h4>
                  <p>
                    Sygnio works with most merchant providers around the globe.
                    Customers have the convenience of making payments of any
                    type whether card, phone, or others are accepted.
                  </p>
                  <a href='/'>Learn more</a>
                </div>
              </Col>
            </Row>
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
                  <a href='/' className='btn green-btn'>
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
                  <a href='/' className='btn dark-btn'>
                    Explore the platform
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='cta-one'>
          <Container>
            <Row>
              <div className='col-md-7'>
                <h2>Building software for creating great business.</h2>
                <a href='#' className='btn green-btn'>
                  Meet with sales
                </a>
              </div>
              <div className='col-md-5'>
                <div className='cta-side'>
                  <h4>Support portal</h4>
                  <a href='#'>Integration</a>
                  <a href='#'>Customer suppor</a>
                  <a href='#'>Sales team</a>
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js'></script>
        <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
        <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/SplitText.min.js'></script>
      </BaseLayout>
    );
  }
}

export default Index;
