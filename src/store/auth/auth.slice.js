import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStorage from 'redux-persist/lib/storage';

import { authApi } from './auth.api';

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  initialState,
  name: 'authSlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(authApi.endpoints.signIn.matchFulfilled, authApi.endpoints.signUp.matchFulfilled),
      (state, { payload: { token } }) => {
        state.token = token;
      }
    );
  },
});

export const authSlicePersistedReducer = persistReducer(
  {
    key: 'authSlice',
    storage: persistStorage,
  },
  authSlice.reducer
);
