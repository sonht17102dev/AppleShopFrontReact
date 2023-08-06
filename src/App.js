import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ErrorPage from "./pages/ErrorPage";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SigninAndRegister from "./pages/SigninAndRegister";

const url =
  "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

/**
 * Hàm loader xử lý bất đồng bộ dữ liệu được trả về từ server backend
 * chia sẻ dữ liệu cho các component khác nhau
 */
const loader = async () => {
  const response = await fetch(url);

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    return resData;
  }
};
/**
 *  Sử dụng hàm createBrowserRouter của react-router-dom
 *  cấu hình đường dẫn url hiển thị theo các trang cho trang web
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: loader,
      },
      { path: "/shop", element: <Shop />, loader: loader },
      { path: "/detail/:id", element: <Detail />, loader: loader },
      { path: "/cart", element: <Cart />, loader: loader },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
  { path: "/login", element: <SigninAndRegister /> },
  { path: "/register", element: <SigninAndRegister /> },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
