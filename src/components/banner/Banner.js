import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Banner.css";
import { useNavigate, useParams } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const paramsPage = useParams();
  console.log(paramsPage);
  const navigateHandler = () => navigate("/shop");
  return (
    <Container className="banner w-75">
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
export default React.memo(Banner);
