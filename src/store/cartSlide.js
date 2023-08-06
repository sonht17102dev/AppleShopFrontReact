import { createSlice } from "@reduxjs/toolkit";


export const cartSlide = createSlice({
  name: "cart",
  initialState: {
    items: JSON.parse(localStorage.getItem("listCart")) || [],
    totalQuantity: 0,
    totalPayment: JSON.parse(localStorage.getItem("totalPayment")) || [0],
  },
  reducers: {
    // Xử lý thêm product trong trang Detail vào cart
    addToCart(state, action) {
      const newItem = action.payload;
      // tìm item có trong list cart dựa trên id
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      // Nếu không tìm được item thì thêm mới một item
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
        state.totalPayment[0] += newItem.price * newItem.quantity;
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
        state.totalPayment[0] += newItem.price * newItem.quantity;
      }
      localStorage.setItem("listCart", JSON.stringify(state.items));
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    // Xử lý tăng quantity trong trang Cart
    incrementQuantityFromCart(state, action) {
      const itemFromCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemFromCart.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += itemFromCart.price;
        state.totalPayment[0] += itemFromCart.price;
      }

      localStorage.setItem("listCart", JSON.stringify(state.items));
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    // Xử lý giảm quantity trong trang Cart
    decrementQuantityFromCart(state, action) {
      const itemFromCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemFromCart.id
      );
      if (existingItem) {
        if (existingItem.quantity <= 0) {
          existingItem.quantity = 1;
          existingItem.totalPrice = existingItem.price;
          state.totalPayment[0] = existingItem.price;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= itemFromCart.price;
          state.totalPayment[0] -= itemFromCart.price;
        }
      }
      localStorage.setItem("listCart", JSON.stringify(state.items));
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
    // Xử lý xóa sản phẩm
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.items = state.items.filter((item) => item.id !== existingItem.id);
      state.totalPayment[0] -= existingItem.totalPrice;
      localStorage.setItem("listCart", JSON.stringify(state.items));
      if (state.totalQuantity === 0) {
        localStorage.removeItem("listCart");
        localStorage.removeItem("totalPayment");
      }
      localStorage.setItem("totalPayment", JSON.stringify(state.totalPayment));
    },
  },
});
