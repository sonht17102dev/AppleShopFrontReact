import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";

// Component OtherService render các loại service dạng tĩnh
export default function OtherService() {
  return (
    <Container className="my-4">
      <Row className="justify-content-center align-item-center text-center bg-light p-5">
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
      <Row className="my-5">
        <Col xs lg="6">
          <h3>LET'S BE FRIENDS!</h3>
          <p className="text-secondary">
            Nisi nisi tempor consequat laboris nisi.
          </p>
        </Col>

        <Col xs lg="6">
          <div className="d-flex my-3">
            <Form.Control
              placeholder="Enter your email address"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark">Subscibe</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
