import { useState } from "react";

/**
 *  Khai báo custom hook useInput nhận tham số validateValue
 *  Xử lý việc validate dữ liệu input từ input của form
 */ 
const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // Hàm xử lý sự kiện onChange
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // Hàm xử lý sự kiên onBlur
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  // Hàm reset input khi form được submit
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  /**
    Trả về một object để xử lý validate cho từng input
    hiển thị thông báo lỗi cho người dùng
  */
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
