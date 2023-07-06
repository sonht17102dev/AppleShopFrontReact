import React from "react";
import Banner from "../components/banner/Banner";
import Category from "../components/categories/Category";
import ListProducts from "../components/listProduct/ListProducts";
import { Container } from "react-bootstrap";
import OtherService from "../components/listProduct/OtherService";
export default function Home() {
  return (
    <>
      <Banner />
      <Category />
      <Container className="mt-4 mb-4">
        <p className="text-secondary">MAKE THE HARD WAY</p>
        <h4>TOP TRENDING PRODUCTS</h4>
        <ListProducts page="Home" />
        <OtherService />
      </Container>
    </>
  );
}
