import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { convertCurrency } from "../../common/convertCurrency";

function Popup(props) {
  const product = props.dataProduct;
  const [show, setShow] = useState(props.onShow);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
    props.onData(show);
  };
  const formattedCurrency = convertCurrency(product.price);

  const navigateSuccessHandle = () => {
    navigate(`/detail/${product._id.$oid}`);
    handleClose();
  };
  return (
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

              <Button variant="secondary" onClick={navigateSuccessHandle}>
                <FontAwesomeIcon icon={faCartShopping} />
                View Detail
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Popup;
