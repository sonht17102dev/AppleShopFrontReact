import React from "react";
import Banner from "../components/banner/Banner";
import Category from "../components/categories/Category";
import ListProducts from "../components/listProduct/ListProducts";
import { Container } from "react-bootstrap";
import OtherService from "../components/listProduct/OtherService";
import { useLoaderData } from "react-router-dom";


export default function Home() {
  const listProducts = useLoaderData();
  return (
    <>
      <Banner />
      <Category />
      <Container className="mt-4 mb-4 w-75">
        <p className="text-secondary">MAKE THE HARD WAY</p>
        <h4>TOP TRENDING PRODUCTS</h4>
        <ListProducts page="Home" listProducts={listProducts} />
        <OtherService />
      </Container>
    </>
  );
}
