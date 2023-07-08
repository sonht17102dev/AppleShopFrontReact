import React from "react";
import Banner from "../components/banner/Banner";
import Category from "../components/categories/Category";
import ListProducts from "../components/listProduct/ListProducts";
<<<<<<< HEAD
import OtherService from "../components/listProduct/OtherService";
import { Container } from "react-bootstrap";
=======
import { Container } from "react-bootstrap";
import OtherService from "../components/listProduct/OtherService";
>>>>>>> 9fb4620fcd3c22de340f84755c7b6105d93e5af8
export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <Container className="mt-4 mb-4">
        <p className="text-secondary">MAKE THE HARD WAY</p>
        <h4>TOP TRENDING PRODUCTS</h4>
<<<<<<< HEAD
        <ListProducts />
      </Container>
      <OtherService />
=======
        <ListProducts page="Home" />
        <OtherService />
      </Container>
>>>>>>> 9fb4620fcd3c22de340f84755c7b6105d93e5af8
    </>
  );
}
