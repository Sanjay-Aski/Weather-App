import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedId: null,
};

export const selectedIdSlice = createSlice({
  name: "id",initialState,
  reducers: {
    Idselect: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

export const { Idselect } = selectedIdSlice.actions;

export default selectedIdSlice.reducer;
