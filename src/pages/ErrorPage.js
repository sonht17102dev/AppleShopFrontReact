import React from "react";
import { Link } from "react-router-dom";

/**
 * component ErrorPage hiển thị khi người dùng truy cập
 * vào page không tồn tại trong hệ thống
 */
export default function ErrorPage() {
  return (
    <>
      <main>
        <h1>Page not found!</h1>
        <p>
          Back to <Link to="/">HomePage</Link>
        </p>
      </main>
    </>
  );
}
