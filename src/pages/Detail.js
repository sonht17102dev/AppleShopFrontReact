import React, { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { cartActions } from "../store/index";
import { useDispatch } from "react-redux";
import { convertCurrency } from "../common/convertCurrency";

export default function Detail() {
  // State quản lý disabledButton
  const [disabledButton, setDisabledButton] = useState(false);
  //State quantity quản lý số lượng sản phẩm
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  // biến listProducts chứa dữ liệu được chia sẻ qua redux toolkit
  const listProducts = useLoaderData();
  // console.log(listProducts);
  const productById = listProducts.find((item) => item._id.$oid === params.id);
  // console.log(productById);

  // Hàm xử lý chuỗi currency được import từ folder commom
  const formattedCurrencyProduct = convertCurrency(productById.price);
  // console.log(formattedCurrencyProduct);

  const listImg = [
    productById.img1,
    productById.img2,
    productById.img3,
    productById.img4,
  ];

  // Hàm xử lý thêm sản phẩm vào cart và điều hướng sang trang cart
  const addToCartAndNavigateHandle = () => {
    // nạp dữ liệu để lưu vào store
    dispatch(
      cartActions.addToCart({
        id: params.id,
        img: productById.img1,
        name: productById.name,
        price: Number(productById.price),
        quantity: quantity,
        totalPrice: quantity * Number(productById.price),
      })
    );
    navigate("/cart");
  };
  // Hàm xử lý tăng quantity của 1 sản phẩm
  const incrementHandle = () => {
    setQuantity((preState) => {
      // console.log(preState);
      if (preState === 0) {
        setDisabledButton(false);
      }
      return preState + 1;
    });
  };
  // Hàm xử lý giảm quantity của 1 sản phẩm
  const decrementHandle = () => {
    setQuantity((preState) => {
      // console.log(preState);
      if (preState < 2) {
        setDisabledButton(true);
      }
      return preState - 1;
    });
    // console.log(quantity);
  };

  // Danh sách các sản phẩm tượng tụ dựa trên loại sản phẩm
  // Hiển thị lên phần RELATED PRODUCTS
  const listProductsByCategory = listProducts.filter(
    (item) =>
      item.category === productById.category &&
      item._id.$oid !== productById._id.$oid
  );
  // console.log(listProductsByCategory);

  return (
    <Container className="my-4 w-75">
      <Row>
        <Col xs lg="6" className="row">
          <Col xs lg="3" className="d-flex align-items-center flex-column pb-2">
            {listImg &&
              listImg.map((img, index) => (
                <img
                  src={img}
                  width="100%"
                  id={index}
                  key={index}
                  alt=""
                  className="p-2"
                />
              ))}
          </Col>
          <Col xs lg="9">
            <img
              src={productById.img1}
              alt={productById.name}
              width="100%"
              id={params}
              key={params}
            />
          </Col>
        </Col>
        <Col xs lg="6">
          <h1>{productById.name}</h1>
          <h4 className="text-secondary">{formattedCurrencyProduct} VND</h4>
          <p className="text-secondary" style={{ whiteSpace: "pre-line" }}>
            {productById.long_desc}
          </p>
          <p>
            <strong>CATEGORY:</strong> {productById.category}s
          </p>
          <div className="mb-3 w-100 d-flex text-center">
            <div className="d-flex text-center border border-end-0">
              <div className="align-middle p-3">QUANTITY</div>
              <div className="d-flex justify-content-center align-item-center p-2">
                <Button
                  variant=""
                  className={`w-25 ${quantity < 1 ? "d-none" : "d-block"}`}
                  onClick={decrementHandle}
                >
                  <FontAwesomeIcon icon={faPlay} rotation={180} />
                </Button>
                <h4 style={{ width: "40px" }}>{quantity}</h4>
                <Button variant="" className="w-25" onClick={incrementHandle}>
                  <FontAwesomeIcon icon={faPlay} />
                </Button>
              </div>
            </div>
            <Button
              variant="dark"
              id="button-addon2"
              onClick={addToCartAndNavigateHandle}
              disabled={disabledButton}
            >
              Add to cart
            </Button>
          </div>
        </Col>
        <Col xs lg="6" className="mt-4">
          <Button variant="dark" id="button-addon2" className="mb-2">
            DESCRIPTION
          </Button>
          <h3 className="mb-2">PRODUCT DESCRIPTION</h3>
          <p className="text-secondary" style={{ whiteSpace: "pre-line" }}>
            {productById.short_desc}
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <h3>RELATED PRODUCTS</h3>
        <div className="d-flex mb-5">
          {listProductsByCategory &&
            listProductsByCategory.map((product, index) => {
              const formattedCurrency = convertCurrency(product.price);
              return (
                <Card className="w-25 border-light">
                  <Button variant="outline-light" className="bg-none">
                    <Card.Img
                      variant="top"
                      src={product.img1}
                      id={index}
                      key={index}
                      alt=""
                      onClick={() => {
                        navigate(`/detail/${product._id.$oid}`);
                      }}
                    />
                  </Button>
                  <Card.Body className="text-center">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{formattedCurrency} VND</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
        </div>
      </Row>
    </Container>
  );
}
