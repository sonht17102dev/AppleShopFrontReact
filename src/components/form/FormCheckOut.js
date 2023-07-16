import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormCheckOut() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>FULL NAME:</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Full Name Here!" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>EMAIL:</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Email Here!" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>PHONE NUMBER:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter Your Phone Number Here!"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="">
        <Form.Label>ADDRESS:</Form.Label>
        <Form.Control type="email" placeholder="Enter Your Address Here!" />
      </Form.Group>
      <Button variant="secondary">Place order</Button>
    </Form>
  );
}
