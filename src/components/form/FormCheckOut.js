import React from "react";
import { Form, Button } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import useInput from "../../hooks/use-input";
// import classes from "./AuthenForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const orderList = JSON.parse(localStorage.getItem("orderList")) || [];
export default function FormCheckOut({ cartItems, totalPayment }) {
  // sử dụng custom hook useInput xử lý input password
  // kiểm tra input có được nhập vào hay không
  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputHasError,
    valueChangeHandler: addressChangedHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");

  // sử dụng custom hook useInput xử lý input email
  // kiểm tra input có được nhập vào hay không và input có kí tự @ là email hay không
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@") && value.trim() !== "");

  // sử dụng custom hook useInput xử lý input fullname
  // kiểm tra input có được nhập vào hay không
  const {
    value: enteredFullName,
    isValid: enteredFullNameIsValid,
    hasError: fullNameInputHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    reset: resetFullNameInput,
  } = useInput((value) => value.trim() !== "");

  // sử dụng custom hook useInput xử lý input phone
  // kiểm tra input có được nhập vào hay không và input có phải là số không
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: phoneInputHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhoneInput,
  } = useInput((value) => value.trim() !== "" && !isNaN(value));

  let formIsValid = false;
  // const existUser = userArr.find((user) => user.email === enteredEmail);

  if (
    enteredEmailIsValid &&
    enteredFullNameIsValid &&
    enteredAddressIsValid &&
    enteredPhoneIsValid
  ) {
    formIsValid = true;
  }

  // Hàm xử lý form register khi người dùng submit
  const formHandler = (event) => {
    event.preventDefault();

    // Kiểm tra input form register có hợp lệ không
    if (!enteredFullNameIsValid) {
      return;
    } else {
      orderList.push({
        email: enteredEmail,
        fullName: enteredFullName,
        address: enteredAddress,
        phone: enteredPhone,
        listCart: cartItems,
        totalPayment: totalPayment,
      });
      localStorage.setItem("orderList", JSON.stringify(orderList));
      // reset input khi người dùng submit
      resetEmailInput();
      resetAddressInput();
      resetFullNameInput();
      resetPhoneInput();

      // Sử dụng toast api xử lý thông báo đăng kí thành công
      // và switch form register -> login
      toast.success("🛒 Your order are committed! Continue shopping!", {
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };
  return (
    <>
      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>FULL NAME:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Full Name Here!"
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
            value={enteredFullName}
          />
          {fullNameInputHasError && (
            <p className="text-danger">Please enter a valid fullName.</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>EMAIL:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email Here!"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="text-danger">Please enter a valid email.</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>PHONE NUMBER:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Phone Number Here!"
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
            value={enteredPhone}
          />
          {phoneInputHasError && (
            <p className="text-danger">Please enter a valid phone.</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="">
          <Form.Label>ADDRESS:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Address Here!"
            onChange={addressChangedHandler}
            onBlur={addressBlurHandler}
            value={enteredAddress}
          />
          {addressInputHasError && (
            <p className="text-danger">Please enter a valid address.</p>
          )}
        </Form.Group>
        <Button variant="secondary" type="submit" disabled={!formIsValid}>
          Place order
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
}
