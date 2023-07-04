import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
export default function Banner() {
  const navigate = useNavigate();
  const navigateHandler = () => navigate("/shop");
  return (
    <Container className="banner">
      <img src="./images/banner1.jpg" alt="Banner" width="100%" />
      <div className="content">
        <p className="text-secondary">NEW INSPIRATION 2020</p>
        <h1 className="text-dark">20% OFF ON NEW SEASON</h1>
        <Button className="btn btn-secondary" onClick={navigateHandler}>
          Brows collections
        </Button>
      </div>
    </Container>
  );
}
