import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModal, hideModal } from "../../store/index";
import { Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Popup from "./Popup";
import classes from "./ListProducts.module.css";
import { convertCurrency } from "../../common/convertCurrency";
import { useNavigate } from "react-router-dom";

export default function ListProducts(props) {
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(props.typeCategory);
  let listProducts = props.listProducts;
  // console.log(listProducts);
  if (props.typeCategory !== "" && props.page === "shop") {
    listProducts = listProducts.filter((item) => {
      return props.typeCategory !== "all"
        ? props.typeCategory === item.category
        : props.listProducts;
    });
    // console.log(listProducts);
  }
  const showModelHandle = (event) => {
    const productById = listProducts.find(
      (item) => item._id.$oid === event.target.id
    );
    setProduct(productById);
    dispatch(showModal());
  };
  const [dataFromChild, setDataFromChild] = useState(false);
  // console.log(dataFromChild);
  const handleDataFromChild = (data) => {
    // console.log(data);
    setDataFromChild(dataFromChild);
    dispatch(hideModal());
  };
  return (
    <Row>
      {listProducts.map((product, index) => {
        const formattedCurrency = convertCurrency(product.price);
        return (
          <Col xs lg={props.items === "4" ? "4" : "3"} key={index}>
            <Card className={classes.cart_image}>
              {props.page === "shop" ? (
                <Button
                  variant="outline-light"
                  onClick={() => {
                    navigate(`/detail/${product._id.$oid}`);
                  }}
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
      {listProducts.length <= 0 && (
        <h3 className="text-warning text-center">
          No products found in the store ! <br />
          Please choose another product type !
        </h3>
      )}
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
