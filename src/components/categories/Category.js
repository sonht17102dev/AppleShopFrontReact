import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Category.module.css";
export default function Category() {
  return (
    <Container>
      <div className="text-center categories-heading">
        <p className="text-secondary">CAREFULLY CREATED COLLECTIONS</p>
        <h4 className="text-dark">BROWSE OUR CATEGORIES</h4>
      </div>
      <Row className={classes.category_image}>
        <Col xs lg="6">
          <NavLink to="/shop">
            <img src="./images/product_1.png" alt="iphone" />
          </NavLink>
        </Col>
        <Col xs lg="6">
          <NavLink to="/shop">
            <img src="./images/product_2.png" alt="mac" />
          </NavLink>
        </Col>
      </Row>
      <Row className={`mt-4 ${classes.category_image}`}>
        <Col xs lg="4">
          <NavLink to="/shop">
            <img src="./images/product_3.png" alt="ipad" />
          </NavLink>
        </Col>
        <Col xs lg="4">
          <NavLink to="/shop">
            <img src="./images/product_4.png" alt="iwatch" />
          </NavLink>
        </Col>
        <Col xs lg="4">
          <NavLink to="/shop">
            <img src="./images/product_5.png" alt="ipods" />
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}
