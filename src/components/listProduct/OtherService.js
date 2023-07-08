import React from "react";
import { Col, Container, InputGroup, Row, Form, Button } from "react-bootstrap";

export default function OtherService() {
  return (
    <Container className="w-75 mt-4 mb-4">
      <Row className="justify-content-center align-item-center text-center">
        <Col xs lg="4">
          <h4>FREE SHIPPING</h4>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
        <Col xs lg="4">
          <h4>24 X 7 SERVICE</h4>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
        <Col xs lg="4">
          <h4>FESTIVAL OFFER</h4>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
      </Row>
      <Row className="mt-3 align-item-center">
        <Col xs lg="6">
          <h4>LET'S BE FRIENDS!</h4>
          <p className="text-secondary">
            Nisi nisi tempor consequat laboris nisi
          </p>
        </Col>
        <Col xs lg="6">
          <InputGroup className="mb-3">
            <Form.Control placeholder="Enter your email address" />
            <Button variant="secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
