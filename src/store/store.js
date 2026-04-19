import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './uiSlice';
import quoteReducer from './quoteSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    quote: quoteReducer,
  },
});
