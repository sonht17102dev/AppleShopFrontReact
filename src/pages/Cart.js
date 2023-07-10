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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faTrashCan,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "../components/banner/Banner";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { amountActions } from "../store";
const headingTable = [
  "IMAGE",
  "PRODUCT",
  "PRICE",
  "QUANTITY",
  "TOTAL",
  "REMOVE",
];
export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.amount.amount);
  const incrementHandle = () => {
    dispatch(amountActions.increment());
  };
  const decrementHandle = () => {
    dispatch(amountActions.decrement());
  };
  return (
    <Container className="mt-4 mb-4">
      <Banner />
      <Row>
        <h2>SHOPPING CART</h2>
        <Col xs lg="8">
          <Table responsive>
            <thead>
              <tr className="text-center">
                {headingTable.map((content, index) => (
                  <th scope="col" key={index}>
                    {content}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-center align-middle">
                <td style={{ width: "10%" }}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/funix-way.appspot.com/o/xSeries%2FCCDN%2FReactJS%2FAssignment_Images%2FASM03_Resources%2Fiphone_13_4.jpeg?alt=media&token=dc72dde3-cfa4-4710-9493-ac2aa0ecf249"
                    alt=""
                    width="100%"
                  />
                </td>
                <td>Apple iPhone 11 64GB</td>
                <td>10.999.000 VND</td>
                <td>
                  <div className="w-100 d-flex align-item-center text-center">
                    <Button variant="" className="w-25">
                      <FontAwesomeIcon
                        icon={faPlay}
                        rotation={180}
                        onClick={decrementHandle}
                      />
                    </Button>
                    <h5 className="p-2">{amount}</h5>
                    <Button variant="" className="w-25">
                      <FontAwesomeIcon
                        icon={faPlay}
                        onClick={incrementHandle}
                      />
                    </Button>
                  </div>
                </td>
                <td>10.999.000 VND</td>
                <td>
                  <FontAwesomeIcon icon={faTrashCan} />
                </td>
              </tr>
            </tbody>
          </Table>
          <Row className="justify-content-between">
            <Col xs lg="6">
              <Button
                variant=""
                onClick={() => {
                  navigate("/shop");
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
                <span className="p-2">Continue shopping</span>
              </Button>
            </Col>
            <Col xs lg="6" className="d-flex justify-content-end">
              <Button
                variant="light"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                <span className="p-2">Proceed to checkout</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </Col>
          </Row>
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
