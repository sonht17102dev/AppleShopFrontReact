import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
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
    <div className="bg-dark text-secondary w-100 p-5">
      <Row className="justify-content-md-center">
        <Col xs lg="3" className="service-link">
          <h4 className="text-light mb-4">CUSTOMER SERVICES</h4>
          {servicesLink.map((item, i) => (
            <p key={i}>
              <Link>{item}</Link>
            </p>
          ))}
        </Col>
        <Col xs lg="3" className="service-link">
          <h4 className="text-light mb-4">COMPANY</h4>
          {companyLink.map((item, i) => (
            <p key={i}>
              <Link>{item}</Link>
            </p>
          ))}
        </Col>
        <Col xs lg="3" className="service-link">
          <h4 className="text-light mb-4">SOCIAL MEDIA</h4>
          {socialLink.map((item, i) => (
            <p key={i}>
              <Link>{item}</Link>
            </p>
          ))}
        </Col>
      </Row>
    </div>
  );
}
