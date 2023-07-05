import React from "react";
import Banner from "../components/banner/Banner";
import Category from "../components/categories/Category";
import ListProducts from "../components/listProduct/ListProducts";

export default function Home() {
  return (
    <>
      <Banner />

      <Category />
      <ListProducts />
    </>
  );
}
