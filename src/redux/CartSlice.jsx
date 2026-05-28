import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += item.price;
    },

    removeItem: (state, action) => {
      const id = action.payload;
      const existing = state.items.find(i => i.id === id);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalAmount -= existing.price * existing.quantity;
        state.items = state.items.filter(i => i.id !== id);
      }
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const item = state.items.find(i => i.id === id);

      if (!item) return;

      if (type === "increase") {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }

      if (type === "decrease" && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;