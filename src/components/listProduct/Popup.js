import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Popup(props) {
  const product = props.dataProduct;
  const [show, setShow] = useState(props.onShow);

  const handleClose = () => {
    setShow(false);
    props.onData(show);
  };
  const currencyValue = product.price;
  const formattedCurrency = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  })
    .format(Number(currencyValue))
    .replace("₫", "");
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton />
        <Modal.Body>
          <Container>
            <Row>
              <Col xs lg="6">
                <img src={product.img1} width="100%" alt={product.name} />
              </Col>
              <Col xs lg="6">
                <h2>{product.name}</h2>
                <p>{formattedCurrency} VND</p>
                <p>{product.long_desc}</p>
                <Link variant="secondary" to="/detail">
                  <FontAwesomeIcon icon={faCartShopping} />
                  View Detail
                </Link>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Popup;
