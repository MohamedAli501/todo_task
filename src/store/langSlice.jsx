import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: { lang: "en" },
  reducers: {
    changeLanguage: (state, { payload }) => {
      state.lang = payload;
      localStorage.setItem("lang", state.lang);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
