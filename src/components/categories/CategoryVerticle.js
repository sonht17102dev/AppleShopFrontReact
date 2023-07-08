import React from "react";
<<<<<<< HEAD
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
=======
import { Stack, ListGroup } from "react-bootstrap";

export default function CategoryVerticle() {
  return (
    <Stack gap={3}>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action>Link 1</ListGroup.Item>
        <ListGroup.Item action disabled>
          Link 2
        </ListGroup.Item>
        <ListGroup.Item action>This one is a button</ListGroup.Item>
      </ListGroup>
    </Stack>
>>>>>>> 9fb4620fcd3c22de340f84755c7b6105d93e5af8
  );
}
