import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "../../store/index";
import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Popup from "./Popup";
import classes from "./ListProducts.module.css";
import { useNavigate } from "react-router-dom";
const convertCurrency = (currency) => {
  const formattedCurrency = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(Number(currency))
    .replace("₫", "");
  return formattedCurrency;
};
export default function ListProducts(props) {
  const navigate = useNavigate();
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  let listProducts = props.listProducts;
  if (props.typeCategory !== undefined) {
    listProducts = listProducts.filter((item) => {
      return props.typeCategory !== "All"
        ? props.typeCategory.toLowerCase() === item.category
        : listProducts;
    });
  }
  const showModelHandle = (event) => {
    const productById = listProducts.find(
      (item) => item._id.$oid === event.target.id
    );
    setProduct(productById);
    dispatch(showModal());
  };
  const [dataFromChild, setDataFromChild] = useState(false);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    dispatch(hideModal());
  };

  const navigateDetailHandle = (event) => {
    console.log(event.target.id);
    navigate(`/detail/${event.target.id}`);
  };
  return (
    <Row>
      {listProducts &&
        listProducts.map((product, index) => {
          const formattedCurrency = convertCurrency(product.price);
          return (
            <Col xs lg={props.items === "4" ? "4" : "3"} key={index}>
              <Card className={classes.cart_image}>
                {props.page === "shop" ? (
                  <Button
                    variant="outline-light"
                    className="bg-none"
                    onClick={navigateDetailHandle}
                  >
                    <Card.Img
                      variant="top"
                      src={product.img1}
                      key={product._id.$oid}
                      id={product._id.$oid}
                      alt={product.name}
                    />
                  </Button>
                ) : (
                  <Button
                    variant="outline-light"
                    onClick={showModelHandle}
                    className="bg-none"
                  >
                    <Card.Img
                      variant="top"
                      src={product.img1}
                      key={product._id.$oid}
                      id={product._id.$oid}
                      alt={product.name}
                    />
                  </Button>
                )}
                <Card.Body className="text-center">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {formattedCurrency}
                    VND
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      {props.page !== "shop" && isModalOpen && (
        <Popup
          onShow={isModalOpen}
          onData={handleDataFromChild}
          dataProduct={product}
        />
      )}
    </Row>
  );
}
