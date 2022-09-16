import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  cats: [],
  isLoading: false,
  error: "",
};

// cat slice
const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getCatsFetch: state => {
      state.isLoading = true;
      state.error = "";
    },
    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getCatsFailure: (state, action) => {
      state.cats = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure } =
  catSlice.actions;

export default catSlice.reducer;
