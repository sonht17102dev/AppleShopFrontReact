import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function OtherBanner(props) {
  // const [contentBanner, setContentBanner] = useState()
  let contentBanner = props.contentBanner;
  if (props.contentBanner === "Shop") {
    contentBanner = "Shop";
  } else if (props.contentBanner === "Cart") {
    contentBanner = "Cart";
  } else {
    contentBanner = "Checkout";
  }
  return (
    <Container style={{ height: "250px", backgroundColor: "#F8F9FA" }}>
      <Row className="justify-content-center align-items-center bg-light h-100">
        <Col xs lg="9" className="d-flex justify-content-start">
          <div className="fs-1 p-4">{contentBanner}</div>
        </Col>
        <Col
          xs
          lg="3"
          className="d-flex justify-content-end align-items-center"
        >
          {contentBanner !== "Checkout" && (
            <div className="fs-4 p-4 align-middle">{contentBanner}</div>
          )}
          {contentBanner === "Checkout" && (
            <Breadcrumb>
              <Link to="/" className="fw-bold text-dark">
                HOME /{" "}
              </Link>
              <Link to="/cart" className="fw-bold text-dark">
                CART /{" "}
              </Link>
              <Link className="text-secondary fw-normal">CHECKOUT</Link>
            </Breadcrumb>
          )}
        </Col>
      </Row>
    </Container>
  );
}
