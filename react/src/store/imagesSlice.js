import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [
    // רשימת תמונות כאן
  ],
  activeIndex: 0
};

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    }
  }
});

export const { setActiveIndex } = imagesSlice.actions;
export default imagesSlice.reducer;
