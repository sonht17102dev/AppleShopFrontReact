import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  InputGroup,
  Button,
  Form,
  Card,
} from "react-bootstrap";
const convertCurrency = (currency) => {
  const formattedCurrency = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(Number(currency))
    .replace("₫", "");
  return formattedCurrency;
};
export default function Detail() {
  const navigate = useNavigate();
  const params = useParams();
  const listProducts = useLoaderData();
  // console.log(listProducts);
  const productById = listProducts.find((item) => item._id.$oid === params.id);
  // console.log(productById);
  const formattedCurrencyProduct = convertCurrency(productById.price);
  // console.log(formattedCurrencyProduct);
  const listImg = [
    productById.img1,
    productById.img2,
    productById.img3,
    productById.img4,
  ];
  // console.log(listImg);
  const listProductsByCategory = listProducts.filter(
    (item) =>
      item.category === productById.category &&
      item._id.$oid !== productById._id.$oid
  );
  // console.log(listProductsByCategory);
  const navigateHandler = () => {
    navigate("/cart");
  };
  return (
    <Container className="mt-4 mb-4">
      <Row>
        <Col xs lg="6" className="row">
          <Col xs lg="2" className="row align-items-center w-25">
            {listImg &&
              listImg.map((img, index) => (
                <img src={img} width="100%" id={index} key={index} alt="" />
              ))}
          </Col>
          <Col xs lg="10" className="w-75">
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
          <p className="text-secondary">{productById.long_desc}</p>
          <p>
            <strong>CATEGORY:</strong> {productById.category}
          </p>
          <InputGroup className="mb-3 w-50">
            <Form.Label>QUANTITY</Form.Label>
            <Form.Control type="number" placeholder="1" />
            <Button
              variant="dark"
              id="button-addon2"
              onClick={navigateHandler}
              action
            >
              Add to cart
            </Button>
          </InputGroup>
        </Col>
        <Col xs lg="6" className="mt-4">
          <Button variant="dark" id="button-addon2" className="mb-2">
            DESCRIPTION
          </Button>
          <h3 className="mb-2">PRODUCT DESCRIPTION</h3>
          <p className="text-secondary">{productById.short_desc}</p>
        </Col>
      </Row>

      <Row className="mt-4">
        <h3>RELATED PRODUCTS</h3>
        <div className="d-flex">
          {listProductsByCategory &&
            listProductsByCategory.map((product, index) => {
              const formattedCurrency = convertCurrency(product.price);
              return (
                <Card className="w-25">
                  <Button variant="outline-light" className="bg-none">
                    <Card.Img
                      variant="top"
                      src={product.img1}
                      id={index}
                      key={index}
                      alt=""
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
