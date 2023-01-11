import { api } from '../api';

export const authApi = api.injectEndpoints({
  reducerPath: 'auth',
  endpoints: (build) => ({
    signUp: build.mutation({
      query: ({ username, password }) => ({
        body: {
          username,
          password,
        },
        method: 'POST',
        url: '/sign-up',
      }),
    }),
    signIn: build.mutation({
      query: ({ username, password }) => ({
        body: {
          username,
          password,
        },
        method: 'POST',
        url: '/sign-in',
      }),
    }),
  }),
});
