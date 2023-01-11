import { api } from '../api';

export const serviceApi = api.injectEndpoints({
  reducerPath: 'service',
  endpoints: (build) => ({
    getServices: build.query({
      query: () => ({
        url: '/service',
      }),
    }),
  }),
});
