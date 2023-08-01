import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      {
        name: "Blue denim shirt",
        type: "shirt",
        color: "blue",
        size: "M",
        price: 17.99,
        count: 1,
      },
      {
        name: "Red hoodie",
        type: "hoodie",
        color: "red",
        size: "M",
        price: 35.99,
        count: 1,
      },
    ],
    total: 0,
    wishlist: [],
  },
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items[action.payload].count += 1;
    },
    decrement: (state, action) => {
      state.items[action.payload].count > 1
        ? (state.items[action.payload].count -= 1)
        : null;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    addWishlist: (state, action) => {
      state.wishlist.indexOf(action.payload) === -1
        ? state.wishlist.push(action.payload)
        : state.wishlist.splice(state.wishlist.indexOf(action.payload), 1);
    },
    removeItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  setTotal,
  addWishlist,
  removeItem,
} = counterSlice.actions;

export const getItems = (state) => state.cart.items;
export const getWishlist = (state) => state.cart.wishlist;
export const getTotal = (state) => state.cart.total;

export default counterSlice.reducer;
