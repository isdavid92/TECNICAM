import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedService: 'camaras', // Default
};

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    selectService: (state, action) => {
      state.selectedService = action.payload;
    }
  },
});

export const { selectService } = quoteSlice.actions;
export default quoteSlice.reducer;
