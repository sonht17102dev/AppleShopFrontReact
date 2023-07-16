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
import { cartActions } from "../store";
import { convertCurrency } from "../common/convertCurrency";
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
  // const quantity = useSelector((state) => state.quantity.quantity);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const totalPayment = useSelector((state) => state.cart.totalPayment);
  // console.log(totalPayment);

  const incrementHandle = (event) => {
    const existingItem = cartItems.find(
      (item) => item.id === event.target.parentNode.id
    );
    dispatch(cartActions.incrementQuantityFromCart(existingItem));
    console.log(cartItems);
  };
  const decrementHandle = (event) => {
    const existingItem = cartItems.find(
      (item) => item.id === event.target.parentNode.id
    );
    dispatch(cartActions.decrementQuantityFromCart(existingItem));
    console.log(cartItems);
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
              {cartItems.map((item) => {
                const id = item.id;
                const formattedCurrency = convertCurrency(item.price);
                const formattedTotalPrice = convertCurrency(item.totalPrice);
                // console.log();
                return (
                  <tr className="text-center align-middle" key={item.id}>
                    <td style={{ width: "14%" }}>
                      <img src={item.img} alt={item.name} width="100%" />
                    </td>
                    <td className="fs-5 fw-bold">{item.name}</td>
                    <td>{formattedCurrency} VND</td>
                    <td>
                      <div className="w-100 d-flex align-item-center text-center">
                        <Button
                          variant=""
                          className={`w-25 ${
                            item.quantity === 0 ? "d-none" : "d-block"
                          }`}
                          id={id}
                        >
                          <FontAwesomeIcon
                            icon={faPlay}
                            rotation={180}
                            id={id}
                            className={`${
                              item.quantity === 0 ? "d-none" : "d-block"
                            }`}
                            onClick={decrementHandle}
                          />
                        </Button>
                        <h5 className="p-2">{item.quantity}</h5>
                        <Button variant="" className="w-25" id={id}>
                          <FontAwesomeIcon
                            icon={faPlay}
                            id={id}
                            onClick={incrementHandle}
                          />
                        </Button>
                      </div>
                    </td>
                    <td>{formattedTotalPrice} VND</td>
                    <td>
                      <Button
                        variant=""
                        onClick={() => {
                          if (window.confirm("Are you sure ?")) {
                            dispatch(cartActions.removeItemFromCart(id));
                          } else {
                            return;
                          }
                        }}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
              {cartItems.length === 0 && (
                <tr>
                  <td colspan="6" className="text-warning text-center">
                    Cart is empty!
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          <Row className="justify-content-between mt-5">
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
                className="border border-dark"
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
            <Card.Body className="p-5">
              <Card.Title className="mb-4">
                <h4>CART TOTAL</h4>
              </Card.Title>
              <Card.Text className="d-flex justify-content-between ">
                <h5>SUBTOTAL</h5>
                <p>{convertCurrency(totalPayment[0])} VND</p>
              </Card.Text>
              <hr />
              <Card.Text className="d-flex justify-content-between">
                <h5>TOTAL</h5>
                <h5>{convertCurrency(totalPayment[0])} VND</h5>
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
