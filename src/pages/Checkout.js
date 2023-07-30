import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormCheckOut from "../components/form/FormCheckOut";
import CartCheckOut from "../components/card/CartCheckOut";
import OtherBanner from "../components/banner/OtherBanner";
export default function Checkout() {
  return (
    <Container>
      <Row>
        <OtherBanner contentBanner="Checkout" />
      </Row>
      <Row className="mt-5 mb-5">
        <h4 className="mb-4">BILLING DETAILS</h4>
        <Col xs lg="8">
          <FormCheckOut />
        </Col>
        <Col xs lg="4">
          <CartCheckOut />
        </Col>
      </Row>
    </Container>
  );
}
