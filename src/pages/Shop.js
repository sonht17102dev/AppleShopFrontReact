import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  NavDropdown,
  Form,
  Pagination,
} from "react-bootstrap";
import CategoryVerticle from "../components/categories/CategoryVerticle";
import ListProducts from "../components/listProduct/ListProducts";
import { useLoaderData } from "react-router-dom";
import OtherBanner from "../components/banner/OtherBanner";
import classes from "../components/listProduct/ListProducts.module.css";

export default function Shop() {
  const [typeCategory, setTypeCategory] = useState("");
  /**
   * Hàm nhận dữ liệu từ component con là CategoryVertical
   * để render các sản phẩm tương ứng dưa trên trường category
   * @param {*} data 
   */
  const handleGetTypeFromChild = (data) => {
    setTypeCategory(data.toLowerCase());
  };

  /**
   * Biến listProducts lưu trữ danh sách sản phẩm được chia sẻ
   * bởi react-router-doom 
   */

  const listProducts = useLoaderData();
  return (
    <>
      <OtherBanner contentBanner="Shop" />
      <Container className="w-75">
        <Row>
          <Col xs lg="3">
            <h4>CATEGORIES</h4>
            <CategoryVerticle onData={handleGetTypeFromChild} />
          </Col>
          <Col
            xs
            lg="9"
            className={`row justify-content-between ${
              listProducts.length === 0 ? classes.height3 : classes.heightAuto
            }`}
          >
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
                <NavDropdown.Item>Sort By Name</NavDropdown.Item>
              </NavDropdown>
            </Col>
            <ListProducts
              items="4"
              typeCategory={typeCategory}
              page="shop"
              listProducts={listProducts}
            />
            <div
              className="d-flex justify-content-end"
              // style={{ height: "1.5rem" }}
            >
              <Pagination>
                <Pagination.First linkClassName="text-dark" />
                <Pagination.Item linkClassName="bg-dark text-light">
                  {1}
                </Pagination.Item>
                <Pagination.Last linkClassName="text-dark" />
              </Pagination>
            </div>
            <div
              className="d-flex justify-content-end"
              // style={{ height: "1.5rem" }}
            >
              <p>Showing 1-9 of 9 results</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
