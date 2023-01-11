import { api } from '../api';

export const automationApi = api.injectEndpoints({
  reducerPath: 'service',
  endpoints: (build) => ({
    getAutomations: build.query({
      query: () => '/automation',
      providesTags: ['automation'],
    }),
    createAutomation: build.mutation({
      query: ({ triggerId, actionId }) => ({
        body: {
          triggerId,
          actionId,
        },
        method: 'POST',
        url: '/automation',
      }),
      invalidatesTags: ['automation'],
    }),
    triggerAutomation: build.mutation({
      query: ({ id }) => ({
        body: {
          id,
        },
        method: 'POST',
        url: `/automation/trigger`,
      }),
    }),
  }),
});
