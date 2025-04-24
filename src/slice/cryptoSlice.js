import { createSlice } from '@reduxjs/toolkit';
import baseData from '../datacrypto';

const initialState = {
  data: [...baseData],
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateRandomFields: (state) => {
      state.data = state.data.map(asset => ({
        ...asset,
        price: +(asset.price * (1 + (Math.random() - 0.5) * 0.02)).toFixed(2),
        change1h: +(Math.random() * 2 - 1).toFixed(2),
        change24h: +(Math.random() * 5 - 2.5).toFixed(2),
        volume24h: asset.volume24h + Math.floor(Math.random() * 1e8 - 5e7),
      }));
    },
  },
});

export const { updateRandomFields } = cryptoSlice.actions;
export default cryptoSlice.reducer;