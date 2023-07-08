import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import useHttp from "../hooks/useHttp";
import Popup from "./Popup";
import classes from "./ListProducts.module.css";
const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

export default function ListProducts(props) {
  const [isShow, setIsShow] = useState(false);
  const [product, setProduct] = useState({});
  const listProducts = useHttp(url);

  const showModelHandler = (event) => {
    const productById = listProducts.find(
      (item) => item._id.$oid === event.target.id
    );
    setProduct(productById);
    setIsShow(true);
  };
  const [dataFromChild, setDataFromChild] = useState(false);

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
    setIsShow(false);
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
      {isShow && (
        <Popup
          onShow={isShow}
          onData={handleDataFromChild}
          dataProduct={product}
        />
      )}
    </Row>
  );
}
