import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const navigateHandler = () => navigate("/shop");
  return (
    <Container className="banner w-75 my-4">
      <img src="./images/banner1.jpg" alt="Banner" width="100%" />
      <div className="content">
        <p className="text-secondary">NEW INSPIRATION 2020</p>
        <h1 className="text-dark">20% OFF ON NEW SEASON</h1>
        <Button variant="dark" onClick={navigateHandler}>
          Brows collections
        </Button>
      </div>
    </Container>
  );
}
export default React.memo(Banner);
