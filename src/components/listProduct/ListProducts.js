import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "../../store/index";
import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useHttp from "../hooks/useHttp";
import Popup from "./Popup";
import classes from "./ListProducts.module.css";
const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

export default function ListProducts(props) {
  // console.log(props.typeCategory);

  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  let listProducts = useHttp(url);
  if (props.typeCategory !== undefined) {
    listProducts = listProducts.filter((item) => {
      return props.typeCategory !== "All"
        ? props.typeCategory.toLowerCase() === item.category
        : listProducts;
    });
  }
  const showModelHandler = (event) => {
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

  return (
    <Row>
      {listProducts &&
        listProducts.map((product) => {
          const currencyValue = product.price;
          const formattedCurrency = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          })
            .format(Number(currencyValue))
            .replace("₫", "");
          return (
            <Col xs lg={props.items === "4" ? "4" : "3"}>
              <Card className={classes.cart_image}>
                <Button
                  variant="outline-light"
                  onClick={showModelHandler}
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
      {isModalOpen && (
        <Popup
          onShow={isModalOpen}
          onData={handleDataFromChild}
          dataProduct={product}
        />
      )}
    </Row>
  );
}
