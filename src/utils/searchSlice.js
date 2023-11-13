import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    chacheResults: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { chacheResults } = searchSlice.actions;

export default searchSlice.reducer;

/**
 *
 *
 *
 *
 *
 *
 *
 *
 */
