import React from "react";
import { ListGroup } from "react-bootstrap";

export default function CategoryVerticle() {
  return (
    <ListGroup className="mt-4">
      <ListGroup.Item className="bg-dark text-light" disabled>
        APPLE
      </ListGroup.Item>
      <ListGroup.Item action>All</ListGroup.Item>
      <ListGroup.Item variant="light" className="fw-bold" disabled>
        IPHONE & MAC
      </ListGroup.Item>
      <ListGroup.Item action>Iphone</ListGroup.Item>
      <ListGroup.Item action>Ipod</ListGroup.Item>
      <ListGroup.Item action>Macbook</ListGroup.Item>

      <ListGroup.Item variant="light" className="fw-bold" disabled>
        WIRELESS
      </ListGroup.Item>
      <ListGroup.Item action>Airpod</ListGroup.Item>
      <ListGroup.Item action>Watch</ListGroup.Item>
      <ListGroup.Item variant="light" className="fw-bold" disabled>
        OTHER
      </ListGroup.Item>
      <ListGroup.Item action>Mouse</ListGroup.Item>
      <ListGroup.Item action>Keyboard</ListGroup.Item>
      <ListGroup.Item action>Other</ListGroup.Item>
    </ListGroup>
  );
}
