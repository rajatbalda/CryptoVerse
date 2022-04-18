import { configureStore } from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi'

export const store = configureStore({
  reducer: {
      [crypto.reducerPath]: cryptoApi.reducer,
  },
});