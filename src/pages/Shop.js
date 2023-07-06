import React from "react";
import Banner from "../components/banner/Banner";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Form,
  Dropdown,
} from "react-bootstrap";
import CategoryVerticle from "../components/categories/CategoryVerticle";
import ListProducts from "../components/listProduct/ListProducts";

export default function Shop() {
  return (
    <>
      <Banner />
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
          </Col>
        </Row>
      </Container>
    </>
  );
}
