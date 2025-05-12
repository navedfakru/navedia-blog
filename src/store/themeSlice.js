// store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light', // default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    darkMode: (state) => {
      state.mode = 'dark';
    },
    lightMode: (state) => {
      state.mode = 'light';
    },
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { darkMode, lightMode, toggleMode } = themeSlice.actions;
export default themeSlice.reducer;
