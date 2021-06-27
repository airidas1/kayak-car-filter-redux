import { configureStore } from '@reduxjs/toolkit';
import typesSlice from './types-slice';

const store = configureStore({
  reducer: { typeStorage: typesSlice.reducer },
});

export default store;
