import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { authSlice, authSlicePersistedReducer } from './auth';

import { api } from './api';

const rootReducer = {
  [api.reducerPath]: api.reducer,
  [authSlice.name]: authSlicePersistedReducer,
};

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([api.middleware]),
  reducer: rootReducer,
});

export const persistor = persistStore(store);
