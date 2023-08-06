import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormCheckOut from "../components/form/FormCheckOut";
import CartCheckOut from "../components/card/CartCheckOut";
import OtherBanner from "../components/banner/OtherBanner";
import { useSelector } from "react-redux";
export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  const totalPayment = useSelector((state) => state.cart.totalPayment);
  return (
    <>
      <OtherBanner contentBanner="Checkout" />
      <Container className="w-75">
        <Row className="my-5">
          <h4 className="mb-4">BILLING DETAILS</h4>
          <Col xs lg="8">
            <FormCheckOut cartItems={cartItems} totalPayment={totalPayment} />
          </Col>
          <Col xs lg="4">
            <CartCheckOut cartItems={cartItems} totalPayment={totalPayment} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
