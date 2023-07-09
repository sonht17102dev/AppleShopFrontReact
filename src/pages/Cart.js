import React from "react";
import {
  Col,
  Container,
  Row,
  Table,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Banner from "../components/banner/Banner";

const headingTable = [
  "IMAGE",
  "PRODUCT",
  "PRICE",
  "QUANTITY",
  "TOTAL",
  "REMOVE",
];
export default function Cart() {
  return (
    <Container>
      <Banner />
      <Row>
        <Col xs lg="8">
          <Table responsive>
            <thead>
              <tr>
                {headingTable.map((content, index) => (
                  <th key={index}>{content}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                {Array.from({ length: 6 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col xs lg="4">
          <Card>
            <Card.Body>
              <Card.Title className="mb-2">CART TOTAL</Card.Title>
              <Card.Text className="d-flex justify-content-between ">
                <h5>SUBTOTAL</h5>
                <p>19.779.000 VND</p>
              </Card.Text>
              <Card.Text className="d-flex justify-content-between">
                <h5>TOTAL</h5>
                <h5>19.779.000 VND</h5>
              </Card.Text>
              <Form.Control type="text" placeholder="Enter your coupon" />
              <Button variant="dark" className="text-center w-100 mt-2">
                Apply coupon
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
