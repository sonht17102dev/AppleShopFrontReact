import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const servicesLink = [
  "Help & Contact Us",
  "Return & Refunds",
  "Online Stores",
  "Term & Conditions",
];
const companyLink = [
  "What We Do",
  "Available Services",
  "Latest Posts",
  "FAQs",
];
const socialLink = ["Twitter", "Intagram", "Facebook", "Tiktok"];
export default function Footer() {
  return (
    <Container className="bg-dark text-light">
      <Row className="justify-content-md-center">
        <Col xs lg="3">
          <h4>CUSTOMER SERVICES</h4>
          {servicesLink.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Col>
        <Col xs lg="3">
          <h4>CUSTOMER SERVICES</h4>
          {companyLink.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Col>
        <Col xs lg="3">
          <h4>CUSTOMER SERVICES</h4>
          {socialLink.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
