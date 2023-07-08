import React from "react";
import Banner from "../components/banner/Banner";
<<<<<<< HEAD
import { Col, Container, Row, NavDropdown, Form } from "react-bootstrap";
=======
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Dropdown,
} from "react-bootstrap";
>>>>>>> 9fb4620fcd3c22de340f84755c7b6105d93e5af8
import CategoryVerticle from "../components/categories/CategoryVerticle";
import ListProducts from "../components/listProduct/ListProducts";

export default function Shop() {
  return (
    <>
      <Banner />
<<<<<<< HEAD
      <Container className="w-75">
        <Row>
          <Col xs lg="3">
            <h4>CATEGORIES</h4>
            <CategoryVerticle />
          </Col>
          <Col xs lg="9" className="row justify-content-between">
            <Col xs lg="6" className="d-flex align-items-center">
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
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </NavDropdown>
            </Col>

            <ListProducts items="4" />
=======
      <Container>
        <Row>
          <Col xs lg="3">
            <h2>Categories</h2>
            <CategoryVerticle />
          </Col>
          <Col xs lg="9">
            <Row className="justify-content-between">
              <Col xs lg="6">
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Enter search here"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>
              </Col>
              <Col xs lg="6">
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    Default Sorting
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <ListProducts />
>>>>>>> 9fb4620fcd3c22de340f84755c7b6105d93e5af8
          </Col>
        </Row>
      </Container>
    </>
  );
}
