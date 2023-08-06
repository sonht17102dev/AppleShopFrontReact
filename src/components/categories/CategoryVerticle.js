import React from "react";
import { ListGroup } from "react-bootstrap";
import classes from "./Category.module.css";

export default function CategoryVerticle(props) {
  /**
    Hàm xử lý truyền loại sản phẩm tương ứng lên trang Shop
    Bên trang Shop sẽ dựa trên giá trị được truyền để 
    render loại sản phẩm
   */
    
  const handleGetAction = (event) => {
    props.onData(event.target.textContent);
  };
  return (
    <ListGroup className="mt-4">
      <ListGroup.Item className="bg-dark text-light" disabled>
        APPLE
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        All
      </ListGroup.Item>
      <ListGroup.Item className={`fw-bold ${classes.titleList}`} disabled>
        IPHONE & MAC
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Iphone
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Ipod
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Macbook
      </ListGroup.Item>

      <ListGroup.Item className={`fw-bold ${classes.titleList}`} disabled>
        WIRELESS
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Airpod
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Watch
      </ListGroup.Item>
      <ListGroup.Item className={`fw-bold ${classes.titleList}`} disabled>
        OTHER
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Mouse
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Keyboard
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Other
      </ListGroup.Item>
    </ListGroup>
  );
}
