import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    language: "en",
    theme: "light",
  },
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
    },
    setTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { setLanguage, setTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
