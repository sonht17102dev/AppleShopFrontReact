import React from "react";
<<<<<<< HEAD
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
=======
import { Button, Col, Container, InputGroup, Row, Form } from "react-bootstrap";

export default function OtherService() {
  return (
    <Container className="mt-4 mb-4">
      <Row className="justify-content-center align-item-center text-center">
        <Col xs lg="4">
          <h3>FREE SHIPPING</h3>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
        <Col xs lg="4">
          <h3>24 X 7 SERVICE</h3>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
        <Col xs lg="4">
          <h3>FESTIVAL OFFER</h3>
          <p className="text-secondary">Free shipping worldwide</p>
        </Col>
      </Row>
      <Row className="mt-4 mb-4">
        <Col xs lg="6">
          <h3>LET'S BE FRIENDS!</h3>
          <p className="text-secondary">
            Nisi nisi tempor consequat laboris nisi.
          </p>
        </Col>

        <Col xs lg="6">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Enter your email address"
              aria-describedby="basic-addon2"
            />
            <Button variant="secondary" id="button-addon2">
              Subscibe
>>>>>>> 9fb4620fcd3c22de340f84755c7b6105d93e5af8
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
}
