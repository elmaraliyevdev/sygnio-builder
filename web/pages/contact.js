import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Menu from "../components/shared/Menu";

class Contact extends React.Component {
  render() {
    return (
      <BaseLayout>
        <section className="bg-contact blog-menu">
          <Container>
            <Row>
              <Col sm="12">
                <Menu />
              </Col>
            </Row>
            <Row className="mt-100">
              <Col sm="9">
                <p className="page-name">contact us</p>
                <h1>Let's talk</h1>
                <h5>
                  We understand that getting a POS system for your business is a
                  tough decision. We would be happy to address any questions or
                  concerns you may have.
                </h5>
              </Col>
            </Row>
          </Container>
        </section>
      </BaseLayout>
    );
  }
}

export default Contact;
