import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";

/**
 * Sử dụng component Outlet của react-router-doom
 * tái sử dụng lại các component Header và Footer
 */
export default function RootLayout() {
  return (
    <>
      <Header />
      <main id="mainLayout" style={{ position: "relative" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
