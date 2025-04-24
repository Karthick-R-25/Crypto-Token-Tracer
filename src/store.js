import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slice/cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;