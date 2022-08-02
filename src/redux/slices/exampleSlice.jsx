import { createSlice } from "@reduxjs/toolkit";

const initState = {
  name: "Aydan",
   age: "25",
};

export const MySlice = createSlice({
  name: "example",
  initialState: initState,
  reducers: {
 
  },
});

export const ex = (state) => state.example;

export const { addTable, addOrder, removeOrder } = MySlice.actions;

export default MySlice.reducer;
