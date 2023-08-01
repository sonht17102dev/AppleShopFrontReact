import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";
import ChatPopup from "../components/chat/ChatPopup";

// import logo from "./logo.svg";
export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <ChatPopup />
      </main>
      <Footer />
    </>
  );
}
