import React, { useState } from "react";
import Banner from "../components/banner/Banner";
import { Col, Container, Row, NavDropdown, Form } from "react-bootstrap";
import CategoryVerticle from "../components/categories/CategoryVerticle";
import ListProducts from "../components/listProduct/ListProducts";
import { useLoaderData } from "react-router-dom";

export default function Shop() {
  const [typeCategory, setTypeCategory] = useState("");
  const handleGetTypeFromChild = (data) => {
    setTypeCategory(data.toLowerCase());
  };
  const listProducts = useLoaderData();
  return (
    <>
      <Banner />
      <Container className="w-75">
        <Row>
          <Col xs lg="3">
            <h4>CATEGORIES</h4>
            <CategoryVerticle onData={handleGetTypeFromChild} />
          </Col>
          <Col xs lg="9" className="row justify-content-between">
            <Col xs lg="6" className="d-flex">
              <Form className="mb-3 w-75">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder="Enter search here!"
                    className="w-100"
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col xs lg="6" className="d-flex justify-content-end">
              <NavDropdown
                id="dropdown"
                title="Default sorting"
                menuVariant="dark"
              >
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
              </NavDropdown>
            </Col>
            <ListProducts
              items="4"
              typeCategory={typeCategory}
              page="shop"
              listProducts={listProducts}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
