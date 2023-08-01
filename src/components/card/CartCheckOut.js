import React from "react";
import { Card } from "react-bootstrap";
import { convertCurrency } from "../../common/convertCurrency";
export default function CartCheckOut({ cartItems, totalPayment }) {
  return (
    <Card className="p-2">
      <Card.Body>
        <Card.Title>
          <h4>YOUR ORDER</h4>
        </Card.Title>
        {cartItems.map((product) => {
          return (
            <>
              <Card.Text className="d-flex justify-content-between">
                <p className="fs-6 fw-bold">{product.name}</p>
                <p>
                  {convertCurrency(product.price)} VND x {product.quantity}
                </p>
              </Card.Text>
              <hr />
            </>
          );
        })}

        <Card.Text className="d-flex justify-content-between">
          <p className="fs-6 fw-bold">TOTAL</p>
          <p>{convertCurrency(totalPayment[0])} VND</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
