import classes from "./AuthenForm.module.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import useInput from "../../hooks/use-input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenActions } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Biến userArr được lấy từ localStorage
const userArr = JSON.parse(localStorage.getItem("userArr")) || [];

function AuthenForm() {
  // state isLogin dùng để switch form login và register
  const [isLogin, setIsLogin] = useState(true);
  // const isAuthen = useSelector((state) => state.authen.isAuthenticated);
  // hook của react router doom
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // hàm xử lý switch url và form Login <--> register
  const changedPageHandle = () => {
    navigate(isLogin ? "/register" : "/login");
    setIsLogin((preState) => !preState);
  };

  const backgroundImage = "./images/banner1.jpg";

  // sử dụng custom hook useInput xử lý input password
  // kiểm tra input có được nhập vào hay không
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "" && value.length > 8);

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

  let formLoginIsValid = false;
  let formRegisterIsValid = false;
  const existUser = userArr.find((user) => user.email === enteredEmail);

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formLoginIsValid = true;
  }

  if (
    enteredFullNameIsValid &&
    enteredPhoneIsValid &&
    enteredPasswordIsValid &&
    enteredEmailIsValid &&
    !existUser
  ) {
    formRegisterIsValid = true;
  }
  // Hàm xử lý form login khi người dùng submit
  const formLoginHandler = (event) => {
    event.preventDefault();

    // Kiểm tra input có hợp lệ không
    if (!enteredEmailIsValid) {
      return;
    }
    if (
      existUser &&
      existUser.email === enteredEmail &&
      existUser.password === enteredPassword
    ) {
      // Chuyển trạng thái trong authenSlide sử dụng redux toolkit
      dispatch(authenActions.login(existUser));
      // reset input email và password khi người dùng submit thành công
      resetEmailInput();
      resetPasswordInput();
      // Sử dụng toast api xử lý thông báo đăng nhập thành công
      toast.success("🎉🎉🎉 Login successfully!", {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
      });
      // điều hướng về trang chủ
      setTimeout(() => navigate("/"), 2000);
    } else {
      alert("email or password are not correct! \nPlease try again.");
    }
  };
  // Hàm xử lý form register khi người dùng submit
  const formRegisterHandler = (event) => {
    event.preventDefault();

    // Kiểm tra input form register có hợp lệ không
    if (
      !enteredFullNameIsValid &&
      !enteredEmailIsValid &&
      !enteredPasswordIsValid &&
      !enteredPhoneIsValid
    ) {
      console.log("fail");
      return;
    } else {
      console.log("register success");

      userArr.push({
        email: enteredEmail,
        fullName: enteredFullName,
        password: enteredPassword,
        phone: enteredPhone,
      });
      localStorage.setItem("userArr", JSON.stringify(userArr));
      // reset input khi người dùng submit
      resetEmailInput();
      resetPasswordInput();
      resetFullNameInput();
      resetPhoneInput();

      // Sử dụng toast api xử lý thông báo đăng kí thành công
      // và switch form register -> login
      toast.success("💖💖💖 Hello new member! Please login and enjoy!", {
        position: "top-left",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
      });
      changedPageHandle();
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className={classes.loginForm}
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      >
        {isLogin ? (
          <Form className={classes.form} onSubmit={formLoginHandler}>
            <h1 className="text-secondary">
              {isLogin ? "Sign In" : "Sign Up"}
            </h1>

            <Form.Control
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputHasError && (
              <p className="text-danger">Please enter a valid email.</p>
            )}
            <Form.Control
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && (
              <p className="text-danger">Please enter your password.</p>
            )}
            <Button
              variant="secondary"
              type="submit"
              className="w-100 mt-4 mb-5"
              disabled={!formLoginIsValid}
            >
              SIGN IN
            </Button>
            <div className={classes.actions}>
              {isLogin ? "Create an account?" : "Login?"}
              <button onClick={changedPageHandle} type="button">
                {isLogin ? "Sign up" : "Click"}
              </button>
            </div>
          </Form>
        ) : (
          <Form className={classes.form} onSubmit={formRegisterHandler}>
            <h1 className="mb-5 text-secondary">
              {isLogin ? "Sign In" : "Sign Up"}
            </h1>

            <Form.Control
              id="fullName"
              type="fullName"
              name="fullName"
              placeholder="Full Name"
              onChange={fullNameChangeHandler}
              onBlur={fullNameBlurHandler}
              value={enteredFullName}
            />
            {fullNameInputHasError && (
              <p className="text-danger">Please enter a valid full name.</p>
            )}
            <Form.Control
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailInputHasError && (
              <p className="text-danger">Please enter a valid email.</p>
            )}
            {existUser && <p className="text-danger">Email existed.</p>}
            <Form.Control
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={passwordChangedHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
            />
            {passwordInputHasError && (
              <p className="text-danger">Please enter your password.</p>
            )}
            <Form.Control
              id="phone"
              type="phone"
              name="phone"
              placeholder="Phone"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={enteredPhone}
            />
            {phoneInputHasError && (
              <p className="text-danger">Please enter a valid phone.</p>
            )}
            <Button
              variant="secondary"
              type="submit"
              className="w-100 mt-4 mb-5"
              disabled={!formRegisterIsValid}
            >
              SIGN UP
            </Button>
            <div className={classes.actions}>
              {isLogin ? "Create an account?" : "Login?"}
              <button onClick={changedPageHandle} type="button">
                {isLogin ? "Sign up" : "Click"}
              </button>
            </div>
          </Form>
        )}

        {/* <Button onClick={() => navigate("/")}>Back to Home</Button> */}
      </div>
    </>
  );
}

export default AuthenForm;
