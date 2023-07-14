import { createSlice } from "@reduxjs/toolkit";
export const cartSlide = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPayment: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
        });
        state.totalPayment += newItem.price * newItem.quantity;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.totalPayment += existingItem.totalPrice;
      }
    },
    incrementQuantityFromCart(state, action) {
      const itemFromCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemFromCart.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += itemFromCart.price;
        state.totalPayment += itemFromCart.price;
      }
    },
    decrementQuantityFromCart(state, action) {
      const itemFromCart = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === itemFromCart.id
      );
      if (existingItem) {
        existingItem.quantity--;
        existingItem.totalPrice -= itemFromCart.price;
        state.totalPayment -= itemFromCart.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.items = state.items.filter((item) => item.id !== existingItem.id);
      state.totalPayment -= existingItem.totalPrice;
    },
  },
});
