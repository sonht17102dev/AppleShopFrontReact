import React from "react";
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
  );
}
