import React from "react";
import { ListGroup } from "react-bootstrap";

export default function CategoryVerticle(props) {
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
      <ListGroup.Item variant="light" className="fw-bold" disabled>
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

      <ListGroup.Item variant="light" className="fw-bold" disabled>
        WIRELESS
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Airpod
      </ListGroup.Item>
      <ListGroup.Item action onClick={handleGetAction}>
        Watch
      </ListGroup.Item>
      <ListGroup.Item variant="light" className="fw-bold" disabled>
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
